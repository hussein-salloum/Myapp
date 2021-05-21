import React from 'react';
import { Text, StyleSheet } from 'react-native';

function AppText({ children, style, ...otherProps }) {
    return (
       <Text style={[styles.text, style]} {...otherProps}>{ children }</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
    }
})

export default AppText;