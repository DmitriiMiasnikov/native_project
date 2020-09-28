import { CHANGE_SCREEN } from "../types"

const handlers = {
    [CHANGE_SCREEN]: (state, payload) => {
        return payload
    },
    DEFAULT: state => state
}

export const screenReducer = (state, action) => {
    const hanldler = handlers[action.type] || handlers.DEFAULT
    return handlers(state, action.payload)
}