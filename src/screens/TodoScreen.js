import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { AppCard } from '../components/ui/AppCard';
import { THEME } from '../theme';

export const TodoScreen = (props) => {
    return (
        <View style={styles.container}>
            <AppCard style={styles.card}>
                <Text style={styles.title}>{props.todo.text}</Text>
                <View style={styles.buttonRedact}>
                    <Button title={'редакторовать'} />
                </View>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title={'назад'} onPress={props.goBack} color={THEME.GREY_COLOR} />
                </View>
                <View style={styles.button}>
                    <Button title={'удалить'} onPress={() => props.removeTodo(props.todo.id)} color={THEME.DANGER_COLOR} />
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
        width: '40%',
    },
    title: {
        fontSize: 24,
        width: '60%'
    },
    buttonRedact: {
    },
    card: {
        marginBottom: 15
    }
})