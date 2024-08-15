import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const NAVNews = ({ onNAVNewsPress }) => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.navNews} onPress={onNAVNewsPress}>
      <View style={[styles.navNewsChild, styles.newsPosition]} />
      <View style={[styles.newspaperParent, styles.newspaperLayout]}>
        <Image
          style={[styles.newspaperIcon, styles.newspaperLayout]}
          contentFit="cover"
          source={require("../assets/newspaper.png")}
        />
        <Text style={[styles.news, styles.newsPosition]}>News</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  newsPosition: {
    left: "0%",
    position: "absolute",
  },
  newspaperLayout: {
    height: "50%",
    position: "absolute",
  },
  navNewsChild: {
    height: "100%",
    width: "100%",
    right: "0%",
    bottom: "0%",
    backgroundColor: Color.backgroundLight,
    top: "0%",
  },
  newspaperIcon: {
    width: "75%",
    right: "9.38%",
    bottom: "50%",
    left: "15.63%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    top: "0%",
  },
  news: {
    top: "66.67%",
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.secondary,
    textAlign: "center",
  },
  newspaperParent: {
    width: "49.23%",
    top: "25%",
    right: "26.15%",
    bottom: "25%",
    left: "24.62%",
  },
  navNews: {
    width: 65,
    height: 96,
  },
});

export default NAVNews;
