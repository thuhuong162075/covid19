export const SHOW_INPUT = 'SHOW_INPUT';
export const PAGINATION = 'PAGINATION';
export const ARR_PAGI = 'ARR_PAGI'
export const FILTER_COUNTRY = 'FILTER_COUNTRY'

export const onShowInput = (showInput) => ({
    type: SHOW_INPUT,
    showInput
})
export const onPaginationAction = (pagi) => ({
    type: PAGINATION,
    pagi
})
export const onArrPagiChange = (arr) => ({
    type: ARR_PAGI,
    arr
})
export const onFilters = (arrfilter) => ({
    type: FILTER_COUNTRY,
    arrfilter
})