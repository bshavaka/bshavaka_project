import * as React from "react";

const Beer = () => {
  return (
    <Image
      style={styles.beerIcon}
      contentFit="cover"
      source={require("../assets/beer1.png")}
    />
  );
};

const styles = StyleSheet.create({
  beerIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
});

export default Beer;
