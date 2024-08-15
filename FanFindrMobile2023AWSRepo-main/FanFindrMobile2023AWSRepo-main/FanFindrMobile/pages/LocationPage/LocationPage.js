//Components
import { Text, StyleSheet, SafeAreaView, View, TouchableHighlight, ActivityIndicator } from "react-native";
import { COLORS } from '../../constants/theme';
import { ScreenHeight, ScreenWidth } from "react-native-elements/dist/helpers";
import * as Location from 'expo-location';
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { useState } from "react";

const LocationPage = () => {

    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const startBackgroundTracking = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status == "granted") {
            try{
                setLoading(true);
                await Location.requestBackgroundPermissionsAsync();
    
            } catch (error) {
                setErrorMessage(error.message);
                console.log('Error Enabling Location: ', error);
            } finally{
                setLoading(false);
            }
        }
        navigation.navigate('EnableNotifications');
    };

    return (
        <SafeAreaView style={styles.safeAreaViewContainer}>
            <View style={styles.container}>

                {/* Home Plate Progress Tracker */}
                <View style={{paddingBottom: 10,}}>
                    <Image 
                        source={require('../../assets/FanFindrLogos/step1.png')}
                        style={{ height: 40, width: 260}}
                    />
                </View>

                {/* Header Text */}
                <Text style={styles.headerText}>Let us know where you're at</Text>
                <Text style={styles.pText}>FanFindr helps you find local bars and restaurants playing the important games you don't want to miss. FanFindr never shares your information. Period. Enabling location services helps FanFindr work better for you</Text>

                {/* Background Image */}
                <Image 
                    source={require('../../assets/FanFindrLogoNoText.png')}
                    style={{ height: 200, width: 200}}
                />
        
                {/* Buttons */}
                <View style={styles.locationButtonContainer}>
                    <TouchableHighlight
                        style={styles.locationButton}
                        underlayColor={COLORS.orange}
                        onPress={startBackgroundTracking}
                    >
                        {loading ? (
                            <ActivityIndicator color={COLORS.white}/>
                        ) : (
                            <Text style={styles.buttonText}>Enable Location Services</Text>
                        )}
                    </TouchableHighlight>
                </View>
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
        fontSize: 17,
        alignSelf: 'flex-start',
    },

    locationButtonContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 10,
        position: 'absolute',
        bottom: 75,
    },
    locationButton: {
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
});

export default LocationPage;