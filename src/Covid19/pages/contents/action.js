export const IS_LOADING = 'IS_LOADING';
export const LOADING_SUCCESS = 'LOADING_SUCCESS';
export const LOADING_FAILURE = 'LOADING_FAILURE';

//action từ phía view
export const GET_DATA = 'GET_DATA';
export const getData = () => ({
    type: GET_DATA
})
export const isLoading = (loading) => ({
    type: IS_LOADING,
    loading
})
export const loadingSuccess = (data) => ({
    type: LOADING_SUCCESS,
    data
})
export const loadingFailure = (error) => ({
    type: LOADING_FAILURE,
    error
})

