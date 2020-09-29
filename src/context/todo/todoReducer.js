import { ADD_TODO, CLEAR_ERROR, FETCH_TODOS, REMOVE_TODO, SHOW_ERROR, SHOW_LOADER, UPDATE_TODO, HIDE_LOADER } from "../types"

const handlers = {
    [ADD_TODO]: (state, { text, time, id }) => ({
        ...state, todos: [
            {
                id,
                time,
                text
            },
            ...state.todos
        ]
    }),
    [REMOVE_TODO]: (state, { id }) => ({
        ...state, todos: state.todos.filter(el => el.id !== id)
    }),
    [UPDATE_TODO]: (state, { text, id }) => ({
        ...state, todos: state.todos.map(el => {
            if (el.id === id) {
                el.text = text
            }
            return el
        })
    }),
    [SHOW_LOADER]: (state => ({ ...state, loading: true })),
    [HIDE_LOADER]: (state => ({ ...state, loading: false })),
    [SHOW_ERROR]: ((state, { error }) => ({ ...state, error })),
    [CLEAR_ERROR]: (state => ({ ...state, error: null })),
    [FETCH_TODOS]: (state, { todos }) => ({ ...state, todos }),
    DEFAULT: state => state
}

export const todoReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}