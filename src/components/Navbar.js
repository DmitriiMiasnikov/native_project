import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import {THEME} from './../theme'

export const Navbar = (props) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: Platform.OS === 'android' ? THEME.NAVBAR_COLOR : '#fff',
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10
    },
    text: {
        color: Platform.OS === 'android' ? '#fff' : THEME.NAVBAR_COLOR,
        fontSize: 22
    }
})