<template>
  <section>
    <city-select
      :cityList="cityList" 
      @city-to-display="displayCityWeather($event)" />
      <div v-if="loading" class="spinner">
        <div class="spinner__inner">
          <div></div><div></div><div></div><div></div>
        </div>
      </div>
    <weather-information 
      v-if="selectedCity !== ''" 
      :selectedCity="selectedCity" 
      :cityWeatherInformation="cityWeatherInformations" />
  </section>
</template>

<script>
import {HTTP} from '@/utils/http-common.js'
import CitySelect from '../components/CitySelect'
import WeatherInformation from '../components/WeatherInformation'

export default {
  name: 'main-view',
  components: {
    CitySelect,
    WeatherInformation
  },
  data() {
    return {
      selectedCity: '',
      cityList: [],
      cityWeatherInformations: [],
      loading: false
    }
  },
  methods: {
    displayCityWeather(cityName) {
      if (cityName !== this.selectedCity) { //Prvent loading data for the same city
        this.loading = true
        this.selectedCity = cityName
        const currentDate = new Date().toJSON().slice(0,10)
        const city = this.cityList.find(city => city.name === cityName)
        HTTP.get(`${city.id}/weather?date=${currentDate}`)
        .then(response => {
          this.loading = false
          this.cityWeatherInformations = response.data
        }).catch(err => {
          this.loading = false
          this.cityWeatherInformations = `There was an error${err}, please try again`
        })
      }
    }
  },
  created() {
    HTTP.get().then(response => {
      this.cityList = response.data
    }).catch(err => {
      this.cityList = `There was an error, please try refreshing the page. ${err}`
    })
  }
}
</script>
