import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const NAVExplore = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.navExplore}
      onPress={() => navigation.navigate("DashboardV5LIGHT2")}
    >
      <View style={styles.navExploreChild} />
      <View style={[styles.homeParent, styles.homeLayout]}>
        <Image
          style={[styles.homeIcon, styles.homeLayout]}
          contentFit="cover"
          source={require("../assets/home1.png")}
        />
        <Text style={styles.explore}>Explore</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  homeLayout: {
    height: "50%",
    position: "absolute",
  },
  navExploreChild: {
    height: "100%",
    width: "100%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.backgroundLight,
    top: "0%",
    position: "absolute",
  },
  homeIcon: {
    width: "55.81%",
    right: "23.26%",
    bottom: "50%",
    left: "20.93%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    top: "0%",
  },
  explore: {
    marginLeft: -21.5,
    top: "66.67%",
    left: "50%",
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.secondary,
    textAlign: "center",
    position: "absolute",
  },
  homeParent: {
    width: "66.15%",
    top: "25%",
    right: "16.92%",
    bottom: "25%",
    left: "16.92%",
  },
  navExplore: {
    width: 65,
    height: 96,
  },
});

export default NAVExplore;
