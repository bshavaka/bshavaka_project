import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontFamily, FontSize, Border } from "../GlobalStyles";

const MenuV5LIGHT = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menuV5Light}>
      <Text style={[styles.account, styles.andFlexBox]}>Account</Text>
      <Pressable
        style={[styles.listIconText, styles.listIconPosition]}
        onPress={() => navigation.navigate("MenuV5ManageAccount")}
      >
        <View style={[styles.cardContent, styles.cardContentFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/userround2.png")}
          />
          <View style={styles.labelWrapper}>
            <Text
              style={[styles.label, styles.timePosition1]}
              numberOfLines={1}
            >
              Manage Account
            </Text>
          </View>
          <Image
            style={[styles.chevronLeftIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chevronleft1.png")}
          />
        </View>
      </Pressable>
      <View style={[styles.listIconText1, styles.listIconPosition]}>
        <View style={[styles.cardContent, styles.cardContentFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/lock.png")}
          />
          <View style={styles.labelWrapper}>
            <Text
              style={[styles.label, styles.timePosition1]}
              numberOfLines={1}
            >
              Privacy and Security
            </Text>
          </View>
          <Image
            style={[styles.chevronLeftIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chevronleft1.png")}
          />
        </View>
      </View>
      <View style={[styles.listIconText2, styles.listIconPosition]}>
        <View style={[styles.cardContent, styles.cardContentFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/shield.png")}
          />
          <View style={styles.labelWrapper}>
            <Text
              style={[styles.label, styles.timePosition1]}
              numberOfLines={1}
            >
              2FA and Login
            </Text>
          </View>
          <Image
            style={[styles.chevronLeftIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chevronleft1.png")}
          />
        </View>
      </View>
      <Text style={[styles.contentAndActivity, styles.andFlexBox]}>
        Content and Activity
      </Text>
      <View style={[styles.listIconText3, styles.listIconPosition]}>
        <View style={[styles.cardContent, styles.cardContentFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/bell.png")}
          />
          <View style={styles.labelWrapper}>
            <Text
              style={[styles.label, styles.timePosition1]}
              numberOfLines={1}
            >
              Push Notifications
            </Text>
          </View>
          <Image
            style={[styles.chevronLeftIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chevronleft1.png")}
          />
        </View>
      </View>
      <Text style={[styles.helpAndSupport, styles.andFlexBox]}>
        Help and Support
      </Text>
      <View style={[styles.generalInputIcon, styles.listIconPosition]}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/alertcircle.png")}
        />
        <View style={styles.labelWrapper}>
          <Text style={[styles.label, styles.timePosition1]} numberOfLines={1}>
            Report Issues
          </Text>
        </View>
        <Image
          style={[styles.chevronLeftIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/chevronleft1.png")}
        />
      </View>
      <View style={[styles.listIconText4, styles.listIconPosition]}>
        <View style={[styles.cardContent, styles.cardContentFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/mappin2.png")}
          />
          <View style={styles.labelWrapper}>
            <Text
              style={[styles.label, styles.timePosition1]}
              numberOfLines={1}
            >
              Location Access
            </Text>
          </View>
          <Image
            style={[styles.chevronLeftIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chevronleft1.png")}
          />
        </View>
      </View>
      <View style={[styles.listIconText5, styles.listIconPosition]}>
        <View style={[styles.cardContent, styles.cardContentFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/languages.png")}
          />
          <View style={styles.labelWrapper}>
            <Text
              style={[styles.label, styles.timePosition1]}
              numberOfLines={1}
            >
              App Language
            </Text>
          </View>
          <Image
            style={[styles.chevronLeftIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chevronleft1.png")}
          />
        </View>
      </View>
      <View style={[styles.listIconText6, styles.listIconPosition]}>
        <View style={[styles.cardContent, styles.cardContentFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/video.png")}
          />
          <View style={styles.labelWrapper}>
            <Text
              style={[styles.label, styles.timePosition1]}
              numberOfLines={1}
            >
              Content Preferences
            </Text>
          </View>
          <Image
            style={[styles.chevronLeftIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chevronleft1.png")}
          />
        </View>
      </View>
      <View style={[styles.listIconText7, styles.listIconPosition]}>
        <View style={[styles.cardContent, styles.cardContentFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/moon.png")}
          />
          <View style={styles.labelWrapper}>
            <Text
              style={[styles.label, styles.timePosition1]}
              numberOfLines={1}
            >
              Appearance
            </Text>
          </View>
          <Image
            style={[styles.chevronLeftIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chevronleft1.png")}
          />
        </View>
      </View>
      <View style={[styles.listIconText8, styles.listIconPosition]}>
        <View style={[styles.cardContent, styles.cardContentFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/personstanding.png")}
          />
          <View style={styles.labelWrapper}>
            <Text
              style={[styles.label, styles.timePosition1]}
              numberOfLines={1}
            >
              Accessibility Options
            </Text>
          </View>
          <Image
            style={[styles.chevronLeftIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chevronleft1.png")}
          />
        </View>
      </View>
      <View style={[styles.pageHeaderIcon, styles.pageHeaderIconLayout]}>
        <View style={styles.shadow} />
        <View style={[styles.cardContent9, styles.cardContent9Position]}>
          <View style={[styles.cardText, styles.cardContentFlexBox]}>
            <Pressable
              style={styles.buttonMini}
              onPress={() => navigation.navigate("DashboardV5LIGHT2")}
            >
              <View
                style={[styles.buttonMiniChild, styles.cardContent9Position]}
              />
              <Image
                style={styles.chevronLeftIcon10}
                contentFit="cover"
                source={require("../assets/chevronleft.png")}
              />
            </Pressable>
            <View style={styles.header}>
              <Text style={[styles.settings, styles.settingsPosition]}>
                Settings
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.iphoneXBarsStatusDef, styles.settingsPosition]}>
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
            source={require("../assets/wifi.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  andFlexBox: {
    textAlign: "left",
    color: Color.textPrimary,
    left: "50%",
  },
  listIconPosition: {
    paddingBottom: Padding.p_5xs,
    paddingRight: Padding.p_base,
    paddingTop: Padding.p_5xs,
    width: 327,
    left: 24,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.backgroundLight,
  },
  cardContentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  timePosition1: {
    left: 0,
    color: Color.textPrimary,
  },
  iconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  pageHeaderIconLayout: {
    width: 375,
    left: 0,
  },
  cardContent9Position: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  settingsPosition: {
    top: 0,
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
  account: {
    top: 168,
    fontFamily: FontFamily.poppinsSemiBold,
    lineHeight: 23,
    fontSize: FontSize.size_lg,
    marginLeft: -163.5,
    color: Color.textPrimary,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  label: {
    marginTop: -11,
    fontSize: FontSize.size_base,
    lineHeight: 22,
    fontFamily: FontFamily.poppinsRegular,
    top: "50%",
    left: 0,
    width: 231,
    textAlign: "left",
    position: "absolute",
    overflow: "hidden",
  },
  labelWrapper: {
    height: 22,
    marginLeft: 16,
    width: 231,
  },
  chevronLeftIcon: {
    marginLeft: 16,
  },
  cardContent: {
    alignSelf: "stretch",
    width: 311,
  },
  listIconText: {
    top: 215,
  },
  listIconText1: {
    top: 263,
  },
  listIconText2: {
    top: 311,
  },
  contentAndActivity: {
    top: 387,
    fontFamily: FontFamily.poppinsSemiBold,
    lineHeight: 23,
    fontSize: FontSize.size_lg,
    marginLeft: -163.5,
    color: Color.textPrimary,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  listIconText3: {
    top: 434,
  },
  helpAndSupport: {
    top: 770,
    fontFamily: FontFamily.poppinsSemiBold,
    lineHeight: 23,
    fontSize: FontSize.size_lg,
    marginLeft: -163.5,
    color: Color.textPrimary,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  generalInputIcon: {
    top: 869,
    height: 36,
    borderRadius: Border.br_5xs,
  },
  listIconText4: {
    top: 482,
  },
  listIconText5: {
    top: 530,
  },
  listIconText6: {
    top: 578,
  },
  listIconText7: {
    top: 626,
  },
  listIconText8: {
    top: 674,
  },
  shadow: {
    height: "97.73%",
    width: "99.47%",
    top: "1.14%",
    right: "0.27%",
    bottom: "1.14%",
    left: "0.27%",
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  buttonMiniChild: {
    backgroundColor: Color.primary,
    borderRadius: Border.br_5xs,
  },
  chevronLeftIcon10: {
    height: "60%",
    width: "60%",
    top: "20%",
    right: "20%",
    bottom: "20%",
    left: "20%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  buttonMini: {
    width: 40,
    height: 40,
  },
  settings: {
    marginLeft: -131.5,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    width: 263,
    textAlign: "left",
    color: Color.textPrimary,
    left: "50%",
    top: 0,
  },
  header: {
    marginLeft: 24,
    width: 263,
    height: 36,
  },
  cardText: {
    flex: 1,
    flexDirection: "row",
  },
  cardContent9: {
    padding: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.backgroundLight,
  },
  pageHeaderIcon: {
    top: 44,
    height: 88,
    position: "absolute",
  },
  time: {
    marginTop: -9,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.sFBody,
    textAlign: "center",
    left: 0,
    color: Color.textPrimary,
    fontWeight: "600",
    width: 54,
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
    height: 44,
    width: 375,
    left: 0,
    backgroundColor: Color.backgroundLight,
  },
  menuV5Light: {
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.backgroundLight,
  },
});

export default MenuV5LIGHT;
