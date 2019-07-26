import axios from 'axios'

export const HTTP = axios.create({
  baseURL: 'http://dev-weather-api.azurewebsites.net/api/city'
})
