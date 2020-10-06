import { ACTION_TYPES } from "../actions/flight";

const initialState = {
    list: []
}

export const flight = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload]
            }

        default:
            return state
    }
}
