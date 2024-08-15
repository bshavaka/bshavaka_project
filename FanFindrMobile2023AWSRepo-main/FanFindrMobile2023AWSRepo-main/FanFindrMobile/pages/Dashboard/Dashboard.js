//Components
import { View, StyleSheet } from "react-native";
import BottomBar from "../../components/BottomBar/BottomBar";

//Componentes
import { NavigationContainer } from "@react-navigation/native";

const Dashboard = () => {

    return (
        <View style={styles.container}>
            <BottomBar />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
});

export default Dashboard;