import * as React from "react";

const Timer = () => {
  return (
    <Image
      style={styles.timerIcon}
      contentFit="cover"
      source={require("../assets/timer1.png")}
    />
  );
};

const styles = StyleSheet.create({
  timerIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
});

export default Timer;
