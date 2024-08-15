import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import LocationAccessOverlay1 from "../components/LocationAccessOverlay1";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, Padding, Border, FontFamily } from "../GlobalStyles";

const AccountSetupLOCATIONACCESSV5LIGHT = () => {
  const [buttonXlrgContainerVisible, setButtonXlrgContainerVisible] =
    useState(false);
  const navigation = useNavigation();

  const openButtonXlrgContainer = useCallback(() => {
    setButtonXlrgContainerVisible(true);
  }, []);

  const closeButtonXlrgContainer = useCallback(() => {
    setButtonXlrgContainerVisible(false);
  }, []);

  return (
    <>
      <View
        style={[
          styles.accountSetupLocationAcces,
          styles.breadcrumbStepsIconLayout,
        ]}
      >
        <View style={styles.breadcrumbTrail}>
          <Image
            style={[
              styles.breadcrumbStepsIcon,
              styles.breadcrumbStepsIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/breadcrumbsteps2.png")}
          />
        </View>
        <Text style={[styles.fanfindrHelpsYou, styles.addAndVerifyTypo]}>
          FanFindr helps you discover local bars and restaurants showing the
          games you love. By enabling location services, we can provide
          personalized recommendations and ensure you never miss an important
          game. Rest assured, your privacy is our priority. We never share your
          information.
        </Text>
        <Image
          style={[
            styles.accountSetupLocationAccesChild,
            styles.fanfindrHelpsYouPosition,
          ]}
          contentFit="cover"
          source={require("../assets/group-1000004303.png")}
        />
        <View style={[styles.frameParent, styles.frameParentLayout]}>
          <View
            style={[styles.neverMissAGameWrapper, styles.addAndVerifyPosition]}
          >
            <Text style={styles.neverMissA}>Never Miss a Game</Text>
          </View>
          <View
            style={[
              styles.addAndVerifyYourPhoneNumbWrapper,
              styles.frameParentLayout,
            ]}
          >
            <Text style={[styles.addAndVerify, styles.addAndVerifyPosition]}>
              Add and verify your phone number for added security.
            </Text>
          </View>
        </View>
        <Pressable
          style={[styles.buttonXlrg, styles.buttonFlexBox]}
          onPress={openButtonXlrgContainer}
        >
          <Text style={[styles.button, styles.buttonTypo]}>
            Enable Location Services
          </Text>
        </Pressable>
        <Pressable
          style={[styles.buttonXlrg1, styles.buttonFlexBox]}
          onPress={() =>
            navigation.navigate("AccountSetupNOTIFICATIONACCESSV5LIGHT")
          }
        >
          <Text style={[styles.button1, styles.buttonTypo]}>Skip</Text>
        </Pressable>
        <View
          style={[styles.iphoneXBarsStatusDef, styles.addAndVerifyPosition]}
        >
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

      <Modal
        animationType="fade"
        transparent
        visible={buttonXlrgContainerVisible}
      >
        <View style={styles.buttonXlrgContainerOverlay}>
          <Pressable
            style={styles.buttonXlrgContainerBg}
            onPress={closeButtonXlrgContainer}
          />
          <LocationAccessOverlay1 onClose={closeButtonXlrgContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  breadcrumbStepsIconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  addAndVerifyTypo: {
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.textPrimary,
  },
  fanfindrHelpsYouPosition: {
    width: 327,
    position: "absolute",
    left: 24,
  },
  frameParentLayout: {
    width: 328,
    position: "absolute",
  },
  addAndVerifyPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_13xl,
    flexDirection: "row",
    height: 64,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
    width: 327,
    left: 24,
    position: "absolute",
  },
  buttonTypo: {
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontWeight: "700",
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
  breadcrumbStepsIcon: {
    alignSelf: "stretch",
    maxWidth: "100%",
    height: 0,
  },
  breadcrumbTrail: {
    top: 55,
    height: 41,
    padding: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    width: 327,
    left: 24,
    position: "absolute",
    backgroundColor: Color.backgroundLight,
  },
  fanfindrHelpsYou: {
    top: 494,
    lineHeight: 21,
    fontFamily: FontFamily.poppinsRegular,
    width: 327,
    position: "absolute",
    left: 24,
  },
  accountSetupLocationAccesChild: {
    top: 192,
    height: 278,
  },
  neverMissA: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.textPrimary,
    width: 327,
  },
  neverMissAGameWrapper: {
    left: 0,
  },
  addAndVerify: {
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    left: 0,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.textPrimary,
  },
  addAndVerifyYourPhoneNumbWrapper: {
    top: 36,
    height: 16,
    left: 0,
  },
  frameParent: {
    top: 104,
    height: 52,
    left: 24,
    width: 328,
  },
  buttonXlrgContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  buttonXlrgContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  button: {
    color: Color.backgroundLight,
    textAlign: "center",
  },
  buttonXlrg: {
    top: 652,
    backgroundColor: Color.primary,
  },
  button1: {
    color: Color.secondary,
    textAlign: "center",
  },
  buttonXlrg1: {
    top: 716,
  },
  time: {
    marginTop: -9,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.sFBody,
    textAlign: "center",
    left: 0,
    color: Color.textPrimary,
    top: "50%",
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
    left: 0,
    backgroundColor: Color.backgroundLight,
  },
  accountSetupLocationAcces: {
    flex: 1,
    height: 812,
    backgroundColor: Color.backgroundLight,
  },
});

export default AccountSetupLOCATIONACCESSV5LIGHT;
