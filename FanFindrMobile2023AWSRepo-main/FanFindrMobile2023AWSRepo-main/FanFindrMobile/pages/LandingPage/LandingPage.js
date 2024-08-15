//Components
import { Text, StyleSheet, View, TouchableHighlight } from "react-native";
import { COLORS } from "../../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import DevButton from "../../components/DevButton/DevButton";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import DashboardBtn from "../Dashboard/DashboardBtn";

const LandingPage = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>

            {/* Header IMage and Text */}
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/fanfindrwhite.png')}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.pageText}>
                    Join hundreds of sports fans and find local bars and restaurants playing your favorite games.
                </Text>
            </View>

            {/* Buttons */}
            <View style={styles.buttonContainer}>

                <TouchableHighlight 
                    style={styles.loginButton} 
                    onPress={() => {
                        navigation.navigate('Login')
                    }}
                    underlayColor={COLORS.aqua}
                    >
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableHighlight>

                <View style={styles.space} />
                
                <TouchableHighlight 
                    style={styles.signUpButton} 
                    onPress={() => {
                        navigation.navigate('SignUp')
                    }}
                    underlayColor={COLORS.aqua}
                    >
                    <Text style={styles.signUpButtonText}>Sign Up</Text>
                </TouchableHighlight>
            </View>
            {/* <DevButton /> */}

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.orange,
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    },
    space: {
        width: 20,
    },
    logoContainer: {
        width: 300,
        height: 75,
        marginBottom: 60,
    },
    logo: {
        width: 300,
        height: 75,
    },
    textContainer: {
        marginTop: 50,
        marginBottom: 150,
    },
    pageText: {
        color: COLORS.white,
        fontSize: 20,
        textAlign: 'center',
        paddingLeft: 25,
        paddingRight: 25,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    loginButton: {
        height: 75,
        width: 175,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: COLORS.orange,
        borderStyle: "solid",
        borderColor: COLORS.white,
        borderWidth: 2,
        borderRadius: 20,
    },
    loginButtonText: {
        color: COLORS.white,
        fontSize: 20,
    },
    signUpButton: {
        height: 75,
        width: 175,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderStyle: "solid",
        borderColor: COLORS.white,
        borderWidth: 2,
        borderRadius: 20,
        padding: 10,
    },
    signUpButtonText: {
        color: COLORS.orange,
        fontSize: 20,
    },
})

export default LandingPage;