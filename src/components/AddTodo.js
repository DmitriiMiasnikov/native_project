import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { THEME } from '../theme';

export const AddTodo = (props) => {
    const [value, setValue] = useState('')
    const pressHandler = () => {
        if (!value.trim()) {
            Alert.alert('empty message')
        } else {
            props.addTodo(value)
            setValue('')
        }
    }
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={setValue}
                value={value} placeholder='Введите текст' autoCorrect={false} autoCapitalize={'none'} />
            <Button style={styles.button} title='Добавить' onPress={pressHandler} disabled={!value}/>
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
        borderColor: THEME.NAVBAR_COLOR,
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