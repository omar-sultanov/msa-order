<template>   
   
      <div class="date-delivery">
        <div class="delivery-btn">
           <span>{{ convertDate(item.date).substr(0, 3) }}</span>
          <h2>{{ convertDate(item.date).slice(-2) }}</h2>
        </div>
        <div class="delivery-info">
          <h3>
            Ближайшая доставка <br /><span
              >в
              {{ convertDate(item.date).slice(5, -2) }} –</span
            >
          </h3>
          <h4>с {{ item.interval.replace('-', 'до') }}</h4>
          <p>{{ item.address }}</p>   
        </div>
      </div>

 
</template>

<script>
import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');

export default {
  data() {
    return {
      item:this.$props.order.deliveries[0]
    };
  },
  methods: {
    convertDate(date) {
      return moment(date, 'YY-MM-DD').format('MMM dddd DD');
    },
      
  },
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>

  .date-delivery {
    display: flex;
    flex-direction: row;
    width: 344px;
    height: 99.69px;
    margin-top: 23px;

    .delivery-info {
      margin-left: 23px;
      margin-top: 6px;
      p {
        width: 197.59px;
        height: 14.4px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 13px;
        color: #949494;
      }
      h4 {
        width: 115.55px;
        height: 14.4px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 13px;
        color: #313131;
        margin-top: 9px;
      }
      h3 {
        width: 203.37px;
        height: 44.3px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 120%;
        color: #242424;
        span {
          color: #1e6fb9;
        }
      }
    }
    .delivery-btn {
      width: 57.77px;
      height: 99.69px;
      background: #1e6fb9;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: white;
      span::first-letter {
        text-transform: capitalize;
      }
    }
  }

</style>
