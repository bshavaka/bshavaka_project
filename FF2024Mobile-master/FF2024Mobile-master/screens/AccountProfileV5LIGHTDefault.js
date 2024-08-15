import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NAVExplore from "../components/NAVExplore";
import NAVNews from "../components/NAVNews";
import { FontFamily, Padding, Border, Color, FontSize } from "../GlobalStyles";

const AccountProfileV5LIGHTDefault = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.accountProfileV5LightD}>
      <View style={styles.userHeaderIcon}>
        <View style={styles.cardContent}>
          <Image
            style={styles.userImgIcon}
            contentFit="cover"
            source={require("../assets/userimg.png")}
          />
          <View style={styles.cardText}>
            <Text style={[styles.boulderCo, styles.boulderCoFlexBox]}>
              Boulder, CO
            </Text>
            <Text style={[styles.janeHoffman, styles.textTypo]}>
              Jane Hoffman
            </Text>
          </View>
          <View style={styles.buttonMini}>
            <View style={styles.buttonMiniChild} />
            <Image
              style={[styles.settingsIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/settings.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.tabFilters}>
        <View style={styles.tabOptionsFlexBox}>
          <View style={[styles.tabSelection, styles.tabFlexBox]}>
            <Text style={[styles.text, styles.textTypo]}>Check In</Text>
          </View>
          <View style={[styles.tabSelection1, styles.tabFlexBox]}>
            <Text style={styles.text1}>Reviews</Text>
          </View>
          <View style={[styles.tabSelection1, styles.tabFlexBox]}>
            <Text style={styles.text1}>Favorites</Text>
          </View>
          <View style={[styles.tabSelection1, styles.tabFlexBox]}>
            <Text style={styles.text1}>Text</Text>
          </View>
        </View>
      </View>
      <View style={[styles.subheader02, styles.subheader02Position]}>
        <Text style={[styles.myTopTeams, styles.textTypo]}>My Top Teams</Text>
        <Text style={[styles.smallLabelRegular12px, styles.boulderCoFlexBox]}>
          See All
        </Text>
      </View>
      <Text style={[styles.goTorontoRaptors, styles.tab1Typo]}>
        “ Go Toronto Raptors, Best team ever!!!! ”
      </Text>
      <View style={[styles.scoreProfileCard, styles.scoreCardBorder]}>
        <View style={[styles.cardContent1, styles.tabOptionsFlexBox]}>
          <Image
            style={[styles.nbaEasternAtlantic, styles.nbaLayout]}
            contentFit="cover"
            source={require("../assets/nba-eastern-atlantic2.png")}
          />
          <View style={styles.cardText1}>
            <Text
              style={[styles.torontoRaptors70Container, styles.containerLayout]}
            >
              <Text style={styles.textTypo}>{`Toronto Raptors
`}</Text>
              <Text style={styles.text4}>(7-0)</Text>
            </Text>
            <Text style={[styles.rank1, styles.containerLayout]}>
              <Text style={styles.textTypo}>{`Rank
`}</Text>
              <Text style={styles.text4}>1</Text>
            </Text>
            <Text
              style={[styles.nextGame0812Container, styles.containerLayout]}
            >
              <Text style={styles.textTypo}>{`Next Game
`}</Text>
              <Text style={styles.text4}>08/12</Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.scoreProfileCard1, styles.scoreCardBorder]}>
        <View style={[styles.cardContent1, styles.tabOptionsFlexBox]}>
          <Image
            style={[styles.nbaEasternCentral, styles.nbaLayout]}
            contentFit="cover"
            source={require("../assets/nba-eastern-central.png")}
          />
          <View style={styles.cardText1}>
            <Text
              style={[styles.torontoRaptors70Container, styles.containerLayout]}
            >
              <Text style={styles.textTypo}>{`   Chicago Bulls  
`}</Text>
              <Text style={styles.text4}>(4-1)</Text>
            </Text>
            <Text style={[styles.rank1, styles.containerLayout]}>
              <Text style={styles.textTypo}>{`Rank
`}</Text>
              <Text style={styles.text4}>2</Text>
            </Text>
            <Text
              style={[styles.nextGame0812Container, styles.containerLayout]}
            >
              <Text style={styles.textTypo}>{`Next Game
`}</Text>
              <Text style={styles.text4}>11/27</Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.scoreProfileCard2, styles.scoreCardBorder]}>
        <View style={[styles.cardContent1, styles.tabOptionsFlexBox]}>
          <Image
            style={[styles.nbaEasternCentral, styles.nbaLayout]}
            contentFit="cover"
            source={require("../assets/nba-eastern-central1.png")}
          />
          <View style={styles.cardText1}>
            <Text
              style={[styles.torontoRaptors70Container, styles.containerLayout]}
            >
              <Text style={styles.textTypo}>{`    Miami Heat      
`}</Text>
              <Text style={styles.text4}>(6-10)</Text>
            </Text>
            <Text style={[styles.rank1, styles.containerLayout]}>
              <Text style={styles.textTypo}>{`Rank
`}</Text>
              <Text style={styles.text4}>3</Text>
            </Text>
            <Text
              style={[styles.nextGame0812Container, styles.containerLayout]}
            >
              <Text style={styles.textTypo}>{`Next Game
`}</Text>
              <Text style={styles.text4}>09/14</Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.teamcardNba, styles.teamcardLayout]}>
        <Image
          style={styles.nbaLayout}
          contentFit="cover"
          source={require("../assets/ellipse-173.png")}
        />
        <Text style={[styles.outbackSaloon3Container, styles.containerLayout]}>
          <Text style={styles.textTypo}>{`Outback Saloon
`}</Text>
          <Text style={styles.text4}>3 outings</Text>
        </Text>
        <Text style={[styles.outbackSaloon3Container, styles.containerLayout]}>
          <Text style={styles.textTypo}>{`Playing Now
`}</Text>
          <Text style={styles.text4}>RAP - MIA</Text>
        </Text>
      </View>
      <View style={[styles.teamcardNba1, styles.teamcardLayout]}>
        <Image
          style={styles.nbaLayout}
          contentFit="cover"
          source={require("../assets/ellipse-173.png")}
        />
        <Text style={[styles.outbackSaloon3Container, styles.containerLayout]}>
          <Text style={styles.textTypo}>{`Outback Saloon
`}</Text>
          <Text style={styles.text4}>3 outings</Text>
        </Text>
        <Text style={[styles.outbackSaloon3Container, styles.containerLayout]}>
          <Text style={styles.textTypo}>{`Playing Now
`}</Text>
          <Text style={styles.text4}>RAP - MIA</Text>
        </Text>
      </View>
      <View style={[styles.navigationBar, styles.navigationBarPosition]}>
        <NAVExplore />
        <Pressable
          style={styles.navSearch}
          onPress={() => navigation.navigate("ScheduleScreen")}
        >
          <View style={[styles.navSearchChild, styles.cardPosition]} />
          <View style={[styles.calendarDaysParent, styles.parentPosition]}>
            <Image
              style={[styles.calendarDaysIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/calendardays.png")}
            />
            <Text style={[styles.schedule, styles.scoresPosition]}>
              Schedule
            </Text>
          </View>
        </Pressable>
        <NAVNews onNAVNewsPress={() => navigation.navigate("NewsV5LIGHT")} />
        <Pressable
          style={styles.navSearch}
          onPress={() => navigation.navigate("ScoresV5LIGHT")}
        >
          <View style={[styles.navSearchChild, styles.cardPosition]} />
          <View style={[styles.clipboardListParent, styles.parentPosition]}>
            <Image
              style={[styles.clipboardListIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/clipboardlist.png")}
            />
            <Text style={[styles.scores, styles.scoresPosition]}>Scores</Text>
          </View>
        </Pressable>
        <View style={styles.navMenu}>
          <View style={[styles.navSearchChild, styles.cardPosition]} />
          <View style={[styles.userRoundParent, styles.userLayout]}>
            <Image
              style={[styles.userRoundIcon, styles.userLayout]}
              contentFit="cover"
              source={require("../assets/userround1.png")}
            />
            <Text style={[styles.profile, styles.tab2Clr]}>Profile</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.tabSwitcherGeneral, styles.subheader02Position]}
        onPress={() => navigation.navigate("AccountProfileV5LIGHTFavoriteBars")}
      >
        <Image
          style={[styles.batteryLevelIcon, styles.buttonActivePosition]}
          contentFit="cover"
          source={require("../assets/battery-level2.png")}
        />
        <Text style={[styles.tab2, styles.tab2SpaceBlock]}>Favorite Bars</Text>
        <View style={[styles.buttonActive, styles.buttonActivePosition]}>
          <View style={[styles.batteryLevelParent, styles.cardPosition]}>
            <View style={[styles.batteryLevelParent, styles.cardPosition]}>
              <View style={[styles.batteryLevelParent, styles.cardPosition]}>
                <View style={[styles.card, styles.cardPosition]} />
              </View>
            </View>
            <Text style={[styles.tab1, styles.tab1Typo]}>Top Teams</Text>
          </View>
        </View>
      </Pressable>
      <View style={[styles.iphoneXBarsStatusDef, styles.navigationBarPosition]}>
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
  boulderCoFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  tabFlexBox: {
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  subheader02Position: {
    top: 355,
    width: 327,
    left: 24,
    position: "absolute",
  },
  tab1Typo: {
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  scoreCardBorder: {
    width: 325,
    borderWidth: 1,
    borderColor: Color.outline,
    borderStyle: "solid",
    marginLeft: -162.5,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    left: "50%",
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.backgroundLight,
  },
  tabOptionsFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  nbaLayout: {
    height: 48,
    width: 48,
  },
  containerLayout: {
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },
  teamcardLayout: {
    paddingVertical: Padding.p_2xs,
    height: 59,
    borderWidth: 1,
    borderColor: Color.outline,
    borderStyle: "solid",
    marginLeft: -163.5,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_5xs,
    left: "50%",
    alignItems: "center",
    flexDirection: "row",
    width: 327,
    position: "absolute",
    backgroundColor: Color.backgroundLight,
  },
  navigationBarPosition: {
    width: 375,
    left: 0,
    position: "absolute",
    backgroundColor: Color.backgroundLight,
  },
  cardPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  parentPosition: {
    top: 24,
    height: 48,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  scoresPosition: {
    top: "66.67%",
    textAlign: "center",
    left: "0%",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },
  userLayout: {
    height: "50%",
    position: "absolute",
  },
  tab2Clr: {
    color: Color.primary,
    position: "absolute",
  },
  buttonActivePosition: {
    width: "50%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  tab2SpaceBlock: {
    marginTop: -9,
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
  userImgIcon: {
    height: 67,
    width: 67,
  },
  boulderCo: {
    top: 30,
    width: 173,
    color: Color.secondary,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    left: 0,
  },
  janeHoffman: {
    marginLeft: -102,
    fontSize: FontSize.size_xl,
    color: Color.textPrimary,
    left: "50%",
    fontFamily: FontFamily.poppinsSemiBold,
    top: 0,
    textAlign: "left",
    width: 204,
    position: "absolute",
  },
  cardText: {
    height: 46,
    marginLeft: 8,
    width: 204,
  },
  buttonMiniChild: {
    backgroundColor: Color.primary,
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  settingsIcon: {
    height: "60%",
    top: "20%",
    bottom: "20%",
    left: "20%",
    right: "20%",
    width: "60%",
    position: "absolute",
  },
  buttonMini: {
    width: 40,
    height: 40,
    marginLeft: 8,
  },
  cardContent: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  userHeaderIcon: {
    top: 68,
    justifyContent: "space-between",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    width: 327,
    alignItems: "center",
    flexDirection: "row",
    left: 24,
    position: "absolute",
    backgroundColor: Color.backgroundLight,
  },
  text: {
    textAlign: "center",
    color: Color.backgroundLight,
    fontSize: FontSize.size_base,
  },
  tabSelection: {
    backgroundColor: Color.primary,
    height: 40,
  },
  text1: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    color: Color.backgroundLight,
    fontSize: FontSize.size_base,
  },
  tabSelection1: {
    backgroundColor: Color.outline,
    marginLeft: 8,
  },
  tabFilters: {
    top: 151,
    left: 24,
    position: "absolute",
  },
  myTopTeams: {
    fontSize: FontSize.size_lg,
    lineHeight: 23,
    color: Color.textPrimary,
    top: 0,
    textAlign: "left",
    position: "absolute",
    left: 0,
  },
  smallLabelRegular12px: {
    top: 4,
    left: 287,
    color: Color.backgroundLight,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },
  subheader02: {
    height: 23,
  },
  goTorontoRaptors: {
    marginTop: -171,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsBold,
    top: "50%",
    marginLeft: -163.5,
    fontWeight: "700",
    color: Color.textPrimary,
    left: "50%",
    width: 327,
  },
  nbaEasternAtlantic: {
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  text4: {
    fontFamily: FontFamily.poppinsRegular,
  },
  torontoRaptors70Container: {
    textAlign: "center",
    color: Color.textPrimary,
    top: 0,
    left: 0,
    position: "absolute",
  },
  rank1: {
    left: 114,
    textAlign: "center",
    color: Color.textPrimary,
    top: 0,
    position: "absolute",
  },
  nextGame0812Container: {
    left: 161,
    textAlign: "center",
    color: Color.textPrimary,
    top: 0,
    position: "absolute",
  },
  cardText1: {
    width: 229,
    height: 32,
    marginLeft: 16,
  },
  cardContent1: {
    flex: 1,
    alignSelf: "stretch",
  },
  scoreProfileCard: {
    top: 407,
  },
  nbaEasternCentral: {
    overflow: "hidden",
  },
  scoreProfileCard1: {
    top: 479,
  },
  scoreProfileCard2: {
    top: 551,
  },
  outbackSaloon3Container: {
    marginLeft: 16,
    textAlign: "center",
    color: Color.textPrimary,
  },
  teamcardNba: {
    top: 717,
  },
  teamcardNba1: {
    top: 784,
  },
  navSearchChild: {
    left: "0%",
    backgroundColor: Color.backgroundLight,
    height: "100%",
  },
  calendarDaysIcon: {
    left: 16,
  },
  schedule: {
    color: Color.secondary,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
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
    fontFamily: FontFamily.poppinsRegular,
    color: Color.secondary,
    position: "absolute",
  },
  clipboardListParent: {
    left: 13,
    width: 41,
  },
  userRoundIcon: {
    width: "61.54%",
    right: "17.95%",
    bottom: "50%",
    left: "20.51%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    top: "0%",
    height: "50%",
  },
  profile: {
    top: "66.67%",
    textAlign: "center",
    left: "0%",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  userRoundParent: {
    top: "25%",
    bottom: "25%",
    left: "20%",
    right: "20%",
    width: "60%",
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
    height: 96,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 375,
  },
  batteryLevelIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    right: "0%",
    width: "50%",
    left: "50%",
  },
  tab2: {
    left: "59.63%",
    fontFamily: FontFamily.interRegular,
    color: Color.primary,
    position: "absolute",
    top: "50%",
    fontSize: FontSize.size_base,
  },
  card: {
    borderTopLeftRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    backgroundColor: Color.primary,
    left: "0%",
  },
  batteryLevelParent: {
    left: "0%",
  },
  tab1: {
    height: "36.39%",
    width: "55.41%",
    top: "33.33%",
    left: "22.02%",
    fontFamily: FontFamily.interBold,
    display: "flex",
    color: Color.backgroundLight,
    fontSize: FontSize.size_base,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonActive: {
    right: "50%",
    left: "0%",
  },
  tabSwitcherGeneral: {
    height: 36,
  },
  time: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.sFBody,
    marginTop: -9,
    textAlign: "center",
    color: Color.textPrimary,
    fontWeight: "600",
    width: 54,
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
  container: {
    marginTop: -4.8,
    right: 15,
    width: 67,
  },
  iphoneXBarsStatusDef: {
    height: 44,
    top: 0,
  },
  accountProfileV5LightD: {
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.backgroundLight,
  },
});

export default AccountProfileV5LIGHTDefault;
