import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { COLORS } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const DevButton = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={() => {
                navigation.navigate("ConfirmationPage")
            }}>
                <Text style={styles.btnText}>
                    Dev Page
                </Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 75,
        width: 175,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderStyle: "solid",
        borderColor: COLORS.white,
        borderWidth: 2,
        borderRadius: 20,
        padding: 10,
    },
    btnText: {
        color: COLORS.orange,
        fontSize: 20,
    },
});

export default DevButton;