import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import Icon from './Icon';

function CategoryPickerItem( {item, onPress }) {
    return (
       
        <View style={styles.Container}>
           <TouchableOpacity onPress={onPress}>
            <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80}/>
            <AppText style={styles.label}>{item.label}</AppText>
           </TouchableOpacity>
        </View>
       
    )
}

const styles = StyleSheet.create({
    Container: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: "center",
        width: "33%"
    },
    label: {
        marginTop: 5,
        textAlign: "center",
    }
})

export default CategoryPickerItem;