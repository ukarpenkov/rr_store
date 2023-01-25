import goods from '../data/products.json'

// let goodsWithFormatDate = goods.map(item => {
//     return {
//         ...item,
//         start_date: new Date(item['start_date']).toLocaleDateString('ru-RU'),
//         end_date: new Date(item['end_date']).toLocaleDateString('ru-RU'),
//     }
// })



let initialState = goods
const sortByKeyMin = key => (a, b) => a[key] > b[key] ? 1 : -1
const sortByKeyMax = key => (a, b) => a[key] < b[key] ? 1 : -1
const sortTimeByKeyMin = key => (a, b) => Date.parse(new Date(a[key])) > Date.parse(new Date(b[key])) ? 1 : -1
const sortTimeByKeyMax = key => (a, b) => Date.parse(new Date(a[key])) < Date.parse(new Date(b[key])) ? 1 : -1
const sortReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SORT_BY_NAME":
            if (!action.payload) {
                return [...state].sort(sortByKeyMin('name'))
            }
            if (action.payload) {
                return [...state].sort(sortByKeyMax('name'))
            }
            break
        case "SORT_BY_VIEWS":
            if (!action.payload) {
                return [...state].sort(sortByKeyMax('views'))
            }
            if (action.payload) {
                return [...state].sort(sortByKeyMin('views'))
            }
            break
        case "SORT_BY_START_DATE":
            if (!action.payload) {
                return [...state].sort(sortTimeByKeyMin('start_date'))
            }
            if (action.payload) {
                return [...state].sort(sortTimeByKeyMax('start_date'))
            }
            break
        case "SORT_BY_END_DATE":
            if (!action.payload) {
                return [...state].sort(sortTimeByKeyMax('end_date'))
            }
            if (action.payload) {
                return [...state].sort(sortTimeByKeyMin('end_date'))
            }
            break
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


export default sortReducer