import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import NAVExplore from "../components/NAVExplore";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const NewsV5LIGHT = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.newsV5Light}>
      <View style={styles.inputFormFeild}>
        <Text style={styles.label} numberOfLines={1}>
          Search
        </Text>
      </View>
      <View style={[styles.categoryFilter, styles.cardContent1FlexBox]}>
        <View style={styles.teamLayout}>
          <View style={[styles.itemCard, styles.itemCardPosition]} />
          <Text style={styles.nfl}>NFL</Text>
        </View>
        <View style={[styles.teamInactiveSelection, styles.teamLayout]}>
          <View style={[styles.itemCard1, styles.itemCardPosition]} />
          <Text style={[styles.nba, styles.nbaFlexBox]}>NBA</Text>
        </View>
        <View style={[styles.teamInactiveSelection, styles.teamLayout]}>
          <View style={[styles.itemCard1, styles.itemCardPosition]} />
          <Text style={[styles.ncaff, styles.nbaFlexBox]}>NCAFF</Text>
        </View>
        <View style={[styles.teamInactiveSelection, styles.teamLayout]}>
          <View style={[styles.itemCard1, styles.itemCardPosition]} />
          <Text style={styles.nhl}>NHL</Text>
        </View>
        <View style={[styles.teamInactiveSelection, styles.teamLayout]}>
          <View style={[styles.itemCard1, styles.itemCardPosition]} />
          <Text style={styles.mlb}>MLB</Text>
        </View>
      </View>
      <View style={[styles.newEventCard, styles.subheader02Position]}>
        <Image
          style={[styles.cardImgIcon, styles.latestNewsPosition]}
          contentFit="cover"
          source={require("../assets/cardimg5.png")}
        />
        <View style={styles.cardContent}>
          <Text style={[styles.title, styles.titleClr]} numberOfLines={2}>
            Panthers: Signs of progress needed from Bryce Young in Year 2
          </Text>
          <Image
            style={styles.cardContentChild}
            contentFit="cover"
            source={require("../assets/group-1000004316.png")}
          />
        </View>
      </View>
      <View style={[styles.subheader02, styles.subheader02Position]}>
        <Text style={[styles.latestNews, styles.newsTypo]}>Latest News</Text>
        <Text style={[styles.smallLabelRegular12px, styles.scheduleTypo]}>
          See All
        </Text>
      </View>
      <View style={[styles.newsDetailsCard, styles.newsCardSpaceBlock]}>
        <View style={[styles.cardContent1, styles.cardContent1FlexBox]}>
          <Image
            style={styles.z9zsjp16yynpocqzpthx1Icon}
            contentFit="cover"
            source={require("../assets/z9zsjp16yynpocqzpthx-1.png")}
          />
          <View style={styles.cardText}>
            <Text
              style={[styles.cardTitle, styles.scheduleTypo]}
              numberOfLines={2}
            >{`Dax Hill Moves from Safety 
to Corner for Bengals​.`}</Text>
            <Text style={styles.cardSubtitle}>
              <Text style={styles.mAgo}>{`4m ago `}</Text>
              <Text style={styles.textTypo}>•</Text>
              <Text style={styles.mAgo}> 1k read</Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.newsDetailsCard1, styles.newsCardSpaceBlock]}>
        <View style={[styles.cardContent1, styles.cardContent1FlexBox]}>
          <Image
            style={styles.z9zsjp16yynpocqzpthx1Icon}
            contentFit="cover"
            source={require("../assets/z9zsjp16yynpocqzpthx-11.png")}
          />
          <View style={styles.cardText}>
            <Text
              style={[styles.cardTitle, styles.scheduleTypo]}
              numberOfLines={2}
            >
              Trevor Lawrence Signs $275M Extension
            </Text>
            <Text style={styles.cardSubtitle}>
              <Text style={styles.mAgo}>{`24m ago `}</Text>
              <Text style={styles.textTypo}>•</Text>
              <Text style={styles.mAgo}> 3.5k read</Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.newsDetailsCard2, styles.newsCardSpaceBlock]}>
        <View style={[styles.cardContent1, styles.cardContent1FlexBox]}>
          <Image
            style={styles.z9zsjp16yynpocqzpthx1Icon}
            contentFit="cover"
            source={require("../assets/z9zsjp16yynpocqzpthx-12.png")}
          />
          <View style={styles.cardText}>
            <Text
              style={[styles.cardTitle, styles.scheduleTypo]}
              numberOfLines={2}
            >
              David Shaw Joins Broncos as Senior Executive
            </Text>
            <Text style={styles.cardSubtitle}>
              <Text style={styles.mAgo}>{`54m ago `}</Text>
              <Text style={styles.textTypo}>•</Text>
              <Text style={styles.mAgo}> 1k read</Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.navigationBar, styles.navigationBarPosition]}>
        <NAVExplore />
        <Pressable
          style={styles.navSearch}
          onPress={() => navigation.navigate("ScheduleScreen")}
        >
          <View style={[styles.navSearchChild, styles.itemCardPosition]} />
          <View style={[styles.calendarDaysParent, styles.parentPosition1]}>
            <Image
              style={[styles.calendarDaysIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/calendardays.png")}
            />
            <Text style={[styles.schedule, styles.newsPosition]}>Schedule</Text>
          </View>
        </Pressable>
        <View style={styles.navNews}>
          <View style={[styles.navSearchChild, styles.itemCardPosition]} />
          <View style={[styles.newspaperParent, styles.parentPosition]}>
            <Image
              style={[styles.newspaperIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/newspaper1.png")}
            />
            <Text style={[styles.news, styles.newsPosition]}>News</Text>
          </View>
        </View>
        <Pressable
          style={styles.navSearch}
          onPress={() =>
            navigation.navigate("AccountSetupCHOOSETEAMSV5NFLLIGHT")
          }
        >
          <View style={[styles.navSearchChild, styles.itemCardPosition]} />
          <View style={[styles.clipboardListParent, styles.parentPosition1]}>
            <Image
              style={[styles.clipboardListIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/clipboardlist.png")}
            />
            <Text style={[styles.scores, styles.newsPosition]}>Scores</Text>
          </View>
        </Pressable>
        <View style={styles.navNews}>
          <View style={[styles.navSearchChild, styles.itemCardPosition]} />
          <View style={[styles.userRoundParent, styles.parentPosition]}>
            <Image
              style={[styles.userRoundIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/userround.png")}
            />
            <Text style={[styles.scores, styles.newsPosition]}>Profile</Text>
          </View>
        </View>
      </View>
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
  cardContent1FlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemCardPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  teamLayout: {
    width: 99,
    height: 40,
  },
  nbaFlexBox: {
    color: Color.outlineWHITE,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_base,
    top: "14%",
    height: "66.75%",
    fontFamily: FontFamily.poppinsRegular,
    alignItems: "center",
    position: "absolute",
  },
  subheader02Position: {
    left: 24,
    position: "absolute",
  },
  latestNewsPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  titleClr: {
    color: Color.textPrimary,
    textAlign: "left",
  },
  newsTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  scheduleTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  newsCardSpaceBlock: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
    width: 327,
    left: 24,
    position: "absolute",
    overflow: "hidden",
  },
  navigationBarPosition: {
    width: 375,
    left: 0,
    position: "absolute",
    backgroundColor: Color.backgroundLight,
  },
  parentPosition1: {
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
  newsPosition: {
    top: "66.67%",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    left: "0%",
    position: "absolute",
  },
  parentPosition: {
    bottom: "25%",
    top: "25%",
    height: "50%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "50%",
    height: "50%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
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
  label: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    color: Color.outline,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    overflow: "hidden",
  },
  inputFormFeild: {
    top: 68,
    borderStyle: "solid",
    borderColor: Color.outline,
    borderWidth: 1,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    height: 40,
    alignItems: "center",
    flexDirection: "row",
    width: 327,
    borderRadius: Border.br_5xs,
    left: 24,
    position: "absolute",
    backgroundColor: Color.backgroundLight,
  },
  itemCard: {
    backgroundColor: Color.primary,
    borderRadius: Border.br_5xs,
  },
  nfl: {
    width: "29.29%",
    left: "35.35%",
    color: Color.backgroundLight,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_base,
    top: "14%",
    height: "66.75%",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    alignItems: "center",
    position: "absolute",
  },
  itemCard1: {
    backgroundColor: Color.outline,
    borderRadius: Border.br_5xs,
  },
  nba: {
    width: "32.32%",
    left: "33.33%",
    color: Color.outlineWHITE,
  },
  teamInactiveSelection: {
    marginLeft: 8,
  },
  ncaff: {
    width: "51.52%",
    left: "24.24%",
  },
  nhl: {
    height: "52.75%",
    width: "33.33%",
    top: "22.25%",
    fontFamily: FontFamily.interRegular,
    color: Color.outlineWHITE,
    left: "33.33%",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_base,
    alignItems: "center",
    position: "absolute",
  },
  mlb: {
    marginTop: -10,
    left: "32.32%",
    top: "50%",
    fontFamily: FontFamily.interRegular,
    color: Color.outlineWHITE,
    textAlign: "center",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  categoryFilter: {
    top: 112,
    alignItems: "center",
    left: 24,
    position: "absolute",
  },
  cardImgIcon: {
    height: 228,
    zIndex: 0,
    width: 327,
  },
  title: {
    height: 50,
    textTransform: "capitalize",
    color: Color.textPrimary,
    fontSize: FontSize.size_base,
    overflow: "hidden",
    alignSelf: "stretch",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  cardContentChild: {
    width: 40,
    height: 8,
    marginTop: 16,
  },
  cardContent: {
    zIndex: 1,
    marginTop: 16,
    alignSelf: "stretch",
    alignItems: "center",
  },
  newEventCard: {
    top: 188,
    borderRadius: Border.br_base,
    height: 229,
    justifyContent: "flex-end",
    padding: Padding.p_base,
    alignItems: "center",
    width: 327,
    overflow: "hidden",
  },
  latestNews: {
    fontSize: FontSize.size_lg,
    lineHeight: 23,
    color: Color.textPrimary,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  smallLabelRegular12px: {
    top: 4,
    left: 287,
    color: Color.primary,
    lineHeight: 16,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  subheader02: {
    top: 441,
    height: 23,
    width: 327,
  },
  z9zsjp16yynpocqzpthx1Icon: {
    width: 88,
    height: 88,
    borderRadius: Border.br_5xs,
  },
  cardTitle: {
    width: 227,
    color: Color.textPrimary,
    textAlign: "left",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    overflow: "hidden",
  },
  mAgo: {
    fontFamily: FontFamily.poppinsRegular,
  },
  textTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  cardSubtitle: {
    lineHeight: 22,
    color: Color.secondary,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  cardText: {
    marginLeft: 16,
    alignSelf: "stretch",
    justifyContent: "center",
    flex: 1,
  },
  cardContent1: {
    width: 323,
    justifyContent: "center",
    alignItems: "center",
  },
  newsDetailsCard: {
    top: 480,
  },
  newsDetailsCard1: {
    top: 584,
  },
  newsDetailsCard2: {
    top: 688,
  },
  navSearchChild: {
    backgroundColor: Color.backgroundLight,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  calendarDaysIcon: {
    left: 16,
  },
  schedule: {
    color: Color.secondary,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  calendarDaysParent: {
    left: 4,
    width: 57,
  },
  navSearch: {
    width: 66,
    height: 96,
  },
  newspaperIcon: {
    width: "72.73%",
    right: "12.12%",
    left: "15.15%",
  },
  news: {
    color: Color.primary,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  newspaperParent: {
    width: "50.77%",
    right: "24.62%",
    left: "24.62%",
  },
  navNews: {
    width: 65,
    height: 96,
  },
  clipboardListIcon: {
    left: 9,
  },
  scores: {
    color: Color.secondary,
    fontFamily: FontFamily.poppinsRegular,
  },
  clipboardListParent: {
    left: 13,
    width: 41,
  },
  userRoundIcon: {
    width: "64.86%",
    right: "16.22%",
    left: "18.92%",
  },
  userRoundParent: {
    width: "56.92%",
    right: "21.54%",
    left: "21.54%",
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
  },
  time: {
    marginTop: -9,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.sFBody,
    fontWeight: "600",
    width: 54,
    color: Color.textPrimary,
    left: 0,
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
    height: 44,
    top: 0,
    width: 375,
  },
  newsV5Light: {
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.backgroundLight,
  },
});

export default NewsV5LIGHT;
