import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const Todo = (props) => {
    return (
        <View style={styles.todo}>
            <View style={styles.textBlock}><Text style={styles.text}>{props.text}</Text></View>
            <View><Text style={styles.time}>{props.time}</Text></View>
        </View>
    )
}
const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 15,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: 10,
        marginHorizontal: 10,
        marginBottom: 10,
        justifyContent: 'space-between'
    },
    textBlock: {
        textAlign: 'left',
        width: '85%'
    },
    text: {
        fontSize: 20
    },
    time: {
        fontSize: 14
    }
})
