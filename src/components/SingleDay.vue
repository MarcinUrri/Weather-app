<template>
    <li :class="[{'single-city--big-display': index === 0}, 'single-city']">
      <span v-if="index === 0" class="single-city__date">{{formattedDate.day}}, {{formattedDate.month}} {{formattedDate.numericDay}} <br>Overcast</span>
      <span v-else class="single-city__date">{{formattedDate.day}}</span>
      <div class="container">
        <img class="single-city__img" :src="`static/${singleDayInformations.type}.png`" :alt="singleDayInformations.type">
        <div class="container__inner">
          <span class="single-city__temp">{{singleDayInformations.temperature}}
            <span class="single-city__temp--celcius">&#8451;</span>
          </span>
          <div class="single-city__desc--humidity">
            <span class="single-city__desc single-city__desc--humidity">Humidity: </span>
            {{singleDayInformations.humidity}}%
          </div>  
        </div>
        <div class="container__inner">
          <div class="single-city__desc">Precipitation: {{singleDayInformations.precipitation}}%</div>
          <div class="single-city__desc">
            Wind: {{singleDayInformations.windInfo.speed}}mph {{singleDayInformations.windInfo.direction}}
          </div>
          <div class="single-city__desc">
            <span>Humidity: </span>
            {{singleDayInformations.humidity}}%
          </div>
          <div class="container__inner container__inner--big">
            <span class="single-city__desc">Pollen Count: </span>
            <span class="single-city__desc single-city__desc--pollen">Pollen&nbsp;</span>
            {{singleDayInformations.pollenCount}}
          </div>
        </div>
      </div>
    </li>
</template>

<script>
import {HTTP} from '@/utils/http-common.js'
export default {
  name: 'single-day',
  props: {
    singleDayInformations: {
      type: Object,
      required: true,
      default: {}
    },
    index: {
      type: Number,
      required: true,
      default: 0
    },
    formattedDate: {
      type: Object,
      required: true,
      default: {}
    }
  }
}
</script>
<style scoped lang="scss">
  .single-city {
    display: flex;
    align-items: center;
    border-bottom: 2px solid $light-grey;
    padding: 20px 0;
    font-size: 14px;

    @include desktop {
      flex-direction: column;
      border-bottom: none;
      font-size: 18px;
      margin-right: 10%;
    }

    &__date {
      display: block;
      font-weight: 600;
      margin-right: 5%;

      @include desktop {
        margin-right: 10%;
      }
    }

    &__img {
      width: 70px;
    }

    &__temp {
      vertical-align: top;

      &--celcius {
        vertical-align: top;
        font-size: 10px;

        @include desktop {
          display: inline-block;
          margin-left: -5px;
          margin-right: 5px;
        }
      }
    }

    &__desc {
      display: none;

      &--pollen {
        display: inline;
      }
    }

    &--big-display {
      text-align: left;
      display: block;
      width: 100%;

      .single-city {

        &__temp {
          font-size: 35px;

          &--celcius {
            display: inline-block;
            font-size: 15px;
          }
        }

        &__date {
          font-weight: 400;
        }

        &__desc {
          display: inline;

          &--pollen, &--humidity {
            display: none;
          }
        }
      }
      .container {
        width: 100%;
        justify-content: flex-start;

        @include desktop {
          flex-direction: row;
        }

        &__inner {
          margin-left: 20px;
          flex-direction: column;
          width: auto;

          &--big {
            margin-left: 0;
            display: inline;
          }
        }
      }
    }
  }
</style>
