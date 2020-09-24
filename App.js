import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

export default function App() {
  const [todoId, setTodoId] = useState(0);
  const [todos, setTodos] = useState([]);
  const addTodo = (text) => {
    setTodos((prevTodos) => [{
      id: Date.now().toString(),
      time: `${new Date().getHours()}:${new Date().getMinutes()}`,
      text
    }, ...prevTodos])
  }
  const removeTodo = (id) => {
    const todo = todos.find(el => el.id === id);
    Alert.alert(
      'удаление элемента',
      `Вы дейстивельно хотите удалить запись ${todo.text} ?`,
      [
        {
          text: 'Отмена',
          style: 'cancel'
        },
        {
          text: 'Удалить',
          style: 'destructive',
          onPress: () => {
            setTodoId(null);
            setTodos(prev => prev.filter(el => el.id !== id))
          }
        }
      ],
      {
        cancelable: false
      }
    )
  }
  const openTodo = (id) => {
    setTodoId(id)
  }
  const goBack = () => {
    setTodoId(0);
  }
  let content = <MainScreen addTodo={addTodo} removeTodo={removeTodo} todos={todos} openTodo={openTodo} />;
  if (todoId) {
    content = <TodoScreen goBack={goBack} todo={todos.find(el => el.id === todoId)} removeTodo={removeTodo} />
  }
  return (
    <View style={styles.container} >
      <Navbar title='title of navbar' />
      {content}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
