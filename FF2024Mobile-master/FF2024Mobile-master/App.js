const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SplashScreenV5LIGHT from "./screens/SplashScreenV5LIGHT";
import DashboardV5LIGHT from "./screens/DashboardV5LIGHT";
import AccountProfileV5LIGHTFavoriteBars from "./screens/AccountProfileV5LIGHTFavoriteBars";
import AccountSetupCHOOSETEAMSV5NFLLIGHT from "./screens/AccountSetupCHOOSETEAMSV5NFLLIGHT";
import SignUpV5LIGHT from "./screens/SignUpV5LIGHT";
import AccountSetupNOTIFICATIONACCESSV5LIGHT from "./screens/AccountSetupNOTIFICATIONACCESSV5LIGHT";
import AccountSetupLOCATIONACCESSV5LIGHT from "./screens/AccountSetupLOCATIONACCESSV5LIGHT";
import SearchNearbyRestarauntsV5LIGHT from "./screens/SearchNearbyRestarauntsV5LIGHT";
import ScoresV5LIGHT1 from "./screens/ScoresV5LIGHT1";
import MenuV5ManageAccount from "./screens/MenuV5ManageAccount";
import SearchNearbyRestarauntsRESULTV5LIGHT from "./screens/SearchNearbyRestarauntsRESULTV5LIGHT";
import NewsV5LIGHT from "./screens/NewsV5LIGHT";
import MenuV5LIGHT from "./screens/MenuV5LIGHT";
import LocationAccessOverlay1 from "./components/LocationAccessOverlay1";
import ScheduleScreen from "./screens/ScheduleScreen";
import ScoresV5LIGHT from "./screens/ScoresV5LIGHT";
import AccountProfileV5LIGHTDefault from "./screens/AccountProfileV5LIGHTDefault";
import AccountSetupCHOOSETEAMSV5NFLLIGHT1 from "./screens/AccountSetupCHOOSETEAMSV5NFLLIGHT1";
import LoginV5LIGHT from "./screens/LoginV5LIGHT";
import PushNotificationAccessOverlay from "./components/PushNotificationAccessOverlay";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="SplashScreenV5LIGHT"
              component={SplashScreenV5LIGHT}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DashboardV5LIGHT2"
              component={DashboardV5LIGHT}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccountProfileV5LIGHTFavoriteBars"
              component={AccountProfileV5LIGHTFavoriteBars}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccountSetupCHOOSETEAMSV5NFLLIGHT"
              component={AccountSetupCHOOSETEAMSV5NFLLIGHT}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpV5LIGHT"
              component={SignUpV5LIGHT}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccountSetupNOTIFICATIONACCESSV5LIGHT"
              component={AccountSetupNOTIFICATIONACCESSV5LIGHT}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccountSetupLOCATIONACCESSV5LIGHT"
              component={AccountSetupLOCATIONACCESSV5LIGHT}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchNearbyRestarauntsV5LIGHT"
              component={SearchNearbyRestarauntsV5LIGHT}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ScoresV5LIGHT1"
              component={ScoresV5LIGHT1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MenuV5ManageAccount"
              component={MenuV5ManageAccount}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchNearbyRestarauntsRESULTV5LIGHT"
              component={SearchNearbyRestarauntsRESULTV5LIGHT}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewsV5LIGHT"
              component={NewsV5LIGHT}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MenuV5LIGHT"
              component={MenuV5LIGHT}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LocationAccessOverlay2"
              component={LocationAccessOverlay1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ScheduleScreen"
              component={ScheduleScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ScoresV5LIGHT"
              component={ScoresV5LIGHT}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccountProfileV5LIGHTDefault"
              component={AccountProfileV5LIGHTDefault}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccountSetupCHOOSETEAMSV5NFLLIGHT1"
              component={AccountSetupCHOOSETEAMSV5NFLLIGHT1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginV5LIGHT"
              component={LoginV5LIGHT}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
