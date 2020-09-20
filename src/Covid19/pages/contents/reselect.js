import { createSelector } from 'reselect';

const rootState = state => state.dataCovid;
const countryList = [ "Bắc Mỹ", "Châu Âu", "Châu Á", "Nam Mỹ", "Châu Phi"]
export const loadingCovid = createSelector(
  rootState,
  item => item.isLoading
);
export const fetchArea = createSelector(
    rootState,
    item => {
        return Object.keys(item.dataCovid).length === 0 ? [] :
            item.dataCovid.table_country.filter(item => countryList.includes(item.country) ) 
    }
)
export const fetchTableWorld = createSelector(
    rootState,
    item => {
        return Object.keys(item.dataCovid).length === 0 ? [] :
        item.dataCovid.table_world
    }
)
export const fetchTableCountry = createSelector(
    rootState,
    item => {
        return Object.keys(item.dataCovid).length === 0 ? [] :
            item.dataCovid.table_country.filter(item => !countryList.includes(item.country))
    }
)



