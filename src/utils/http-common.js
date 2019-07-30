import axios from 'axios'

export const HTTP = axios.create({
  baseURL: 'https://dev-weather-api.azurewebsites.net/api/city'
})
