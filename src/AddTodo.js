import React from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

export const AddTodo = (props) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input}/>
            <Button style={styles.button} title='добавить'/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 4,
        marginHorizontal: 10
    },
    input: {
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderColor: '#aaa',
        padding: 10
    },
    button: {
        marginLeft: 10,
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
    }
})