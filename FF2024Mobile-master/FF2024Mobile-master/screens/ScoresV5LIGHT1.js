import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import NAVExplore from "../components/NAVExplore";
import NAVNews from "../components/NAVNews";
import FrameComponent from "../components/FrameComponent";
import TeamScore from "../components/TeamScore";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const ScoresV5LIGHT1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.scoresV5Light}>
      <View style={styles.navigationBar}>
        <NAVExplore />
        <Pressable
          style={styles.navSearch}
          onPress={() => navigation.navigate("ScheduleScreen")}
        >
          <View
            style={[styles.navSearchChild, styles.navSearchChildPosition]}
          />
          <View style={[styles.calendarDaysParent, styles.parentPosition]}>
            <Image
              style={[styles.calendarDaysIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/calendardays.png")}
            />
            <Text style={[styles.schedule, styles.profileTypo]}>Schedule</Text>
          </View>
        </Pressable>
        <NAVNews onNAVNewsPress={() => navigation.navigate("NewsV5LIGHT")} />
        <View style={styles.navSearch}>
          <View
            style={[styles.navSearchChild, styles.navSearchChildPosition]}
          />
          <View style={[styles.clipboardListParent, styles.parentPosition]}>
            <Image
              style={[styles.clipboardListIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/clipboardlist1.png")}
            />
            <Text style={[styles.scores, styles.textTypo1]}>Scores</Text>
          </View>
        </View>
        <Pressable
          style={styles.navMenu}
          onPress={() =>
            navigation.navigate("AccountProfileV5LIGHTFavoriteBars")
          }
        >
          <View
            style={[styles.navSearchChild, styles.navSearchChildPosition]}
          />
          <View style={styles.userRoundParent}>
            <Image
              style={[styles.userRoundIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/userround.png")}
            />
            <Text style={[styles.profile, styles.nflTypo1]}>Profile</Text>
          </View>
        </Pressable>
      </View>
      <View style={[styles.teamScoreCard, styles.teamPosition]}>
        <FrameComponent />
        <View style={styles.tabSwitcherGeneral}>
          <Image
            style={[styles.batteryLevelIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/battery-level1.png")}
          />
          <Text style={[styles.tab2, styles.nhlTypo]}>My Scores</Text>
          <Pressable
            style={styles.professioanl}
            onPress={() => navigation.navigate("ScoresV5LIGHT")}
          >
            <Text style={[styles.scores1, styles.mlbSpaceBlock]}>Scores</Text>
          </Pressable>
          <Image
            style={[styles.buttonActiveIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/button-active.png")}
          />
        </View>
        <View style={[styles.categoryFilter, styles.subHeaderFlexBox]}>
          <View style={styles.teamLayout}>
            <View style={[styles.itemCard, styles.itemCardPosition]} />
            <Text style={[styles.nfl, styles.nflFlexBox]}>NFL</Text>
          </View>
          <View style={[styles.teamInactiveSelection1, styles.teamLayout]}>
            <View style={[styles.itemCard1, styles.itemCardPosition]} />
            <Text style={[styles.nba, styles.nbaPosition]}>NBA</Text>
          </View>
          <View style={[styles.teamInactiveSelection1, styles.teamLayout]}>
            <View style={[styles.itemCard, styles.itemCardPosition]} />
            <Text style={[styles.ncaff, styles.nflFlexBox]}>NCAFF</Text>
          </View>
          <View style={[styles.teamInactiveSelection1, styles.teamLayout]}>
            <View style={[styles.itemCard, styles.itemCardPosition]} />
            <Text style={[styles.nhl, styles.nflFlexBox]}>NHL</Text>
          </View>
          <View style={[styles.teamInactiveSelection1, styles.teamLayout]}>
            <View style={[styles.itemCard, styles.itemCardPosition]} />
            <Text style={[styles.mlb, styles.nbaPosition]}>MLB</Text>
          </View>
        </View>
      </View>
      <View style={[styles.teamScoreParent, styles.teamPosition]}>
        <TeamScore
          nBAEasternAtlantic={require("../assets/nba-eastern-atlantic.png")}
          brooklynNets="Brooklyn Nets"
          prop="84"
          prop1="24"
          prop2="25"
          prop3="14"
          prop4="21"
        />
        <TeamScore
          propTop={89}
          propWidth={126}
          propWidth1={126}
          nBAEasternAtlantic={require("../assets/nba-eastern-atlantic1.png")}
          brooklynNets="Toronto Raptors"
          prop="122"
          propLeft={302}
          prop1="30"
          prop2="31"
          propLeft1={258}
          prop3="27"
          propLeft2={232}
          prop4="34"
          propLeft3={208}
        />
        <View style={[styles.subHeader, styles.subHeaderFlexBox]}>
          <Text style={[styles.team, styles.teamTypo]}>Team</Text>
          <View style={styles.tParent}>
            <Text style={[styles.t, styles.textTypo]}>T</Text>
            <Text style={[styles.text, styles.textTypo]}>4</Text>
            <Text style={[styles.text1, styles.textTypo]}>3</Text>
            <Text style={[styles.text2, styles.textTypo]}>2</Text>
            <Text style={[styles.text3, styles.textTypo]}>1</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.myScores, styles.teamTypo]}>My Scores</Text>
      <View style={styles.iphoneXBarsStatusDef}>
        <View style={[styles.action, styles.timePosition]}>
          <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        </View>
        <View style={[styles.container, styles.containerPosition]}>
          <Image
            style={[styles.batteryIcon, styles.containerPosition]}
            contentFit="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={styles.combinedShapeIcon}
            contentFit="cover"
            source={require("../assets/combined-shape.png")}
          />
          <Image
            style={styles.wiFiIcon}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navSearchChildPosition: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    height: "100%",
    width: "100%",
  },
  parentPosition: {
    height: 48,
    top: 24,
    position: "absolute",
  },
  iconLayout1: {
    height: 24,
    width: 24,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  profileTypo: {
    textAlign: "center",
    color: Color.secondary,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: "66.67%",
    left: "0%",
  },
  textTypo1: {
    fontFamily: FontFamily.poppinsSemiBold,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  nflTypo1: {
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  teamPosition: {
    left: 24,
    position: "absolute",
  },
  nhlTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
  },
  mlbSpaceBlock: {
    marginTop: -10,
    fontFamily: FontFamily.interRegular,
  },
  subHeaderFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  itemCardPosition: {
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  nflFlexBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  teamLayout: {
    height: 40,
    width: 99,
  },
  nbaPosition: {
    left: "32.32%",
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
  },
  teamTypo: {
    textAlign: "left",
    color: Color.textPrimary,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  textTypo: {
    color: Color.textPrimary,
    fontWeight: "600",
    textAlign: "center",
  },
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
  navSearchChild: {
    top: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    backgroundColor: Color.backgroundLight,
  },
  calendarDaysIcon: {
    left: 16,
  },
  schedule: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    position: "absolute",
  },
  calendarDaysParent: {
    left: 4,
    width: 57,
  },
  navSearch: {
    width: 66,
    height: 96,
  },
  clipboardListIcon: {
    left: 9,
  },
  scores: {
    color: Color.primary,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: "66.67%",
    left: "0%",
  },
  clipboardListParent: {
    left: 13,
    width: 41,
  },
  userRoundIcon: {
    width: "64.86%",
    right: "16.22%",
    bottom: "50%",
    left: "18.92%",
    height: "50%",
  },
  profile: {
    textAlign: "center",
    color: Color.secondary,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: "66.67%",
    left: "0%",
  },
  userRoundParent: {
    width: "56.92%",
    top: "25%",
    right: "21.54%",
    bottom: "25%",
    left: "21.54%",
    height: "50%",
    position: "absolute",
  },
  navMenu: {
    width: 65,
    height: 96,
  },
  navigationBar: {
    top: 716,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 96,
    width: 375,
    left: 0,
    position: "absolute",
    backgroundColor: Color.backgroundLight,
  },
  batteryLevelIcon: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    height: "100%",
    width: "100%",
  },
  tab2: {
    left: "65.44%",
    top: "50%",
    marginTop: -9,
    color: Color.primary,
  },
  scores1: {
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.primary,
  },
  professioanl: {
    left: "19.88%",
    top: "50%",
    position: "absolute",
  },
  buttonActiveIcon: {
    width: "55.5%",
    right: "-0.15%",
    left: "44.65%",
    bottom: "0%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  tabSwitcherGeneral: {
    height: 36,
    marginTop: 7,
    width: 327,
  },
  itemCard: {
    backgroundColor: Color.outline,
  },
  nfl: {
    width: "27.27%",
    left: "36.36%",
    color: Color.outlineWHITE,
    top: "14%",
    height: "66.75%",
    display: "flex",
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  itemCard1: {
    backgroundColor: Color.primary,
  },
  nba: {
    width: "35.35%",
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.backgroundLight,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: "14%",
    height: "66.75%",
  },
  teamInactiveSelection1: {
    marginLeft: 8,
  },
  ncaff: {
    width: "51.52%",
    left: "24.24%",
    color: Color.outlineWHITE,
    top: "14%",
    height: "66.75%",
    display: "flex",
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  nhl: {
    height: "52.75%",
    width: "33.33%",
    top: "22.25%",
    left: "33.33%",
    color: Color.outlineWHITE,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
  },
  mlb: {
    color: Color.outlineWHITE,
    marginTop: -10,
    fontFamily: FontFamily.interRegular,
    top: "50%",
  },
  categoryFilter: {
    alignSelf: "stretch",
    marginTop: 7,
  },
  teamScoreCard: {
    top: 68,
    width: 444,
  },
  team: {
    width: 85,
    height: 16,
    lineHeight: 17,
    fontSize: FontSize.size_xs,
  },
  t: {
    left: 93,
    width: 16,
    height: 16,
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsSemiBold,
    position: "absolute",
    top: 0,
  },
  text: {
    left: 70,
    width: 15,
    height: 16,
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsSemiBold,
    position: "absolute",
    top: 0,
  },
  text1: {
    left: 46,
    width: 15,
    height: 16,
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsSemiBold,
    position: "absolute",
    top: 0,
  },
  text2: {
    left: 23,
    width: 12,
    height: 16,
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsSemiBold,
    position: "absolute",
    top: 0,
  },
  text3: {
    width: 11,
    height: 16,
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsSemiBold,
    position: "absolute",
    top: 0,
    left: 0,
  },
  tParent: {
    width: 109,
    height: 16,
  },
  subHeader: {
    height: 32,
    justifyContent: "space-between",
    padding: Padding.p_5xs,
    width: 327,
    top: 0,
    left: 0,
    position: "absolute",
  },
  teamScoreParent: {
    top: 265,
    height: 145,
    width: 327,
  },
  myScores: {
    marginLeft: -163.5,
    top: 234,
    left: "50%",
    fontSize: FontSize.size_lg,
    lineHeight: 23,
    position: "absolute",
  },
  time: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.sFBody,
    color: Color.textPrimary,
    fontWeight: "600",
    textAlign: "center",
    marginTop: -9,
    left: 0,
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
    height: 11,
    width: 15,
  },
  container: {
    marginTop: -4.8,
    right: 15,
    width: 67,
  },
  iphoneXBarsStatusDef: {
    height: 44,
    top: 0,
    width: 375,
    left: 0,
    position: "absolute",
    backgroundColor: Color.backgroundLight,
  },
  scoresV5Light: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundLight,
  },
});

export default ScoresV5LIGHT1;
