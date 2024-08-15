//Components
import { Text, StyleSheet, View, FlatList } from "react-native";
import { COLORS } from "../../constants/theme";
import { ScreenHeight, ScreenWidth } from "react-native-elements/dist/helpers";
import { useNavigation } from "@react-navigation/native";
import PageHeader from "../../components/PageHeader/PageHeader";
import { Auth } from 'aws-amplify';
import React, { useState, useEffect } from 'react';
import { Image } from "expo-image";
import { useFocusEffect } from '@react-navigation/native';

const AccountPage = () => {

    const navigation = useNavigation();
    const [user, setUser] = useState(null);
    const [selectedTeams, setSelectedTeams] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    useFocusEffect(
        React.useCallback(() => {
            const fetchUserData = async () => {
                try {
                  const userData = await Auth.currentAuthenticatedUser();
                  setUser(userData);
              
                  //getting user data
                  const selectedTeamsString = userData.attributes['custom:selectedTeams'];
                  const fetchedFirstName = userData.attributes['given_name'];
                  const fetchedLastName =  userData.attributes['family_name'];

                  setFirstName(fetchedFirstName);
                  setLastName(fetchedLastName);

                  const parsedSelectedTeams = JSON.parse(selectedTeamsString || '[]');
                  setSelectedTeams(parsedSelectedTeams);
                } catch (error) {
                  console.log('Error fetching user data', error);
                }
            };
      
          fetchUserData();
        }, [])
    );

    return (
        <>
            <PageHeader />
            <View style={styles.container}>

                <View style={styles.accountInfoContainer}>
                    <Image
                        source={require("../../assets/vader.jpg")}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 100,
                        }}
                    />
                    <View style={styles.profileInfoContainer}>
                        <View style={{ flexDirection: 'row'}}>
                            <Text style={styles.name}>{firstName}</Text>
                            <Text style={styles.name}>{lastName}</Text>
                        </View>
                        <Text>
                            Tempe, AZ
                        </Text>
                    </View>
                </View>

                {/* Divider Line */}
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 25 }}>
                    <View style={{ flex: 1, height: 2, backgroundColor: "#979797" }} />
                    <View style={{ flex: 1, height: 2, backgroundColor: "#979797" }} />
                </View>

                {/* Top Teams Section */}
                <View style={styles.topTeamsContainer}>
                    <Text style={{ paddingVertical: 10, }}>
                        My Top Teams
                    </Text>
                </View>

                <View style={styles.topTeamsContainer}>
                    <FlatList
                    data={selectedTeams}
                    keyExtractor={(team) => team.label}
                    renderItem={({ item }) => (
                        <View style={styles.individualTeamContainer}>
                            <Image
                                source={item.imageSource}
                                style={{ contentFit: 'contain', height: 50, width: 50, margin: 5 }}
                            />
                            <Text>{item.label}</Text>
                        </View>
                    )}
                    />
                </View>

                <Text
                    style={{ alignSelf: 'flex-end', paddingHorizontal: 25, paddingVertical: 10, }}
                    onPress={() => {
                        navigation.navigate('EditTeamsPage')
                    }}
                >
                    Manage My Teams
                </Text>

                {/* Divider Line */}
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <View style={{ flex: 1, height: 2, backgroundColor: "#979797" }} />
                    <View style={{ flex: 1, height: 2, backgroundColor: "#979797" }} />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        height: ScreenHeight,
        alignItems: 'center',
        paddingVertical: 25,
        flex: 1,
    },

    accountInfoContainer: {
        paddingHorizontal: 25,
        width: ScreenWidth,
        flexDirection: 'row'
    },
    profileInfoContainer: {
        width: ScreenWidth,
        paddingLeft: 10,
        justifyContent: 'space-evenly',
    },
    name: {
        fontSize: 20,
        fontWeight: '400',
        marginHorizontal: 2,
    },

    topTeamsContainer: {
        paddingHorizontal: 25,
        paddingVertical: 10,
        width: ScreenWidth,
        alignItems: 'stretch'
    },
    individualTeamContainer: {
        padding: 5,
        margin: 5,
        backgroundColor: COLORS.aqua,
        borderRadius: 10,
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
    },

    manageLink: {
        paddingTop: 5,
        alignSelf: 'flex-end'
    }
});

export default AccountPage;