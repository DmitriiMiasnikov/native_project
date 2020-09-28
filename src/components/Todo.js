import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export const Todo = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.5}
            onLongPress={() => props.removeTodo(props.id)}
            onPress={() => props.openTodo(props.id)}>
            <View style={styles.todo}>
                <View style={styles.textBlock}>
                    <Text style={styles.text}>{props.text}</Text>
                </View>
                <View>
                    <Text style={styles.time}>{props.time}</Text>
                </View>
            </View>
        </TouchableOpacity>
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
        fontSize: 20,
        // fontFamily: 'roboto-regular'
    },
    time: {
        fontSize: 14
    }
})
