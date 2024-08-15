import * as React from "react";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const PasswordInput = () => {
  return (
    <View style={styles.passwordInput}>
      <View style={[styles.inputField, styles.inputFieldPosition]}>
        <Text style={[styles.label, styles.labelTypo]} numberOfLines={1}>
          Password
        </Text>
        <Image
          style={styles.eyeOffIcon}
          contentFit="cover"
          source={require("../assets/eyeoff1.png")}
        />
      </View>
      <Text style={[styles.yourPasswordMust, styles.labelTypo]}>
        Your password must be at least 8 characters long and include at least
        one uppercase letter, one lowercase letter, one number, and one special
        character.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputFieldPosition: {
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  labelTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
  },
  label: {
    flex: 1,
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    color: Color.secondary,
    overflow: "hidden",
  },
  eyeOffIcon: {
    width: 24,
    height: 24,
    marginLeft: 16,
    overflow: "hidden",
  },
  inputField: {
    height: "35.29%",
    top: "0%",
    right: "0%",
    bottom: "64.71%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.backgroundLight,
    borderStyle: "solid",
    borderColor: Color.outline,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
  },
  yourPasswordMust: {
    top: "47.06%",
    fontSize: FontSize.size_xs,
    color: Color.backgroundLight,
    opacity: 0.5,
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  passwordInput: {
    width: 327,
    height: 102,
  },
});

export default PasswordInput;
