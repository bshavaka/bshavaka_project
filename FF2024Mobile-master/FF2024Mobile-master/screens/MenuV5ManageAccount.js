import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const MenuV5ManageAccount = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menuV5ManageAccount}>
      <Text style={[styles.personalInformation, styles.otherSettingsTypo]}>
        Personal Information
      </Text>
      <Text style={[styles.otherSettings, styles.otherSettingsTypo]}>
        Other Settings
      </Text>
      <View style={[styles.labelParent, styles.labelParentPosition]}>
        <Text style={styles.labelTypo} numberOfLines={1}>
          Full Name
        </Text>
        <Text style={[styles.label1, styles.labelClr]} numberOfLines={1}>
          Jane Hoffman
        </Text>
      </View>
      <Text style={[styles.label2, styles.labelTypo]} numberOfLines={1}>
        Change Password
      </Text>
      <View style={[styles.labelGroup, styles.labelParentPosition]}>
        <Text style={styles.labelTypo} numberOfLines={1}>
          Username
        </Text>
        <Text style={[styles.label1, styles.labelClr]} numberOfLines={1}>
          janeHof34
        </Text>
      </View>
      <View style={[styles.labelContainer, styles.labelParentPosition]}>
        <Text style={styles.labelTypo} numberOfLines={1}>
          Email
        </Text>
        <Text style={[styles.label1, styles.labelClr]} numberOfLines={1}>
          janeHof34@gmail.com
        </Text>
      </View>
      <View style={[styles.frameView, styles.labelParentPosition]}>
        <Text style={styles.labelTypo} numberOfLines={1}>
          DOB
        </Text>
        <Text style={[styles.label1, styles.labelClr]} numberOfLines={1}>
          August 14, 2000
        </Text>
      </View>
      <View style={[styles.labelParent1, styles.labelParentPosition]}>
        <Text style={styles.labelTypo} numberOfLines={1}>
          Phone
        </Text>
        <Text style={[styles.label1, styles.labelClr]} numberOfLines={1}>
          +1 (504)-123-4567
        </Text>
      </View>
      <View style={[styles.labelParent2, styles.labelParentPosition]}>
        <Text style={styles.labelTypo} numberOfLines={1}>
          Location
        </Text>
        <Text style={[styles.label1, styles.labelClr]} numberOfLines={1}>
          Boulder, CO
        </Text>
      </View>
      <View style={[styles.inputField, styles.inputLayout]}>
        <Text style={[styles.label13, styles.labelClr]} numberOfLines={1}>
          New Password
        </Text>
      </View>
      <View style={[styles.inputField1, styles.inputLayout]}>
        <Text style={[styles.label13, styles.labelClr]} numberOfLines={1}>
          Old Password
        </Text>
      </View>
      <View style={styles.itemCardParent}>
        <View style={[styles.itemCard, styles.itemCardBg]} />
        <Text style={styles.submit}>Submit</Text>
      </View>
      <View style={[styles.iphoneXBarsStatusDef, styles.groupChildPosition]}>
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
      <View style={[styles.rectangleParent, styles.groupItemLayout]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <View style={[styles.groupItem, styles.groupItemLayout]} />
      </View>
      <View style={styles.headerParent}>
        <View style={[styles.header, styles.headerPosition]}>
          <Text style={[styles.manageAccount, styles.headerPosition]}>
            Manage Account
          </Text>
        </View>
        <Pressable
          style={styles.backPosition}
          onPress={() => navigation.navigate("MenuV5LIGHT")}
        >
          <View style={[styles.backButtonChild, styles.backPosition]} />
          <Image
            style={styles.chevronLeftIcon}
            contentFit="cover"
            source={require("../assets/chevronleft.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  otherSettingsTypo: {
    color: Color.textPrimary,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 23,
    fontSize: FontSize.size_lg,
    left: "50%",
    marginLeft: -163.5,
    textAlign: "left",
    position: "absolute",
  },
  labelParentPosition: {
    paddingBottom: Padding.p_5xs,
    paddingRight: Padding.p_base,
    paddingTop: Padding.p_5xs,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 327,
    left: 24,
    position: "absolute",
  },
  labelClr: {
    color: Color.secondary,
    fontFamily: FontFamily.poppinsRegular,
    overflow: "hidden",
  },
  labelTypo: {
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 22,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.textPrimary,
    overflow: "hidden",
  },
  inputLayout: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    borderWidth: 1,
    borderColor: Color.outline,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    height: 36,
    alignItems: "center",
    flexDirection: "row",
    width: 327,
    left: 24,
    position: "absolute",
    backgroundColor: Color.backgroundLight,
  },
  itemCardBg: {
    backgroundColor: Color.primary,
    borderRadius: Border.br_5xs,
  },
  groupChildPosition: {
    width: 375,
    left: 0,
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
  groupItemLayout: {
    height: 89,
    width: 375,
    left: 0,
    position: "absolute",
  },
  headerPosition: {
    width: 263,
    left: "50%",
    position: "absolute",
  },
  backPosition: {
    width: 40,
    height: 40,
    left: 0,
    top: 0,
    position: "absolute",
  },
  personalInformation: {
    top: 168,
    textAlign: "left",
  },
  otherSettings: {
    top: 559,
    textAlign: "left",
  },
  label1: {
    textAlign: "right",
    lineHeight: 22,
    fontSize: FontSize.size_base,
    color: Color.secondary,
  },
  labelParent: {
    top: 215,
  },
  label2: {
    top: 606,
    left: 24,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  labelGroup: {
    top: 269,
  },
  labelContainer: {
    top: 377,
  },
  frameView: {
    top: 323,
  },
  labelParent1: {
    top: 431,
  },
  labelParent2: {
    top: 485,
  },
  label13: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    textAlign: "left",
    flex: 1,
  },
  inputField: {
    top: 636,
  },
  inputField1: {
    top: 680,
  },
  itemCard: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  submit: {
    height: "48.25%",
    marginLeft: -48.5,
    top: "26%",
    fontFamily: FontFamily.interBold,
    color: Color.backgroundLight,
    display: "flex",
    justifyContent: "center",
    width: 96,
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_base,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  itemCardParent: {
    height: "4.93%",
    width: "87.2%",
    top: "89.16%",
    right: "6.4%",
    bottom: "5.91%",
    left: "6.4%",
    position: "absolute",
  },
  time: {
    marginTop: -9,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.sFBody,
    left: 0,
    top: "50%",
    textAlign: "center",
    color: Color.textPrimary,
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
    height: 44,
    top: 0,
    backgroundColor: Color.backgroundLight,
  },
  groupChild: {
    top: 1,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    backgroundColor: Color.colorGainsboro,
    height: 80,
  },
  groupItem: {
    top: 0,
    backgroundColor: Color.backgroundLight,
  },
  rectangleParent: {
    top: 43,
  },
  manageAccount: {
    marginLeft: -131.5,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsBold,
    top: 0,
    fontWeight: "700",
    width: 263,
    textAlign: "left",
    color: Color.textPrimary,
  },
  header: {
    marginLeft: -99.5,
    top: 2,
    width: 263,
    height: 36,
  },
  backButtonChild: {
    backgroundColor: Color.primary,
    borderRadius: Border.br_5xs,
  },
  chevronLeftIcon: {
    top: 8,
    left: 8,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  headerParent: {
    top: 68,
    height: 40,
    width: 327,
    left: "50%",
    marginLeft: -163.5,
    position: "absolute",
  },
  menuV5ManageAccount: {
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.backgroundLight,
  },
});

export default MenuV5ManageAccount;
