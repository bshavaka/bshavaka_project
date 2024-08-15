import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NAVExplore from "../components/NAVExplore";
import NAVNews from "../components/NAVNews";
import { Border, Padding, Color, FontSize, FontFamily } from "../GlobalStyles";

const ScheduleScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.scheduleScreen}>
      <Image
        style={styles.component8Icon}
        contentFit="cover"
        source={require("../assets/component-8.png")}
      />
      <View style={[styles.categoryFilter, styles.frameFlexBox]}>
        <View style={styles.teamLayout}>
          <View style={[styles.itemCard, styles.itemCardPosition]} />
          <Text style={[styles.nfl, styles.pmFlexBox]}>NFL</Text>
        </View>
        <View style={[styles.teamInactiveSelection1, styles.teamLayout]}>
          <View style={[styles.itemCard1, styles.itemCardPosition]} />
          <Text style={styles.nba}>NBA</Text>
        </View>
        <View style={[styles.teamInactiveSelection1, styles.teamLayout]}>
          <View style={[styles.itemCard, styles.itemCardPosition]} />
          <Text style={[styles.ncaff, styles.pmFlexBox]}>NCAFF</Text>
        </View>
        <View style={[styles.teamInactiveSelection1, styles.teamLayout]}>
          <View style={[styles.itemCard, styles.itemCardPosition]} />
          <Text style={styles.nhl}>NHL</Text>
        </View>
        <View style={[styles.teamInactiveSelection1, styles.teamLayout]}>
          <View style={[styles.itemCard, styles.itemCardPosition]} />
          <Text style={styles.mlb}>MLB</Text>
        </View>
      </View>
      <View style={[styles.gameScheduleCard2, styles.gameCardBorder]}>
        <View style={[styles.frameParent, styles.frameFlexBox]}>
          <View style={styles.frameGroup}>
            <View style={[styles.frameContainer, styles.frameFlexBox]}>
              <View style={[styles.frameParent, styles.frameFlexBox]}>
                <Image
                  style={[styles.nbaIcon, styles.nbaIconLayout]}
                  contentFit="cover"
                  source={require("../assets/nba10.png")}
                />
                <Text style={[styles.brooklynNets, styles.brooklynNetsTypo]}>
                  Brooklyn Nets
                </Text>
              </View>
              <View style={styles.parentFlexBox}>
                <Text style={[styles.text, styles.textTypo]}>5</Text>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/polygon-39.png")}
                />
              </View>
            </View>
            <View style={[styles.frameView, styles.parentFlexBox]}>
              <View style={[styles.frameParent, styles.frameFlexBox]}>
                <Image
                  style={styles.nbaIcon1}
                  contentFit="cover"
                  source={require("../assets/nba11.png")}
                />
                <Text style={[styles.indianaPacers, styles.brooklynNetsTypo]}>
                  Indiana Pacers
                </Text>
              </View>
              <View style={styles.frameFlexBox}>
                <Text style={[styles.text, styles.textTypo]}>2</Text>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/polygon-391.png")}
                />
              </View>
            </View>
          </View>
          <Image
            style={styles.frameInner}
            contentFit="cover"
            source={require("../assets/vector-182.png")}
          />
          <View style={[styles.gameTime, styles.gameTimeFlexBox]}>
            <Text style={styles.pmTypo}>{`Today         `}</Text>
            <Text style={[styles.pm, styles.pmSpaceBlock]}>1:45 PM</Text>
          </View>
          <Image
            style={styles.frameInner}
            contentFit="cover"
            source={require("../assets/vector-182.png")}
          />
          <View style={[styles.streamingServices, styles.pmFlexBox]}>
            <Text style={styles.pmTypo}>Streaming</Text>
            <View
              style={[styles.comcastLogoIcon1703381Parent, styles.pmSpaceBlock]}
            >
              <Image
                style={styles.comcastLogoIcon1703381}
                contentFit="cover"
                source={require("../assets/comcast-logo-icon-170338-1.png")}
              />
              <Image
                style={[styles.g3Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/g3.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.gameScheduleCard21, styles.gameCardBorder]}>
        <View style={[styles.frameParent, styles.frameFlexBox]}>
          <View style={styles.frameGroup}>
            <View style={[styles.frameContainer, styles.frameFlexBox]}>
              <View style={[styles.frameParent, styles.frameFlexBox]}>
                <Image
                  style={[styles.nbaIcon2, styles.nbaIconLayout]}
                  contentFit="cover"
                  source={require("../assets/nba12.png")}
                />
                <Text style={[styles.brooklynNets, styles.brooklynNetsTypo]}>
                  Philadelphia 76
                </Text>
              </View>
              <View style={styles.parentFlexBox}>
                <Text style={[styles.text, styles.textTypo]}>4</Text>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/polygon-391.png")}
                />
              </View>
            </View>
            <View style={[styles.frameView, styles.parentFlexBox]}>
              <View style={[styles.frameParent, styles.frameFlexBox]}>
                <Image
                  style={styles.nbaIcon1}
                  contentFit="cover"
                  source={require("../assets/nba13.png")}
                />
                <Text style={[styles.indianaPacers, styles.brooklynNetsTypo]}>
                  Milwaukee Bucks
                </Text>
              </View>
              <View style={styles.frameFlexBox}>
                <Text style={[styles.text, styles.textTypo]}>8</Text>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/polygon-39.png")}
                />
              </View>
            </View>
          </View>
          <Image
            style={styles.frameInner}
            contentFit="cover"
            source={require("../assets/vector-182.png")}
          />
          <View style={[styles.gameTime, styles.gameTimeFlexBox]}>
            <Text style={styles.pmTypo}>{`Today         `}</Text>
            <Text style={[styles.pm, styles.pmSpaceBlock]}>8:45 PM</Text>
          </View>
          <Image
            style={styles.frameInner}
            contentFit="cover"
            source={require("../assets/vector-182.png")}
          />
          <View style={[styles.streamingServices, styles.pmFlexBox]}>
            <Text style={styles.pmTypo}>Streaming</Text>
            <View
              style={[styles.comcastLogoIcon1703381Parent, styles.pmSpaceBlock]}
            >
              <Image
                style={styles.comcastLogoIcon1703381}
                contentFit="cover"
                source={require("../assets/comcast-logo-icon-170338-1.png")}
              />
              <Image
                style={[styles.g3Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/g3.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.gameScheduleCard22, styles.gameCardBorder]}>
        <View style={[styles.frameParent, styles.frameFlexBox]}>
          <View style={styles.frameGroup}>
            <View style={[styles.frameContainer, styles.frameFlexBox]}>
              <View style={[styles.frameParent, styles.frameFlexBox]}>
                <Image
                  style={[styles.nbaIcon, styles.nbaIconLayout]}
                  contentFit="cover"
                  source={require("../assets/nba14.png")}
                />
                <Text style={[styles.brooklynNets, styles.brooklynNetsTypo]}>
                  Toronto Raptors
                </Text>
              </View>
              <View style={styles.parentFlexBox}>
                <Text style={styles.textTypo}>5</Text>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/polygon-391.png")}
                />
              </View>
            </View>
            <View style={[styles.frameView, styles.parentFlexBox]}>
              <View style={[styles.frameParent, styles.frameFlexBox]}>
                <Image
                  style={styles.nbaIcon1}
                  contentFit="cover"
                  source={require("../assets/nba15.png")}
                />
                <Text style={[styles.indianaPacers, styles.brooklynNetsTypo]}>
                  Chicago Bulls
                </Text>
              </View>
              <View style={styles.frameFlexBox}>
                <Text style={styles.textTypo}>2</Text>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/polygon-391.png")}
                />
              </View>
            </View>
          </View>
          <Image
            style={styles.frameInner}
            contentFit="cover"
            source={require("../assets/vector-182.png")}
          />
          <View style={[styles.gameTime, styles.gameTimeFlexBox]}>
            <Text style={styles.pmTypo}>Tomorrow</Text>
            <Text style={[styles.pm, styles.pmSpaceBlock]}>6:40 PM</Text>
          </View>
          <Image
            style={styles.frameInner}
            contentFit="cover"
            source={require("../assets/vector-182.png")}
          />
          <View style={[styles.streamingServices, styles.pmFlexBox]}>
            <Text style={styles.pmTypo}>Streaming</Text>
            <View
              style={[styles.comcastLogoIcon1703381Parent, styles.pmSpaceBlock]}
            >
              <Image
                style={styles.comcastLogoIcon1703381}
                contentFit="cover"
                source={require("../assets/comcast-logo-icon-170338-11.png")}
              />
              <Image
                style={[styles.g3Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/g31.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.gameScheduleCard23, styles.gameCardBorder]}>
        <View style={[styles.frameParent, styles.frameFlexBox]}>
          <View style={styles.frameGroup}>
            <View style={[styles.frameContainer, styles.frameFlexBox]}>
              <View style={[styles.frameParent, styles.frameFlexBox]}>
                <Image
                  style={[styles.nbaIcon, styles.nbaIconLayout]}
                  contentFit="cover"
                  source={require("../assets/nba16.png")}
                />
                <Text style={[styles.brooklynNets, styles.brooklynNetsTypo]}>
                  New York Knicks
                </Text>
              </View>
              <View style={styles.parentFlexBox}>
                <Text style={styles.textTypo}>5</Text>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/polygon-391.png")}
                />
              </View>
            </View>
            <View style={[styles.frameView, styles.parentFlexBox]}>
              <View style={[styles.frameParent, styles.frameFlexBox]}>
                <Image
                  style={styles.nbaIcon1}
                  contentFit="cover"
                  source={require("../assets/nba17.png")}
                />
                <Text style={[styles.indianaPacers, styles.brooklynNetsTypo]}>
                  Detroit Pistons
                </Text>
              </View>
              <View style={styles.frameFlexBox}>
                <Text style={styles.textTypo}>2</Text>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/polygon-391.png")}
                />
              </View>
            </View>
          </View>
          <Image
            style={styles.frameInner}
            contentFit="cover"
            source={require("../assets/vector-182.png")}
          />
          <View style={[styles.gameTime, styles.gameTimeFlexBox]}>
            <Text style={styles.pmTypo}>Tomorrow</Text>
            <Text style={[styles.pm, styles.pmSpaceBlock]}>9:45 PM</Text>
          </View>
          <Image
            style={styles.frameInner}
            contentFit="cover"
            source={require("../assets/vector-182.png")}
          />
          <View style={[styles.streamingServices, styles.pmFlexBox]}>
            <Text style={styles.pmTypo}>Streaming</Text>
            <View
              style={[styles.comcastLogoIcon1703381Parent, styles.pmSpaceBlock]}
            >
              <Image
                style={styles.comcastLogoIcon1703381}
                contentFit="cover"
                source={require("../assets/comcast-logo-icon-170338-11.png")}
              />
              <Image
                style={[styles.g3Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/g31.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.today, styles.todayTypo]}>Today</Text>
      <Text style={[styles.tomorrow4, styles.todayTypo]}>Tomorrow</Text>
      <View style={styles.inputFormFeild}>
        <Text style={styles.label} numberOfLines={1}>
          Search
        </Text>
      </View>
      <View style={[styles.iphoneXBarsStatusDef, styles.navigationBarPosition]}>
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
      <View style={[styles.navigationBar, styles.navigationBarPosition]}>
        <NAVExplore />
        <Pressable
          style={styles.navSearch}
          onPress={() => navigation.navigate("ScheduleScreen")}
        >
          <View style={styles.navSearchChild} />
          <View style={[styles.calendarDaysParent, styles.parentPosition]}>
            <Image
              style={[styles.calendarDaysIcon, styles.nbaIconLayout]}
              contentFit="cover"
              source={require("../assets/calendardays1.png")}
            />
            <Text style={[styles.schedule, styles.scoresPosition]}>
              Schedule
            </Text>
          </View>
        </Pressable>
        <NAVNews onNAVNewsPress={() => navigation.navigate("ScoresV5LIGHT")} />
        <Pressable
          style={styles.navSearch}
          onPress={() =>
            navigation.navigate("AccountSetupCHOOSETEAMSV5NFLLIGHT")
          }
        >
          <View style={styles.navSearchChild} />
          <View style={[styles.clipboardListParent, styles.parentPosition]}>
            <Image
              style={[styles.clipboardListIcon, styles.nbaIconLayout]}
              contentFit="cover"
              source={require("../assets/clipboardlist.png")}
            />
            <Text style={[styles.scores, styles.scoresPosition]}>Scores</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.navMenu}
          onPress={() => navigation.navigate("AccountProfileV5LIGHTDefault")}
        >
          <View style={styles.navSearchChild} />
          <View style={[styles.userRoundParent, styles.userLayout]}>
            <Image
              style={[styles.userRoundIcon, styles.userLayout]}
              contentFit="cover"
              source={require("../assets/userround.png")}
            />
            <Text style={[styles.scores, styles.scoresPosition]}>Profile</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
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
  pmFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  teamLayout: {
    height: 40,
    width: 99,
  },
  gameCardBorder: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xs,
    flexWrap: "wrap",
    width: 329,
    borderRadius: Border.br_base,
    left: "50%",
    marginLeft: -164.5,
    borderWidth: 1,
    borderColor: Color.outline,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.backgroundLight,
  },
  nbaIconLayout: {
    width: 24,
    height: 24,
  },
  brooklynNetsTypo: {
    marginLeft: 4,
    textAlign: "left",
    color: Color.textPrimary,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    display: "flex",
    fontFamily: FontFamily.poppinsRegular,
    alignItems: "center",
  },
  textTypo: {
    textAlign: "right",
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
  },
  parentFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  gameTimeFlexBox: {
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  pmSpaceBlock: {
    marginTop: 8,
    height: 24,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  todayTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  navigationBarPosition: {
    width: 375,
    left: 0,
    position: "absolute",
    backgroundColor: Color.backgroundLight,
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
  parentPosition: {
    height: 48,
    top: 24,
    position: "absolute",
  },
  scoresPosition: {
    lineHeight: 16,
    top: "66.67%",
    fontSize: FontSize.size_xs,
    textAlign: "center",
    left: "0%",
    position: "absolute",
  },
  userLayout: {
    height: "50%",
    position: "absolute",
  },
  component8Icon: {
    top: 728,
    left: 72,
    width: 20,
    height: 20,
    display: "none",
    position: "absolute",
  },
  itemCard: {
    backgroundColor: Color.outline,
  },
  nfl: {
    width: "27.27%",
    left: "36.36%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    color: Color.outlineWHITE,
    fontSize: FontSize.size_base,
    top: "14%",
    height: "66.75%",
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
    left: "32.32%",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_base,
    top: "14%",
    height: "66.75%",
    alignItems: "center",
    position: "absolute",
  },
  teamInactiveSelection1: {
    marginLeft: 8,
  },
  ncaff: {
    width: "51.52%",
    left: "24.24%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    color: Color.outlineWHITE,
    fontSize: FontSize.size_base,
    top: "14%",
    height: "66.75%",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  nhl: {
    height: "52.75%",
    width: "33.33%",
    top: "22.25%",
    left: "33.33%",
    fontFamily: FontFamily.interRegular,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.outlineWHITE,
    fontSize: FontSize.size_base,
    alignItems: "center",
    position: "absolute",
  },
  mlb: {
    marginTop: -10,
    top: "50%",
    fontFamily: FontFamily.interRegular,
    left: "32.32%",
    textAlign: "center",
    color: Color.outlineWHITE,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  categoryFilter: {
    top: 112,
    left: 24,
    alignItems: "center",
    position: "absolute",
  },
  nbaIcon: {
    height: 24,
    overflow: "hidden",
  },
  brooklynNets: {
    width: 118,
  },
  frameParent: {
    flex: 1,
  },
  text: {
    color: Color.textPrimary,
    textAlign: "right",
  },
  frameChild: {
    width: 12,
    marginLeft: 1,
    height: 11,
  },
  frameContainer: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  nbaIcon1: {
    width: 25,
    height: 24,
    overflow: "hidden",
  },
  indianaPacers: {
    width: 119,
  },
  frameView: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  frameGroup: {
    width: 172,
  },
  frameInner: {
    height: 64,
    maxWidth: "100%",
    overflow: "hidden",
  },
  pmTypo: {
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    color: Color.textPrimary,
    alignSelf: "stretch",
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
  },
  pm: {
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    color: Color.textPrimary,
    alignSelf: "stretch",
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  gameTime: {
    height: 42,
    paddingHorizontal: Padding.p_9xs,
  },
  comcastLogoIcon1703381: {
    left: 0,
    top: 0,
    height: 24,
    width: 24,
    position: "absolute",
  },
  g3Icon: {
    height: "83.33%",
    width: "38.46%",
    top: "8.33%",
    bottom: "8.33%",
    left: "61.54%",
    right: "0%",
    maxHeight: "100%",
    position: "absolute",
  },
  comcastLogoIcon1703381Parent: {
    width: 52,
  },
  streamingServices: {
    height: 49,
    paddingLeft: Padding.p_9xs,
    flex: 1,
  },
  gameScheduleCard2: {
    top: 227,
  },
  nbaIcon2: {
    height: 24,
  },
  gameScheduleCard21: {
    top: 335,
  },
  gameScheduleCard22: {
    top: 510,
  },
  gameScheduleCard23: {
    top: 618,
  },
  today: {
    top: 188,
    lineHeight: 23,
    fontSize: FontSize.size_lg,
    marginLeft: -163.5,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    color: Color.textPrimary,
    left: "50%",
    position: "absolute",
  },
  tomorrow4: {
    top: 471,
    lineHeight: 23,
    fontSize: FontSize.size_lg,
    marginLeft: -163.5,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    color: Color.textPrimary,
    left: "50%",
    position: "absolute",
  },
  label: {
    color: Color.outline,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
    overflow: "hidden",
  },
  inputFormFeild: {
    top: 68,
    width: 327,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    borderWidth: 1,
    borderColor: Color.outline,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    height: 40,
    alignItems: "center",
    flexDirection: "row",
    left: 24,
    position: "absolute",
    backgroundColor: Color.backgroundLight,
  },
  time: {
    marginTop: -9,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.sFBody,
    fontWeight: "600",
    width: 54,
    left: 0,
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
  container1: {
    marginTop: -4.8,
    right: 15,
    width: 67,
  },
  iphoneXBarsStatusDef: {
    height: 44,
    top: 0,
  },
  navSearchChild: {
    left: "0%",
    bottom: "0%",
    height: "100%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.backgroundLight,
  },
  calendarDaysIcon: {
    left: 17,
    top: 0,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  schedule: {
    color: Color.primary,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  calendarDaysParent: {
    left: 3,
    width: 57,
  },
  navSearch: {
    width: 66,
    height: 96,
  },
  clipboardListIcon: {
    left: 9,
    top: 0,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  scores: {
    color: Color.secondary,
    fontFamily: FontFamily.poppinsRegular,
    top: "66.67%",
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
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    top: "0%",
    height: "50%",
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
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_5xl,
    height: 96,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 375,
  },
  scheduleScreen: {
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundLight,
    flex: 1,
  },
});

export default ScheduleScreen;
