import React, {useEffect, useState, useContext} from 'react';
import { StyleSheet, View, FlatList, Image, Dimensions } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';
import { ScreenContext } from '../context/screen/screeenContext';
import { TodoContext } from '../context/todo/todoContext';

export const MainScreen = () => {
    const {addTodo, todos, removeTodo} = useContext(TodoContext)
    const {changeScreen} = useContext(ScreenContext)
    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width)
    useEffect(() => {
        const update = () => {
            const width = Dimensions.get('window').width
            setDeviceWidth(width)
        }
        Dimensions.addEventListener('change', update)

        return () => {
            Dimensions.removeEventListener('change', update)
        }
    })

    let content = (
        <View style={{width: deviceWidth }}>
        <FlatList data={todos} keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <Todo id={item.id} text={item.text} time={item.time}
                    removeTodo={removeTodo} openTodo={changeScreen} />)
            } />
        </View>
    )
    if (todos.length === 0) {
        content = <View style={styles.imageWrap}>
            <Image source={require('../../assets/no-items.png')} style={styles.image} resizeMode={'contain'}/>
        </View>
    }
    return (
        <View>
            <AddTodo addTodo={addTodo} />
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