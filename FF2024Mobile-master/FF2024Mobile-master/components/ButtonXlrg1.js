import * as React from "react";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const ButtonXlrg1 = () => {
  return (
    <View style={styles.property1tertiary}>
      <Text style={styles.button}>Button</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.secondary,
    textAlign: "center",
  },
  property1tertiary: {
    borderRadius: Border.br_5xs,
    width: 327,
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
  },
});

export default ButtonXlrg1;
