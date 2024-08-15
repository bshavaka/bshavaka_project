//Components
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { StatusBar } from 'react-native';

//Pages
import Dashboard from './pages/Dashboard/Dashboard';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginScreen from './pages/Login/LoginScreen';
import SignUpScreen from './pages/SignUp/SignUpScreen';
import EditTeamsPage from './pages/EditTeamsPage/EditTeamsPage';
import LocationPage from './pages/LocationPage/LocationPage';
import AccountPage from './pages/Dashboard/AccountPage.js';
import HandleConfirmation from './pages/HandleConfirmation/HandleConfirmation.js';
import TeamSelectionPage from './pages/TeamSelectionPage/TeamSelectionPage.js';
import FirstLoginScreen from './pages/Login/FirstLoginScreen.js';
import EnableNotifications from './pages/EnableNotifications/EnableNotifications.js';
import ReviewScreen from './pages/ReviewScreen/ReviewScreen.js';

Amplify.configure({
  ...awsconfig,
  Storage: {
    AWSS3: {
      bucket: 'fanfindrmobile9f4d16d45d3a4332872409568846bab3154852-dev',
      region: 'us-east-2',
    },
  },
});

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content"/>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{gestureEnabled: false}}
        />

        <Stack.Screen
          name="FirstLogin"
          component={FirstLoginScreen}
          options={{gestureEnabled: false}}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{gestureEnabled: false}}
        />

        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{gestureEnabled: false}}
        />

        <Stack.Screen
          name="EditTeamsPage"
          component={EditTeamsPage}
          options={{gestureEnabled: false}}
        />

        <Stack.Screen
          name="EnableNotifications"
          component={EnableNotifications}
        />

        <Stack.Screen
          name="LocationPage"
          component={LocationPage}
          options={{gestureEnabled: false}}
        />

        <Stack.Screen
          name="TeamSelectionPage"
          component={TeamSelectionPage}
        />

        <Stack.Screen
          name="Account"
          component={AccountPage}
        />

         <Stack.Screen
          name="ConfirmationPage"
          component={HandleConfirmation}
          options={{gestureEnabled: false}}
        />

        <Stack.Screen
          name="Reviews"
          component={ReviewScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;