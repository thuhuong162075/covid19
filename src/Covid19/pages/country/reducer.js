import * as Types from './action'
const initialState = {
    showInput: false,
    pagination: {
        page: 1,
        limit: 10,
        totalRow: 1
    },
    arrPagi: [],
    filter: []
}
const CountryReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.SHOW_INPUT: {
            return {
                ...state,
                ...{
                    showInput: action.showInput
                }
            }
        }
        case Types.PAGINATION: {
            return {
                ...state,
                ...{
                    pagination: action.pagi
                }
            }
        }
        case Types.ARR_PAGI: {
            return {
                ...state,
                ...{
                    arrPagi: action.arr
                }
            }
        }
        case Types.FILTER_COUNTRY: {
            return {
                ...state,
                ...{
                    filter: action.arrfilter
                }
            }
        }
        default: return state
    }
}
export default CountryReducer