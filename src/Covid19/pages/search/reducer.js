import * as Types from './action'
const initialState = {
    searchItem: ''
}
const SearchReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.SEARCH_ITEM: {
            return {
                ...state,
                ...{
                    searchItem: action.searchItem
                }
            }
        }
        default: return state
    }
}
export default SearchReducer