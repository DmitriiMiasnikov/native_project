import React, { useReducer, useContext } from 'react';
import { Alert } from 'react-native';
import { ScreenContext } from '../screen/screeenContext';
import { ADD_TODO, CLEAR_ERROR, HIDE_LOADER, REMOVE_TODO, SHOW_ERROR, SHOW_LOADER, UPDATE_TODO } from '../types';
import { TodoContext } from './todoContext';
import { todoReducer } from './todoReducer';

export const TodoState = ({ children }) => {
    const initialState = {
        todos: [],
        loading: false,
        error: null
    }
    const { changeScreen } = useContext(ScreenContext)
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = async (text) => {
        const response = await fetch('https://native-project-398bb.firebaseio.com/todos.json', {
            method: 'POST',
            heador: { 'Content-type': 'application/json' },
            body: JSON.stringify({ text })
        })
        const data = await response.json()
        dispatch({ type: ADD_TODO, text, id: data.name })
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
                    onPress: () => {
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
    const editTodo = (text, id) => {
        dispatch({ type: UPDATE_TODO, text, id })
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
            addTodo,
            removeTodo,
            editTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}