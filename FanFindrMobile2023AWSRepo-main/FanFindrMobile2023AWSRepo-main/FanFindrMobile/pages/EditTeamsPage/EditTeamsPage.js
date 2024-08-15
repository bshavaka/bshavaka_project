//Components
import { SafeAreaView, Text, View, StyleSheet, FlatList, TouchableHighlight, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import { COLORS } from '../../constants/theme';
import { ScreenWidth } from "react-native-elements/dist/helpers";
import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { Image } from 'expo-image';
import { useNavigation } from "@react-navigation/native";

//Lists
import { LeagueList } from "../../lists/LeagueList";
import { NFLLogoList } from "../../lists/NFLLogoList";
import { MLBLogoList } from "../../lists/MLBLogoList";

//Icons
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const LeagueItem = ({ imageSource, label, selected }) => (
    <View style={[
        selected ? styles.selectedLeagueItem : styles.leagueItem
    ]}>
        <Image
            source={imageSource}
            style={{ contentFit: 'contain', height: 50, width: 45 }}
        />
        <Text style={{ paddingHorizontal: 5, fontSize: 15, fontWeight: '500' }}>{label}</Text>
    </View>
);

const TeamItem = ({ label, imageSource, onSelect }) => (
    <TouchableOpacity onPress={onSelect}>
        <View style={styles.teamItem}>
            <Image 
                source={imageSource}
                style={{ contentFit: 'contain', height: 75, width: 75}}
            />
            <Text style={{ fontSize: 15, fontWeight: '500'}}>
                {label}
            </Text>
        </View>
    </TouchableOpacity>
);

const EditTeamsPage = () => {

    const navigation = useNavigation();
    const [selectedLeague, setSelectedLeague] = useState("MLB");
    const [selectedTeams, setSelectedTeams] = useState([]);
    const [user, setUser] = useState(null); // To store the user object
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Get the current authenticated user and store it in the state
        Auth.currentAuthenticatedUser()
          .then(userData => setUser(userData))
          .catch(error => console.log('Error getting user', error));
    }, []); // Run this effect only once when the component mounts

    const handleTeamSelection = () => {
        if (user) {
            setLoading(true);
          // Set custom user attributes (selectedTeams in this example)
          Auth.updateUserAttributes(user, { 'custom:selectedTeams': JSON.stringify(selectedTeams) })
          .then(data => {
            navigation.navigate('Dashboard');
            setLoading(false);
        })
            .catch(error => console.log('Error updating user attributes', error));

        }
    };

    const teamLists = {
        NFL: NFLLogoList,
        MLB: MLBLogoList,
        // Add other leagues and their team lists as needed
      };

      // Function to toggle team selection
      const toggleTeamSelection = (teamLabel) => {
        const selectedTeam = teamLists[selectedLeague].find((team) => team.label === teamLabel);
    
        if (selectedTeam) {
          const isAlreadySelected = selectedTeams.some((team) => team.label === teamLabel);
    
          if (isAlreadySelected) {
            setSelectedTeams(selectedTeams.filter((team) => team.label !== teamLabel));
          } else {
            setSelectedTeams([...selectedTeams, selectedTeam]);
          }
        }
    };

    return (
        <SafeAreaView style={styles.safeAreaViewContainer}>
            {/* Icons */}
            <View style={styles.topBar}>
                <AntDesign name="search1" size={30} color="black" />
                <Ionicons name="settings-outline" size={30} color="black" />
            </View>

            {/* Page Text */}
            <View style={styles.textContainer}>
                <Text
                    style={{ fontSize: 20, fontWeight: '600'}}
                >
                    Edit My Lineup
                </Text>
                <Text>
                    Tap to select or unselect your favorite teams
                </Text>
            </View>

            {/* League Scroll */ }
            <View>
                <ScrollView
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
                style={styles.leagueScrollContainer}
                onPress={() => setSelectedLeague(league.label)} // Set the selected league
                >
                {LeagueList.map((league) => (
                    <TouchableHighlight 
                        underlayColor={'transparent'} 
                        key={league.id} 
                        onPress={() => {
                            setSelectedLeague(league.label);
                        }}>
                        <LeagueItem 
                            imageSource={league.imageSource} 
                            label={league.label} 
                            selected={league.label === selectedLeague} // Check if this item is selected
                            onSelect={() => {
                                setSelectedLeague(league.label);
                            }}
                        />
                    </TouchableHighlight>
                ))}
                </ScrollView>
            </View>

            {/* Team Grid */}
            <View style={styles.teamGridContainer}>
            {selectedLeague ? (
            <FlatList
                data={teamLists[selectedLeague]}
                keyExtractor={(team) => team.label}
                numColumns={3} // Adjust the number of columns as needed
                renderItem={({ item }) => (
                <TeamItem
                    label={item.label}
                    imageSource={item.imageSource}
                    isSelected={selectedTeams.includes(item.label)}
                    onSelect={() => toggleTeamSelection(item.label)}
                />
                )}
            />
            ) : (
                <FlatList
                data={MLBLogoList}
                keyExtractor={(team) => team.label}
                numColumns={3} // Adjust the number of columns as needed
                renderItem={({ item }) => (
                <TeamItem
                    label={item.label}
                    imageSource={item.imageSource}
                    isSelected={selectedTeams.includes(item.label)}
                    onSelect={() => toggleTeamSelection(item.label)}
                />
                )}
            />
            )}
      </View>

      {/* Selected Teams */}
      <View style={styles.selectedTeamsContainer}>
        <Text style={styles.selectedTeamsHeader}>Selected Teams:</Text>

        {/* Horizontal scroll for selected team logos */}
        <FlatList
            horizontal
            data={selectedTeams}
            keyExtractor={(team, index) => team.id || index.toString()}
            renderItem={({ item }) => (
            <Image
                source={item.imageSource}
                style={{ contentFit: 'contain', height: 50, width: 50, margin: 5 }}
            />
            )}
        />
      </View>

            {/* Next Button */}
            <View style={styles.nextButtonContainer}>
                    <TouchableHighlight
                        style={styles.nextButton}
                        onPress={handleTeamSelection}
                        underlayColor={COLORS.orange}
                    >
                        {loading ? (
                            <ActivityIndicator color={COLORS.white}/>
                        ) : (
                            <Text style={styles.nextButtonText}>Next</Text>
                        )}
                    </TouchableHighlight>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeAreaViewContainer: {
        backgroundColor: COLORS.white,
        flex: 1,
    },

    topBar: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        width: ScreenWidth,
        justifyContent: 'space-between',
    },

    textContainer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },

    leagueScrollContainer: {
        padding: 10,
    },
    leagueItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.veryLightGrey,
        width: 125,
        height: 50,
        borderRadius: 50,
        marginHorizontal: 5,
    },
    selectedLeagueItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.orange,
        width: 125,
        height: 50,
        borderRadius: 50,
        marginHorizontal: 5,
    },
    
    teamGridContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    teamItem: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
        width: 120,
    },

    nextButtonContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
    nextButton: {
        backgroundColor: COLORS.aqua,
        height: 60,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    nextButtonText: {
        fontSize: 20, 
        color: COLORS.white
    },
});

export default EditTeamsPage;