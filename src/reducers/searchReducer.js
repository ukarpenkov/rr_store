let initialState = ''

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH_GOODS":
            return action.payload
        default:
            return state
    }
}


export default searchReducer