import * as React from "react";
import { Color, Padding } from "../GlobalStyles";

const BreadcrumbTrail2 = () => {
  return (
    <View style={styles.property1trailStep05}>
      <Image
        style={styles.breadcrumbStepsIcon}
        contentFit="cover"
        source={require("../assets/breadcrumbsteps1.png")}
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
  property1trailStep05: {
    backgroundColor: Color.backgroundLight,
    width: 327,
    height: 41,
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_5xs,
  },
});

export default BreadcrumbTrail2;
