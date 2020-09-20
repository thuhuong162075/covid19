import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
//lưu trú state vào storage
import storage from 'redux-persist/lib/storage';
import DataCovidReducer from './pages/contents/reducer'
import CountryReducer from './pages/country/reducer'
import SearchReducer from './pages/search/reducer'
const persistRootConfig = {
    key: 'root',
    storage: storage,
    blackList: ['isLoading','errorData']
}
const persistDataConfig = {
    key: 'dataCovid',
    storage: storage,
    whiteList: ['dataCovid']
}
const persistCountryConfig = {
    key: 'country',
    storage: storage,
    blackList: ['showInput']
}
const persistSearchConfig = {
    key: 'search',
    storage: storage,
    blackList: ['searchItem']
}
const rootReducer = combineReducers({
    dataCovid: persistReducer(persistDataConfig, DataCovidReducer),
    country: persistReducer(persistCountryConfig, CountryReducer),
    search: persistReducer(persistSearchConfig, SearchReducer)
})
export default persistReducer(persistRootConfig, rootReducer)
