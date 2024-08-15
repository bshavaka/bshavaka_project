import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TeamScore = ({
  propTop,
  propWidth,
  propWidth1,
  nBAEasternAtlantic,
  brooklynNets,
  prop,
  propLeft,
  prop1,
  prop2,
  propLeft1,
  prop3,
  propLeft2,
  prop4,
  propLeft3,
}) => {
  const teamScoreStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const groupView1Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth1),
    };
  }, [propWidth1]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  const text1Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft1),
    };
  }, [propLeft1]);

  const text2Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft2),
    };
  }, [propLeft2]);

  const text3Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft3),
    };
  }, [propLeft3]);

  return (
    <View style={[styles.teamScore, styles.teamLayout, teamScoreStyle]}>
      <View style={[styles.teamScoreChild, styles.nbaPosition]} />
      <View style={[styles.teamScoreInner, styles.nbaLayout, groupViewStyle]}>
        <View
          style={[
            styles.nbaEasternAtlanticParent,
            styles.nbaLayout,
            groupView1Style,
          ]}
        >
          <Image
            style={[styles.nbaEasternAtlantic, styles.nbaLayout]}
            contentFit="cover"
            source={nBAEasternAtlantic}
          />
          <Text style={styles.brooklynNets}>{brooklynNets}</Text>
        </View>
      </View>
      <Text style={[styles.text, styles.textTypo, textStyle]}>{prop}</Text>
      <Text style={[styles.text1, styles.textTypo]}>{prop1}</Text>
      <Text style={[styles.text2, styles.textTypo, text1Style]}>{prop2}</Text>
      <Text style={[styles.text3, styles.textTypo, text2Style]}>{prop3}</Text>
      <Text style={[styles.text4, styles.textTypo, text3Style]}>{prop4}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  teamLayout: {
    height: 56,
    width: 327,
    position: "absolute",
  },
  nbaPosition: {
    top: 0,
    left: 0,
  },
  nbaLayout: {
    height: 24,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    top: 20,
    color: Color.textPrimary,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  teamScoreChild: {
    backgroundColor: Color.backgroundLight,
    height: 56,
    width: 327,
    position: "absolute",
    top: 0,
  },
  nbaEasternAtlantic: {
    width: 24,
    overflow: "hidden",
    top: 0,
    left: 0,
  },
  brooklynNets: {
    marginTop: -9,
    top: "50%",
    left: 30,
    textAlign: "left",
    color: Color.textPrimary,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  nbaEasternAtlanticParent: {
    width: 111,
    height: 24,
    top: 0,
    left: 0,
  },
  teamScoreInner: {
    top: 16,
    left: 8,
    width: 111,
    height: 24,
  },
  text: {
    left: 303,
  },
  text1: {
    left: 280,
  },
  text2: {
    left: 256,
  },
  text3: {
    left: 233,
  },
  text4: {
    left: 210,
  },
  teamScore: {
    top: 33,
    left: 0,
    height: 56,
    width: 327,
    position: "absolute",
  },
});

export default TeamScore;
