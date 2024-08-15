//Components
import { Text, StyleSheet, SafeAreaView, View, TouchableHighlight, ActivityIndicator } from "react-native";
import { COLORS } from '../../constants/theme';
import { ScreenHeight, ScreenWidth } from "react-native-elements/dist/helpers";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { useState } from "react";

//Icons
import { AntDesign } from '@expo/vector-icons';

const EnableNotifications = () => {

    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    return (
        <SafeAreaView style={styles.safeAreaViewContainer}>
            <View style={styles.container}>

                {/* Home Plate Progress Tracker */}
                <View style={{paddingBottom: 10,}}>
                    <Image 
                        source={require('../../assets/FanFindrLogos/step2.png')}
                        style={{ height: 40, width: 260,}}
                    />
                </View>

                {/* Header Text */}
                <Text style={styles.headerText}>Beat FOMO</Text>
                <Text style={styles.pText}>Never miss a game no matter where you travel</Text>

                {/* 3 Icons */}
                <View style={styles.iconContainer}>
                  <View style={styles.iconItem}>
                    <AntDesign name="clockcircleo" size={60} color={COLORS.aqua} />
                    <Text style={styles.iconText}>Know when your favorite games are playing</Text>
                  </View>

                  <View style={styles.iconItem}>
                    <Image 
                    source={require('../../assets/icons/noun-best-price-3328523.png')}
                    style={{height: 60, width: 60}}
                    />
                    <Text style={styles.iconText}>Find bars to watch with fellow fans</Text>
                  </View>

                  <View style={styles.iconItem}>
                    <Image 
                    source={require('../../assets/icons/noun-sport-fan-8283.png')}
                    style={{height: 60, width: 60}}
                    />
                    <Text style={styles.iconText}>Get the best game day deals</Text>
                  </View>

                  <Text style={styles.bottomText}>You can easily customize which notifications you want to recieve in the settings at any time</Text>
                </View>
        
                {/* Buttons */}
                <View style={styles.notificationButtonContainer}>
                    <TouchableHighlight
                        style={styles.notificationButton}
                        underlayColor={COLORS.orange}
                        onPress={() => {
                          navigation.navigate('EditTeamsPage')
                        }}
                    >
                        {loading ? (
                            <ActivityIndicator color={COLORS.white}/>
                        ) : (
                            <Text style={styles.buttonText}>Enable Notifcations</Text>
                        )}
                    </TouchableHighlight>
                </View>
                <Text style={styles.skiptext}>Skip</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaViewContainer: {
        backgroundColor: COLORS.orange,
        flex: 1,
    },
    container: {
        height: ScreenHeight,
        padding: 25,
        flexDirection: 'column',
        alignItems: 'center',
    },

    headerText: {
        color: COLORS.white,
        fontSize: 30,
        alignSelf: 'flex-start',
        fontWeight: '500'
    },
    pText: {
        paddingTop: 10,
        color: COLORS.veryLightGrey,
        fontSize: 20,
        alignSelf: 'flex-start',
        textAlign: 'center',
    },

    notificationButtonContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 10,
        position: 'absolute',
        bottom: 100,
        padding: 5,
    },
    notificationButton: {
        backgroundColor: COLORS.aqua,
        height: 60,
        width: 350,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 20,
    },

    skiptext: {
      color: COLORS.veryLightGrey,
      fontSize:  20,
      position: 'absolute',
      bottom: 75,
      right: 25,
      padding: 5,
    },

    iconContainer: {
      flexDirection: 'column',
      justifyContent: 'space-evenly',
    },
    iconItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 25,
      marginVertical: 40,
    },
    iconText: {
      color: COLORS.white,
      marginHorizontal: 10,
      fontSize: 20,
      paddingRight: 25
    },
    bottomText: {
      color: COLORS.white,
      textAlign: 'center',
      padding: 25,
    },
});

export default EnableNotifications;