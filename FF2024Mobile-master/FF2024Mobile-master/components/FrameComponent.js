import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const FrameComponent = () => {
  return (
    <View style={styles.inputFlexBox}>
      <View style={[styles.inputFormFeild, styles.inputFlexBox]}>
        <Text style={styles.label} numberOfLines={1}>
          Search
        </Text>
      </View>
      <View style={styles.buttonMini}>
        <View style={styles.buttonMiniChild} />
        <Image
          style={styles.plusIcon}
          contentFit="cover"
          source={require("../assets/plus.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  label: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.outline,
    textAlign: "left",
    overflow: "hidden",
  },
  inputFormFeild: {
    backgroundColor: Color.backgroundLight,
    borderStyle: "solid",
    borderColor: Color.outline,
    borderWidth: 1,
    width: 279,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    height: 40,
    borderRadius: Border.br_5xs,
  },
  buttonMiniChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.primary,
    position: "absolute",
    borderRadius: Border.br_5xs,
  },
  plusIcon: {
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
    marginLeft: 8,
    height: 40,
  },
});

export default FrameComponent;
