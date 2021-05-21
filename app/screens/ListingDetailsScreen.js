import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/lists/ListItem';
import ContactSellerForm from '../components/ContactSellerForm';

function ListingDetailsScreen({ route }) {
    const listing = route.params;

    return (
        <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}>
            <Image style={styles.image}
             tint="light"
             uri={listing.images[0].url}
             preview={{uri: listing.images[0].thumbnailUrl}} />
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{listing.title}</AppText>
            <AppText style={styles.price}>{"$" +listing.price}</AppText>
            <View style={styles.userContainer}>
            <ListItem
              image={require("../assets/hussein.jpg")}
              title= "Hussein Salloum"
              subTitle= "5 Listings" 
            />
            </View>
            <ContactSellerForm listing={listing}/>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    userContainer: {
        marginVertical: 30,
    },
    image: {
        width: "100%",
        height: 270,
    },
})

export default ListingDetailsScreen;