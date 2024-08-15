//Components
import { Auth } from "aws-amplify";
import { SafeAreaView, Text, View, StyleSheet, Image, TextInput, TouchableHighlight } from "react-native";
import React, { useState, useRef } from 'react';
import { COLORS } from "../../constants/theme";
import UserEmail from "../../components/UserInfo/UserEmail";
import { ScreenHeight, ScreenWidth } from "react-native-elements/dist/helpers";
import { useNavigation, useRoute } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';


const HandleConfirmation = () => {

        const [code, setCode] = useState('');
        const route = useRoute();
        const email = route.params.email;
        const [verifyLoading, setVerifyLoading] = useState(false);
        const [resendLoading, setResendLoading] = useState(false);
        const navigation = useNavigation();
        const [errorMessage, setErrorMessage] = useState('');

    const handleConfirmation = async () => {
        try {
            setVerifyLoading(true);
          await Auth.confirmSignUp(email, code);
          // User's account is now confirmed, and they can sign in
          navigation.navigate('FirstLogin'); // Navigate to your login screen
        } catch (error) {
            setErrorMessage(error.message);
          console.log('Error confirming account:', error);
        } finally{
            setVerifyLoading(false);
        }
    };

    const resendVerificationCode = async () => {
        try {
          setResendLoading(true);
          await Auth.resendSignUp(email);
          console.log('Verification code resent successfully');
        } catch (error) {
            setErrorMessage(error.message);
          console.log('Error resending verification code:', error.message);
        } finally {
          setResendLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header Image */}
            <View>
                <Image 
                    source={require('../../assets/fanfindrblack.png')}
                    style={{
                        height: 90,
                        width: 270,
                    }}
                />
            </View>

            {/* Header Text */}
            <View style={styles.textContainer}>
                <View>
                    <Text style={styles.headerText}>
                        Email verification
                    </Text>
                    <Text style={styles.pText}>Please enter the verification number sent to {email}</Text>
                </View>
            </View>

            {/* Code Input Boxes */}
            <View style={styles.inputBoxContainer}>
                <TextInput 
                style={styles.inputBox} 
                onChangeText={(text) => setCode(text)}
                keyboardType="numeric"
                />
            </View>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
                {/* Verify Code Button */}
                <View style={styles.submitButton}>
                    <TouchableHighlight
                        underlayColor='transparent'
                        onPress={handleConfirmation}
                        disabled={verifyLoading}
                    >
                        {verifyLoading ? (
                            <ActivityIndicator color={COLORS.white} />
                        ) : (
                            <Text style={{ color: COLORS.white, fontSize: 20 }}>Verify Code</Text>
                        )}
                    </TouchableHighlight>
                </View>

                {/* Resend Button */}
                <View style={styles.resendButton}>
                    <TouchableHighlight
                        underlayColor='transparent'
                        onPress={resendVerificationCode}
                        disabled={resendLoading}
                        >
                        {resendLoading ? (
                            <ActivityIndicator color={COLORS.white} />
                        ) : (
                            <Text style={{ color: COLORS.white, fontSize: 20 }}>Resend Code</Text>
                        )}
                    </TouchableHighlight>
                </View>
            </View>

            {/* Error Message */}
            <Text style={styles.errorMessageText}>
                {errorMessage}
            </Text>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        height: ScreenHeight,
    },

    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 20,
    },
    headerText: {
        fontWeight: '700',
        fontSize: 25,
        textAlign: 'center',
    },
    pText: {
        padding: 10,
        textAlign: 'center',
        fontSize: 15,
    },

    inputBoxContainer: {
        width: ScreenWidth,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    inputBox: {
        borderStyle: 'solid',
        borderColor: COLORS.orange,
        height: 60,
        width: 175,
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 40,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    buttonContainer: {
        padding: 30,
        flexDirection: 'row',
        alignSelf: 'center',
        width: ScreenWidth,
        justifyContent: 'space-between',
    },
    submitButton: {
        backgroundColor: COLORS.aqua,
        height: 75,
        width: 175,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: COLORS.aqua,
        justifyContent: 'center',
        alignItems: 'center',
    },
    resendButton: {
        backgroundColor: COLORS.orange,
        height: 75,
        width: 175,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: COLORS.orange,
        justifyContent: 'center',
        alignItems: 'center',
    },

    errorMessageText:{
        color: 'red',
        fontSize: 15,
        paddingVertical: 10,
    },
})

export default HandleConfirmation;