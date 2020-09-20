import { createSelector } from 'reselect';

const rootState = state => state.search;

export const SearchTerm = createSelector(
    rootState,
    item => item.searchItem
)



