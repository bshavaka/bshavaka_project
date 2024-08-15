//Components
import { Text, ScrollView, SafeAreaView, View, StyleSheet, Image } from "react-native";
import { COLORS } from "../../constants/theme";
import { SelectList } from "react-native-dropdown-select-list";
import CalendarStrip from 'react-native-calendar-strip';


//Icons
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { ScreenHeight } from "react-native-elements/dist/helpers";

const ScoresPage = () => {
    return (
        <>
            <SafeAreaView style={styles.leagueHeaderContainer}>
                <Octicons name="three-bars" size={30} color={COLORS.white} style={{ padding: 10 }} />
                <View style={styles.leagueDropdownContainer}>
                    <Image source={require('../../assets/LeagueLogos/NFL.png')} style={{ height: 60, width: 50 }} />
                </View>
                <AntDesign name="calendar" size={30} color={COLORS.white} style={{ padding: 10 }} />
            </SafeAreaView>

            <ScrollView style={styles.scoresContainer}>

                <View style={styles.gameContainer}>
                    <View style={styles.teamInfoContainer}>
                        <Image
                            source={require('../../assets/NFLLogos/azcards.png')}
                            style={{
                                height: 75,
                                width: 75,
                            }}
                        />
                        <Text>
                            Cardinals
                        </Text>
                        <Text>
                            (1-3)
                        </Text>
                    </View>
                    <View style={styles.gameStatusContainer}>
                        <Text style={styles.scoreText}>16</Text>
                        <Text>FINAL</Text>
                        <Text style={styles.scoreText}>35</Text>
                    </View>
                    <View style={styles.teamInfoContainer}>
                        <Image
                            source={require('../../assets/NFLLogos/49ers.png')}
                            style={{
                                height: 75,
                                width: 75,
                            }}
                        />
                        <Text>
                            49ers
                        </Text>
                        <Text>
                            (4-0)
                        </Text>
                    </View>
                </View>

                <View style={styles.gameContainer}>
                    <View style={styles.teamInfoContainer}>
                        <Image
                            source={require('../../assets/NFLLogos/patriots.png')}
                            style={{
                                height: 75,
                                width: 75,
                            }}
                        />
                        <Text>
                            Patriots
                        </Text>
                        <Text>
                            (1-3)
                        </Text>
                    </View>
                    <View style={styles.gameStatusContainer}>
                        <Text style={styles.scoreText}>3   </Text>
                        <Text>FINAL</Text>
                        <Text style={styles.scoreText}>38</Text>
                    </View>
                    <View style={styles.teamInfoContainer}>
                        <Image
                            source={require('../../assets/NFLLogos/cowboys.png')}
                            style={{
                                height: 75,
                                width: 75,
                            }}
                        />
                        <Text>
                            Cowboys
                        </Text>
                        <Text>
                            (3-1)
                        </Text>
                    </View>
                </View>

                <View style={styles.gameContainer}>
                    <View style={styles.teamInfoContainer}>
                        <Image
                            source={require('../../assets/NFLLogos/chiefs.png')}
                            style={{
                                height: 75,
                                width: 75,
                            }}
                        />
                        <Text>
                            Chiefs
                        </Text>
                        <Text>
                            (3-1)
                        </Text>
                    </View>
                    <View style={styles.gameStatusContainer}>
                        <Text style={styles.scoreText}>23</Text>
                        <Text>FINAL</Text>
                        <Text style={styles.scoreText}>20</Text>
                    </View>
                    <View style={styles.teamInfoContainer}>
                        <Image
                            source={require('../../assets/NFLLogos/jets.png')}
                            style={{
                                height: 75,
                                width: 75,
                            }}
                        />
                        <Text>
                            Jets
                        </Text>
                        <Text>
                            (1-3)
                        </Text>
                    </View>
                </View>

                <View style={styles.gameContainer}>
                    <View style={styles.teamInfoContainer}>
                        <Image
                            source={require('../../assets/NFLLogos/seahawks.png')}
                            style={{
                                height: 75,
                                width: 75,
                            }}
                        />
                        <Text>
                            Seahawks
                        </Text>
                        <Text>
                            (3-1)
                        </Text>
                    </View>
                    <View style={styles.gameStatusContainer}>
                        <Text style={styles.scoreText}>24</Text>
                        <Text>FINAL</Text>
                        <Text style={styles.scoreText}>3   </Text>
                    </View>
                    <View style={styles.teamInfoContainer}>
                        <Image
                            source={require('../../assets/NFLLogos/giants.png')}
                            style={{
                                height: 75,
                                width: 75,
                            }}
                        />
                        <Text>
                            Giants
                        </Text>
                        <Text>
                            (1-3)
                        </Text>
                    </View>
                </View>

                <View style={styles.gameContainer}>
                    <View style={styles.teamInfoContainer}>
                        <Image
                            source={require('../../assets/NFLLogos/chargers.png')}
                            style={{
                                height: 75,
                                width: 75,
                            }}
                        />
                        <Text>
                            Chargers
                        </Text>
                        <Text>
                            (2-2)
                        </Text>
                    </View>
                    <View style={styles.gameStatusContainer}>
                        <Text style={styles.scoreText}>30</Text>
                        <Text>FINAL</Text>
                        <Text style={styles.scoreText}>24</Text>
                    </View>
                    <View style={styles.teamInfoContainer}>
                        <Image
                            source={require('../../assets/NFLLogos/bears.png')}
                            style={{
                                height: 75,
                                width: 75,
                            }}
                        />
                        <Text>
                            Bears
                        </Text>
                        <Text>
                            (0-4)
                        </Text>
                    </View>
                </View>



            </ScrollView >

        </>
    );
}

const styles = StyleSheet.create({

    leagueHeaderContainer: {
        backgroundColor: COLORS.orange,
        height: 120,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leagueDropdownContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 10,
    },

    calendarStripContainer: {

    },

    scoresContainer: {
        backgroundColor: COLORS.veryLightGrey,
    },
    gameContainer: {
        backgroundColor: COLORS.white,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
        margin: 10,
        paddingHorizontal: 10,
    },
    teamInfoContainer: {
        alignItems: 'center',
    },
    gameStatusContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        width: 200,
    },
    scoreText: {
        fontSize: 20,
        color: COLORS.black,
        fontWeight: 'bold'
    },

});

export default ScoresPage;