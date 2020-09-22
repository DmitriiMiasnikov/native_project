import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';
import { Todo } from './src/Todo'

export default function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (text) => {
    setTodos((prevTodos) => [{
      id: Date.now().toString(),
      time: `${new Date().getHours()}:${new Date().getMinutes()}`,
      text
    }, ...prevTodos])
  }
  return (
    <View style={styles.container} >
      <Navbar title='title of navbar' />
      <AddTodo addTodo={addTodo} />

      <FlatList data={todos} keyExtractor={item => item.id}
        renderItem={({item}) => <Todo text={item.text} time={item.time}/>}/>

      {/* <ScrollView>
        {
          todos.map((el, index) => <Todo key={index} text={el.text} time={el.time}/>)
        }
      </ScrollView> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
