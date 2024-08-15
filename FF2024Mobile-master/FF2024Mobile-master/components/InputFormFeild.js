import * as React from "react";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const InputFormFeild = () => {
  return (
    <View style={styles.property1default}>
      <Text style={styles.label} numberOfLines={1}>
        Input
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.outline,
    textAlign: "left",
    overflow: "hidden",
  },
  property1default: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.backgroundLight,
    borderStyle: "solid",
    borderColor: Color.outline,
    borderWidth: 1,
    width: 327,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
  },
});

export default InputFormFeild;
