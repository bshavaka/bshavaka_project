import * as React from "react";
import { Color, Padding } from "../GlobalStyles";

const BreadcrumbTrail = () => {
  return (
    <View style={styles.property1trailStep01}>
      <Image
        style={styles.breadcrumbStepsIcon}
        contentFit="cover"
        source={require("../assets/breadcrumbsteps.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  breadcrumbStepsIcon: {
    alignSelf: "stretch",
    maxWidth: "100%",
    overflow: "hidden",
    height: 0,
    width: "100%",
  },
  property1trailStep01: {
    backgroundColor: Color.backgroundLight,
    width: 327,
    height: 41,
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_5xs,
  },
});

export default BreadcrumbTrail;
