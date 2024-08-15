//Components
import { StyleSheet, View, Text, TextInput, TouchableHighlight, Pressable, Button, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Auth, Storage } from "aws-amplify";
import * as ImagePicker from 'expo-image-picker';
import { Image } from "expo-image";

//Icons
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const SignUpScreen = () => {

    const navigation = useNavigation();
    const [passwordHidden, setPasswordHidden] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
    
        if (!result.canceled) {
            setImage(result.assets[0].uri);
            setProfilePicture(result.assets[0]);
        }
    };

    const signUp = async () => {
        try {
            setLoading(true)
            let imageKey = null;
        if (profilePicture) {
            imageKey = `profile_pictures/${email}/${profilePicture.name}`; // You may need to adjust the key based on your requirements
            console.log('Image Key:', imageKey);

            await Storage.put(imageKey, profilePicture.uri, {
                contentType: profilePicture.type, // Specify the content type of the file
            });
        } 

            await Auth.signUp({
                username: email, // Use email as the username
                password: password,
                attributes: {
                    email: email,
                    given_name: firstName,
                    family_name: lastName,
                    'custom:profile_picture': imageKey,
                },
            });

            navigation.navigate('ConfirmationPage', { email });

        } catch (error) {
            setErrorMessage(error.message);
            console.log('Error signing up:', error);
        }finally{
            setLoading(false);
        }
    } 

    return (
        <SafeAreaView style={styles.container}>

            {/*Back Button*/}
            <View style={styles.backContainer}>
                <TouchableHighlight onPress={() => navigation.goBack()} underlayColor='transparent'>
                    <MaterialIcons name="keyboard-arrow-left" size={45} color={COLORS.aqua} />
                </TouchableHighlight>
                <Text style={styles.backButtonText}>
                    Back
                </Text>
            </View>

            {/*Page Header*/}
            <View>
                <Text style={styles.headerText}>Get Started</Text>
            </View>

            {/*Form*/}
            <View>
                <View>
                    <TextInput
                        style={styles.emailInput}
                        placeholder="First Name"
                        //keyboardType="email-address"
                        onChangeText={(text) => setFirstName(text)}
                        value={firstName}
                    />
                    <TextInput
                        style={styles.emailInput}
                        placeholder="Last Name"
                        //keyboardType="email-address"
                        onChangeText={(text) => setLastName(text)}
                        value={lastName}
                    />
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
                            setPasswordHidden(prev => !prev);
                        }}>
                        {passwordHidden ? <Entypo name="eye" size={30} color={COLORS.aqua} /> : <Entypo name="eye-with-line" size={30} color={COLORS.aqua} />}
                    </TouchableHighlight>

                </View>
            </View>

            {/* Image Picker */}
            {/*<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Pick an image from camera roll" onPress={pickImage} />
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>*/}

            {/*Sign Up Button*/}
            <TouchableHighlight onPress={signUp} style={styles.signupButton} underlayColor={COLORS.orange}>
                {loading ? (
                    <ActivityIndicator color={COLORS.white}/>
                ) : (
                    <Text style={styles.buttonText}>Sign Up</Text>
                )}
            </TouchableHighlight>

            {/* Error Message */}
            <Text style={styles.errorMessageText}>
                {errorMessage}
            </Text>


            {/*Page Divider*/}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 50 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: 'grey' }} />
                <View>
                    <Text style={{ width: 100, textAlign: 'center', color: 'grey', marginHorizontal: 5 }}>Sign Up With</Text>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: 'grey' }} />
            </View>

            {/*Logo Icon Section*/}
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

            {/*Login Page Link*/}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: 'grey', fontSize: 18, }}>Already have an account?</Text>
                <TouchableHighlight
                    underlayColor="transparent"
                    onPress={() => {
                        navigation.navigate('Login')
                    }}
                >
                    <Text
                        style={{
                            marginHorizontal: 10,
                            color: COLORS.aqua,
                            fontWeight: 'bold',
                            fontSize: 18,
                        }}
                    >
                        Login
                    </Text>
                </TouchableHighlight>
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
    backButtonText: {
        color: COLORS.aqua,
        fontSize: 20,
    },

    headerText: {
        color: COLORS.aqua,
        fontSize: 35,
        paddingBottom: 40,
        paddingTop: 20,
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
        marginVertical: 70,
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
    buttonText: {
        color: COLORS.white,
        fontSize: 20,
    },

    errorMessageText:{
        color: 'red',
        fontSize: 15,
        paddingVertical: 10,
    },
})

export default SignUpScreen;