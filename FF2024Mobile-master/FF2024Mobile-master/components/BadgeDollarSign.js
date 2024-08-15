import * as React from "react";

const BadgeDollarSign = () => {
  return (
    <Image
      style={styles.badgeDollarSignIcon}
      contentFit="cover"
      source={require("../assets/badgedollarsign1.png")}
    />
  );
};

const styles = StyleSheet.create({
  badgeDollarSignIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
});

export default BadgeDollarSign;
