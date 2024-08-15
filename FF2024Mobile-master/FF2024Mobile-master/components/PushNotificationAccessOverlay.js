import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Padding, FontSize } from "../GlobalStyles";

const PushNotificationAccessOverlay = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.pushNotificationAccessOve}>
      <View style={styles.content}>
        <Text style={[styles.title, styles.titleFlexBox]}>
          Allow “FanFindr” to send you push notifications
        </Text>
        <Text style={[styles.description, styles.titleFlexBox]}>
          Get customizable alerts sent to you about the games you want to see
          and deals at your favorite sports bars.
        </Text>
      </View>
      <View style={styles.separator} />
      <Pressable
        style={[styles.actionItem, styles.actionItemFlexBox]}
        onPress={() => navigation.navigate("DashboardV5LIGHT2")}
      >
        <Text style={[styles.action, styles.actionTypo]}>Allow</Text>
      </Pressable>
      <View style={styles.separator} />
      <Pressable
        style={[styles.actionItem1, styles.actionItemFlexBox]}
        onPress={() => navigation.navigate("DashboardV5LIGHT2")}
      >
        <Text style={styles.actionTypo}>Don’t Allow</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    textAlign: "center",
    color: Color.textPrimary,
    fontFamily: FontFamily.sFBody,
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  actionItemFlexBox: {
    paddingVertical: Padding.p_2xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  actionTypo: {
    color: Color.tintsBlueLight,
    textAlign: "center",
    fontFamily: FontFamily.sFBody,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.sFBody_size,
  },
  title: {
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.sFBody_size,
    textAlign: "center",
    color: Color.textPrimary,
    fontFamily: FontFamily.sFBody,
    letterSpacing: 0,
  },
  description: {
    fontSize: FontSize.sFFootnoteSemibold_size,
    lineHeight: 18,
    marginTop: 2,
    textAlign: "center",
    color: Color.textPrimary,
    fontFamily: FontFamily.sFBody,
    letterSpacing: 0,
  },
  content: {
    overflow: "hidden",
    padding: Padding.p_base,
    alignItems: "center",
    alignSelf: "stretch",
  },
  separator: {
    backgroundColor: Color.separatorColorLightWithTransparency,
    height: 1,
    alignSelf: "stretch",
  },
  action: {
    fontWeight: "600",
  },
  actionItem: {
    paddingHorizontal: 41,
  },
  actionItem1: {
    paddingHorizontal: 43,
  },
  pushNotificationAccessOve: {
    borderRadius: 14,
    backgroundColor: Color.backgroundLight,
    width: 270,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default PushNotificationAccessOverlay;
