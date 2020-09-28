import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { Navbar } from './components/Navbar';
import { MainScreen } from './screens/MainScreen';
import { TodoScreen } from './screens/TodoScreen';
import { TodoContext } from './context/todo/todoContext';
import { ScreenContext } from './context/screen/screeenContext';

export const MainLayout = () => {
    const { todoId } = useContext(ScreenContext)
    // const removeTodo = (id) => {
    //     const todo = todos.find(el => el.id === id);
    //     Alert.alert(
    //         'удаление элемента',
    //         `Вы дейстивельно хотите удалить запись ${todo.text} ?`,
    //         [
    //             {
    //                 text: 'Отмена',
    //                 style: 'cancel'
    //             },
    //             {
    //                 text: 'Удалить',
    //                 style: 'destructive',
    //                 onPress: () => {
    //                     setTodoId(null);
    //                     setTodos(prev => prev.filter(el => el.id !== id))
    //                 }
    //             }
    //         ],
    //         {
    //             cancelable: false
    //         }
    //     )
    // }
    // let content = <MainScreen />;
    // if (todoId) {
    //     content = <TodoScreen />
    // }
    return (
        <View style={styles.container} >
            <Navbar title='title of navbar' />
            {todoId ? <TodoScreen /> : <MainScreen />}
            <StatusBar style="auto" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {

    },
});