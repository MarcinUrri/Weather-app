<template>
  <section class="drop-down" @click="this.showDropDown">
    <span v-if="checkCityData">{{cityToDisplay === '' ? 'Select city....' : cityToDisplay}}</span>
    <span class="drop-down__error" v-if="!checkCityData">{{cityList}}</span>
    <div v-else :class="[{'drop-down__inner--active': dropDown}, 'drop-down__inner']">
      <div class="drop-down__item" 
        @mouseover="selectCityHover(city.name)" 
        @click="selectCityToDisplay(city.name)" 
        v-for="city in cityList" :key="city.id" >
        {{city.name}}
      </div>
    </div>
  </section>
</template>

<script>
import {HTTP} from '@/utils/http-common.js'
export default {
  name: 'city-select',
  props: {
    cityList: [Array, String],
    default: [],
    required: true
  },
  data() {
    return {
      cityToDisplay: '',
      dropDown: false
    }
  },
  methods: {
    selectCityToDisplay(city) {
      this.$emit('city-to-display', city)
      this.cityToDisplay = city
    },
    showDropDown() {
      this.dropDown = !this.dropDown
    },
    selectCityHover(city) {
      this.cityToDisplay = city
    }
  },
  computed: {
    checkCityData() {
      return typeof this.cityList === 'string' ? false : true
    }
  }
}
</script>
<style scoped lang="scss">
.drop-down {
  font-size: 28px;
  font-weight: 500;
  background: #fff;
  text-align: left;
  border: none;
  color: $dark-grey;
  cursor: pointer;
  padding-top: 10px;
  position: fixed;
  top: 0;
  left: 10px;
  width: calc(100% -  20px);
  @include tablet-portrait {
    width: 35%;
    font-size: 42px;
  }

  &__inner {
    max-height: 0px;
    transition: max-height 0.3s ease-out;
    overflow: hidden;

    &--active {
      max-height: 1000px;
      transition: max-height 1s ease-out;
    }
  }

  &__item {
      padding: 10px 0;
      border-bottom: 1px solid $light-grey; 
    &:hover {
      background: $light-blue;
      color: #fff;
    }
    &:first-child {
      border-top: 2px solid $light-grey;
    }
  }

  &__error {
    color: $main-red;
  }
}
</style>
