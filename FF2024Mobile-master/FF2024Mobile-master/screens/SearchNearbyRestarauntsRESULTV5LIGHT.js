import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const SearchNearbyRestarauntsRESULTV5LIGHT = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchNearbyRestarauntsRe}>
      <Image
        style={[
          styles.searchNearbyRestarauntsReChild,
          styles.iphoneXBarsStatusDefPosition,
        ]}
        contentFit="cover"
        source={require("../assets/rectangle-24707.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={styles.generalInput}>
          <Text style={[styles.label, styles.labelTypo]} numberOfLines={1}>
            Nearby Events
          </Text>
        </View>
        <View style={[styles.generalInputIcon, styles.generalIconLayout]}>
          <View style={styles.labelWrapper}>
            <Text style={[styles.label1, styles.labelTypo]} numberOfLines={1}>
              Location
            </Text>
          </View>
          <Image
            style={[styles.mapPinIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/mappin1.png")}
          />
        </View>
        <View style={[styles.generalInputIcon1, styles.generalIconLayout]}>
          <View style={styles.labelWrapper}>
            <Text style={[styles.label1, styles.labelTypo]} numberOfLines={1}>
              Date
            </Text>
          </View>
          <Image
            style={[styles.mapPinIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/calendardays.png")}
          />
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.itemBg]} />
          <Image
            style={[styles.settings2Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/settings2.png")}
          />
        </View>
        <View style={styles.itemCardParent}>
          <View style={[styles.itemCard, styles.itemBg]} />
          <Text style={[styles.letsGo, styles.letsGoTypo]}>Lets Go!</Text>
        </View>
      </View>
      <Pressable
        style={[styles.buttonMini, styles.groupLayout]}
        onPress={() => navigation.navigate("SearchNearbyRestarauntsV5LIGHT")}
      >
        <View style={[styles.itemCard, styles.itemBg]} />
        <Image
          style={styles.chevronLeftIcon}
          contentFit="cover"
          source={require("../assets/chevronleft.png")}
        />
      </Pressable>
      <View style={[styles.buttonMini1, styles.groupLayout]}>
        <View style={[styles.itemCard, styles.itemBg]} />
        <Image
          style={styles.chevronLeftIcon}
          contentFit="cover"
          source={require("../assets/settings2.png")}
        />
      </View>
      <Text style={[styles.thStBoulder, styles.thStBoulderTypo]}>
        1234 28th St. Boulder, CO
      </Text>
      <View style={[styles.mapResultsV3, styles.letsGoPosition]}>
        <View style={styles.restaurantCardLayout}>
          <ImageBackground
            style={styles.cardImageIcon}
            resizeMode="cover"
            source={require("../assets/cardimage.png")}
          >
            <View style={styles.favoritesIconParent}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/favoritesicon.png")}
              />
              <View style={[styles.cardRatingParent, styles.parentFlexBox]}>
                <View style={[styles.cardRating, styles.cardFlexBox]}>
                  <Text style={[styles.text, styles.textTypo]}>$$$</Text>
                </View>
                <View style={[styles.cardRating1, styles.cardFlexBox]}>
                  <Image
                    style={styles.cardRatingIcon}
                    contentFit="cover"
                    source={require("../assets/cardrating1.png")}
                  />
                  <Text style={[styles.text1, styles.textTypo]}>4.8</Text>
                </View>
                <View style={[styles.mapDistance, styles.cardFlexBox]}>
                  <Text style={[styles.text, styles.textTypo]}>0.6 km</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.cardContent}>
            <View style={[styles.frameParent, styles.letsGoPosition]}>
              <View style={[styles.rectangleContainer, styles.parentFlexBox]}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/restaurantlogo1.png")}
                />
                <View style={[styles.nbaParent, styles.parentFlexBox]}>
                  <Image
                    style={styles.nbaIconLayout}
                    contentFit="cover"
                    source={require("../assets/nba2.png")}
                  />
                  <Image
                    style={[styles.nbaIcon1, styles.nbaIconLayout]}
                    contentFit="cover"
                    source={require("../assets/nba3.png")}
                  />
                </View>
              </View>
              <View style={styles.cardTextSpaceBlock}>
                <View style={styles.outbackSaloonParent}>
                  <Text style={[styles.outbackSaloon, styles.timeTypo]}>
                    Outback Saloon
                  </Text>
                  <Text
                    style={[
                      styles.leslievilleRiverdale,
                      styles.thStBoulderTypo,
                    ]}
                  >
                    Leslieville / Riverdale
                  </Text>
                </View>
                <Text style={[styles.cardText, styles.cardTextSpaceBlock]}>
                  Come cheer for your favorite team! 50% off select appetizers
                  and drinks!
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[styles.restaurantCardSports21, styles.restaurantCardLayout]}
        >
          <ImageBackground
            style={styles.cardImageIcon}
            resizeMode="cover"
            source={require("../assets/cardimage1.png")}
          >
            <View style={styles.favoritesIconParent}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/favoritesicon.png")}
              />
              <View style={[styles.cardRatingParent, styles.parentFlexBox]}>
                <View style={[styles.cardRating, styles.cardFlexBox]}>
                  <Text style={[styles.text2, styles.textTypo]}>$$</Text>
                </View>
                <View style={[styles.cardRating1, styles.cardFlexBox]}>
                  <Image
                    style={styles.cardRatingIcon}
                    contentFit="cover"
                    source={require("../assets/cardrating1.png")}
                  />
                  <Text style={[styles.text1, styles.textTypo]}>3.6</Text>
                </View>
                <View style={[styles.mapDistance, styles.cardFlexBox]}>
                  <Text style={[styles.text, styles.textTypo]}>1.8 km</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.cardContent}>
            <View style={[styles.frameParent, styles.letsGoPosition]}>
              <View style={[styles.rectangleContainer, styles.parentFlexBox]}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/restaurantlogo2.png")}
                />
                <View style={[styles.nbaParent, styles.parentFlexBox]}>
                  <Image
                    style={[styles.nbaIcon2, styles.nbaIconLayout]}
                    contentFit="cover"
                    source={require("../assets/nba4.png")}
                  />
                  <Image
                    style={[styles.nbaIcon3, styles.nbaIconLayout]}
                    contentFit="cover"
                    source={require("../assets/nba5.png")}
                  />
                </View>
              </View>
              <View style={styles.cardTextSpaceBlock}>
                <View style={styles.outbackSaloonParent}>
                  <Text style={[styles.outbackSaloon, styles.timeTypo]}>
                    Kalamata Bar and Grill
                  </Text>
                  <Text
                    style={[
                      styles.leslievilleRiverdale,
                      styles.thStBoulderTypo,
                    ]}
                  >
                    Jersey City, New Jersey
                  </Text>
                </View>
                <Text
                  style={[styles.cardText, styles.cardTextSpaceBlock]}
                >{`Game Day Specials! Buy 1 Get 1 Free Wings & $3 Draft Beers!`}</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[styles.restaurantCardSports21, styles.restaurantCardLayout]}
        >
          <ImageBackground
            style={styles.cardImageIcon}
            resizeMode="cover"
            source={require("../assets/cardimage2.png")}
          >
            <View style={styles.favoritesIconParent}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/favoritesicon.png")}
              />
              <View style={[styles.cardRatingParent, styles.parentFlexBox]}>
                <View style={[styles.cardRating, styles.cardFlexBox]}>
                  <Text style={[styles.text2, styles.textTypo]}>$</Text>
                </View>
                <View style={[styles.cardRating1, styles.cardFlexBox]}>
                  <Image
                    style={styles.cardRatingIcon}
                    contentFit="cover"
                    source={require("../assets/cardrating1.png")}
                  />
                  <Text style={[styles.text1, styles.textTypo]}>5.0</Text>
                </View>
                <View style={[styles.mapDistance, styles.cardFlexBox]}>
                  <Text style={[styles.text, styles.textTypo]}>2.4 km</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.cardContent}>
            <View style={[styles.frameParent, styles.letsGoPosition]}>
              <View style={[styles.rectangleContainer, styles.parentFlexBox]}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/restaurantlogo3.png")}
                />
                <View style={[styles.nbaParent, styles.parentFlexBox]}>
                  <Image
                    style={[styles.nbaIcon2, styles.nbaIconLayout]}
                    contentFit="cover"
                    source={require("../assets/nba6.png")}
                  />
                  <Image
                    style={[styles.nbaIcon1, styles.nbaIconLayout]}
                    contentFit="cover"
                    source={require("../assets/nba7.png")}
                  />
                </View>
              </View>
              <View style={styles.cardTextSpaceBlock}>
                <View style={styles.outbackSaloonParent}>
                  <Text style={[styles.outbackSaloon, styles.timeTypo]}>
                    Royal Oak Bar
                  </Text>
                  <Text
                    style={[
                      styles.leslievilleRiverdale,
                      styles.thStBoulderTypo,
                    ]}
                  >
                    Union City, New Jersey
                  </Text>
                </View>
                <Text style={[styles.cardText, styles.cardTextSpaceBlock]}>
                  50% Off Nachos and $4 Pints During All Live Sports Events!
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[styles.restaurantCardSports21, styles.restaurantCardLayout]}
        >
          <ImageBackground
            style={styles.cardImageIcon}
            resizeMode="cover"
            source={require("../assets/cardimage3.png")}
          >
            <View style={styles.favoritesIconParent}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/favoritesicon.png")}
              />
              <View style={[styles.cardRatingParent, styles.parentFlexBox]}>
                <View style={[styles.cardRating, styles.cardFlexBox]}>
                  <Text style={[styles.text2, styles.textTypo]}>$$$</Text>
                </View>
                <View style={[styles.cardRating1, styles.cardFlexBox]}>
                  <Image
                    style={styles.cardRatingIcon}
                    contentFit="cover"
                    source={require("../assets/cardrating2.png")}
                  />
                  <Text style={[styles.text1, styles.textTypo]}>3.8</Text>
                </View>
                <View style={[styles.mapDistance, styles.cardFlexBox]}>
                  <Text style={[styles.text, styles.textTypo]}>2.7 km</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.cardContent}>
            <View style={[styles.frameParent, styles.letsGoPosition]}>
              <View style={[styles.rectangleContainer, styles.parentFlexBox]}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/restaurantlogo4.png")}
                />
                <View style={[styles.nbaParent, styles.parentFlexBox]}>
                  <Image
                    style={[styles.nbaIcon2, styles.nbaIconLayout]}
                    contentFit="cover"
                    source={require("../assets/nba8.png")}
                  />
                  <Image
                    style={[styles.nbaIcon1, styles.nbaIconLayout]}
                    contentFit="cover"
                    source={require("../assets/nba9.png")}
                  />
                </View>
              </View>
              <View style={styles.cardTextSpaceBlock}>
                <View style={styles.outbackSaloonParent}>
                  <Text style={[styles.outbackSaloon, styles.timeTypo]}>
                    The Crown Bar
                  </Text>
                  <Text
                    style={[
                      styles.leslievilleRiverdale,
                      styles.thStBoulderTypo,
                    ]}
                  >
                    Weehawken, New Jersey
                  </Text>
                </View>
                <Text style={[styles.cardText, styles.cardTextSpaceBlock]}>
                  Cheer with $5 Burgers and Half-Price Cocktails Every Game
                  Night!
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.buttonXlrg, styles.itemBg]}>
        <Text style={[styles.button, styles.letsGoTypo]}>Directions</Text>
      </View>
      <View
        style={[
          styles.iphoneXBarsStatusDef,
          styles.iphoneXBarsStatusDefPosition,
        ]}
      >
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
  iphoneXBarsStatusDefPosition: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 220,
    width: 375,
    left: 0,
    position: "absolute",
  },
  labelTypo: {
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.secondary,
    overflow: "hidden",
  },
  generalIconLayout: {
    width: 154,
    top: 116,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    height: 40,
    borderWidth: 1,
    borderColor: Color.outline,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    position: "absolute",
    backgroundColor: Color.backgroundLight,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  groupLayout: {
    width: 40,
    height: 40,
  },
  itemBg: {
    backgroundColor: Color.primary,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  letsGoTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.backgroundLight,
  },
  thStBoulderTypo: {
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  letsGoPosition: {
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  cardFlexBox: {
    padding: Padding.p_5xs,
    borderRadius: Border.br_base,
    backgroundColor: Color.primary,
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.size_xs,
    color: Color.backgroundLight,
  },
  nbaIconLayout: {
    height: 48,
    width: 48,
  },
  timeTypo: {
    fontWeight: "600",
    color: Color.textPrimary,
    left: 0,
  },
  cardTextSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  restaurantCardLayout: {
    maxWidth: 327,
    minWidth: 288,
    width: 327,
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
  searchNearbyRestarauntsReChild: {
    borderBottomLeftRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    height: 812,
  },
  groupChild: {
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    borderBottomLeftRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    top: 0,
    backgroundColor: Color.backgroundLight,
  },
  label: {
    textAlign: "left",
    color: Color.secondary,
    flex: 1,
  },
  generalInput: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    height: 40,
    borderWidth: 1,
    alignItems: "center",
    flexDirection: "row",
    width: 327,
    borderColor: Color.outline,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: 24,
    top: 68,
    position: "absolute",
    backgroundColor: Color.backgroundLight,
  },
  label1: {
    width: 92,
    textAlign: "left",
    color: Color.secondary,
    left: 0,
    top: 0,
    position: "absolute",
  },
  labelWrapper: {
    height: 20,
    width: 92,
  },
  mapPinIcon: {
    marginLeft: 16,
    overflow: "hidden",
  },
  generalInputIcon: {
    left: 24,
  },
  generalInputIcon1: {
    left: 197,
  },
  groupItem: {
    width: 40,
    height: 40,
    left: 0,
    top: 0,
  },
  settings2Icon: {
    top: 8,
    left: 8,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleGroup: {
    top: 164,
    left: 311,
    width: 40,
    position: "absolute",
  },
  itemCard: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
  },
  letsGo: {
    height: "48.25%",
    marginLeft: -39.6,
    top: "26%",
    fontSize: FontSize.size_base,
    display: "flex",
    width: 78,
    justifyContent: "center",
    textAlign: "center",
    color: Color.backgroundLight,
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  itemCardParent: {
    height: "18.18%",
    width: "71.2%",
    top: "74.55%",
    right: "22.4%",
    bottom: "7.27%",
    left: "6.4%",
    position: "absolute",
  },
  rectangleParent: {
    top: -1,
    display: "none",
  },
  chevronLeftIcon: {
    height: "60%",
    width: "60%",
    top: "20%",
    right: "20%",
    bottom: "20%",
    left: "20%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  buttonMini: {
    left: 24,
    top: 68,
    position: "absolute",
  },
  buttonMini1: {
    left: 311,
    width: 40,
    position: "absolute",
    top: 68,
  },
  thStBoulder: {
    top: 613,
    left: 49,
    color: Color.backgroundLight,
  },
  text: {
    textAlign: "left",
  },
  cardRating: {
    height: 25,
    justifyContent: "flex-end",
  },
  cardRatingIcon: {
    width: 10,
    height: 10,
  },
  text1: {
    marginLeft: 2,
    textAlign: "left",
  },
  cardRating1: {
    marginLeft: 8,
    justifyContent: "center",
  },
  mapDistance: {
    marginLeft: 8,
    justifyContent: "flex-end",
  },
  cardRatingParent: {
    justifyContent: "flex-end",
  },
  favoritesIconParent: {
    justifyContent: "space-between",
    flexDirection: "row",
    flex: 1,
  },
  cardImageIcon: {
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    height: 141,
    padding: Padding.p_base,
    alignSelf: "stretch",
    justifyContent: "center",
    flexDirection: "row",
  },
  frameChild: {
    width: 56,
    height: 56,
    borderRadius: Border.br_5xs,
  },
  nbaIcon1: {
    marginLeft: 8,
    overflow: "hidden",
  },
  nbaParent: {
    justifyContent: "flex-end",
    alignSelf: "stretch",
    marginLeft: 16,
    flex: 1,
  },
  rectangleContainer: {
    alignSelf: "stretch",
  },
  outbackSaloon: {
    lineHeight: 23,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.textPrimary,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  leslievilleRiverdale: {
    top: 23,
    color: Color.secondary,
    left: 0,
  },
  outbackSaloonParent: {
    width: 147,
    height: 39,
  },
  cardText: {
    color: Color.textPrimary,
    lineHeight: 21,
    marginTop: 8,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
  },
  frameParent: {
    marginLeft: -145.5,
    top: -28,
    width: 293,
  },
  cardContent: {
    borderBottomRightRadius: Border.br_base,
    borderBottomLeftRadius: Border.br_base,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    height: 143,
    alignSelf: "stretch",
    borderColor: Color.outline,
    borderStyle: "solid",
    backgroundColor: Color.backgroundLight,
  },
  text2: {
    textAlign: "center",
  },
  nbaIcon2: {
    overflow: "hidden",
  },
  nbaIcon3: {
    marginLeft: 8,
  },
  restaurantCardSports21: {
    marginLeft: 16,
  },
  mapResultsV3: {
    marginLeft: -163.5,
    top: 408,
    flexDirection: "row",
    width: 327,
  },
  button: {
    fontSize: FontSize.size_lg,
    textAlign: "center",
    color: Color.backgroundLight,
  },
  buttonXlrg: {
    top: 716,
    height: 64,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 327,
    left: 24,
  },
  time: {
    marginTop: -9,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.sFBody,
    color: Color.textPrimary,
    fontWeight: "600",
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
  },
  searchNearbyRestarauntsRe: {
    overflow: "hidden",
    height: 812,
    width: "100%",
    flex: 1,
    backgroundColor: Color.backgroundLight,
  },
});

export default SearchNearbyRestarauntsRESULTV5LIGHT;
