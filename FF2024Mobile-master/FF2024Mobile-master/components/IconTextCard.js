import * as React from "react";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const IconTextCard = () => {
  return (
    <View style={styles.iconTextCard}>
      <View style={[styles.cardContent, styles.cardFlexBox]}>
        <Image
          style={styles.timerIcon}
          contentFit="cover"
          source={require("../assets/timer.png")}
        />
        <Text
          style={[styles.cardText, styles.cardFlexBox]}
        >{`Know when and where your favorite 
games are playing.`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardFlexBox: {
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
  },
  timerIcon: {
    width: 67,
    height: 67,
    overflow: "hidden",
  },
  cardText: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.textPrimary,
    textAlign: "left",
    display: "flex",
    marginLeft: 16,
  },
  cardContent: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  iconTextCard: {
    backgroundColor: Color.backgroundLight,
    width: 323,
    padding: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default IconTextCard;
