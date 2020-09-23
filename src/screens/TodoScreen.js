import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { THEME } from '../theme';

export const TodoScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>{props.todo.text}</Text>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title={'назад'} onPress={props.goBack} color={THEME.GREY_COLOR}/>
                </View>
                <View style={styles.button}>
                    <Button title={'удалить'} onPress={() => console.log('3')} color={THEME.DANGER_COLOR} />
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: '40%'
    }
})