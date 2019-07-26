<template>
  <section>
    <city-select 
      :cityList="cityList" 
      @city-to-display="cityToDisplay($event)" />
    <weather-information 
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
  props: {
    msg: String
  },
  data() {
    return {
      selectedCity: '',
      cityList: [],
      cityWeatherInformations: [],
    }
  },
  methods: {
    cityToDisplay(cityName) {
      this.selectedCity = cityName
      const currentDate = new Date().toJSON().slice(0,10)
      const city = this.cityList.find(city => city.name === cityName)
      HTTP.get(`${city.id}/weather?date=${currentDate}`).then(response => {
        this.cityWeatherInformations = response.data
      }).catch(e => {
        console.log(e)
      })
    }
  },
  created() {
    HTTP.get().then(response => {
      this.cityList = response.data
    }).catch(e => {
      console.log(e)
    })
  }
}
</script>
<style scoped lang="scss">
</style>
