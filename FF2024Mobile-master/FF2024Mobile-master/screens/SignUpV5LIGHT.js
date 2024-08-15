import * as React from 'react'
import { Image, TextInput } from 'react-native'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Amplify, Auth } from 'aws-amplify';
import { signUp } from 'aws-amplify/auth';
import awsconfig from "../src/aws-exports";
import { FontSize, Padding, Color, Border, FontFamily } from '../GlobalStyles'

Amplify.configure(awsconfig);

const SignUpV5LIGHT = () => {
  const navigation = useNavigation()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [error, setError] = React.useState('')

  const handleSignUp = async () => {
    try {
      console.log('Attempting to sign up with:', { email, password, firstName, lastName });
      const { user } = await signUp({
        username: email,
        password,
        attributes: {
          email,
          given_name: firstName,
          family_name: lastName
        }
      });
      console.log(Auth); // Corrected the console.log
      alert('Sign-up successful! Please check your email for confirmation.');
      console.log('Sign-up successful:', user);
      console.log(Auth)
    } catch (err) {
      console.error('Sign-up error:', err);
      setError(err.message);
    }
  };
  return (
    <View style={[styles.signUpV5Light, styles.signUpV5LightLayout]}>
      <View style={styles.breadcrumbTrail}>
        <Image
          style={[styles.breadcrumbStepsIcon, styles.signUpV5LightLayout]}
          contentFit='cover'
          source={require('../assets/breadcrumbsteps.png')}
        />
      </View>
      <View style={[styles.pageHeader, styles.inputLayout2]}>
        <Text style={[styles.signUpTo, styles.signUpToTypo]}>
          Sign Up to get started!
        </Text>
        <Text style={styles.createYourAccount}>Create your Account</Text>
      </View>
      <TextInput
        style={[styles.inputFormFeild, styles.inputBorder]}
        placeholder='First Name'
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={[styles.inputFormFeild1, styles.inputBorder]}
        placeholder='Last Name'
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={[styles.inputFormFeild2, styles.inputBorder]}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
      />
      <View style={[styles.passwordInput, styles.inputLayout2]}>
        <TextInput
          style={[styles.inputFormFeild3, styles.inputBorder]}
          placeholder='Password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Text style={[styles.yourPasswordMust, styles.orSignUpClr]}>
          Your password must be at least 8 characters long and include at least
          one uppercase letter, one lowercase letter, one number, and one
          special character.
        </Text>
      </View>
      <Text style={[styles.orSignUp, styles.orSignUpClr]}>Or sign up with</Text>
      <Pressable style={styles.buttonXlrg} onPress={handleSignUp}>
        <Text style={styles.button}>Sign Up</Text>
      </Pressable>
      <Pressable
        style={[styles.socialMediaButton, styles.socialLayout]}
        onPress={() => navigation.navigate('AccountSetupLOCATIONACCESSV5LIGHT')}
      >
        <View style={[styles.label4, styles.labelPosition]}>
          <Image
            style={styles.googleIcon}
            contentFit='cover'
            source={require('../assets/google.png')}
          />
          <Text style={styles.google}>Google</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.socialMediaButton1, styles.socialLayout]}
        onPress={() => navigation.navigate('AccountSetupLOCATIONACCESSV5LIGHT')}
      >
        <View style={[styles.label5, styles.labelPosition]}>
          <Image
            style={styles.googleIcon}
            contentFit='cover'
            source={require('../assets/icons.png')}
          />
          <Text style={styles.google}>Apple</Text>
        </View>
      </Pressable>
      <View style={styles.iphoneXBarsStatusDef}>
        <View style={[styles.action, styles.timePosition]}>
          <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        </View>
        <View style={[styles.container, styles.containerPosition]}>
          <Image
            style={[styles.batteryIcon, styles.containerPosition]}
            contentFit='cover'
            source={require('../assets/battery.png')}
          />
          <Image
            style={styles.combinedShapeIcon}
            contentFit='cover'
            source={require('../assets/combined-shape.png')}
          />
          <Image
            style={styles.wiFiIcon}
            contentFit='cover'
            source={require('../assets/wifi1.png')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  signUpV5LightLayout: {
    width: '100%',
    overflow: 'hidden'
  },
  inputLayout2: {
    width: 327,
    left: 24
  },
  signUpToTypo: {
    textAlign: 'left',
    fontSize: FontSize.size_xs
  },
  inputBorder: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Color.outline,
    borderStyle: 'solid',
    borderRadius: Border.br_5xs,
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: Color.backgroundLight
  },
  
  inputFieldPosition: {
    left: '0%',
    width: '100%'
  },
  labelTypo: {
    color: Color.outline,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    textAlign: 'left',
    overflow: 'hidden'
  },
  orSignUpClr: {
    color: Color.secondary,
    fontFamily: FontFamily.poppinsRegular,
    position: 'absolute'
  },
  socialLayout: {
    borderWidth: 1,
    borderColor: Color.outline,
    borderStyle: 'solid',
    borderRadius: Border.br_5xs,
    height: 40,
    width: 327,
    left: 24,
    position: 'absolute',
    backgroundColor: Color.backgroundLight
  },
  labelPosition: {
    top: '50%',
    marginTop: -10,
    flexDirection: 'row',
    left: '50%',
    alignItems: 'center',
    position: 'absolute'
  },
  timePosition: {
    width: 54,
    top: '50%',
    position: 'absolute'
  },
  containerPosition: {
    height: 12,
    top: '50%',
    position: 'absolute'
  },
  breadcrumbStepsIcon: {
    alignSelf: 'stretch',
    maxWidth: '100%',
    height: 0,
    overflow: 'hidden'
  },
  breadcrumbTrail: {
    top: 55,
    height: 41,
    padding: Padding.p_5xs,
    justifyContent: 'center',
    alignItems: 'center',
    width: 327,
    left: 24,
    position: 'absolute',
    backgroundColor: Color.backgroundLight
  },
  signUpTo: {
    top: 36,
    lineHeight: 16,
    color: Color.textPrimary,
    left: 0,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    textAlign: 'left',
    fontSize: FontSize.size_xs,
    position: 'absolute'
  },
  createYourAccount: {
    marginLeft: -163.5,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
    left: '50%',
    top: 0,
    textAlign: 'left',
    color: Color.textPrimary,
    width: 327,
    position: 'absolute'
  },
  pageHeader: {
    top: 104,
    height: 52,
    position: 'absolute',
    width: 327
  },
  inputFormFeild: {
    height: 40,
    width: 153,
    top: 216,
    paddingHorizontal: Padding.p_base,
    left: 24
  },
  inputFormFeild1: {
    left: 198,
    height: 40,
    width: 153,
    top: 216,
    paddingHorizontal: Padding.p_base
  },
  inputFormFeild2: {
    top: 276,
    height: 40,
    width: 327,
    left: 24
  },
  
  label3: {
    flex: 1
  },
  eyeOffIcon: {
    width: 24,
    height: 24,
    marginLeft: 16,
    overflow: 'hidden'
  },
  inputField: {
    height: '35.29%',
    top: '0%',
    right: '0%',
    bottom: '64.71%',
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Color.outline,
    borderStyle: 'solid',
    borderRadius: Border.br_5xs,
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: Color.backgroundLight
  },
  yourPasswordMust: {
    top: '47.06%',
    display: 'none',
    left: '0%',
    width: '100%',
    textAlign: 'left',
    fontSize: FontSize.size_xs,
    color: Color.secondary
  },
  passwordInput: {
    top: 336,
    height: 102,
    position: 'absolute',
    width: 327
  },
  orSignUp: {
    top: 604,
    fontSize: FontSize.size_base,
    textAlign: 'center',
    width: 327,
    left: 24
  },
  button: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interBold,
    color: Color.backgroundLight,
    textAlign: 'center',
    fontWeight: '700'
  },
  buttonXlrg: {
    top: 516,
    backgroundColor: Color.primary,
    height: 64,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
    flexDirection: 'row',
    borderRadius: Border.br_5xs,
    justifyContent: 'center',
    alignItems: 'center',
    width: 327,
    left: 24,
    position: 'absolute'
  },
  googleIcon: {
    width: 20,
    height: 20,
    overflow: 'hidden'
  },
  google: {
    marginLeft: 8,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    textAlign: 'left',
    color: Color.textPrimary,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500'
  },
  label4: {
    marginLeft: -39
  },
  socialMediaButton: {
    top: 652,
    height: 40
  },
  label5: {
    marginLeft: -34.5
  },
  socialMediaButton1: {
    top: 708,
    height: 40
  },
  time: {
    marginTop: -9,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: '600',
    fontFamily: FontFamily.sFBody,
    textAlign: 'center',
    color: Color.textPrimary,
    left: 0,
    width: 54
  },
  action: {
    marginTop: -8,
    left: 20,
    height: 18
  },
  batteryIcon: {
    marginTop: -5.75,
    right: 0,
    width: 25
  },
  combinedShapeIcon: {
    width: 17,
    height: 11
  },
  wiFiIcon: {
    width: 15,
    height: 11
  },
  container: {
    marginTop: -4.8,
    right: 15,
    width: 67
  },
  iphoneXBarsStatusDef: {
    width: 375,
    height: 44,
    top: 0,
    left: 0,
    position: 'absolute',
    backgroundColor: Color.backgroundLight
  },
  signUpV5Light: {
    height: 812,
    overflow: 'hidden',
    flex: 1,
    backgroundColor: Color.backgroundLight,
    width: '100%'
  }
})

export default SignUpV5LIGHT
