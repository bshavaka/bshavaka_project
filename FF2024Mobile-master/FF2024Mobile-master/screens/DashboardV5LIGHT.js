import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import NAVNews from "../components/NAVNews";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const DashboardV5LIGHT = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dashboardV5Light}>
      <View style={[styles.dashboardV5LightChild, styles.imgLayout]} />
      <View style={styles.pageHeaderGreeting}>
        <View style={styles.cardText}>
          <Text style={[styles.goodMorningJaneContainer, styles.torontoOnClr]}>
            <Text style={styles.goodMorning}>{`Good Morning `}</Text>
            <Text style={styles.jane}>Jane</Text>
          </Text>
          <View style={styles.locationParent}>
            <Image
              style={styles.locationIcon}
              contentFit="cover"
              source={require("../assets/location.png")}
            />
            <Text style={[styles.torontoOn, styles.textTypo]}>Toronto, ON</Text>
          </View>
        </View>
        <View style={styles.cardButtons}>
          <Pressable
            style={styles.groupLayout}
            onPress={() =>
              navigation.navigate("SearchNearbyRestarauntsV5LIGHT")
            }
          >
            <View style={[styles.groupChild, styles.groupLayout]} />
            <Image
              style={[styles.mapPinIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/mappin.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.rectangleGroup, styles.groupLayout]}
            onPress={() => navigation.navigate("MenuV5LIGHT")}
          >
            <View style={[styles.groupChild, styles.groupLayout]} />
            <Image
              style={[styles.mapPinIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/menu.png")}
            />
          </Pressable>
        </View>
      </View>
      <Text style={[styles.barsNearYou, styles.exploreTypo]}>
        Bars Near You
      </Text>
      <Text style={[styles.smallLabelRegular12px, styles.textTypo]}>
        See All
      </Text>
      <View style={[styles.imgCarousel, styles.imgLayout]}>
        <Image
          style={[styles.cardImgIcon, styles.imgLayout]}
          contentFit="cover"
          source={require("../assets/cardimg.png")}
        />
        <View style={[styles.cardContent, styles.cardFlexBox]}>
          <Text style={styles.title} numberOfLines={2}>
            Strike on amazing deals! 50% off Beer!
          </Text>
          <Image
            style={styles.cardContentChild}
            contentFit="cover"
            source={require("../assets/group-1000004316.png")}
          />
        </View>
      </View>
      <View style={[styles.eventCards, styles.imgLayout]}>
        <View style={styles.restaurantCardLayout}>
          <View style={styles.restaurantCard}>
            <ImageBackground
              style={styles.cardImageTopIcon}
              resizeMode="cover"
              source={require("../assets/cardimagetop.png")}
            >
              <View style={styles.ciContentPills}>
                <Image
                  style={styles.iconLayout1}
                  contentFit="cover"
                  source={require("../assets/favoritesicon.png")}
                />
                <View style={[styles.cardRatingParent, styles.cardFlexBox]}>
                  <View style={[styles.cardRating, styles.cardFlexBox]}>
                    <Text style={[styles.text, styles.textLayout]}>$$</Text>
                  </View>
                  <View style={[styles.cardRating1, styles.cardFlexBox]}>
                    <Image
                      style={styles.cardRatingIcon}
                      contentFit="cover"
                      source={require("../assets/cardrating.png")}
                    />
                    <Text style={[styles.text1, styles.textLayout]}>4.3</Text>
                  </View>
                  <View style={[styles.cardRating1, styles.cardFlexBox]}>
                    <Text style={[styles.text, styles.textLayout]}>0.2 km</Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
            <View style={styles.cardContentMain}>
              <View style={styles.cardContentMid}>
                <View style={styles.restaurantInfo}>
                  <Image
                    style={styles.restaurantLogoIcon}
                    contentFit="cover"
                    source={require("../assets/restaurantlogo.png")}
                  />
                  <View style={styles.sportsLogos}>
                    <Image
                      style={[styles.nbaIcon, styles.nbaIconLayout]}
                      contentFit="cover"
                      source={require("../assets/nba.png")}
                    />
                    <Image
                      style={[styles.mlbIcon, styles.nbaIconLayout]}
                      contentFit="cover"
                      source={require("../assets/mlb.png")}
                    />
                  </View>
                </View>
                <View style={styles.restarauntTitle}>
                  <Text style={[styles.outbackSaloon, styles.exploreTypo]}>
                    Murph’s
                  </Text>
                  <Text
                    style={[styles.leslievilleRiverdale, styles.torontoOnTypo]}
                  >
                    Galleria Parkway, GA
                  </Text>
                </View>
              </View>
              <View style={[styles.promoTextBot, styles.promoTextBotFlexBox]}>
                <Text style={[styles.cardText1, styles.textLayout]}>
                  Come cheer for your favorite team! 50% off select appetizers
                  and drinks!
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.restaurantCardNew1, styles.restaurantCardLayout]}>
          <View style={styles.restaurantCard}>
            <ImageBackground
              style={styles.cardImageTopIcon}
              resizeMode="cover"
              source={require("../assets/cardimagetop.png")}
            >
              <View style={styles.ciContentPills}>
                <Image
                  style={styles.iconLayout1}
                  contentFit="cover"
                  source={require("../assets/favoritesicon.png")}
                />
                <View style={[styles.cardRatingParent, styles.cardFlexBox]}>
                  <View style={[styles.cardRating, styles.cardFlexBox]}>
                    <Text style={[styles.text, styles.textLayout]}>$$$</Text>
                  </View>
                  <View style={[styles.cardRating1, styles.cardFlexBox]}>
                    <Image
                      style={styles.cardRatingIcon}
                      contentFit="cover"
                      source={require("../assets/cardrating.png")}
                    />
                    <Text style={[styles.text1, styles.textLayout]}>4.8</Text>
                  </View>
                  <View style={[styles.cardRating1, styles.cardFlexBox]}>
                    <Text style={[styles.text, styles.textLayout]}>0.6 km</Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
            <View style={styles.cardContentMain}>
              <View style={styles.cardContentMid}>
                <View style={styles.restaurantInfo}>
                  <Image
                    style={styles.restaurantLogoIcon}
                    contentFit="cover"
                    source={require("../assets/restaurantlogo1.png")}
                  />
                  <View style={styles.sportsLogos}>
                    <Image
                      style={styles.nbaIconLayout}
                      contentFit="cover"
                      source={require("../assets/nba.png")}
                    />
                    <Image
                      style={[styles.mlbIcon, styles.nbaIconLayout]}
                      contentFit="cover"
                      source={require("../assets/nba1.png")}
                    />
                  </View>
                </View>
                <View style={styles.restarauntTitle}>
                  <Text style={[styles.outbackSaloon, styles.exploreTypo]}>
                    Outback Saloon
                  </Text>
                  <Text
                    style={[styles.leslievilleRiverdale, styles.torontoOnTypo]}
                  >
                    Leslieville / Riverdale
                  </Text>
                </View>
              </View>
              <View style={[styles.promoTextBot, styles.promoTextBotFlexBox]}>
                <Text style={[styles.cardText1, styles.textLayout]}>
                  Come cheer for your favorite team! 50% off select appetizers
                  and drinks!
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.restaurantCardNew1, styles.restaurantCardLayout]}>
          <View style={styles.restaurantCard}>
            <ImageBackground
              style={styles.cardImageTopIcon}
              resizeMode="cover"
              source={require("../assets/cardimagetop1.png")}
            >
              <View style={styles.ciContentPills}>
                <Image
                  style={styles.iconLayout1}
                  contentFit="cover"
                  source={require("../assets/favoritesicon.png")}
                />
                <View style={[styles.cardRatingParent, styles.cardFlexBox]}>
                  <View style={[styles.cardRating, styles.cardFlexBox]}>
                    <Text style={[styles.text, styles.textLayout]}>$$$</Text>
                  </View>
                  <View style={[styles.cardRating1, styles.cardFlexBox]}>
                    <Image
                      style={styles.cardRatingIcon}
                      contentFit="cover"
                      source={require("../assets/cardrating.png")}
                    />
                    <Text style={[styles.text1, styles.textLayout]}>4.8</Text>
                  </View>
                  <View style={[styles.cardRating1, styles.cardFlexBox]}>
                    <Text style={[styles.text, styles.textLayout]}>0.6 km</Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
            <View style={styles.cardContentMain}>
              <View style={styles.cardContentMid}>
                <View style={styles.restaurantInfo}>
                  <Image
                    style={styles.restaurantLogoIcon}
                    contentFit="cover"
                    source={require("../assets/restaurantlogo2.png")}
                  />
                  <View style={styles.sportsLogos}>
                    <Image
                      style={styles.nbaIconLayout}
                      contentFit="cover"
                      source={require("../assets/nba.png")}
                    />
                    <Image
                      style={[styles.mlbIcon, styles.nbaIconLayout]}
                      contentFit="cover"
                      source={require("../assets/nba1.png")}
                    />
                  </View>
                </View>
                <View style={styles.restarauntTitle}>
                  <Text style={[styles.outbackSaloon, styles.exploreTypo]}>
                    Kalamata Bar
                  </Text>
                  <Text
                    style={[styles.leslievilleRiverdale, styles.torontoOnTypo]}
                  >
                    Jersey City, NJ
                  </Text>
                </View>
              </View>
              <View style={[styles.promoTextBot, styles.promoTextBotFlexBox]}>
                <Text style={[styles.cardText1, styles.textLayout]}>
                  Come cheer for your favorite team! 50% off select appetizers
                  and drinks!
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.restaurantCardNew1, styles.restaurantCardLayout]}>
          <View style={styles.restaurantCard}>
            <ImageBackground
              style={styles.cardImageTopIcon}
              resizeMode="cover"
              source={require("../assets/cardimagetop2.png")}
            >
              <View style={styles.ciContentPills}>
                <Image
                  style={styles.iconLayout1}
                  contentFit="cover"
                  source={require("../assets/favoritesicon.png")}
                />
                <View style={[styles.cardRatingParent, styles.cardFlexBox]}>
                  <View style={[styles.cardRating, styles.cardFlexBox]}>
                    <Text style={[styles.text, styles.textLayout]}>$$$</Text>
                  </View>
                  <View style={[styles.cardRating1, styles.cardFlexBox]}>
                    <Image
                      style={styles.cardRatingIcon}
                      contentFit="cover"
                      source={require("../assets/cardrating.png")}
                    />
                    <Text style={[styles.text1, styles.textLayout]}>4.8</Text>
                  </View>
                  <View style={[styles.cardRating1, styles.cardFlexBox]}>
                    <Text style={[styles.text, styles.textLayout]}>0.6 km</Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
            <View style={styles.cardContentMain}>
              <View style={styles.cardContentMid}>
                <View style={styles.restaurantInfo}>
                  <Image
                    style={styles.restaurantLogoIcon}
                    contentFit="cover"
                    source={require("../assets/restaurantlogo3.png")}
                  />
                  <View style={styles.sportsLogos}>
                    <Image
                      style={styles.nbaIconLayout}
                      contentFit="cover"
                      source={require("../assets/nba2.png")}
                    />
                    <Image
                      style={[styles.mlbIcon, styles.nbaIconLayout]}
                      contentFit="cover"
                      source={require("../assets/nba3.png")}
                    />
                  </View>
                </View>
                <View style={styles.restarauntTitle}>
                  <Text style={[styles.outbackSaloon, styles.exploreTypo]}>
                    Royal Oak Bar
                  </Text>
                  <Text
                    style={[styles.leslievilleRiverdale, styles.torontoOnTypo]}
                  >
                    Union City, NJ
                  </Text>
                </View>
              </View>
              <View style={[styles.promoTextBot, styles.promoTextBotFlexBox]}>
                <Text style={[styles.cardText1, styles.textLayout]}>
                  Come cheer for your favorite team! 50% off select appetizers
                  and drinks!
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.restaurantCardNew1, styles.restaurantCardLayout]}>
          <View style={styles.restaurantCard}>
            <ImageBackground
              style={styles.cardImageTopIcon}
              resizeMode="cover"
              source={require("../assets/cardimagetop3.png")}
            >
              <View style={styles.ciContentPills}>
                <Image
                  style={styles.iconLayout1}
                  contentFit="cover"
                  source={require("../assets/favoritesicon.png")}
                />
                <View style={[styles.cardRatingParent, styles.cardFlexBox]}>
                  <View style={[styles.cardRating, styles.cardFlexBox]}>
                    <Text style={[styles.text, styles.textLayout]}>$$$</Text>
                  </View>
                  <View style={[styles.cardRating1, styles.cardFlexBox]}>
                    <Image
                      style={styles.cardRatingIcon}
                      contentFit="cover"
                      source={require("../assets/cardrating.png")}
                    />
                    <Text style={[styles.text1, styles.textLayout]}>4.8</Text>
                  </View>
                  <View style={[styles.cardRating1, styles.cardFlexBox]}>
                    <Text style={[styles.text, styles.textLayout]}>0.6 km</Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
            <View style={styles.cardContentMain}>
              <View style={styles.cardContentMid}>
                <View style={styles.restaurantInfo}>
                  <Image
                    style={styles.restaurantLogoIcon}
                    contentFit="cover"
                    source={require("../assets/restaurantlogo4.png")}
                  />
                  <View style={styles.sportsLogos}>
                    <Image
                      style={styles.nbaIconLayout}
                      contentFit="cover"
                      source={require("../assets/nba2.png")}
                    />
                    <Image
                      style={[styles.mlbIcon, styles.nbaIconLayout]}
                      contentFit="cover"
                      source={require("../assets/nba3.png")}
                    />
                  </View>
                </View>
                <View style={styles.restarauntTitle}>
                  <Text style={[styles.outbackSaloon, styles.exploreTypo]}>
                    The Crown Grill
                  </Text>
                  <Text
                    style={[styles.leslievilleRiverdale, styles.torontoOnTypo]}
                  >
                    Weehawken, NJ
                  </Text>
                </View>
              </View>
              <View style={[styles.promoTextBot, styles.promoTextBotFlexBox]}>
                <Text style={[styles.cardText1, styles.textLayout]}>
                  Come cheer for your favorite team! 50% off select appetizers
                  and drinks!
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.navigationBar, styles.navigationBarPosition]}>
        <View style={styles.navExplore}>
          <View style={styles.navExploreChild} />
          <View style={[styles.homeParent, styles.parentPosition1]}>
            <Image
              style={[styles.homeIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/home.png")}
            />
            <Text style={[styles.explore, styles.scoresPosition]}>Explore</Text>
          </View>
        </View>
        <Pressable
          style={styles.navSearch}
          onPress={() => navigation.navigate("ScheduleScreen")}
        >
          <View style={styles.navExploreChild} />
          <View style={[styles.calendarDaysParent, styles.parentPosition]}>
            <Image
              style={[styles.calendarDaysIcon, styles.iconLayout1]}
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
          onPress={() =>
            navigation.navigate("AccountSetupCHOOSETEAMSV5NFLLIGHT")
          }
        >
          <View style={styles.navExploreChild} />
          <View style={[styles.clipboardListParent, styles.parentPosition]}>
            <Image
              style={[styles.clipboardListIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/clipboardlist.png")}
            />
            <Text style={[styles.scores, styles.scoresPosition]}>Scores</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.navExplore}
          onPress={() => navigation.navigate("AccountProfileV5LIGHTDefault")}
        >
          <View style={styles.navExploreChild} />
          <View style={[styles.userRoundParent, styles.parentPosition1]}>
            <Image
              style={[styles.userRoundIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/userround.png")}
            />
            <Text style={[styles.scores, styles.scoresPosition]}>Profile</Text>
          </View>
        </Pressable>
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
  imgLayout: {
    width: 327,
    position: "absolute",
  },
  torontoOnClr: {
    color: Color.textPrimary,
    top: 0,
  },
  textTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  groupLayout: {
    height: 40,
    width: 40,
  },
  iconLayout1: {
    height: 24,
    width: 24,
  },
  exploreTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  cardFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  textLayout: {
    lineHeight: 21,
    color: Color.backgroundLight,
    fontSize: FontSize.size_xs,
  },
  nbaIconLayout: {
    height: 48,
    width: 48,
  },
  torontoOnTypo: {
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  promoTextBotFlexBox: {
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  restaurantCardLayout: {
    height: 284,
    width: 327,
  },
  navigationBarPosition: {
    width: 375,
    left: 0,
    position: "absolute",
    backgroundColor: Color.backgroundLight,
  },
  parentPosition1: {
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
  scoresPosition: {
    top: "66.67%",
    textAlign: "center",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  parentPosition: {
    top: 24,
    height: 48,
    position: "absolute",
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
  dashboardV5LightChild: {
    top: 68,
    height: 47,
    left: 24,
  },
  goodMorning: {
    fontFamily: FontFamily.poppinsRegular,
  },
  jane: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  goodMorningJaneContainer: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  locationIcon: {
    top: 1,
    width: 14,
    height: 14,
    left: 0,
    position: "absolute",
  },
  torontoOn: {
    left: 18,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
    color: Color.textPrimary,
    top: 0,
  },
  locationParent: {
    top: 31,
    width: 89,
    height: 16,
    left: 0,
    position: "absolute",
  },
  cardText: {
    width: 198,
    height: 47,
  },
  groupChild: {
    backgroundColor: Color.primary,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  mapPinIcon: {
    top: 8,
    left: 8,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleGroup: {
    marginLeft: 8,
  },
  cardButtons: {
    width: 88,
    marginLeft: 41,
    alignItems: "center",
    flexDirection: "row",
  },
  pageHeaderGreeting: {
    marginLeft: -187.5,
    top: 44,
    paddingTop: Padding.p_5xl,
    paddingBottom: 36,
    paddingHorizontal: Padding.p_5xl,
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
    backgroundColor: Color.backgroundLight,
  },
  barsNearYou: {
    top: 404,
    lineHeight: 23,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    color: Color.textPrimary,
    position: "absolute",
    left: 24,
  },
  smallLabelRegular12px: {
    top: 408,
    left: 311,
    color: Color.primary,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  cardImgIcon: {
    height: 228,
    zIndex: 0,
    left: 0,
    top: 0,
  },
  title: {
    fontSize: FontSize.size_base,
    height: 50,
    color: Color.backgroundLight,
    alignSelf: "stretch",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    overflow: "hidden",
  },
  cardContentChild: {
    height: 8,
    marginTop: 16,
    width: 40,
  },
  cardContent: {
    zIndex: 1,
    marginTop: 16,
    alignSelf: "stretch",
  },
  imgCarousel: {
    top: 151,
    height: 229,
    padding: Padding.p_base,
    justifyContent: "flex-end",
    borderRadius: Border.br_base,
    alignItems: "center",
    left: 24,
    overflow: "hidden",
  },
  text: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  cardRating: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_4xs,
    borderRadius: Border.br_base,
    backgroundColor: Color.primary,
    flexDirection: "row",
  },
  cardRatingIcon: {
    width: 10,
    height: 10,
  },
  text1: {
    marginLeft: 2,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  cardRating1: {
    padding: Padding.p_5xs,
    borderRadius: Border.br_base,
    marginLeft: 8,
    backgroundColor: Color.primary,
    flexDirection: "row",
  },
  cardRatingParent: {
    flexDirection: "row",
  },
  ciContentPills: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  cardImageTopIcon: {
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    height: 141,
    alignSelf: "stretch",
    padding: Padding.p_base,
    flexDirection: "row",
  },
  restaurantLogoIcon: {
    width: 56,
    height: 56,
    borderRadius: Border.br_5xs,
  },
  nbaIcon: {
    display: "none",
  },
  mlbIcon: {
    marginLeft: 16,
    overflow: "hidden",
  },
  sportsLogos: {
    marginLeft: 71,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  restaurantInfo: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  outbackSaloon: {
    lineHeight: 23,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    color: Color.textPrimary,
    position: "absolute",
    left: 0,
    top: 0,
  },
  leslievilleRiverdale: {
    top: 23,
    color: Color.secondary,
    fontFamily: FontFamily.poppinsRegular,
    left: 0,
  },
  restarauntTitle: {
    height: 39,
    marginTop: 8,
    alignSelf: "stretch",
  },
  cardContentMid: {
    borderStyle: "solid",
    borderColor: Color.outline,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    height: 83,
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_lg,
    paddingBottom: Padding.p_5xs,
    alignSelf: "stretch",
    justifyContent: "flex-end",
    backgroundColor: Color.backgroundLight,
  },
  cardText1: {
    width: 293,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
  },
  promoTextBot: {
    borderBottomRightRadius: Border.br_base,
    borderBottomLeftRadius: Border.br_base,
    height: 60,
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
    backgroundColor: Color.primary,
    overflow: "hidden",
  },
  cardContentMain: {
    alignSelf: "stretch",
  },
  restaurantCard: {
    alignSelf: "stretch",
    flex: 1,
  },
  restaurantCardNew1: {
    marginTop: 16,
  },
  eventCards: {
    top: 443,
    left: 24,
  },
  navExploreChild: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.backgroundLight,
  },
  homeIcon: {
    width: "53.33%",
    right: "24.44%",
    left: "22.22%",
  },
  explore: {
    marginLeft: -22.5,
    color: Color.primary,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: "50%",
  },
  homeParent: {
    width: "69.23%",
    right: "15.38%",
    left: "15.38%",
  },
  navExplore: {
    width: 65,
    height: 96,
  },
  calendarDaysIcon: {
    left: 16,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  schedule: {
    left: "0%",
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
  clipboardListIcon: {
    left: 9,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  scores: {
    left: "0%",
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
    height: 96,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: Padding.p_5xl,
  },
  time: {
    marginTop: -9,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.sFBody,
    textAlign: "center",
    fontWeight: "600",
    top: "50%",
    color: Color.textPrimary,
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
  dashboardV5Light: {
    height: 2060,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.backgroundLight,
  },
});

export default DashboardV5LIGHT;
