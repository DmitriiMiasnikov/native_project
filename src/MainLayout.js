import React, {useState, useContext} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { Navbar } from './components/Navbar';
import { MainScreen } from './screens/MainScreen';
import { TodoScreen } from './screens/TodoScreen';
import { TodoContext } from './context/todo/todoContext';

export const MainLayout = () => {
    const {todos, addTodo, removeTodo, editTodo} = useContext(TodoContext);
    const [todoId, setTodoId] = useState(null);

    // const addTodo = (text) => {
    //     setTodos((prevTodos) => [{
    //         id: Date.now().toString(),
    //         time: `${new Date().getHours()}:${new Date().getMinutes()}`,
    //         text
    //     }, ...prevTodos])
    // }
    // const editTodo = (text, id) => {
    //     setTodos((prevTodos) => prevTodos.map(el => {
    //         if (el.id === id) {
    //             el.text = text
    //         }
    //         return el
    //     })
    //     )
    // }
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
    const openTodo = (id) => {
        setTodoId(id)
    }
    const goBack = () => {
        setTodoId(0);
    }
    let content = <MainScreen addTodo={addTodo} removeTodo={removeTodo} todos={todos} openTodo={openTodo} />;
    if (todoId) {
        const selectedTodo = todos.find(el => el.id === todoId)
        content = <TodoScreen goBack={goBack} todo={selectedTodo} removeTodo={removeTodo} editTodo={editTodo} />
    }
    return (
        <View style={styles.container} >
            <Navbar title='title of navbar' />
            {content}
            <StatusBar style="auto" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {

    },
});