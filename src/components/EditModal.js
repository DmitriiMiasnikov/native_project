import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Modal, Alert } from 'react-native';
import { THEME } from '../theme';

export const EditModal = (props) => {
    const [value, setValue] = useState(props.value)
    const pressHandler = () => {
        if (!value.trim()) {
            Alert.alert('empty message')
        } else {
            props.currentTodo(value)
        }
    }
    const cancelHandler = () => {
        setValue(props.value)
        props.onCancel()
    }
    return (
        <Modal visible={props.visible} animationType={'slide'} transparent={false}>
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder={'Введите сообщение'} onChangeText={setValue} value={value} />
                <View style={styles.buttons}>
                    <Button title={'Отменить'} onPress={cancelHandler} color={THEME.DANGER_COLOR} />
                    <Button title={'Сохранить'} disabled={!value} onPress={pressHandler} />
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: 2,
        alignItems: 'center'
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.NAVBAR_COLOR,
        borderBottomWidth: 2,
        width: '80%',
        marginBottom: 15
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%'
    }
})