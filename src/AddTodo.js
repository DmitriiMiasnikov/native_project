import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

export const AddTodo = (props) => {
    const [value, setValue] = useState('')
    const pressHandler = () => {
        if (!value.trim()) {
            // empry input
        } else {
            props.addTodo(value)
            setValue('')
        }
    }
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={setValue} value ={value} placeholder='введите текс'/>
            <Button style={styles.button} title='добавить' onPress={pressHandler} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 4,
        marginBottom: 10,
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