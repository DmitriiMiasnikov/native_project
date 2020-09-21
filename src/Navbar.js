import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export const Navbar = (props) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: 'grey',
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10
    },
    text: {
        color: 'white',
        fontSize: 22
    }
})