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