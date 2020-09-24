import React from 'react';
import { StyleSheet, View, FlatList, Image } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';

export const MainScreen = (props) => {
    let content = (
        <FlatList data={props.todos} keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <Todo id={item.id} text={item.text} time={item.time}
                    removeTodo={props.removeTodo} openTodo={props.openTodo} />)
            } />
    )
    if (props.todos.length === 0) {
        content = <View style={styles.imageWrap}>
            <Image source={require('../../assets/no-items.png')} style={styles.image} resizeMode={'contain'}/>
        </View>
    }
    return (
        <View>
            <AddTodo addTodo={props.addTodo} />
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    imageWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        height: 300
    },
    image: {
        width: '100%',
        height: '100%'
    }
})