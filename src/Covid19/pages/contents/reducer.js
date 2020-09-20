import * as Types from './action'
const initialState = {
    isLoading: false,
    dataCovid: {},
    errorData: null
}

const DataCovidReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.IS_LOADING: {
            return {
                ...state, 
                ...{
                    isLoading: action.loading
                }
            }
        }
        case Types.LOADING_SUCCESS: {
            return {
                ...state,
                ...{
                    isLoading: false,
                    dataCovid: action.data[0],
                    errorData: null
                }
            }
        }
        case Types.LOADING_FAILURE: {
            return {
                ...state,
                ...{
                    isLoading: false,
                    dataCovid: {},
                    errorData: action.error
                }
            }
        }
        default: return state
    }
}
export default DataCovidReducer;