import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const SplashScreenV5LIGHT = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.splashscreenV5Light}
      locations={[0, 1]}
      colors={["rgba(255, 163, 122, 0.1)", "rgba(254, 88, 14, 0.65)"]}
    >
      <ImageBackground
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/splashscreenv5light.png")}
      >
        <Image
          style={styles.fanfindrFan2Transparent1}
          contentFit="cover"
          source={require("../assets/fanfindr-fan2-transparent-1.png")}
        />
        <Text
          style={[styles.welcomeToFanfindrContainer, styles.buttonXlrgPosition]}
        >
          <Text style={styles.welcomeTo}>{`Welcome to `}</Text>
          <Text style={styles.fanfindr}>FanFindr</Text>
        </Text>
        <Text style={[styles.findLocalFans, styles.textLayout]}>
          Find Local Fans! Watch your favourite teams! Anywhere you go!
        </Text>
        <Text style={[styles.yourPrivacyIsContainer, styles.textLayout]}>
          {`Your privacy is important to us. By signing up, you agree to our `}
          <Text style={styles.termsOfService}>Terms of Service</Text>
          {` and `}
          <Text style={styles.termsOfService}>Privacy Policy</Text>.
        </Text>
        <Pressable
          style={[styles.alreadyAMemberContainer, styles.containerPosition1]}
          onPress={() => navigation.navigate("LoginV5LIGHT")}
        >
          <Text style={[styles.text, styles.textLayout]}>
            <Text style={styles.findLocalFansTypo}>Already a member?</Text>
            <Text style={styles.login}>
              <Text style={styles.text1}>{` `}</Text>
              <Text style={styles.fanfindr}>Login</Text>
            </Text>
          </Text>
        </Pressable>
        <Pressable
          style={[styles.buttonXlrg, styles.buttonXlrgPosition]}
          onPress={() => navigation.navigate("SignUpV5LIGHT")}
        >
          <Text style={styles.button}>Get Started!</Text>
        </Pressable>
        <View style={styles.iphoneXBarsStatusDef}>
          <View style={[styles.action, styles.timePosition]}>
            <Text style={[styles.time, styles.timePosition]}>9:41</Text>
          </View>
          <View style={[styles.container, styles.containerPosition]}>
            <Image
              style={[styles.batteryIcon, styles.containerPosition]}
              contentFit="cover"
              source={require("../assets/battery1.png")}
            />
            <Image
              style={styles.combinedShapeIcon}
              contentFit="cover"
              source={require("../assets/combined-shape1.png")}
            />
            <Image
              style={styles.wiFiIcon}
              contentFit="cover"
              source={require("../assets/wifi3.png")}
            />
          </View>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  buttonXlrgPosition: {
    width: 327,
    left: 24,
    position: "absolute",
  },
  textLayout: {
    width: 325,
    textAlign: "center",
  },
  containerPosition1: {
    left: 26,
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
  fanfindrFan2Transparent1: {
    marginTop: -331,
    marginLeft: -118.5,
    left: "50%",
    width: 238,
    height: 340,
    top: "50%",
    position: "absolute",
  },
  welcomeTo: {
    color: Color.backgroundLight,
  },
  fanfindr: {
    color: Color.primary,
  },
  welcomeToFanfindrContainer: {
    top: 439,
    fontSize: 30,
    fontFamily: FontFamily.poppinsSemiBold,
    height: 46,
    textAlign: "center",
    fontWeight: "600",
  },
  findLocalFans: {
    top: 485,
    height: 41,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.backgroundLight,
    fontSize: FontSize.size_base,
    width: 325,
    left: 26,
    position: "absolute",
  },
  termsOfService: {
    textDecorationLine: "underline",
  },
  yourPrivacyIsContainer: {
    top: 709,
    fontSize: FontSize.size_xs,
    height: 32,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.backgroundLight,
    left: 26,
    position: "absolute",
  },
  findLocalFansTypo: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.backgroundLight,
  },
  text1: {
    color: "#ff9500",
  },
  login: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  text: {
    height: 23,
    fontSize: FontSize.size_base,
    width: 325,
  },
  alreadyAMemberContainer: {
    top: 654,
  },
  button: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.backgroundLight,
    textAlign: "center",
  },
  buttonXlrg: {
    top: 574,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.primary,
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
  },
  time: {
    marginTop: -9,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.sFBody,
    left: 0,
    color: Color.backgroundLight,
    textAlign: "center",
    fontWeight: "600",
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
    top: 0,
    width: 375,
    height: 44,
    left: 0,
    position: "absolute",
  },
  icon: {
    flex: 1,
    height: "100%",
    overflow: "hidden",
    backgroundColor: "transparent",
    width: "100%",
  },
  splashscreenV5Light: {
    height: 812,
    width: "100%",
  },
});

export default SplashScreenV5LIGHT;
