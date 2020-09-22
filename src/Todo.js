import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const Todo = (props) => {
    return (
        <View style={styles.todo}>
            <Text>{props.text}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: 10,
        marginHorizontal: 10,
        marginBottom: 10
    }
})
