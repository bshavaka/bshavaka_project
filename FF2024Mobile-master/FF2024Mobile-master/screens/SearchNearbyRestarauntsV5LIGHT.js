import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SearchNearbyRestarauntsV5LIGHT = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchNearbyRestarauntsV5}>
      <Image
        style={[
          styles.searchNearbyRestarauntsV5Child,
          styles.iphoneXBarsStatusDefPosition,
        ]}
        contentFit="cover"
        source={require("../assets/rectangle-24707.png")}
      />
      <View style={styles.pageHeaderSml}>
        <View style={styles.cardContent}>
          <View style={[styles.inputFormFeild, styles.buttonSmlFlexBox]}>
            <Text style={styles.label} numberOfLines={1}>
              Search
            </Text>
          </View>
          <View style={styles.cardInputs}>
            <Pressable
              style={[styles.buttonSml, styles.buttonBg]}
              onPress={() =>
                navigation.navigate("SearchNearbyRestarauntsRESULTV5LIGHT")
              }
            >
              <Text style={styles.button}>Lets Go!</Text>
            </Pressable>
            <View style={styles.buttonMini}>
              <View style={[styles.buttonMiniChild, styles.buttonBg]} />
              <Image
                style={styles.settings2Icon}
                contentFit="cover"
                source={require("../assets/settings2.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.iphoneXBarsStatusDef,
          styles.iphoneXBarsStatusDefPosition,
        ]}
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
            source={require("../assets/wifi.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iphoneXBarsStatusDefPosition: {
    width: 375,
    top: 0,
    left: 0,
    position: "absolute",
  },
  buttonSmlFlexBox: {
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  buttonBg: {
    backgroundColor: Color.primary,
    borderRadius: Border.br_5xs,
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
  searchNearbyRestarauntsV5Child: {
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    height: 812,
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
    borderStyle: "solid",
    borderColor: Color.outline,
    borderWidth: 1,
    height: 36,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_5xs,
    paddingVertical: Padding.p_5xs,
    alignSelf: "stretch",
    backgroundColor: Color.backgroundLight,
  },
  button: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.backgroundLight,
    textAlign: "center",
  },
  buttonSml: {
    width: 267,
    justifyContent: "center",
    paddingHorizontal: Padding.p_13xl,
    height: 40,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  buttonMiniChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  settings2Icon: {
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
    marginLeft: 20,
    height: 40,
  },
  cardInputs: {
    marginTop: 16,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  cardContent: {
    flex: 1,
  },
  pageHeaderSml: {
    top: 44,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    borderBottomRightRadius: Border.br_base,
    borderBottomLeftRadius: Border.br_base,
    padding: Padding.p_5xl,
    alignItems: "center",
    flexDirection: "row",
    width: 375,
    left: 0,
    position: "absolute",
    backgroundColor: Color.backgroundLight,
  },
  time: {
    marginTop: -9,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.sFBody,
    color: Color.textPrimary,
    textAlign: "center",
    left: 0,
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
    height: 44,
    backgroundColor: Color.backgroundLight,
  },
  searchNearbyRestarauntsV5: {
    overflow: "hidden",
    height: 812,
    width: "100%",
    flex: 1,
    backgroundColor: Color.backgroundLight,
  },
});

export default SearchNearbyRestarauntsV5LIGHT;
