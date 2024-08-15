import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const LocationAccessOverlay1 = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.locationAccessOverlay}>
      <View style={styles.locationAccessOverlayInner}>
        <View style={styles.titleParent}>
          <Text
            style={[styles.title, styles.titleTypo]}
          >{`Allow “FanFindr” to use 
your location?`}</Text>
          <Text style={[styles.description, styles.titleTypo]}>
            Your precise location is used to show your position on the map, get
            directions, estimate travel times and improve search results
          </Text>
        </View>
      </View>
      <View style={styles.mapLayout}>
        <Image
          style={[styles.mapIcon, styles.mapLayout]}
          contentFit="cover"
          source={require("../assets/map.png")}
        />
        <View style={styles.preciseSwitcherOnLight}>
          <Image
            style={styles.preciseSwitcherOnLightChild}
            contentFit="cover"
            source={require("../assets/vector-1.png")}
          />
          <Text style={[styles.preciseOn, styles.preciseOnClr]}>
            Precise: On
          </Text>
        </View>
        <Image
          style={styles.precisePinIcon}
          contentFit="cover"
          source={require("../assets/precise-pin.png")}
        />
      </View>
      <View style={styles.titleParent}>
        <View style={styles.topBorder} />
        <Pressable
          style={styles.option}
          onPress={() =>
            navigation.navigate("AccountSetupNOTIFICATIONACCESSV5LIGHT")
          }
        >
          <Text style={[styles.allowOnce, styles.preciseOnClr]}>
            Allow Once
          </Text>
        </Pressable>
        <View style={styles.topBorder} />
        <Pressable
          style={styles.option}
          onPress={() =>
            navigation.navigate("AccountSetupNOTIFICATIONACCESSV5LIGHT")
          }
        >
          <Text style={[styles.allowOnce, styles.preciseOnClr]}>
            Allow While Using the App
          </Text>
        </Pressable>
        <View style={styles.topBorder} />
        <Pressable
          style={styles.option}
          onPress={() =>
            navigation.navigate("AccountSetupNOTIFICATIONACCESSV5LIGHT")
          }
        >
          <Text style={[styles.allowOnce, styles.preciseOnClr]}>
            Don’t Allow
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleTypo: {
    width: 238,
    color: Color.textPrimary,
    fontFamily: FontFamily.sFBody,
    letterSpacing: 0,
    textAlign: "center",
  },
  mapLayout: {
    height: 174,
    width: 270,
  },
  preciseOnClr: {
    color: Color.tintsBlueLight,
    fontFamily: FontFamily.sFBody,
    letterSpacing: 0,
  },
  title: {
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.sFBody_size,
    width: 238,
    color: Color.textPrimary,
    fontFamily: FontFamily.sFBody,
    letterSpacing: 0,
  },
  description: {
    lineHeight: 16,
    marginTop: 2,
    fontSize: FontSize.sFFootnoteSemibold_size,
    width: 238,
    color: Color.textPrimary,
    fontFamily: FontFamily.sFBody,
    letterSpacing: 0,
  },
  titleParent: {
    alignItems: "center",
  },
  locationAccessOverlayInner: {
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    padding: Padding.p_base,
    overflow: "hidden",
  },
  mapIcon: {
    top: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  preciseSwitcherOnLightChild: {
    width: 10,
    height: 9,
  },
  preciseOn: {
    lineHeight: 18,
    textAlign: "left",
    display: "flex",
    width: 73,
    height: 17,
    marginLeft: 5,
    fontSize: FontSize.sFFootnoteSemibold_size,
    fontWeight: "600",
    alignItems: "center",
  },
  preciseSwitcherOnLight: {
    top: 8,
    left: 8,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    borderRadius: 1000,
    flexDirection: "row",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 3,
    position: "absolute",
    alignItems: "center",
    backgroundColor: Color.backgroundLight,
  },
  precisePinIcon: {
    bottom: 109,
    left: 142,
    width: 12,
    height: 12,
    position: "absolute",
  },
  topBorder: {
    backgroundColor: Color.colorDarkslategray_100,
    height: 1,
    width: 270,
  },
  allowOnce: {
    textAlign: "center",
    color: Color.tintsBlueLight,
    lineHeight: 22,
    fontSize: FontSize.sFBody_size,
  },
  option: {
    alignSelf: "stretch",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
  },
  locationAccessOverlay: {
    borderRadius: Border.br_base,
    maxWidth: "100%",
    maxHeight: "100%",
    backgroundColor: Color.backgroundLight,
  },
});

export default LocationAccessOverlay1;
