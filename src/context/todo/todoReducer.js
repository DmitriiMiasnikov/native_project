import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../types"

const handlers = {
    [ADD_TODO]: (state, { text }) => ({
        ...state, todos: [
            {
                id: Date.now().toString(),
                time: `${new Date().getHours()}:${new Date().getMinutes()}`,
                text: text
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
    DEFAULT: state => state
}

export const todoReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}