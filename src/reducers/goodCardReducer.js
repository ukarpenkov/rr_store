let initialState = []

const goodCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case "OPEN_GOOD_CARD":
            return action.payload
        default:
            return state
    }
}


export default goodCardReducer