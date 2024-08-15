//Components
import { StyleSheet, View, Text, TextInput, TouchableHighlight, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Auth } from 'aws-amplify';
import { ActivityIndicator } from 'react-native';

//Icons
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const FirstLoginScreen = () => {

    const navigation = useNavigation();
    const [passwordHidden, setPasswordHidden] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const login = async () => {
        if (email && password) {
            setLoading(true)
            try {
                const user = await Auth.signIn(email, password);
                console.log('Logged in:', user);
                navigation.navigate('LocationPage');
            } catch (error) {
                setErrorMessage(error.message);
                console.log('Error signing in:', error);
            }finally{
                setLoading(false);
            }
        } else {
            console.log('Username and password cannot be empty.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.headerText}>Welcome!</Text>
                <Text style={styles.subText}>Please login to continue</Text>
            </View>

            {/* Input Fields */}
            <View>
                <View>
                    <TextInput
                        style={styles.emailInput}
                        placeholder="Enter your email"
                        keyboardType="email-address"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />
                </View>
                <View style={styles.passwordInputContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Password"
                        secureTextEntry={passwordHidden}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />
                    {/* Hide/Unhide Password */}
                    <TouchableHighlight
                        underlayColor='transparent'
                        onPress={() => {
                            setPasswordHidden((prev) => !prev);
                        }}>
                        {passwordHidden ? <Entypo name="eye" size={30} color={COLORS.aqua} /> : <Entypo name="eye-with-line" size={30} color={COLORS.aqua} />}
                    </TouchableHighlight>
                </View>
            </View>

            {/* Login Button */}
            <View style={styles.buttonContainer}>
                <TouchableHighlight
                    style={styles.signupButton}
                    onPress={login} //calling login function
                    underlayColor='transparent'
                >
                    {loading ? (
                        <ActivityIndicator color={COLORS.white} />
                    ) : (
                        <Text style={styles.btnText}>Login</Text>
                    )}
                </TouchableHighlight>
            </View>

            {/* Error Message */}
            <Text style={styles.errorMessageText}>
                {errorMessage}
            </Text>

                {/* Login With Section */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 50 }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'grey' }} />
                    <View>
                        <Text style={{ width: 90, textAlign: 'center', color: 'grey', marginHorizontal: 5 }}>Login With</Text>
                    </View>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'grey' }} />
                </View>
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        marginBottom: 50,
                    }}
                >
                    <Image source={require("../../assets/icons/google.png")} style={{ height: 50, width: 50, resizeMode: 'contain' }} />
                    <FontAwesome5 name="facebook" size={50} color="#1877f2" />
                    <AntDesign name="apple1" size={50} color="black" />
                </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        //justifyContent: 'center',
    },

    backContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
    },

    headerText: {
        color: COLORS.aqua,
        fontSize: 35,
        paddingBottom: 40,
        paddingTop: 40,
    },
    subText: {
        textAlign: 'center',
        color: COLORS.black,
        fontSize: 20,
        paddingBottom: 40,
    },

    passwordInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: COLORS.aqua,
        borderRadius: 20,
        height: 50,
        width: 400,
        padding: 10,
        margin: 15,
    },
    passwordInput: {
        flex: 1,
        paddingHorizontal: 5,
    },

    emailInput: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: COLORS.aqua,
        borderRadius: 20,
        height: 50,
        width: 400,
        padding: 10,
        margin: 15,
    },

    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
    },
    signupButton: {
        height: 75,
        width: 400,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: COLORS.aqua,
        borderStyle: "solid",
        borderColor: COLORS.white,
        borderWidth: 2,
        borderRadius: 20,
    },
    btnText: {
        color: COLORS.white,
        fontSize: 20,
    },

    errorMessageText:{
        color: 'red',
        fontSize: 15,
        paddingVertical: 10,
    },
})

export default FirstLoginScreen;