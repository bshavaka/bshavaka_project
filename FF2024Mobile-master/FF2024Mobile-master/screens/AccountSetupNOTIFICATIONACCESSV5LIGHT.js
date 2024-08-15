import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import PushNotificationAccessOverlay from "../components/PushNotificationAccessOverlay";
import { FontSize, Color, Padding, Border, FontFamily } from "../GlobalStyles";

const AccountSetupNOTIFICATIONACCESSV5LIGHT = () => {
  const navigation = useNavigation();
  const [buttonXlrgContainer1Visible, setButtonXlrgContainer1Visible] =
    useState(false);

  const openButtonXlrgContainer1 = useCallback(() => {
    setButtonXlrgContainer1Visible(true);
  }, []);

  const closeButtonXlrgContainer1 = useCallback(() => {
    setButtonXlrgContainer1Visible(false);
  }, []);

  return (
    <>
      <View
        style={[
          styles.accountSetupNotificationA,
          styles.breadcrumbStepsIconLayout,
        ]}
      >
        <View style={styles.groupParent}>
          <View style={styles.neverMissAGameNoMatterWWrapper}>
            <Text style={[styles.neverMissA, styles.neverMissATypo]}>
              Never miss a game, no matter where you travel!
            </Text>
          </View>
          <Text style={styles.beatFomo}>Beat FOMO</Text>
        </View>
        <View style={styles.breadcrumbTrail}>
          <Image
            style={[
              styles.breadcrumbStepsIcon,
              styles.breadcrumbStepsIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/breadcrumbsteps1.png")}
          />
        </View>
        <Text
          style={[styles.youCanEasily, styles.neverMissATypo]}
        >{`You can easily customize which notifications you want to receive anytime in the apps settings. `}</Text>
        <View style={[styles.iconTextCard, styles.cardIconFlexBox]}>
          <View style={[styles.cardContent, styles.cardIconFlexBox]}>
            <Image
              style={styles.badgeDollarSignIcon}
              contentFit="cover"
              source={require("../assets/badgedollarsign.png")}
            />
            <Text style={styles.cardText}>
              Get the best available game day deals at your favorite bars /
              restaurants.
            </Text>
          </View>
        </View>
        <View style={[styles.iconTextCard1, styles.cardIconFlexBox]}>
          <View style={[styles.cardContent, styles.cardIconFlexBox]}>
            <Image
              style={styles.badgeDollarSignIcon}
              contentFit="cover"
              source={require("../assets/beer.png")}
            />
            <Text style={styles.cardText}>{`Find nearby bars and connect with 
fellow fans.`}</Text>
          </View>
        </View>
        <View style={[styles.iconTextCard2, styles.cardIconFlexBox]}>
          <View style={[styles.cardContent, styles.cardIconFlexBox]}>
            <Image
              style={styles.badgeDollarSignIcon}
              contentFit="cover"
              source={require("../assets/timer.png")}
            />
            <Text style={styles.cardText}>{`Know when and where your favorite 
games are playing.`}</Text>
          </View>
        </View>
        <Pressable
          style={[styles.buttonXlrg, styles.buttonLayout]}
          onPress={() => navigation.navigate("DashboardV5LIGHT2")}
        >
          <Text style={[styles.button, styles.buttonTypo]}>Skip</Text>
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
              source={require("../assets/wifi2.png")}
            />
          </View>
        </View>
        <Pressable
          style={[styles.buttonXlrg1, styles.buttonLayout]}
          onPress={openButtonXlrgContainer1}
        >
          <Text style={[styles.button1, styles.buttonTypo]}>
            Enable Push Notifications
          </Text>
        </Pressable>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={buttonXlrgContainer1Visible}
      >
        <View style={styles.buttonXlrgContainer1Overlay}>
          <Pressable
            style={styles.buttonXlrgContainer1Bg}
            onPress={closeButtonXlrgContainer1}
          />
          <PushNotificationAccessOverlay onClose={closeButtonXlrgContainer1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  breadcrumbStepsIconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  neverMissATypo: {
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.textPrimary,
    position: "absolute",
  },
  cardIconFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonLayout: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_13xl,
    height: 64,
    borderRadius: Border.br_5xs,
    flexDirection: "row",
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
  neverMissA: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 16,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    top: 0,
    left: 0,
  },
  neverMissAGameNoMatterWWrapper: {
    top: 36,
    width: 291,
    height: 16,
    left: 0,
    position: "absolute",
  },
  beatFomo: {
    marginLeft: -163.5,
    left: "50%",
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
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
  breadcrumbStepsIcon: {
    maxWidth: "100%",
    height: 0,
    alignSelf: "stretch",
    overflow: "hidden",
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
  youCanEasily: {
    top: 577,
    lineHeight: 21,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    width: 327,
    left: 24,
  },
  badgeDollarSignIcon: {
    height: 67,
    width: 67,
    overflow: "hidden",
  },
  cardText: {
    display: "flex",
    marginLeft: 16,
    alignSelf: "stretch",
    alignItems: "center",
    textAlign: "left",
    color: Color.textPrimary,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    flex: 1,
  },
  cardContent: {
    alignSelf: "stretch",
    flex: 1,
  },
  iconTextCard: {
    top: 462,
    width: 323,
    flexDirection: "row",
    padding: Padding.p_5xs,
    left: 24,
    position: "absolute",
    backgroundColor: Color.backgroundLight,
  },
  iconTextCard1: {
    top: 333,
    width: 323,
    flexDirection: "row",
    padding: Padding.p_5xs,
    left: 24,
    position: "absolute",
    backgroundColor: Color.backgroundLight,
  },
  iconTextCard2: {
    top: 204,
    width: 323,
    flexDirection: "row",
    padding: Padding.p_5xs,
    left: 24,
    position: "absolute",
    backgroundColor: Color.backgroundLight,
  },
  button: {
    color: Color.secondary,
    textAlign: "center",
  },
  buttonXlrg: {
    top: 715,
  },
  time: {
    marginTop: -9,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.sFBody,
    textAlign: "center",
    color: Color.textPrimary,
    top: "50%",
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
  buttonXlrgContainer1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  buttonXlrgContainer1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  button1: {
    color: Color.backgroundLight,
    textAlign: "center",
  },
  buttonXlrg1: {
    top: 651,
    backgroundColor: Color.primary,
  },
  accountSetupNotificationA: {
    height: 812,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.backgroundLight,
    width: "100%",
  },
});

export default AccountSetupNOTIFICATIONACCESSV5LIGHT;
