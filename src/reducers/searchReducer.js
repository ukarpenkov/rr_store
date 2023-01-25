


let initialState = ''

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH_GOODS":

            if (action.payload !== '') {
                let filteredGoods = [...state]
                return [...filteredGoods].slice().filter(item => item.name.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()))
            }
            break
        case "GET_FULL_LIST":
            console.log(state)
            return state

        default:
            return state
    }
}


export default searchReducer