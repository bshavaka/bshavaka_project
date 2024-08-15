import * as React from "react";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const InputField = () => {
  return (
    <View style={styles.inputField}>
      <Text style={styles.label} numberOfLines={1}>
        Password
      </Text>
      <Image
        style={styles.eyeOffIcon}
        contentFit="cover"
        source={require("../assets/eyeoff1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    flex: 1,
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.secondary,
    textAlign: "left",
    overflow: "hidden",
  },
  eyeOffIcon: {
    width: 24,
    height: 24,
    marginLeft: 16,
    overflow: "hidden",
  },
  inputField: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.backgroundLight,
    borderStyle: "solid",
    borderColor: Color.outline,
    borderWidth: 1,
    width: 327,
    height: 36,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
  },
});

export default InputField;
