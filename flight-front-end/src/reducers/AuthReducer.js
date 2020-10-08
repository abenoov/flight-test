import { ACTION_TYPES } from "../actions/AuthAction";
const initialState = {
    list: []
}

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.LOGIN:
            return {
                ...state,
                list: [...action.payload]
            }
        
        case ACTION_TYPES.REGISTER:
            return {
                ...state,
                list: [...state.list, action.payload]
            }

        default:
            return state
    }
}