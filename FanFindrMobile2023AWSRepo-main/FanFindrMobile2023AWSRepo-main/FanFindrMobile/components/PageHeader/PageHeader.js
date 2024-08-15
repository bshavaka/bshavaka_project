//Components
import { View, StyleSheet, TouchableHighlight, SafeAreaView, Image } from "react-native";
import { COLORS } from "../../constants/theme";
import { Auth } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";

//Icons
import Ionicons from '@expo/vector-icons/Ionicons'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const PageHeader = () => {

    const navigation = useNavigation();

    const handleLogout = async () => {
        try {
          await Auth.signOut();
          navigation.navigate("LandingPage");
        } catch (error) {
          console.error('Error signing out:', error);
        }
      };

    return (
        <SafeAreaView style={styles.safeAreaViewContainer}>
            <View style={styles.container}>
                <View style={styles.FFLogoAndHeader}>
                    <Image
                        source={require('../../assets/FanFindrLogos/fanfindrwhite.png')}
                        style={{
                            width: 250,
                            height: 60,
                        }}
                    />
                </View>
                <View style={styles.iconContainer}>
                    <TouchableHighlight style={styles.icon}>
                        <FontAwesome name="bell-o" size={30} color="#242424" />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.icon}>
                        <MaterialIcons name="logout" size={30} color="#242424" onPress={handleLogout}/>
                    </TouchableHighlight>
                </View>
            </View>
        </SafeAreaView>
    )
}

//other option for page header logo
/*<Image
                        source={require('../../assets/FanFindrLogos/logodude.png')}
                        style={{
                            height: 65,
                            width: 40,
                            marginRight: 8,
                        }}
                    />
                    <Text style={styles.headerText}>FanFindr</Text>*/

const styles = StyleSheet.create({

    safeAreaViewContainer: {
        backgroundColor: COLORS.orange,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: COLORS.orange,
    },

    FFLogoAndHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    headerText: {
        color: COLORS.white,
        fontSize: 35,
        fontWeight: '600',
    },

    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        paddingLeft: 15,
    },

})

export default PageHeader;