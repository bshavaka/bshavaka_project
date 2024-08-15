import * as React from "react";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const SocialMediaButton1 = () => {
  return (
    <View style={styles.property1apple}>
      <View style={styles.label}>
        <Image
          style={styles.icons}
          contentFit="cover"
          source={require("../assets/icons.png")}
        />
        <Text style={styles.apple}>Apple</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icons: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  apple: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.textPrimary,
    textAlign: "left",
    marginLeft: 8,
  },
  label: {
    position: "absolute",
    marginTop: -10,
    marginLeft: -34.5,
    top: "50%",
    left: "50%",
    flexDirection: "row",
    alignItems: "center",
  },
  property1apple: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.backgroundLight,
    borderStyle: "solid",
    borderColor: Color.outline,
    borderWidth: 1,
    width: 327,
    height: 40,
  },
});

export default SocialMediaButton1;
