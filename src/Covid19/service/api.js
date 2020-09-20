import callApi from './callApi';
import * as Urls from '../constants/Config'

const infoCovidApi = async () => {
    const response = await callApi(`${Urls.proxy}${Urls.api}`, 
    "GET", null)
    const result = await response.status === 200 ? response.data.data.data : {}
    return result
}

export const api = {
    infoCovidApi
  }