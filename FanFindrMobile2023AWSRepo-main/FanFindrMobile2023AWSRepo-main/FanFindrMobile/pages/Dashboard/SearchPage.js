//Components
import { Text, View, StyleSheet, TextInput, Image, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { COLORS } from "../../constants/theme";
import PageHeader from "../../components/PageHeader/PageHeader";
import * as Location from 'expo-location';
import { useEffect, useState } from "react";
import Carousel from "react-native-snap-carousel-v4";

//Icons
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { ScreenWidth } from "react-native-elements/dist/helpers";
import { FontAwesome } from '@expo/vector-icons';

const SearchPage = () => {

    const [currentLocation, setCurrentLocation] = useState(null);
    const [initialRegion, setInitialRegion] = useState(null);

    useEffect(() => {
        const getLocation = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                console.log("Permission to access location was denied");
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setCurrentLocation(location.coords);

            setInitialRegion({
                //Lat and Long for user current location
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0,
                longitudeDelta: 0.0,
            });
        };

        getLocation();
    }, []);

    return (
        <View>
            <PageHeader />
            <View style={styles.headerContainer}>
                <View style={styles.searchBarContiner}>
                    <AntDesign name="search1" size={20} color="grey" />
                    <TextInput
                        style={styles.searchBar}
                        placeholder="Search Events..."
                    />
                </View>
            </View>
            <View style={styles.locationDateFilterContainer}>
                <View style={styles.locationContainer}>
                    <Text style={{ color: 'grey' }}>Location</Text>
                    <EvilIcons name="location" size={28} color="grey" />
                </View>
                <View style={styles.dateContainer}>
                    <Text style={{ color: 'grey' }}>Date</Text>
                    <AntDesign name="calendar" size={24} color="grey" />
                </View>
                <View style={styles.filterContainer}>
                    <Image
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: 'grey',
                        }}
                        source={require('../../assets/icons/filter.png')}
                    />
                </View>
            </View>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={initialRegion}
                customMapStyle={mapStyle}
            >
            
            </MapView>
        </View>
    );
}

mapStyle = [
    {
        elementType: "labels",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "administrative.land_parcel",
        stylers: [
            {
                visibility: "on"
            }
        ]
    },
    {
        featureType: "administrative.neighborhood",
        stylers: [
            {
                visibility: "on"
            }
        ]
    }
]

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: COLORS.orange,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    searchBarContiner: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        height: 40,
        width: 400,
        paddingHorizontal: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    searchBar: {
        flex: 1,
        paddingHorizontal: 5,
    },
    locationDateFilterContainer: {
        backgroundColor: COLORS.orange,
        paddingBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    locationContainer: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        height: 40,
        width: 150,
        paddingHorizontal: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    locationBar: {
        flex: 1,
        paddingHorizontal: 5,
    },
    dateContainer: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        height: 40,
        width: 150,
        paddingHorizontal: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    dateBar: {
        flex: 1,
        paddingHorizontal: 5,
    },
    filterContainer: {
        backgroundColor: COLORS.white,
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
    },

    map: {
        width: '100%',
        height: '100%',
    },

    carousel: {
        position: 'absolute',
        bottom: 0,
        marginBottom: 270
    },
    cardContainer: {
        backgroundColor: COLORS.aqua,
        borderRadius: 10,
    },
});

export default SearchPage;