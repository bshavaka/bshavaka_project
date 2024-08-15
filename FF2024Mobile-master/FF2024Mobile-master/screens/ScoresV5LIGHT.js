import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import NAVExplore from "../components/NAVExplore";
import NAVNews from "../components/NAVNews";
import FrameComponent from "../components/FrameComponent";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const ScoresV5LIGHT = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.scoresV5Light}>
      <View style={[styles.navigationBar, styles.buttonSmlFlexBox]}>
        <NAVExplore />
        <Pressable
          style={styles.navSearch}
          onPress={() => navigation.navigate("ScheduleScreen")}
        >
          <View style={[styles.navSearchChild, styles.cardItemPosition]} />
          <View style={[styles.calendarDaysParent, styles.parentPosition1]}>
            <Image
              style={[styles.calendarDaysIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/calendardays.png")}
            />
            <Text style={[styles.schedule, styles.profilePosition]}>
              Schedule
            </Text>
          </View>
        </Pressable>
        <NAVNews onNAVNewsPress={() => navigation.navigate("NewsV5LIGHT")} />
        <View style={styles.navSearch}>
          <View style={[styles.navSearchChild, styles.cardItemPosition]} />
          <View style={[styles.clipboardListParent, styles.parentPosition1]}>
            <Image
              style={[styles.clipboardListIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/clipboardlist1.png")}
            />
            <Text style={styles.scores}>Scores</Text>
          </View>
        </View>
        <Pressable
          style={styles.navMenu}
          onPress={() =>
            navigation.navigate("AccountProfileV5LIGHTFavoriteBars")
          }
        >
          <View style={[styles.navSearchChild, styles.cardItemPosition]} />
          <View style={[styles.userRoundParent, styles.userLayout]}>
            <Image
              style={[styles.userRoundIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/userround.png")}
            />
            <Text style={[styles.profile, styles.profilePosition]}>
              Profile
            </Text>
          </View>
        </Pressable>
      </View>
      <View style={[styles.frameParent, styles.parentPosition]}>
        <FrameComponent />
        <View style={styles.tabSwitcherGeneral}>
          <Image
            style={[styles.batteryLevelIcon, styles.fridayAug2Position]}
            contentFit="cover"
            source={require("../assets/battery-level2.png")}
          />
          <Pressable
            style={styles.tab2}
            onPress={() => navigation.navigate("ScoresV5LIGHT1")}
          >
            <Text style={[styles.myScores, styles.nflTypo]}>My Scores</Text>
          </Pressable>
          <View style={[styles.buttonActive, styles.buttonActiveLayout]}>
            <View style={[styles.batteryLevelParent, styles.cardItemPosition]}>
              <View
                style={[styles.batteryLevelParent, styles.cardItemPosition]}
              >
                <View
                  style={[styles.batteryLevelParent, styles.cardItemPosition]}
                >
                  <View style={[styles.card, styles.cardItemPosition]} />
                </View>
              </View>
              <Text style={[styles.tab1, styles.nhlFlexBox]}>Scores</Text>
            </View>
          </View>
        </View>
        <View style={[styles.categoryFilter, styles.teamScoreFlexBox]}>
          <View style={[styles.teamInactiveSelection, styles.teamLayout]}>
            <View style={[styles.itemCard, styles.cardItemPosition]} />
            <Text style={[styles.nfl, styles.nflFlexBox]}>NFL</Text>
          </View>
          <View style={[styles.teamInactiveSelection1, styles.teamLayout]}>
            <View style={[styles.itemCard1, styles.cardItemPosition]} />
            <Text style={[styles.nba, styles.pmTypo]}>NBA</Text>
          </View>
          <View style={[styles.teamInactiveSelection1, styles.teamLayout]}>
            <View style={[styles.itemCard, styles.cardItemPosition]} />
            <Text style={[styles.ncaff, styles.nflFlexBox]}>NCAFF</Text>
          </View>
          <View style={[styles.teamInactiveSelection1, styles.teamLayout]}>
            <View style={[styles.itemCard, styles.cardItemPosition]} />
            <Text style={[styles.nhl, styles.nhlFlexBox]}>NHL</Text>
          </View>
          <View style={[styles.teamInactiveSelection1, styles.teamLayout]}>
            <View style={[styles.itemCard, styles.cardItemPosition]} />
            <Text style={[styles.mlb, styles.nbaPosition]}>MLB</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.fridayAug2, styles.timeClr]}>Friday, Aug 2</Text>
      <View style={[styles.pmParent, styles.parentPosition]}>
        <Text style={[styles.pm, styles.textLayout]}>7:05 PM</Text>
        <View style={[styles.teamScore, styles.teamScoreFlexBox]}>
          <View style={styles.mlbParent}>
            <Image
              style={[styles.mlbIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/mlb1.png")}
            />
            <Text style={[styles.blueJays, styles.textLayout]}>Blue Jays</Text>
          </View>
          <View style={[styles.parent, styles.groupSpaceBlock]}>
            <Text style={[styles.text, styles.textLayout]}>59</Text>
            <Text style={[styles.text1, styles.textLayout]}>-</Text>
            <Text style={[styles.text2, styles.textLayout]}>50</Text>
          </View>
          <View style={[styles.group, styles.groupSpaceBlock]}>
            <Text style={[styles.text3, styles.textLayout]}>84</Text>
            <Text style={[styles.text4, styles.textTypo]}>24</Text>
            <Text style={[styles.text5, styles.textTypo]}>25</Text>
            <Text style={[styles.text6, styles.textLayout]}>14</Text>
            <Text style={[styles.text7, styles.textLayout]}>21</Text>
          </View>
        </View>
        <View style={[styles.teamScore, styles.teamScoreFlexBox]}>
          <View style={styles.mlbParent}>
            <Image
              style={[styles.mlbIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/mlb2.png")}
            />
            <Text style={[styles.blueJays, styles.textLayout]}>White Sox</Text>
          </View>
          <View style={[styles.parent, styles.groupSpaceBlock]}>
            <Text style={[styles.text, styles.textLayout]}>45</Text>
            <Text style={[styles.text1, styles.textLayout]}>-</Text>
            <Text style={[styles.text2, styles.textLayout]}>65</Text>
          </View>
          <View style={[styles.group, styles.groupSpaceBlock]}>
            <Text style={[styles.text3, styles.textLayout]}>84</Text>
            <Text style={[styles.text4, styles.textTypo]}>24</Text>
            <Text style={[styles.text5, styles.textTypo]}>25</Text>
            <Text style={[styles.text6, styles.textLayout]}>14</Text>
            <Text style={[styles.text7, styles.textLayout]}>21</Text>
          </View>
        </View>
        <View style={[styles.buttonSmlWrapper, styles.teamScoreFlexBox]}>
          <View style={[styles.buttonSml, styles.buttonSmlFlexBox]}>
            <Text style={[styles.button, styles.tab1Typo]}>Preview</Text>
          </View>
        </View>
      </View>
      <View style={[styles.iphoneXBarsStatusDef, styles.textPosition]}>
        <View style={[styles.action, styles.timePosition]}>
          <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        </View>
        <View style={[styles.container1, styles.container1Position]}>
          <Image
            style={[styles.batteryIcon, styles.container1Position]}
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
  buttonSmlFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cardItemPosition: {
    left: "0%",
    position: "absolute",
  },
  parentPosition1: {
    height: 48,
    top: 24,
    position: "absolute",
  },
  iconLayout1: {
    height: 24,
    overflow: "hidden",
  },
  profilePosition: {
    color: Color.secondary,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: "66.67%",
    textAlign: "center",
    left: "0%",
    position: "absolute",
  },
  userLayout: {
    height: "50%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  parentPosition: {
    left: 24,
    position: "absolute",
  },
  fridayAug2Position: {
    left: "50%",
    position: "absolute",
  },
  nflTypo: {
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  buttonActiveLayout: {
    width: "50%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  nhlFlexBox: {
    display: "flex",
    fontSize: FontSize.size_base,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  teamScoreFlexBox: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  teamLayout: {
    width: 99,
    height: 40,
  },
  nflFlexBox: {
    top: "14%",
    height: "66.75%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pmTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  nbaPosition: {
    left: "32.32%",
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
  },
  timeClr: {
    color: Color.textPrimary,
    fontWeight: "600",
  },
  textLayout: {
    lineHeight: 17,
    color: Color.textPrimary,
    fontSize: FontSize.size_xs,
  },
  groupSpaceBlock: {
    marginLeft: 16,
    height: 17,
  },
  textTypo: {
    width: 18,
    lineHeight: 17,
    color: Color.textPrimary,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    top: 0,
    position: "absolute",
  },
  tab1Typo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.backgroundLight,
  },
  textPosition: {
    top: 0,
    position: "absolute",
  },
  timePosition: {
    width: 54,
    top: "50%",
    position: "absolute",
  },
  container1Position: {
    height: 12,
    top: "50%",
    position: "absolute",
  },
  navSearchChild: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    backgroundColor: Color.backgroundLight,
  },
  calendarDaysIcon: {
    left: 16,
    width: 24,
    height: 24,
    top: 0,
    position: "absolute",
  },
  schedule: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "center",
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
    width: 24,
    height: 24,
    top: 0,
    position: "absolute",
  },
  scores: {
    color: Color.primary,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: "66.67%",
    left: "0%",
    position: "absolute",
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
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
  },
  profile: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
  },
  userRoundParent: {
    width: "56.92%",
    top: "25%",
    right: "21.54%",
    bottom: "25%",
    left: "21.54%",
  },
  navMenu: {
    width: 65,
    height: 96,
  },
  navigationBar: {
    top: 716,
    shadowRadius: 16,
    elevation: 16,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    height: 96,
    width: 375,
    left: 0,
    backgroundColor: Color.backgroundLight,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.16)",
    position: "absolute",
  },
  batteryLevelIcon: {
    width: "50%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    right: "0%",
    left: "50%",
  },
  myScores: {
    fontFamily: FontFamily.interRegular,
    marginTop: -9,
    color: Color.primary,
  },
  tab2: {
    left: "62.69%",
    top: "50%",
    position: "absolute",
  },
  card: {
    borderTopLeftRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    backgroundColor: Color.primary,
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  batteryLevelParent: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  tab1: {
    height: "36.39%",
    width: "55.41%",
    top: "33.33%",
    left: "22.02%",
    color: Color.backgroundLight,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  buttonActive: {
    right: "50%",
    left: "0%",
    position: "absolute",
  },
  tabSwitcherGeneral: {
    height: 36,
    marginTop: 7,
    width: 327,
  },
  itemCard: {
    backgroundColor: Color.outline,
    borderRadius: Border.br_5xs,
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  nfl: {
    width: "27.27%",
    left: "36.36%",
    color: Color.outlineWHITE,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  teamInactiveSelection: {
    height: 40,
  },
  itemCard1: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.primary,
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  nba: {
    width: "35.35%",
    left: "32.32%",
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
    top: "14%",
    height: "66.75%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: Color.backgroundLight,
  },
  teamInactiveSelection1: {
    marginLeft: 8,
    height: 40,
  },
  ncaff: {
    width: "51.52%",
    left: "24.24%",
    color: Color.outlineWHITE,
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
  },
  mlb: {
    marginTop: -10,
    color: Color.outlineWHITE,
    fontFamily: FontFamily.interRegular,
    top: "50%",
  },
  categoryFilter: {
    marginTop: 7,
    alignItems: "center",
  },
  frameParent: {
    top: 68,
    width: 444,
  },
  fridayAug2: {
    marginLeft: -163.5,
    top: 234,
    fontSize: FontSize.size_lg,
    lineHeight: 23,
    textAlign: "left",
    left: "50%",
    position: "absolute",
    fontFamily: FontFamily.poppinsSemiBold,
  },
  pm: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  mlbIcon: {
    width: 23,
  },
  blueJays: {
    marginTop: 8,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
  },
  mlbParent: {
    justifyContent: "center",
    flex: 1,
  },
  text: {
    left: 41,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  text1: {
    left: 26,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  text2: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    top: 0,
    position: "absolute",
    left: 0,
  },
  parent: {
    width: 57,
  },
  text3: {
    left: 92,
    width: 19,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  text4: {
    left: 70,
  },
  text5: {
    left: 46,
  },
  text6: {
    left: 23,
    width: 14,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  text7: {
    width: 13,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    top: 0,
    position: "absolute",
    left: 0,
  },
  group: {
    flex: 1,
  },
  teamScore: {
    height: 56,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    marginTop: 8,
    alignItems: "center",
    backgroundColor: Color.backgroundLight,
  },
  button: {
    color: Color.backgroundLight,
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  buttonSml: {
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    height: 40,
    backgroundColor: Color.primary,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  buttonSmlWrapper: {
    marginTop: 8,
  },
  pmParent: {
    top: 273,
    shadowRadius: 8,
    elevation: 8,
    padding: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    width: 327,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.16)",
    backgroundColor: Color.backgroundLight,
  },
  time: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.sFBody,
    color: Color.textPrimary,
    fontWeight: "600",
    marginTop: -9,
    textAlign: "center",
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
    width: 15,
    height: 11,
  },
  container1: {
    marginTop: -4.8,
    right: 15,
    width: 67,
  },
  iphoneXBarsStatusDef: {
    height: 44,
    width: 375,
    left: 0,
    backgroundColor: Color.backgroundLight,
  },
  scoresV5Light: {
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.backgroundLight,
  },
});

export default ScoresV5LIGHT;
