<template>
  <div class="T-date">
    <div class="time">
      <h3>{{ order.deliveries.length }} дней</h3>
      <div class="composition">
        <span class="position-first">{{ order.packageName }}</span
        ><span class="position-second">{{ order.packageCalories }}</span>
      </div>
    </div>
    <div
      class="progress-bar"
      :style="{ '--width': difference_In_Time().percentage + '%' }"
    ></div>
    <div class="m-date">
      <span class="m-number">{{ convertDate(timeStart) }}</span>
      <span class="m-letter"
        >Осталось {{ difference_In_Time().residueDays }} дней</span
      >
      <span class="m-number">{{ convertDate(timeFinish) }}</span>
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
      timeStart: this.$props.order.deliveries[0].date,
      timeFinish:
        this.$props.order.deliveries[this.$props.order.deliveries.length - 1]
          .date,
    };
  },
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
  methods: {
    difference_In_Time() {
      let nowDate = new Date('2021-01-10');
      let date1 = new Date(this.timeStart);
      let date2 = new Date(this.timeFinish);
      let alldays = (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24);
      let residueDays =
        (date2.getTime() - nowDate.getTime()) / (1000 * 3600 * 24);

      if (residueDays < 0) {
        residueDays = 0;
      }
      if (residueDays > alldays) {
        residueDays = alldays;
      }
      let percentage = 100 - Math.round((residueDays / alldays) * 100);

      let days = { residueDays, percentage };
      return days;
    },
    convertDate(date) {
      return moment(date, 'YY-MM-DD').format('DD MMM').slice(0, 6);
    },
  },
};
</script>

<style lang="scss" scoped>
.T-date {
  width: 344px;
  .time {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 344px;

    h3 {
      font-size: 35px;
      font-weight: 700;
      margin-left: 5px;
    }

    .composition {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      height: 31px;
      width: 83px;

      .position-first {
        font-size: 9.75px;
        line-height: 16px;
        color: #b1b1b1;
      }
      .position-second {
        font-size: 13.81px;
        line-height: 16px;
        color: black;
        font-weight: 700;
      }
    }
  }
  .m-date {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 344px;
    .m-number {
      width: 38.13px;
      height: 13.29px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 110%;
      color: #9e9e9e;
    }
    .m-letter {
      width: 100px;
      height: 13px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-size: 11px;
      line-height: 110%;
      color: #000000;
    }
  }
  .progress-bar {
    width: 344px;
    height: 6px;
    background: #e7e7e7;
    border-radius: 4px;
    margin: 7px 0px;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      width: var(--width);
      height: 5.54px;
      left: 0;
      top: 0;
      background: #1e6fb9;
      border-radius: 4px;
     
    }

    &::before {
      content: '';
      position: absolute;
      width: 5.78px;
      height: 5.54px;
      left: calc(var(--width) - 1%);
      top: 0;
      background: white;
      border-radius: 10px;
      z-index: 2;
    }
  }
}
</style>
