import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppCard from '../components/AppCard';

function ItemsListScreen(props) {
    return (
        <View style={ styles.Container }>
        <AppCard 
           title= "Red jacket for sale"
           subTitle= "100$"
           image= {require("../assets/jacket.jpg")}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#f8f4f4',
        padding: 20,
        paddingTop: 100,
    }
})


export default ItemsListScreen;