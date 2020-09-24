import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { EditModal } from '../components/EditModal';
import { AppCard } from '../components/ui/AppCard';
import { THEME } from '../theme';

export const TodoScreen = (props) => {
    const [modal, setModal] = useState(false);
    const currentTodo = (text) => {
        props.editTodo(text, props.todo.id)
        setModal(false)
    }
    return (
        <View style={styles.container}>
            <EditModal visible={modal} 
                onCancel={() => setModal(false)} value={props.todo.text} currentTodo={currentTodo} />
            <AppCard style={styles.card}>
                <Text style={styles.title}>{props.todo.text}</Text>
                <View style={styles.buttonRedact}>
                    <Button title={'редакторовать'} onPress={() => setModal(true)} />
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