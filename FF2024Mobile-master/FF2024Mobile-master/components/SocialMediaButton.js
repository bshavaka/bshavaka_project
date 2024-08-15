import * as React from "react";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const SocialMediaButton = () => {
  return (
    <View style={styles.property1google}>
      <View style={styles.label}>
        <Image
          style={styles.googleIcon}
          contentFit="cover"
          source={require("../assets/google1.png")}
        />
        <Text style={styles.google}>Google</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  googleIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  google: {
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
    marginLeft: -39,
    top: "50%",
    left: "50%",
    flexDirection: "row",
    alignItems: "center",
  },
  property1google: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.backgroundLight,
    borderStyle: "solid",
    borderColor: Color.outline,
    borderWidth: 1,
    width: 327,
    height: 40,
  },
});

export default SocialMediaButton;
