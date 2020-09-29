import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, Button, Dimensions } from 'react-native';
import { EditModal } from '../components/EditModal';
import { AppCard } from '../components/ui/AppCard';
import { ScreenContext } from '../context/screen/screeenContext';
import { TodoContext } from '../context/todo/todoContext';
import { THEME } from '../theme';

export const TodoScreen = () => {
    const {todos, editTodo, removeTodo} = useContext(TodoContext)
    const {todoId, changeScreen} = useContext(ScreenContext)
    const [modal, setModal] = useState(false);

    const todo = todos.find(el => el.id === todoId)

    const currentTodo = async (text) => {
        await editTodo(text, todo.id)
        setModal(false)
    }
    return (
        <View style={styles.container}>
            <EditModal visible={modal} 
                onCancel={() => setModal(false)} value={todo.text} currentTodo={currentTodo} />
            <AppCard style={styles.card}>
                <Text style={styles.title}>{todo.text}</Text>
                <View style={styles.buttonRedact}>
                    <Button title={'редакторовать'} onPress={() => setModal(true)} />
                </View>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title={'назад'} onPress={() => changeScreen(null)} color={THEME.GREY_COLOR} />
                </View>
                <View style={styles.button}>
                    <Button title={'удалить'} onPress={() => removeTodo(todo.id)} color={THEME.DANGER_COLOR} />
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
        width: Dimensions.get('window').width / 3,
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