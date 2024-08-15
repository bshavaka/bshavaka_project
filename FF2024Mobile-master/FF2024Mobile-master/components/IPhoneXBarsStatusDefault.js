import * as React from "react";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const IPhoneXBarsStatusDefault = () => {
  return (
    <View style={styles.iphoneXBarsStatusDef}>
      <View style={[styles.action, styles.timePosition]}>
        <Text style={[styles.time, styles.timePosition]}>9:41</Text>
      </View>
      <View style={[styles.container, styles.containerPosition]}>
        <Image
          style={[styles.batteryIcon, styles.containerPosition]}
          contentFit="cover"
          source={require("../assets/battery2.png")}
        />
        <Image
          style={styles.combinedShapeIcon}
          contentFit="cover"
          source={require("../assets/combined-shape.png")}
        />
        <Image
          style={styles.wiFiIcon}
          contentFit="cover"
          source={require("../assets/wifi4.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timePosition: {
    width: 54,
    top: "50%",
    position: "absolute",
  },
  containerPosition: {
    height: 12,
    top: "50%",
    position: "absolute",
  },
  time: {
    marginTop: -9,
    left: 0,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.sFBody,
    color: Color.textPrimary,
    textAlign: "center",
  },
  action: {
    marginTop: -8,
    left: 20,
    height: 18,
  },
  batteryIcon: {
    marginTop: -5.75,
    right: 0,
    width: 25,
  },
  combinedShapeIcon: {
    width: 17,
    height: 11,
  },
  wiFiIcon: {
    width: 15,
    height: 11,
  },
  container: {
    marginTop: -4.8,
    right: 15,
    width: 67,
  },
  iphoneXBarsStatusDef: {
    width: 375,
    height: 44,
  },
});

export default IPhoneXBarsStatusDefault;
