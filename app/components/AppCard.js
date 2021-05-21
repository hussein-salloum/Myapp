import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Image } from 'react-native-expo-image-cache';

import colors from '../config/colors';
import AppText from './AppText';

function AppCard( {title, subTitle, imageUrl, onPress, thumbnailUrl }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={ styles.card }>
            <Image style={styles.image} 
                tint="light"
                preview={{ uri: thumbnailUrl }}
                uri={imageUrl} />
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden",
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        marginBottom: 7
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold",
    },
    image: {
        width: "100%",
        height: 200,
    },
})

export default AppCard;