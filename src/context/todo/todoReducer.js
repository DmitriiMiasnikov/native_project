import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../types"



export const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state, todos: [{
                    id: Date.now().toString(),
                    time: `${new Date().getHours()}:${new Date().getMinutes()}`,
                    text: action.text
                }, ...state.todos]
            }
        }
        case REMOVE_TODO: {
            return { ...state, todos: state.todos.filter(el => el.id !== action.id) }
        }
        case UPDATE_TODO: {
            return {
                ...state, todos: state.todos.map(el => {
                    if (el.id === action.id) {
                        el.text = action.text
                    }
                    return el
                })
            }
        }
        default: return state
    }
    return state
}