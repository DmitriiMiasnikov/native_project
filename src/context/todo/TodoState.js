import React, { useReducer } from 'react';
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types';
import { TodoContext } from './todoContext';
import { todoReducer } from './todoReducer';

export const TodoState = ({ children }) => {
    const initialState = {
        todos: [],
    }
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = (text) => {
        return dispatch({ type: ADD_TODO, text })
    }
    const removeTodo = (id) => {
        return dispatch({ type: REMOVE_TODO, id })
    }
    const editTodo = (text, id) => {
        return dispatch({ type: UPDATE_TODO, text, id })
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