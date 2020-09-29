import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

export const AppLoader = () => {
    return (
        <View style={styles.indicator}>
            <ActivityIndicator size='large' />
        </View>
    )
}

const styles = StyleSheet.create({
    indicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})