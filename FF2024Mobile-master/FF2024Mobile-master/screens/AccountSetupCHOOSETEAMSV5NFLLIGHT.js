import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const AccountSetupCHOOSETEAMSV5NFLLIGHT = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.accountSetupChooseTeamsV}>
      <View style={[styles.groupParent, styles.parentLayout1]}>
        <View style={styles.miaDolphinsParent}>
          <Text style={[styles.miaDolphins, styles.menuTypo]}>
            MIA Dolphins
          </Text>
          <Image
            style={[styles.nflAfcEast, styles.nflPosition2]}
            contentFit="cover"
            source={require("../assets/nfl-afc-east.png")}
          />
        </View>
        <View style={styles.instanceChild} />
      </View>
      <View style={[styles.nyJetsParent, styles.parentLayout1]}>
        <Text style={[styles.nyJets, styles.nyJetsTypo]}>NY Jets</Text>
        <Image
          style={styles.nflPosition1}
          contentFit="cover"
          source={require("../assets/nfl-afc-east1.png")}
        />
        <View style={styles.instanceChild} />
      </View>
      <View style={[styles.nePatriotsParent, styles.parentLayout1]}>
        <Text style={[styles.nePatriots, styles.nyJetsTypo]}>NE Patriots</Text>
        <Image
          style={styles.nflPosition1}
          contentFit="cover"
          source={require("../assets/nfl-afc-east2.png")}
        />
        <View style={styles.instanceChild} />
      </View>
      <View style={[styles.rectangleParent, styles.rectanglePosition]}>
        <View style={[styles.rectangleView, styles.cardItemPosition]} />
        <Text style={[styles.buffaloBills, styles.nyJetsTypo]}>
          Buffalo Bills
        </Text>
        <Image
          style={styles.nflAfcEast3}
          contentFit="cover"
          source={require("../assets/nfl-afc-east3.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
        <View style={[styles.rectangleView, styles.cardItemPosition]} />
        <Text style={[styles.buffaloBills, styles.nyJetsTypo]}>BAL Ravens</Text>
        <Image
          style={styles.nflAfcEast3}
          contentFit="cover"
          source={require("../assets/nfl-afc-north.png")}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
        <View style={[styles.rectangleView, styles.cardItemPosition]} />
        <Text style={[styles.cinBengals, styles.nyJetsTypo]}>CIN Bengals</Text>
        <Image
          style={[styles.nflAfcNorth1, styles.nflPosition1]}
          contentFit="cover"
          source={require("../assets/nfl-afc-north1.png")}
        />
      </View>
      <View style={[styles.clvBrownsParent, styles.parentPosition8]}>
        <Text style={[styles.clvBrowns, styles.menuTypo]}>CLV Browns</Text>
        <Image
          style={[styles.nflAfcNorth2, styles.nflLayout]}
          contentFit="cover"
          source={require("../assets/nfl-afc-north2.png")}
        />
      </View>
      <View style={[styles.pittSteelersParent, styles.parentPosition8]}>
        <Text style={[styles.pittSteelers, styles.menuTypo]}>
          PITT Steelers
        </Text>
        <Image
          style={[styles.nflAfcNorth3, styles.nflLayout]}
          contentFit="cover"
          source={require("../assets/nfl-afc-north3.png")}
        />
      </View>
      <View style={[styles.houTexansParent, styles.parentPosition8]}>
        <Text style={[styles.houTexans, styles.menuTypo]}>HOU Texans</Text>
        <Image
          style={[styles.nflAfcNorth2, styles.nflLayout]}
          contentFit="cover"
          source={require("../assets/nfl-afc-south.png")}
        />
      </View>
      <View style={[styles.indColtsParent, styles.parentPosition7]}>
        <Text style={[styles.indColts, styles.menuTypo]}>IND Colts</Text>
        <Image
          style={[styles.nflAfcNorth2, styles.nflLayout]}
          contentFit="cover"
          source={require("../assets/nfl-afc-south1.png")}
        />
      </View>
      <View style={[styles.chiBearsParent, styles.parentPosition6]}>
        <Text style={[styles.chiBears, styles.menuTypo]}>CHI Bears</Text>
        <Image
          style={[styles.nflNfcNorth, styles.nflPosition2]}
          contentFit="cover"
          source={require("../assets/nfl-nfc-north.png")}
        />
      </View>
      <View style={[styles.jackJaguarsParent, styles.parentPosition7]}>
        <Text style={[styles.jackJaguars, styles.menuTypo]}>JACK Jaguars</Text>
        <Image
          style={[styles.nflAfcSouth2, styles.nflLayout]}
          contentFit="cover"
          source={require("../assets/nfl-afc-south2.png")}
        />
      </View>
      <View style={[styles.tenTitansParent, styles.parentPosition7]}>
        <Text style={[styles.tenTitans, styles.menuTypo]}>TEN Titans</Text>
        <Image
          style={[styles.nflAfcNorth2, styles.nflLayout]}
          contentFit="cover"
          source={require("../assets/nfl-afc-south3.png")}
        />
      </View>
      <View style={[styles.denBroncosParent, styles.parentPosition5]}>
        <Text style={[styles.pittSteelers, styles.menuTypo]}>DEN Broncos</Text>
        <Image
          style={[styles.nflAfcNorth3, styles.nflLayout]}
          contentFit="cover"
          source={require("../assets/nfl-afc-west.png")}
        />
      </View>
      <View style={[styles.cityChiefsParent, styles.parentPosition5]}>
        <Text style={[styles.cityChiefs, styles.menuTypo]}>City Chiefs</Text>
        <Image
          style={[styles.nflAfcNorth3, styles.nflLayout]}
          contentFit="cover"
          source={require("../assets/nfl-afc-west1.png")}
        />
      </View>
      <View style={[styles.laChargersParent, styles.parentPosition5]}>
        <Text style={[styles.laChargers, styles.menuTypo]}>LA Chargers</Text>
        <Image
          style={[styles.nflAfcNorth2, styles.nflLayout]}
          contentFit="cover"
          source={require("../assets/nfl-afc-west2.png")}
        />
      </View>
      <View style={[styles.deLionsParent, styles.parentPosition4]}>
        <Text style={[styles.deLions, styles.menuTypo]}>DE Lions</Text>
        <Image
          style={[styles.nflAfcNorth2, styles.nflLayout]}
          contentFit="cover"
          source={require("../assets/nfl-nfc-north1.png")}
        />
      </View>
      <View style={[styles.gbPackersParent, styles.parentPosition4]}>
        <Text style={[styles.gbPackers, styles.menuTypo]}>GB Packers</Text>
        <Image
          style={[styles.nflAfcNorth2, styles.nflLayout]}
          contentFit="cover"
          source={require("../assets/nfl-nfc-north2.png")}
        />
      </View>
      <View style={[styles.minVikingsParent, styles.parentPosition4]}>
        <Text style={[styles.clvBrowns, styles.menuTypo]}>MIN Vikings</Text>
        <Image
          style={[styles.nflAfcNorth2, styles.nflLayout]}
          contentFit="cover"
          source={require("../assets/nfl-nfc-north3.png")}
        />
      </View>
      <View style={[styles.atlFalconsParent, styles.parentPosition3]}>
        <Text style={[styles.clvBrowns, styles.menuTypo]}>ATL Falcons</Text>
        <Image
          style={[styles.nflAfcNorth3, styles.nflLayout]}
          contentFit="cover"
          source={require("../assets/nfl-nfc-south.png")}
        />
      </View>
      <View style={[styles.carPanthersParent, styles.parentPosition3]}>
        <Text style={[styles.carPanthers, styles.menuTypo]}>CAR Panthers</Text>
        <Image
          style={[styles.nflAfcNorth3, styles.nflLayout]}
          contentFit="cover"
          source={require("../assets/nfl-nfc-south1.png")}
        />
      </View>
      <View style={[styles.norSaintsParent, styles.parentPosition3]}>
        <Text style={[styles.cityChiefs, styles.menuTypo]}>NOR Saints</Text>
        <Image
          style={[styles.nflAfcNorth2, styles.nflLayout]}
          contentFit="cover"
          source={require("../assets/nfl-nfc-south2.png")}
        />
      </View>
      <View style={[styles.tamBuccaneersParent, styles.parentPosition2]}>
        <Text style={[styles.tamBuccaneers, styles.menuTypo]}>
          TAM Buccaneers
        </Text>
        <Image
          style={[styles.nflAfcNorth2, styles.nflLayout]}
          contentFit="cover"
          source={require("../assets/nfl-nfc-south3.png")}
        />
      </View>
      <View style={[styles.laRaidersParent, styles.parentPosition1]}>
        <Text style={[styles.tenTitans, styles.menuTypo]}>LA Raiders</Text>
        <Image
          style={[styles.nflAfcNorth2, styles.nflLayout]}
          contentFit="cover"
          source={require("../assets/nfl-afc-west3.png")}
        />
      </View>
      <View style={[styles.dalCowboysParent, styles.parentPosition1]}>
        <Text style={[styles.carPanthers, styles.menuTypo]}>DAL Cowboys</Text>
        <Image
          style={[styles.nflAfcNorth3, styles.nflLayout]}
          contentFit="cover"
          source={require("../assets/nfl-nfc-east.png")}
        />
      </View>
      <View style={[styles.nyGiantsParent, styles.parentPosition1]}>
        <Text style={[styles.chiBears, styles.menuTypo]}>NY Giants</Text>
        <Image
          style={[styles.nflAfcNorth2, styles.nflLayout]}
          contentFit="cover"
          source={require("../assets/nfl-nfc-east1.png")}
        />
      </View>
      <View style={[styles.philEaglesParent, styles.parentPosition6]}>
        <Text style={[styles.cityChiefs, styles.menuTypo]}>PHIL Eagles</Text>
        <Image
          style={[styles.nflAfcNorth2, styles.nflLayout]}
          contentFit="cover"
          source={require("../assets/nfl-nfc-east2.png")}
        />
      </View>
      <View style={[styles.commandersParent, styles.parentPosition6]}>
        <Text style={[styles.commanders, styles.menuTypo]}>Commanders</Text>
        <Image
          style={[styles.nflAfcNorth2, styles.nflLayout]}
          contentFit="cover"
          source={require("../assets/nfl-nfc-east3.png")}
        />
      </View>
      <View style={[styles.ariCardinalsParent, styles.parentPosition2]}>
        <Text style={[styles.carPanthers, styles.menuTypo]}>ARI Cardinals</Text>
        <Image
          style={[styles.nflAfcNorth3, styles.nflLayout]}
          contentFit="cover"
          source={require("../assets/nfl.png")}
        />
      </View>
      <View style={[styles.laRamsParent, styles.parentPosition2]}>
        <Text style={[styles.laRams, styles.menuTypo]}>LA Rams</Text>
        <Image
          style={[styles.nflAfcNorth2, styles.nflLayout]}
          contentFit="cover"
          source={require("../assets/nfl1.png")}
        />
      </View>
      <View style={[styles.seaSeahawksParent, styles.parentPosition]}>
        <Text style={[styles.seaSeahawks, styles.menuTypo]}>SEA Seahawks</Text>
        <Image
          style={[styles.nflAfcNorth2, styles.nflLayout]}
          contentFit="cover"
          source={require("../assets/nfl2.png")}
        />
      </View>
      <View style={[styles.san49ersParent, styles.parentPosition]}>
        <Text style={[styles.tenTitans, styles.menuTypo]}>SAN 49ers</Text>
        <Image
          style={[styles.nflAfcNorth2, styles.nflLayout]}
          contentFit="cover"
          source={require("../assets/nfl3.png")}
        />
      </View>
      <View
        style={[styles.accountSetupChooseTeamsVChild, styles.tabsPosition]}
      />
      <View style={[styles.tabs, styles.tabsPosition]}>
        <View style={[styles.categoryFilter, styles.categoryFilterFlexBox]}>
          <View style={[styles.teamActiveSelection, styles.teamLayout]}>
            <View style={[styles.itemCard, styles.cardItemPosition]} />
            <Text style={[styles.nfl, styles.nflFlexBox]}>NFL</Text>
          </View>
          <Pressable
            style={[styles.teamInactiveSelection, styles.teamLayout]}
            onPress={() =>
              navigation.navigate("AccountSetupCHOOSETEAMSV5NFLLIGHT1")
            }
          >
            <View style={[styles.itemCard1, styles.cardItemPosition]} />
            <Text style={styles.nba}>NBA</Text>
          </Pressable>
          <View style={[styles.teamInactiveSelection, styles.teamLayout]}>
            <View style={[styles.itemCard1, styles.cardItemPosition]} />
            <Text style={[styles.ncaff, styles.nflFlexBox]}>NCAFF</Text>
          </View>
          <View style={[styles.teamInactiveSelection, styles.teamLayout]}>
            <View style={[styles.itemCard1, styles.cardItemPosition]} />
            <Text style={styles.nhl}>NHL</Text>
          </View>
          <View style={[styles.teamInactiveSelection, styles.teamLayout]}>
            <View style={[styles.itemCard1, styles.cardItemPosition]} />
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
  parentLayout1: {
    height: 109,
    top: 276,
    width: 85,
    position: "absolute",
  },
  menuTypo: {
    color: Color.secondary,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  nflPosition2: {
    maxHeight: "100%",
    bottom: "15.84%",
    height: "84.16%",
    top: "0%",
    position: "absolute",
  },
  nyJetsTypo: {
    top: "77.98%",
    textAlign: "center",
    color: Color.secondary,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  rectanglePosition: {
    top: 401,
    height: 109,
    width: 85,
    position: "absolute",
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
  nflPosition1: {
    bottom: "22.02%",
    height: "77.98%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  parentPosition8: {
    bottom: "64.97%",
    top: "29.39%",
    height: "5.64%",
    left: "50%",
    width: 85,
    position: "absolute",
  },
  nflLayout: {
    height: 85,
    top: 0,
    overflow: "hidden",
    width: 85,
    position: "absolute",
  },
  parentPosition7: {
    bottom: "57.99%",
    top: "36.37%",
    height: "5.64%",
    left: "50%",
    position: "absolute",
  },
  parentPosition6: {
    bottom: "37.04%",
    top: "57.32%",
    height: "5.64%",
    left: "50%",
    width: 85,
    position: "absolute",
  },
  parentPosition5: {
    bottom: "51.01%",
    top: "43.35%",
    height: "5.64%",
    left: "50%",
    width: 85,
    position: "absolute",
  },
  parentPosition4: {
    bottom: "30.06%",
    top: "64.3%",
    height: "5.64%",
    left: "50%",
    width: 85,
    position: "absolute",
  },
  parentPosition3: {
    bottom: "23.07%",
    top: "71.28%",
    height: "5.64%",
    left: "50%",
    width: 85,
    position: "absolute",
  },
  parentPosition2: {
    bottom: "16.09%",
    top: "78.27%",
    height: "5.64%",
    left: "50%",
    position: "absolute",
  },
  parentPosition1: {
    bottom: "44.02%",
    top: "50.34%",
    height: "5.64%",
    left: "50%",
    width: 85,
    position: "absolute",
  },
  parentPosition: {
    bottom: "9.11%",
    top: "85.25%",
    height: "5.64%",
    left: "50%",
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
  nflFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  mlbPosition: {
    top: "50%",
    marginTop: -10,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
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
  miaDolphins: {
    left: "3.53%",
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: "84.16%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  nflAfcEast: {
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
    bottom: "15.84%",
    height: "84.16%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  miaDolphinsParent: {
    height: "92.66%",
    bottom: "7.34%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  instanceChild: {
    height: "103.67%",
    width: "104.71%",
    top: "-1.83%",
    right: "-2.35%",
    bottom: "-1.83%",
    left: "-2.35%",
    borderColor: Color.primary,
    borderWidth: 2,
    opacity: 0,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  groupParent: {
    left: 24,
  },
  nyJets: {
    left: "23.53%",
  },
  nyJetsParent: {
    left: "50%",
    marginLeft: -42.5,
  },
  nePatriots: {
    left: "11.76%",
  },
  nePatriotsParent: {
    left: 266,
  },
  rectangleView: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.backgroundLight,
  },
  buffaloBills: {
    left: "9.41%",
  },
  nflAfcEast3: {
    top: "3.67%",
    bottom: "18.35%",
    height: "77.98%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  rectangleParent: {
    left: "50%",
    marginLeft: -42.5,
  },
  rectangleGroup: {
    left: 266,
  },
  cinBengals: {
    left: "7.06%",
  },
  nflAfcNorth1: {
    borderRadius: Border.br_5xs,
  },
  rectangleContainer: {
    marginLeft: -163.5,
    left: "50%",
  },
  clvBrowns: {
    marginLeft: -35.5,
    left: "50%",
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: "84.16%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  nflAfcNorth2: {
    left: "50%",
    marginLeft: -42.5,
  },
  clvBrownsParent: {
    marginLeft: -42.5,
  },
  pittSteelers: {
    marginLeft: -38.5,
    left: "50%",
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: "84.16%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  nflAfcNorth3: {
    left: 0,
  },
  pittSteelersParent: {
    marginLeft: 78.5,
  },
  houTexans: {
    marginLeft: -36.5,
    left: "50%",
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: "84.16%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  houTexansParent: {
    marginLeft: -163.5,
  },
  indColts: {
    marginLeft: -27.5,
    left: "50%",
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: "84.16%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  indColtsParent: {
    marginLeft: -42.5,
    width: 85,
  },
  chiBears: {
    marginLeft: -29.5,
    left: "50%",
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: "84.16%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  nflNfcNorth: {
    left: "50%",
    marginLeft: -42.5,
    maxHeight: "100%",
    bottom: "15.84%",
    height: "84.16%",
    width: 85,
  },
  chiBearsParent: {
    marginLeft: -163.5,
  },
  jackJaguars: {
    marginLeft: -43,
    left: "50%",
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: "84.16%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  nflAfcSouth2: {
    marginLeft: -42,
    left: "50%",
  },
  jackJaguarsParent: {
    marginLeft: 77.5,
    width: 86,
  },
  tenTitans: {
    marginLeft: -31.5,
    left: "50%",
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: "84.16%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  tenTitansParent: {
    marginLeft: -163.5,
    width: 85,
  },
  denBroncosParent: {
    marginLeft: -42.5,
  },
  cityChiefs: {
    marginLeft: -33.5,
    left: "50%",
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: "84.16%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  cityChiefsParent: {
    marginLeft: 78.5,
  },
  laChargers: {
    marginLeft: -37.5,
    left: "50%",
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: "84.16%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  laChargersParent: {
    marginLeft: -163.5,
  },
  deLions: {
    marginLeft: -24.5,
    left: "50%",
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: "84.16%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  deLionsParent: {
    marginLeft: -42.5,
  },
  gbPackers: {
    marginLeft: -34.5,
    left: "50%",
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: "84.16%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  gbPackersParent: {
    marginLeft: 78.5,
  },
  minVikingsParent: {
    marginLeft: -163.5,
  },
  atlFalconsParent: {
    marginLeft: -42.5,
  },
  carPanthers: {
    marginLeft: -41.5,
    left: "50%",
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: "84.16%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  carPanthersParent: {
    marginLeft: 78.5,
  },
  norSaintsParent: {
    marginLeft: -163.5,
  },
  tamBuccaneers: {
    marginLeft: -50.5,
    left: "50%",
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: "84.16%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  tamBuccaneersParent: {
    width: 101,
    marginLeft: -50.5,
  },
  laRaidersParent: {
    marginLeft: -42.5,
  },
  dalCowboysParent: {
    marginLeft: 78.5,
  },
  nyGiantsParent: {
    marginLeft: -163.5,
  },
  philEaglesParent: {
    marginLeft: -42.5,
  },
  commanders: {
    left: "50%",
    marginLeft: -42.5,
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: "84.16%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  commandersParent: {
    marginLeft: 78.5,
  },
  ariCardinalsParent: {
    marginLeft: 78.5,
    width: 85,
  },
  laRams: {
    marginLeft: -26.5,
    left: "50%",
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: "84.16%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  laRamsParent: {
    marginLeft: -163.5,
    width: 85,
  },
  seaSeahawks: {
    marginLeft: -43.5,
    left: "50%",
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: "84.16%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  seaSeahawksParent: {
    width: 87,
    marginLeft: -163.5,
  },
  san49ersParent: {
    marginLeft: -42.5,
    width: 85,
  },
  accountSetupChooseTeamsVChild: {
    top: 54,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    backgroundColor: Color.colorGainsboro,
    height: 197,
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
    backgroundColor: Color.primary,
    borderRadius: Border.br_5xs,
  },
  nfl: {
    width: "29.29%",
    left: "35.35%",
    display: "flex",
    top: "14%",
    height: "66.75%",
    justifyContent: "center",
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
    color: Color.backgroundLight,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  teamActiveSelection: {
    height: 40,
  },
  itemCard1: {
    backgroundColor: Color.outline,
    borderRadius: Border.br_5xs,
  },
  nba: {
    width: "32.32%",
    color: Color.outlineWHITE,
    fontFamily: FontFamily.poppinsRegular,
    left: "33.33%",
    justifyContent: "center",
    display: "flex",
    fontSize: FontSize.size_base,
    top: "14%",
    height: "66.75%",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
  },
  teamInactiveSelection: {
    marginLeft: 8,
    height: 40,
  },
  ncaff: {
    width: "51.52%",
    left: "24.24%",
    color: Color.outlineWHITE,
    fontFamily: FontFamily.poppinsRegular,
    display: "flex",
    top: "14%",
    height: "66.75%",
    justifyContent: "center",
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
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
    fontSize: FontSize.size_base,
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
  },
  mlb: {
    left: "32.32%",
    color: Color.outlineWHITE,
  },
  categoryFilter: {
    height: "18.52%",
    width: "140.53%",
    top: "74.07%",
    right: "-46.93%",
    bottom: "7.41%",
    left: "6.4%",
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
    height: 40,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_5xs,
    left: 24,
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
    left: "50%",
    right: "0%",
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
    top: 0,
    marginLeft: -163.5,
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.primary,
    flexDirection: "row",
    width: 327,
    borderRadius: Border.br_5xs,
    left: 24,
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
    color: Color.secondary,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "0%",
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
    left: "50%",
    color: Color.secondary,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
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
    width: "100%",
    backgroundColor: Color.backgroundLight,
  },
});

export default AccountSetupCHOOSETEAMSV5NFLLIGHT;
