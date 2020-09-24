import React from 'react';
import { StyleSheet, View } from 'react-native';

export const AppCard = (props) => {
    return (
        <View style={{...styles.default, ...props.style}}>
            {props.children}
        </View>
    )
}
const styles = StyleSheet.create({
    default: {
        // borderWidth: 2,
        borderColor: 'black',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.5,
        shadowOffset: { width: 2, hegiht: 2 },
        backgroundColor: '#fff',
        elevation: 8,
        borderRadius: 10
    }
})