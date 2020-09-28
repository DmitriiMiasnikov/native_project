import React, { useReducer, useContext } from 'react';
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
    const removeTodo = (id) => {
        changeScreen(null)
        dispatch({ type: REMOVE_TODO, id })
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