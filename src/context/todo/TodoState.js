import React, { useReducer, useContext } from 'react';
import { Alert } from 'react-native';
import { ScreenContext } from '../screen/screeenContext';
import { ADD_TODO, CLEAR_ERROR, FETCH_TODOS, HIDE_LOADER, REMOVE_TODO, SHOW_ERROR, SHOW_LOADER, UPDATE_TODO } from '../types';
import { TodoContext } from './todoContext';
import { todoReducer } from './todoReducer';
import { http } from './../../http';

export const TodoState = ({ children }) => {
    const initialState = {
        todos: [],
        loading: false,
        error: null
    }
    const { changeScreen } = useContext(ScreenContext)
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = async (text) => {
        const time = `${new Date().getHours()}:${new Date().getMinutes()}`;
        const data = await http.post('https://native-project-398bb.firebaseio.com/todos.json', { text, time })
        dispatch({ type: ADD_TODO, text, time, id: data.name })
    }
    const removeTodo = async (id) => {
        const todo = state.todos.find(el => el.id === id)
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
                    onPress: async () => {
                        await http.delete(`https://native-project-398bb.firebaseio.com/todos/${id}.json`, { id })
                        changeScreen(null)
                        dispatch({ type: REMOVE_TODO, id })
                    }
                }
            ],
            {
                cancelable: false
            }
        )
    }
    const fetchTodos = async () => {
        showLoader()
        clearError()
        try {
            const data = await http.get('https://native-project-398bb.firebaseio.com/todos.json')
            const todos = data ? Object.keys(data).map(el => ({ ...data[el], id: el })) : []
            dispatch({ type: FETCH_TODOS, todos })
        } catch (error) {
            showError('Что то пошло не так...')
        } finally {
            hideLoader()
        }
    }
    const editTodo = async (text, id) => {
        clearError()
        const time = `${new Date().getHours()}:${new Date().getMinutes()}`;
        try {
            await http.patch(`https://native-project-398bb.firebaseio.com/todos/${id}.json`, { text, time })
            dispatch({ type: UPDATE_TODO, text, id })
        } catch (error) {
            showError('Что то пошло не так...')
        }

    }
    const showLoader = () => {
        dispatch({ type: SHOW_LOADER })
    }
    const hideLoader = () => {
        dispatch({ type: HIDE_LOADER })
    }
    const showError = (error) => {
        dispatch({ type: SHOW_ERROR, error })
    }
    const clearError = () => {
        dispatch({ type: CLEAR_ERROR })
    }
    return (
        <TodoContext.Provider value={{
            todos: state.todos,
            loading: state.loading,
            error: state.error,
            addTodo,
            removeTodo,
            editTodo,
            fetchTodos,
        }}>
            {children}
        </TodoContext.Provider>
    )
}