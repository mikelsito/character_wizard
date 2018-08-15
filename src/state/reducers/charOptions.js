import {
    SET_RACE
} from '../actions'

export const initialState = {
    languageOptions: null,
    languageDescriptions: null

}

// We fetch the option before setting it...
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_RACE:
            return {
                ...state,
                languageOptions: action.payload.language_options,
                languageDescriptions: action.payload.language_options
            }
        default:
            return state
    }
}