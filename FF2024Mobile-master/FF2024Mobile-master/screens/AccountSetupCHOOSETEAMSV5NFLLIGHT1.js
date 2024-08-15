import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const AccountSetupCHOOSETEAMSV5NFLLIGHT1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.accountSetupChooseTeamsV}>
      <View style={[styles.houRocketsParent, styles.parentPosition9]}>
        <Text style={[styles.houRockets, styles.menuTypo]}>HOU Rockets</Text>
        <Image
          style={[styles.nbaWesternSouthwest, styles.nbaLayout]}
          contentFit="cover"
          source={require("../assets/nba-western-southwest.png")}
        />
      </View>
      <View style={[styles.saSpursParent, styles.parentPosition9]}>
        <Text style={[styles.saSpurs, styles.menuTypo]}>SA Spurs</Text>
        <Image
          style={[styles.nbaWesternSouthwest1, styles.nbaLayout]}
          contentFit="cover"
          source={require("../assets/nba-western-southwest1.png")}
        />
      </View>
      <View style={[styles.norPelicansParent, styles.parentPosition9]}>
        <Text style={[styles.norPelicans, styles.menuTypo]}>NOR Pelicans</Text>
        <Image
          style={styles.nbaIcon}
          contentFit="cover"
          source={require("../assets/nba18.png")}
        />
      </View>
      <View style={[styles.dalMavericksParent, styles.parentPosition8]}>
        <Text style={[styles.dalMavericks, styles.menuTypo]}>
          DAL Mavericks
        </Text>
        <Image
          style={[styles.nbaWesternSouthwest, styles.nbaLayout]}
          contentFit="cover"
          source={require("../assets/nba-western-southwest2.png")}
        />
      </View>
      <View style={[styles.waWizardsParent, styles.parentPosition8]}>
        <Text style={[styles.waWizards, styles.menuTypo]}>WA Wizards</Text>
        <Image
          style={[styles.nbaWesternSouthwest1, styles.nbaLayout]}
          contentFit="cover"
          source={require("../assets/nba-eastern-southeast.png")}
        />
      </View>
      <View style={[styles.memGrizzliesParent, styles.parentPosition8]}>
        <Text style={[styles.memGrizzlies, styles.menuTypo]}>
          MEM Grizzlies
        </Text>
        <Image
          style={[styles.nbaWesternSouthwest, styles.nbaLayout]}
          contentFit="cover"
          source={require("../assets/nba-western-southwest3.png")}
        />
      </View>
      <View style={[styles.miaHeatParent, styles.parentPosition7]}>
        <Text style={[styles.miaHeat, styles.menuTypo]}>MIA Heat</Text>
        <Image
          style={[styles.nbaWesternSouthwest, styles.nbaLayout]}
          contentFit="cover"
          source={require("../assets/nba-eastern-southeast1.png")}
        />
      </View>
      <View style={[styles.orlMagicParent, styles.parentPosition7]}>
        <Text style={[styles.orlMagic, styles.menuTypo]}>ORL Magic</Text>
        <Image
          style={[styles.nbaWesternSouthwest1, styles.nbaLayout]}
          contentFit="cover"
          source={require("../assets/nba-eastern-southeast2.png")}
        />
      </View>
      <View style={[styles.atlHawksParent, styles.parentPosition7]}>
        <Text style={[styles.atlHawks, styles.menuTypo]}>ATL Hawks</Text>
        <Image
          style={[styles.nbaWesternSouthwest, styles.nbaLayout]}
          contentFit="cover"
          source={require("../assets/nba-eastern-southeast3.png")}
        />
      </View>
      <View style={[styles.laLakersParent, styles.parentPosition6]}>
        <Text style={[styles.laLakers, styles.menuTypo]}>LA Lakers</Text>
        <Image
          style={[styles.nbaWesternSouthwest, styles.nbaLayout]}
          contentFit="cover"
          source={require("../assets/nba-western-pacific.png")}
        />
      </View>
      <View style={[styles.laClippersParent, styles.parentPosition6]}>
        <Text style={[styles.laClippers, styles.menuTypo]}>LA Clippers</Text>
        <Image
          style={[styles.nbaWesternSouthwest, styles.nbaLayout]}
          contentFit="cover"
          source={require("../assets/nba-western-pacific1.png")}
        />
      </View>
      <View style={[styles.chaHornetsParent, styles.parentPosition6]}>
        <Text style={[styles.houRockets, styles.menuTypo]}>CHA Hornets</Text>
        <Image
          style={[styles.nbaWesternSouthwest, styles.nbaLayout]}
          contentFit="cover"
          source={require("../assets/nba-eastern-southeast4.png")}
        />
      </View>
      <View style={[styles.golWarriorsParent, styles.parentPosition5]}>
        <Text style={[styles.golWarriors, styles.menuTypo]}>GOL Warriors</Text>
        <Image
          style={[styles.nbaWesternSouthwest1, styles.nbaLayout]}
          contentFit="cover"
          source={require("../assets/nba-western-pacific2.png")}
        />
      </View>
      <View style={[styles.sacKingsParent, styles.parentPosition5]}>
        <Text style={[styles.orlMagic, styles.menuTypo]}>SAC Kings</Text>
        <Image
          style={[styles.nbaWesternSouthwest1, styles.nbaLayout]}
          contentFit="cover"
          source={require("../assets/nba-western-pacific3.png")}
        />
      </View>
      <View style={[styles.phoSunsParent, styles.parentPosition5]}>
        <Text style={[styles.phoSuns, styles.menuTypo]}>PHO Suns</Text>
        <Image
          style={[styles.nbaWesternSouthwest, styles.nbaLayout]}
          contentFit="cover"
          source={require("../assets/nba-western-pacific4.png")}
        />
      </View>
      <View style={[styles.chiBullsParent, styles.parentPosition4]}>
        <Text style={[styles.saSpurs, styles.menuTypo]}>CHI Bulls</Text>
        <Image
          style={[styles.nbaWesternSouthwest, styles.nbaLayout]}
          contentFit="cover"
          source={require("../assets/nba-eastern-central2.png")}
        />
      </View>
      <View style={[styles.nyKnicksParent, styles.parentPosition4]}>
        <Text style={[styles.phoSuns, styles.menuTypo]}>NY Knicks</Text>
        <Image
          style={[styles.nbaWesternSouthwest, styles.nbaLayout]}
          contentFit="cover"
          source={require("../assets/nba-eastern-atlantic3.png")}
        />
      </View>
      <View style={[styles.milBucksParent, styles.parentPosition4]}>
        <Text style={[styles.phoSuns, styles.menuTypo]}>MIL Bucks</Text>
        <Image
          style={[styles.nbaWesternSouthwest, styles.nbaLayout]}
          contentFit="cover"
          source={require("../assets/nba-eastern-central3.png")}
        />
      </View>
      <View style={[styles.bosCelticsParent, styles.parentPosition3]}>
        <Text style={[styles.laClippers, styles.menuTypo]}>BOS Celtics</Text>
        <Image
          style={[styles.nbaWesternSouthwest1, styles.nbaLayout]}
          contentFit="cover"
          source={require("../assets/nba-eastern-atlantic4.png")}
        />
      </View>
      <View style={[styles.torRaptorsParent, styles.parentPosition3]}>
        <Text style={[styles.torRaptors, styles.menuTypo]}>TOR Raptors</Text>
        <Image
          style={[styles.nbaWesternSouthwest, styles.nbaLayout]}
          contentFit="cover"
          source={require("../assets/nba-eastern-atlantic5.png")}
        />
      </View>
      <View style={[styles.brokNetsParent, styles.parentPosition2]}>
        <Text style={[styles.orlMagic, styles.menuTypo]}>BROK Nets</Text>
        <Image
          style={[styles.nbaWesternSouthwest, styles.nbaLayout]}
          contentFit="cover"
          source={require("../assets/nba-eastern-atlantic6.png")}
        />
      </View>
      <View style={[styles.detPistonsParent, styles.parentPosition1]}>
        <Text style={[styles.laClippers, styles.menuTypo]}>DET Pistons</Text>
        <Image
          style={[styles.nbaWesternSouthwest, styles.nbaLayout]}
          contentFit="cover"
          source={require("../assets/nba-eastern-central4.png")}
        />
      </View>
      <View style={[styles.indPacersParent, styles.parentPosition1]}>
        <Text style={[styles.atlHawks, styles.menuTypo]}>IND Pacers</Text>
        <Image
          style={[styles.nbaWesternSouthwest1, styles.nbaLayout]}
          contentFit="cover"
          source={require("../assets/nba-eastern-central5.png")}
        />
      </View>
      <View style={[styles.clvCavaliersParent, styles.parentPosition1]}>
        <Text style={[styles.clvCavaliers, styles.menuTypo]}>
          CLV Cavaliers
        </Text>
        <Image
          style={[styles.nbaWesternSouthwest, styles.nbaLayout]}
          contentFit="cover"
          source={require("../assets/nba-eastern-central6.png")}
        />
      </View>
      <View style={[styles.prtTrialBlazersParent, styles.prtPosition]}>
        <Text style={[styles.prtTrialBlazers, styles.prtPosition]}>
          PRT Trial Blazers
        </Text>
        <Image
          style={[styles.nbaWesternNorthwest, styles.menuIconPosition]}
          contentFit="cover"
          source={require("../assets/nba-western-northwest.png")}
        />
      </View>
      <View style={[styles.phil76ersParent, styles.parentPosition3]}>
        <Text style={[styles.phil76ers, styles.menuTypo]}>PHIL 76ers</Text>
        <Image
          style={[styles.nbaWesternSouthwest, styles.nbaLayout]}
          contentFit="cover"
          source={require("../assets/nba-eastern-atlantic7.png")}
        />
      </View>
      <View style={[styles.denNuggetsParent, styles.parentPosition2]}>
        <Text style={[styles.golWarriors, styles.menuTypo]}>DEN Nuggets</Text>
        <Image
          style={[styles.nbaWesternSouthwest, styles.nbaLayout]}
          contentFit="cover"
          source={require("../assets/nba-western-northwest1.png")}
        />
      </View>
      <View style={[styles.okcThunderParent, styles.parentPosition]}>
        <Text style={[styles.memGrizzlies, styles.menuTypo]}>OKC Thunder</Text>
        <Image
          style={[styles.nbaWesternSouthwest, styles.nbaLayout]}
          contentFit="cover"
          source={require("../assets/nba-western-northwest2.png")}
        />
      </View>
      <View style={[styles.minTimberParent, styles.parentPosition]}>
        <Text style={[styles.laClippers, styles.menuTypo]}>MIN Timber</Text>
        <Image
          style={[styles.nbaWesternSouthwest, styles.nbaLayout]}
          contentFit="cover"
          source={require("../assets/nba-western-northwest3.png")}
        />
      </View>
      <View style={[styles.utaJazzParent, styles.parentPosition]}>
        <Text style={[styles.saSpurs, styles.menuTypo]}>UTA Jazz</Text>
        <Image
          style={[styles.nbaWesternSouthwest, styles.nbaLayout]}
          contentFit="cover"
          source={require("../assets/nba-western-northwest4.png")}
        />
      </View>
      <View
        style={[styles.accountSetupChooseTeamsVChild, styles.tabsPosition]}
      />
      <View style={[styles.tabs, styles.tabsPosition]}>
        <View style={[styles.categoryFilter, styles.categoryFilterFlexBox]}>
          <Pressable
            style={[styles.teamInactiveSelection, styles.teamLayout]}
            onPress={() =>
              navigation.navigate("AccountSetupCHOOSETEAMSV5NFLLIGHT")
            }
          >
            <View style={[styles.itemCard, styles.cardItemPosition]} />
            <Text style={[styles.nfl, styles.nflFlexBox]}>NFL</Text>
          </Pressable>
          <View style={[styles.teamInactiveSelection1, styles.teamLayout]}>
            <View style={[styles.itemCard1, styles.cardItemPosition]} />
            <Text style={styles.nba}>NBA</Text>
          </View>
          <View style={[styles.teamInactiveSelection1, styles.teamLayout]}>
            <View style={[styles.itemCard, styles.cardItemPosition]} />
            <Text style={[styles.ncaff, styles.nflFlexBox]}>NCAFF</Text>
          </View>
          <View style={[styles.teamInactiveSelection1, styles.teamLayout]}>
            <View style={[styles.itemCard, styles.cardItemPosition]} />
            <Text style={styles.nhl}>NHL</Text>
          </View>
          <View style={[styles.teamInactiveSelection1, styles.teamLayout]}>
            <View style={[styles.itemCard, styles.cardItemPosition]} />
            <Text style={[styles.mlb, styles.mlbPosition]}>MLB</Text>
          </View>
        </View>
        <View style={[styles.inputFormFeild, styles.buttonXlrgLayout]}>
          <Text style={styles.label} numberOfLines={1}>
            Search
          </Text>
        </View>
        <View style={[styles.tabSwitcher, styles.buttonXlrgLayout]}>
          <View style={[styles.batteryLevel, styles.batteryLevelPosition]}>
            <View style={styles.cardItemPosition}>
              <View style={[styles.card, styles.cardBorder]} />
            </View>
          </View>
          <Text style={[styles.college, styles.mlbPosition]}>College</Text>
          <View style={[styles.buttonActive, styles.batteryLevelPosition]}>
            <View style={styles.cardItemPosition}>
              <View style={styles.cardItemPosition}>
                <View style={[styles.card1, styles.cardItemPosition]} />
              </View>
            </View>
            <Text style={[styles.professional, styles.buttonTypo]}>
              Professional
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.tabSwitcher, styles.buttonXlrgLayout]}>
        <Text style={[styles.selectYourSport, styles.buttonXlrgLayout]}>
          Select your Sport Teams!
        </Text>
      </View>
      <Pressable
        style={[styles.buttonXlrg, styles.buttonXlrgLayout]}
        onPress={() => navigation.navigate("ScoresV5LIGHT")}
      >
        <Text style={[styles.button, styles.buttonTypo]}>Confirm</Text>
      </Pressable>
      <View style={[styles.iphoneXBarsStatusDef, styles.tabsPosition]}>
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
      <View style={[styles.navbar, styles.navbarLayout]}>
        <View style={[styles.navbarChild, styles.navbarLayout]} />
        <View style={[styles.navMenu, styles.navLayout1]}>
          <View style={[styles.navMenuChild, styles.navLayout1]} />
          <View style={[styles.menuParent, styles.parentLayout]}>
            <Image
              style={[styles.menuIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/menu1.png")}
            />
            <Text style={[styles.menu, styles.menuPosition]}>Menu</Text>
          </View>
        </View>
        <View style={[styles.navTeams, styles.navLayout]}>
          <View style={[styles.navTeamsChild, styles.navLayout]} />
          <View style={[styles.userRoundParent, styles.parentLayout]}>
            <Image
              style={[styles.userRoundIcon, styles.homeParentPosition]}
              contentFit="cover"
              source={require("../assets/userround1.png")}
            />
            <Text style={[styles.teams, styles.menuPosition]}>Teams</Text>
          </View>
        </View>
        <View style={[styles.navNews, styles.navLayout1]}>
          <View style={[styles.navMenuChild, styles.navLayout1]} />
          <View style={[styles.newspaperParent, styles.parentLayout]}>
            <Image
              style={[styles.newspaperIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/newspaper.png")}
            />
            <Text style={[styles.menu, styles.menuPosition]}>News</Text>
          </View>
        </View>
        <View style={[styles.navSearch, styles.navLayout]}>
          <View style={[styles.navTeamsChild, styles.navLayout]} />
          <View style={[styles.searchParent, styles.parentLayout]}>
            <Image
              style={[styles.searchIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/search.png")}
            />
            <Text style={[styles.menu, styles.menuPosition]}>Search</Text>
          </View>
        </View>
        <View style={[styles.navExplore, styles.navLayout1]}>
          <View style={[styles.navMenuChild, styles.navLayout1]} />
          <View style={[styles.homeParent, styles.homeParentPosition]}>
            <Image
              style={[styles.userRoundIcon, styles.homeParentPosition]}
              contentFit="cover"
              source={require("../assets/home1.png")}
            />
            <Text style={[styles.explore, styles.menuPosition]}>Explore</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition9: {
    bottom: "78.49%",
    width: 85,
    left: "50%",
    position: "absolute",
  },
  menuTypo: {
    color: Color.secondary,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  nbaLayout: {
    height: 85,
    top: 0,
    width: 85,
    overflow: "hidden",
  },
  parentPosition8: {
    bottom: "71.51%",
    top: "22.4%",
    left: "50%",
    height: "6.09%",
    position: "absolute",
  },
  parentPosition7: {
    bottom: "64.53%",
    top: "29.39%",
    width: 85,
    left: "50%",
    height: "6.09%",
    position: "absolute",
  },
  parentPosition6: {
    bottom: "57.54%",
    top: "36.37%",
    width: 85,
    left: "50%",
    height: "6.09%",
    position: "absolute",
  },
  parentPosition5: {
    bottom: "50.56%",
    top: "43.35%",
    width: 85,
    left: "50%",
    height: "6.09%",
    position: "absolute",
  },
  parentPosition4: {
    bottom: "36.59%",
    top: "57.32%",
    width: 85,
    left: "50%",
    height: "6.09%",
    position: "absolute",
  },
  parentPosition3: {
    bottom: "29.61%",
    top: "64.3%",
    width: 85,
    left: "50%",
    height: "6.09%",
    position: "absolute",
  },
  parentPosition2: {
    bottom: "22.63%",
    top: "71.28%",
    height: "6.09%",
  },
  parentPosition1: {
    bottom: "43.58%",
    top: "50.34%",
    width: 85,
    left: "50%",
    height: "6.09%",
    position: "absolute",
  },
  prtPosition: {
    marginLeft: -48.5,
    left: "50%",
    position: "absolute",
  },
  menuIconPosition: {
    left: 6,
    position: "absolute",
  },
  parentPosition: {
    bottom: "15.64%",
    top: "78.27%",
    width: 85,
    left: "50%",
    height: "6.09%",
    position: "absolute",
  },
  tabsPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  categoryFilterFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  teamLayout: {
    width: 99,
    height: 40,
  },
  cardItemPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  nflFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  mlbPosition: {
    marginTop: -10,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    top: "50%",
    textAlign: "center",
    position: "absolute",
  },
  buttonXlrgLayout: {
    width: 327,
    position: "absolute",
  },
  batteryLevelPosition: {
    width: "50%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  cardBorder: {
    borderWidth: 1,
    borderColor: Color.outline,
    borderStyle: "solid",
    backgroundColor: Color.backgroundLight,
  },
  buttonTypo: {
    fontFamily: FontFamily.interBold,
    color: Color.backgroundLight,
    fontWeight: "700",
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
  navbarLayout: {
    height: 96,
    width: 375,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 18,
    },
    left: 0,
    position: "absolute",
  },
  navLayout1: {
    width: 65,
    height: 96,
    top: 0,
    position: "absolute",
  },
  parentLayout: {
    height: 48,
    top: 24,
  },
  iconLayout: {
    height: 24,
    width: 24,
    top: 0,
    overflow: "hidden",
  },
  menuPosition: {
    top: "66.67%",
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  navLayout: {
    width: 66,
    height: 96,
    top: 0,
    position: "absolute",
  },
  homeParentPosition: {
    left: 10,
    position: "absolute",
  },
  houRockets: {
    marginLeft: -38.5,
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: "85.32%",
    left: "50%",
    position: "absolute",
  },
  nbaWesternSouthwest: {
    left: "50%",
    marginLeft: -42.5,
    position: "absolute",
  },
  houRocketsParent: {
    width: 85,
    left: "50%",
    top: "15.42%",
    height: "6.09%",
    bottom: "78.49%",
    marginLeft: -42.5,
  },
  saSpurs: {
    marginLeft: -26.5,
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: "85.32%",
    left: "50%",
    position: "absolute",
  },
  nbaWesternSouthwest1: {
    left: 0,
    position: "absolute",
  },
  saSpursParent: {
    marginLeft: 78.5,
    width: 85,
    left: "50%",
    top: "15.42%",
    height: "6.09%",
    bottom: "78.49%",
  },
  norPelicans: {
    marginLeft: -40.45,
    top: "83.67%",
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  nbaIcon: {
    height: "64.69%",
    bottom: "35.31%",
    maxWidth: "100%",
    maxHeight: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  norPelicansParent: {
    height: "5.47%",
    top: "16.03%",
    marginLeft: -163.5,
    width: 85,
    left: "50%",
  },
  dalMavericks: {
    marginLeft: -43.5,
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: "85.32%",
    left: "50%",
    position: "absolute",
  },
  dalMavericksParent: {
    width: 87,
    marginLeft: -43.5,
  },
  waWizards: {
    marginLeft: -36.5,
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: "85.32%",
    left: "50%",
    position: "absolute",
  },
  waWizardsParent: {
    marginLeft: 78.5,
    width: 85,
  },
  memGrizzlies: {
    marginLeft: -40.5,
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: "85.32%",
    left: "50%",
    position: "absolute",
  },
  memGrizzliesParent: {
    marginLeft: -163.5,
    width: 85,
  },
  miaHeat: {
    marginLeft: -27.5,
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: "85.32%",
    left: "50%",
    position: "absolute",
  },
  miaHeatParent: {
    marginLeft: -42.5,
  },
  orlMagic: {
    marginLeft: -31.5,
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: "85.32%",
    left: "50%",
    position: "absolute",
  },
  orlMagicParent: {
    marginLeft: 78.5,
  },
  atlHawks: {
    marginLeft: -32.5,
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: "85.32%",
    left: "50%",
    position: "absolute",
  },
  atlHawksParent: {
    marginLeft: -163.5,
  },
  laLakers: {
    marginLeft: -28.5,
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: "85.32%",
    left: "50%",
    position: "absolute",
  },
  laLakersParent: {
    marginLeft: -42.5,
  },
  laClippers: {
    marginLeft: -34.5,
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: "85.32%",
    left: "50%",
    position: "absolute",
  },
  laClippersParent: {
    marginLeft: 78.5,
  },
  chaHornetsParent: {
    marginLeft: -163.5,
  },
  golWarriors: {
    marginLeft: -39.5,
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: "85.32%",
    left: "50%",
    position: "absolute",
  },
  golWarriorsParent: {
    marginLeft: -42.5,
  },
  sacKingsParent: {
    marginLeft: 78.5,
  },
  phoSuns: {
    marginLeft: -29.5,
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: "85.32%",
    left: "50%",
    position: "absolute",
  },
  phoSunsParent: {
    marginLeft: -163.5,
  },
  chiBullsParent: {
    marginLeft: -42.5,
  },
  nyKnicksParent: {
    marginLeft: 78.5,
  },
  milBucksParent: {
    marginLeft: -163.5,
  },
  bosCelticsParent: {
    marginLeft: -42.5,
  },
  torRaptors: {
    marginLeft: -37.5,
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: "85.32%",
    left: "50%",
    position: "absolute",
  },
  torRaptorsParent: {
    marginLeft: -162.5,
  },
  brokNetsParent: {
    marginLeft: -163.5,
    width: 85,
    left: "50%",
    position: "absolute",
  },
  detPistonsParent: {
    marginLeft: -42.5,
  },
  indPacersParent: {
    marginLeft: 78.5,
  },
  clvCavaliers: {
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: "85.32%",
    left: "50%",
    marginLeft: -42.5,
    position: "absolute",
  },
  clvCavaliersParent: {
    marginLeft: -163.5,
  },
  prtTrialBlazers: {
    textAlign: "center",
    color: Color.secondary,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: "85.32%",
  },
  nbaWesternNorthwest: {
    height: 85,
    top: 0,
    width: 85,
    overflow: "hidden",
  },
  prtTrialBlazersParent: {
    width: 97,
    bottom: "22.63%",
    top: "71.28%",
    height: "6.09%",
  },
  phil76ers: {
    marginLeft: -30.5,
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: "85.32%",
    left: "50%",
    position: "absolute",
  },
  phil76ersParent: {
    marginLeft: 78.5,
  },
  denNuggetsParent: {
    marginLeft: 77.5,
    width: 85,
    left: "50%",
    position: "absolute",
  },
  okcThunderParent: {
    marginLeft: -163.5,
  },
  minTimberParent: {
    marginLeft: 78.5,
  },
  utaJazzParent: {
    marginLeft: -42.5,
  },
  accountSetupChooseTeamsVChild: {
    top: 54,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    backgroundColor: Color.colorGainsboro,
    height: 198,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 18,
    },
    width: 375,
    elevation: 16,
    shadowRadius: 16,
  },
  itemCard: {
    backgroundColor: Color.outline,
    borderRadius: Border.br_5xs,
  },
  nfl: {
    width: "27.27%",
    left: "36.36%",
    display: "flex",
    color: Color.outlineWHITE,
    top: "14%",
    height: "66.75%",
    justifyContent: "center",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
  },
  teamInactiveSelection: {
    height: 40,
  },
  itemCard1: {
    backgroundColor: Color.primary,
    borderRadius: Border.br_5xs,
  },
  nba: {
    width: "35.35%",
    color: Color.backgroundLight,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: "32.32%",
    justifyContent: "center",
    display: "flex",
    fontSize: FontSize.size_base,
    top: "14%",
    height: "66.75%",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
  },
  teamInactiveSelection1: {
    marginLeft: 8,
    height: 40,
  },
  ncaff: {
    width: "51.52%",
    left: "24.24%",
    display: "flex",
    color: Color.outlineWHITE,
    top: "14%",
    height: "66.75%",
    justifyContent: "center",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    textAlign: "center",
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
    color: Color.outlineWHITE,
    fontSize: FontSize.size_base,
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
  },
  mlb: {
    left: "32.32%",
    marginTop: -10,
    color: Color.outlineWHITE,
  },
  categoryFilter: {
    marginTop: 52,
    top: "50%",
    alignItems: "center",
    marginLeft: -163.5,
    left: "50%",
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
    top: 112,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    borderWidth: 1,
    borderColor: Color.outline,
    borderStyle: "solid",
    backgroundColor: Color.backgroundLight,
    left: 24,
    borderRadius: Border.br_5xs,
    height: 40,
    alignItems: "center",
    flexDirection: "row",
  },
  card: {
    borderTopRightRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  batteryLevel: {
    right: "0%",
    left: "50%",
  },
  college: {
    marginLeft: 52.5,
    color: Color.primary,
    left: "50%",
  },
  card1: {
    borderTopLeftRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    backgroundColor: Color.primary,
  },
  professional: {
    top: "22.22%",
    left: "20.18%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interBold,
    position: "absolute",
  },
  buttonActive: {
    right: "50%",
    left: "0%",
  },
  tabSwitcher: {
    top: 68,
    height: 36,
    marginLeft: -163.5,
    left: "50%",
  },
  tabs: {
    top: 44,
    height: 216,
    backgroundColor: Color.backgroundLight,
  },
  selectYourSport: {
    fontSize: FontSize.size_5xl,
    color: Color.textPrimary,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    width: 327,
    marginLeft: -163.5,
    top: 0,
    left: "50%",
  },
  button: {
    fontSize: FontSize.size_lg,
  },
  buttonXlrg: {
    top: 701,
    height: 64,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
    left: 24,
    backgroundColor: Color.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    width: 327,
  },
  time: {
    marginTop: -9,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.sFBody,
    fontWeight: "600",
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
    backgroundColor: Color.backgroundLight,
  },
  navbarChild: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    top: 0,
    backgroundColor: Color.backgroundLight,
  },
  navMenuChild: {
    left: 0,
    backgroundColor: Color.backgroundLight,
  },
  menuIcon: {
    left: 6,
    position: "absolute",
  },
  menu: {
    left: "0%",
    color: Color.secondary,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  menuParent: {
    left: 15,
    width: 34,
    position: "absolute",
  },
  navMenu: {
    left: 286,
  },
  navTeamsChild: {
    left: 0,
    backgroundColor: Color.backgroundLight,
  },
  userRoundIcon: {
    height: 24,
    width: 24,
    top: 0,
    overflow: "hidden",
  },
  teams: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: Color.primary,
    left: "0%",
  },
  userRoundParent: {
    left: 12,
    width: 42,
    position: "absolute",
  },
  navTeams: {
    left: 220,
  },
  newspaperIcon: {
    left: 5,
    position: "absolute",
  },
  newspaperParent: {
    left: 16,
    width: 33,
    position: "absolute",
  },
  navNews: {
    left: 155,
  },
  searchIcon: {
    left: 9,
    position: "absolute",
  },
  searchParent: {
    left: 11,
    width: 43,
    position: "absolute",
  },
  navSearch: {
    left: 89,
  },
  explore: {
    marginLeft: -22,
    color: Color.secondary,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
  },
  homeParent: {
    width: 44,
    height: 48,
    top: 24,
  },
  navExplore: {
    left: 24,
  },
  navbar: {
    top: 716,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    display: "none",
    elevation: 16,
    shadowRadius: 16,
    height: 96,
  },
  accountSetupChooseTeamsV: {
    flex: 1,
    height: 1790,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.backgroundLight,
  },
});

export default AccountSetupCHOOSETEAMSV5NFLLIGHT1;
