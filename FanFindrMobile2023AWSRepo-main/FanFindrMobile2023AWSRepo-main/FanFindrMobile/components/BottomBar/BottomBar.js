import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../../constants/theme';
import { View, Image, StyleSheet, Text } from 'react-native';

// Icons
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Screens
import HomePage from '../../pages/Dashboard/HomePage';
import SearchPage from '../../pages/Dashboard/SearchPage';
import ScoresPage from '../../pages/Dashboard/ScoresPage';
import AccountPage from '../../pages/Dashboard/AccountPage';

const BottomBar = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}
        >

            <Tab.Screen name="Home" component={HomePage}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconContainer}>
                            <Image
                                source={focused ? require("../../assets/home-plate.png") : require("../../assets/home-plate-outline.png")}
                                style={{
                                    tintColor: focused ? COLORS.orange : COLORS.aqua,
                                    height: 24,
                                    width: 24,
                                }}
                            />
                            <Text
                                style={{
                                    paddingTop: 5,
                                    color: focused ? COLORS.orange : COLORS.aqua
                                }}
                            >
                                Home
                            </Text>
                        </View>
                    )
                }}
            />

            < Tab.Screen name="Search" component={SearchPage}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconContainer}>
                            <AntDesign name="search1" size={24} color={focused ? COLORS.orange : COLORS.aqua} />
                            <Text
                                style={{
                                    paddingTop: 5,
                                    color: focused ? COLORS.orange : COLORS.aqua
                                }}
                            >
                                Search
                            </Text>
                        </View>
                    )
                }}
            />

            < Tab.Screen name="Scores" component={ScoresPage}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconContainer}>
                            <MaterialCommunityIcons name={focused ? 'scoreboard' : 'scoreboard-outline'} size={24} color={focused ? COLORS.orange : COLORS.aqua} />
                            <Text
                                style={{
                                    paddingTop: 5,
                                    color: focused ? COLORS.orange : COLORS.aqua
                                }}
                            >
                                Scores
                            </Text>
                        </View>
                    )
                }}
            />
            < Tab.Screen name="Account" component={AccountPage}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconContainer}>
                            <Image
                                source={focused ? require("../../assets/user.png") : require("../../assets/user-outline.png")}
                                style={{
                                    tintColor: focused ? COLORS.orange : COLORS.aqua,
                                    height: 24,
                                    width: 24,
                                }}
                            />
                            <Text
                                style={{
                                    paddingTop: 5,
                                    color: focused ? COLORS.orange : COLORS.aqua
                                }}
                            >
                                Account
                            </Text>
                        </View>
                    )
                }}
            />
        </Tab.Navigator >
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
})


export default BottomBar;