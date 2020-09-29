import React, { useEffect, useState, useContext, useCallback } from 'react';
import { StyleSheet, View, FlatList, Image, Dimensions, Text, Button } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';
import { AppLoader } from '../components/ui/AppLoader';
import { ScreenContext } from '../context/screen/screeenContext';
import { TodoContext } from '../context/todo/todoContext';
import { THEME } from '../theme';

export const MainScreen = () => {
    const { addTodo, todos, removeTodo, fetchTodos, loading, error } = useContext(TodoContext)
    const { changeScreen } = useContext(ScreenContext)
    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width)
    const loadTodos = useCallback(async () => {
        await fetchTodos()
    }, [fetchTodos])
    useEffect(() => {
        loadTodos()
    }, [])
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
    if (error) {
        return <View style={styles.errorWrap}>
            <Text style={styles.error}>
                {error}
            </Text>
            <Button title='Повторить' onPress={loadTodos}/>
        </View>
    }
    let content = (
        <View style={{ width: deviceWidth }}>
            <FlatList data={todos} keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Todo id={item.id} text={item.text} time={item.time}
                        removeTodo={removeTodo} openTodo={changeScreen} />)
                } />
        </View>
    )
    if (todos.length === 0) {
        content = <View style={styles.imageWrap}>
            <Image source={require('../../assets/no-items.png')} style={styles.image} resizeMode={'contain'} />
        </View>
    }
    return (
        <View>
            <AddTodo addTodo={addTodo} />
                {loading ? <View style={styles.appLoader}><AppLoader /></View> : content}
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
    },
    appLoader: {
        height: '80%',
    },
    errorWrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    error: {
        fontSize: 22,
        color: THEME.DANGER_COLOR, 
        marginBottom: 15
    }
})