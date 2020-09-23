import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';

export const MainScreen = (props) => {
    return (
        <View>
            <AddTodo addTodo={props.addTodo} />
            <FlatList data={props.todos} keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Todo id={item.id} text={item.text} time={item.time}
                        removeTodo={props.removeTodo} openTodo={props.openTodo} />)
                } />
        </View>
    )
}

const styles = StyleSheet.create({

})