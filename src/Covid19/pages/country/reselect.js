import { createSelector } from 'reselect';

const rootState = state => state.country;

export const showInputData = createSelector(
    rootState,
    item => item.showInput
)
export const onPagination = createSelector(
    rootState,
    item => item.pagination
)
export const ArrPagi = createSelector(
    rootState,
    item => item.arrPagi
)
export const ArrFilter = createSelector(
    rootState,
    item => item.filter
)



