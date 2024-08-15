import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Padding, Color, FontFamily, Border } from "../GlobalStyles";

const LoginV5LIGHT = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginV5Light}>
      <View style={styles.groupParent}>
        <View style={styles.wereGladToHaveYouWrapper}>
          <Text style={[styles.wereGladTo, styles.wereGladToTypo]}>
            We’re glad to have you
          </Text>
        </View>
        <Text style={styles.welcomeBack}>Welcome Back</Text>
      </View>
      <View style={[styles.inputFormFeild, styles.inputSpaceBlock]}>
        <Text style={styles.labelTypo} numberOfLines={1}>
          Email
        </Text>
      </View>
      <View style={[styles.inputField, styles.buttonPosition]}>
        <Text style={[styles.label1, styles.labelTypo]} numberOfLines={1}>
          Password
        </Text>
        <Image
          style={styles.eyeOffIcon}
          contentFit="cover"
          source={require("../assets/eyeoff.png")}
        />
      </View>
      <Text style={[styles.yourPasswordMust, styles.buttonPosition]}>
        Your password must be at least 8 characters long and include at least
        one uppercase letter, one lowercase letter, one number, and one special
        character.
      </Text>
      <Text style={[styles.orContinueWith, styles.buttonPosition]}>
        Or continue with
      </Text>
      <Pressable
        style={[styles.buttonXlrg, styles.buttonPosition]}
        onPress={() => navigation.navigate("DashboardV5LIGHT2")}
      >
        <Text style={styles.button}>Login</Text>
      </Pressable>
      <Pressable
        style={[styles.socialMediaButton, styles.buttonPosition]}
        onPress={() => navigation.navigate("DashboardV5LIGHT2")}
      >
        <View style={[styles.label2, styles.labelPosition]}>
          <Image
            style={styles.googleIcon}
            contentFit="cover"
            source={require("../assets/google.png")}
          />
          <Text style={styles.google}>Google</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.socialMediaButton1, styles.buttonPosition]}
        onPress={() => navigation.navigate("DashboardV5LIGHT2")}
      >
        <View style={[styles.label3, styles.labelPosition]}>
          <Image
            style={styles.googleIcon}
            contentFit="cover"
            source={require("../assets/icons.png")}
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
            contentFit="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={styles.combinedShapeIcon}
            contentFit="cover"
            source={require("../assets/combined-shape.png")}
          />
          <Image
            style={styles.wiFiIcon}
            contentFit="cover"
            source={require("../assets/wifi1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wereGladToTypo: {
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  inputSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
  },
  buttonPosition: {
    left: "6.4%",
    width: "87.2%",
    position: "absolute",
  },
  labelTypo: {
    color: Color.outline,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    overflow: "hidden",
  },
  labelPosition: {
    top: "50%",
    marginTop: -10,
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  timePosition: {
    width: 54,
    top: "50%",
    position: "absolute",
  },
  containerPosition: {
    height: 12,
    top: "50%",
    position: "absolute",
  },
  wereGladTo: {
    lineHeight: 16,
    color: Color.textPrimary,
    left: 0,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_xs,
    top: 0,
    position: "absolute",
  },
  wereGladToHaveYouWrapper: {
    top: 36,
    width: 140,
    height: 16,
    left: 0,
    position: "absolute",
  },
  welcomeBack: {
    marginLeft: -163.5,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: "50%",
    textAlign: "left",
    color: Color.textPrimary,
    top: 0,
    width: 327,
    position: "absolute",
  },
  groupParent: {
    top: 104,
    height: 52,
    width: 327,
    left: 24,
    position: "absolute",
  },
  inputFormFeild: {
    top: 216,
    height: 40,
    borderWidth: 1,
    borderColor: Color.outline,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_base,
    width: 327,
    left: 24,
    position: "absolute",
    backgroundColor: Color.backgroundLight,
  },
  label1: {
    flex: 1,
  },
  eyeOffIcon: {
    width: 24,
    height: 24,
    marginLeft: 16,
    overflow: "hidden",
  },
  inputField: {
    top: "33.99%",
    bottom: "61.08%",
    right: "6.4%",
    left: "6.4%",
    width: "87.2%",
    borderRadius: Border.br_5xs,
    height: "4.93%",
    borderWidth: 1,
    borderColor: Color.outline,
    borderStyle: "solid",
    backgroundColor: Color.backgroundLight,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
  },
  yourPasswordMust: {
    top: "39.9%",
    display: "none",
    opacity: 0.5,
    color: Color.backgroundLight,
    width: "87.2%",
    left: "6.4%",
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  orContinueWith: {
    top: "74.38%",
    fontSize: FontSize.size_base,
    color: Color.secondary,
    textAlign: "center",
    width: "87.2%",
    left: "6.4%",
    fontFamily: FontFamily.poppinsRegular,
  },
  button: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interBold,
    textAlign: "center",
    color: Color.backgroundLight,
    fontWeight: "700",
  },
  buttonXlrg: {
    height: "7.88%",
    top: "63.55%",
    bottom: "28.57%",
    backgroundColor: Color.primary,
    justifyContent: "center",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
    right: "6.4%",
    left: "6.4%",
    width: "87.2%",
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  googleIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  google: {
    marginLeft: 8,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.textPrimary,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  label2: {
    marginLeft: -39,
  },
  socialMediaButton: {
    top: "80.3%",
    bottom: "14.78%",
    right: "6.4%",
    left: "6.4%",
    width: "87.2%",
    borderRadius: Border.br_5xs,
    height: "4.93%",
    borderWidth: 1,
    borderColor: Color.outline,
    borderStyle: "solid",
    backgroundColor: Color.backgroundLight,
  },
  label3: {
    marginLeft: -34.5,
  },
  socialMediaButton1: {
    top: "87.19%",
    bottom: "7.88%",
    right: "6.4%",
    left: "6.4%",
    width: "87.2%",
    borderRadius: Border.br_5xs,
    height: "4.93%",
    borderWidth: 1,
    borderColor: Color.outline,
    borderStyle: "solid",
    backgroundColor: Color.backgroundLight,
  },
  time: {
    marginTop: -9,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.sFBody,
    textAlign: "center",
    color: Color.textPrimary,
    left: 0,
  },
  action: {
    marginTop: -8,
    left: 20,
    height: 18,
  },
  batteryIcon: {
    marginTop: -5.75,
    right: 0,
    width: 25,
  },
  combinedShapeIcon: {
    width: 17,
    height: 11,
  },
  wiFiIcon: {
    width: 15,
    height: 11,
  },
  container: {
    marginTop: -4.8,
    right: 15,
    width: 67,
  },
  iphoneXBarsStatusDef: {
    width: 375,
    height: 44,
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: Color.backgroundLight,
  },
  loginV5Light: {
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.backgroundLight,
  },
});

export default LoginV5LIGHT;
