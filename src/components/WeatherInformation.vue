<template>
<section>
    <ul class="main-list">
      <single-day 
        v-for="(day, index) in cityWeatherInformation" 
        :key="index" 
        :index="index"
        :singleDayInformations="day"
        :formattedDate="formattedDate[index]" />
    </ul>
</section>
</template>

<script>
import {HTTP} from '@/utils/http-common.js'
import SingleDay from '../components/SingleDay'

export default {
  name: 'weather-information',
  components: {
    SingleDay
  },
  props: {
    cityWeatherInformation: {
      type: Array,
      default: [],
      required: true
    },
    selectedCity: {
      type: String,
      default: 'Select a city to display weather',
      required: true
  }},
  data() {
    return {
      formattedDate: []
    }
  },
  watch: {
    cityWeatherInformation () {
      const dateNames = {
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      };
      const dates = this.cityWeatherInformation
        .map( date => date.date.slice(0,10))
        .map ( date => {
          const dayNumber = new Date(date).getDay()
          const monthNumber = new Date(date).getMonth()
          return {
            month: dateNames.months[monthNumber],
            day: dateNames.days[dayNumber],
            numericDay: date.slice(8,10)
          }
        })
      this.formattedDate = dates
    }
  }
}
</script>
<style scoped lang="scss">
.main-list {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0 10px;
  font-size: 18px;
  font-weight: 500;
  margin-top: 40px;

  @include desktop {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    border-bottom: 2px solid $light-grey;
  }
}
</style>
