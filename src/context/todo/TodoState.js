import React, { useReducer, useContext } from 'react';
import { Alert } from 'react-native';
import { ScreenContext } from '../screen/screeenContext';
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types';
import { TodoContext } from './todoContext';
import { todoReducer } from './todoReducer';

export const TodoState = ({ children }) => {
    const initialState = {
        todos: [],
    }
    const { changeScreen } = useContext(ScreenContext)
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = (text) => {
        dispatch({ type: ADD_TODO, text })
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