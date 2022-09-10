<template>
  <div class="InfoRequest">
    <div class="link"><router-link to="/orders">Назад</router-link></div>
    <time-progress :order="order" />
    <div>
      <h4>Доставки</h4>
      <div
        class="deliveries"
        v-for="(item, index) in order.deliveries"
        :key="index"
      >
        <div class="d-backet">
          <BacketIcon />
        </div>
        <div class="d-day">{{ convertDate(item.date).replace('.', ',') }}</div>
        <div class="d-hour">{{ item.interval }}</div>
        <div class="d-info">
          <ChevronIcon />
        </div>
      </div>
    </div>
    <EditOrder
      @increment="increment(order)"
      @deleteFromList="deleteFromList($route.params.id)"
    />
  </div>
</template>
<script>
import TimeProgress from '@/components/TimeProgress';
import EditOrder from '@/components/EditOrder';
import ChevronIcon from '@/components/svg/ChevronSvg';
import BacketIcon from '@/components/svg/BacketSvg';
import { computed } from 'vue';
import { mapActions } from 'vuex';
import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');

export default {
  components: { TimeProgress, EditOrder, ChevronIcon, BacketIcon },
  data() {
    return {
      id: "",
    };
  },
  created() {
    this.id=this.$route.params.id;
  },
  methods: {
    convertDate(date) {
      return moment(date, 'YY-MM-DD').format('DD MMM dddd ');
    },

    ...mapActions(['DELETE_FROM_LIST', 'COPY_ORDER']),

    increment(index) {
      this.COPY_ORDER(index);
    },
    deleteFromList(index) {
      this.DELETE_FROM_LIST(index);
    },
  },
  computed: {
    order() {
      return this.$store.state.orders[this.id];
    },
  },
};
</script>
<style lang="scss" scoped>
@mixin font-item {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
}
.InfoRequest {
  height: max-content;
  margin: 18px;
  margin-top: 15px;
  font-family: 'Roboto';
  border-radius: 6px;
  padding: 18px;
  position: relative;

  div h4 {
    height: 20px;
    margin: 34px 2px 36px 0;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 100%;
    color: #070707;
  }
  .deliveries {
    display: flex;
    align-items: center;
    margin: 4px;
    padding-bottom: 11px;
    position: relative;
    &:not(:last-child):after {
      content: '';
      position: absolute;
      bottom: 0;
      left: -22px;
      height: 1px;
      width: 379px;
      background-color: #cecdcd;
    }
    .d-backet {
      margin-left: 5px;
    }
    .d-day {
      @include font-item;
      margin-left: 11px;
      line-height: 140%;
    }
    .d-hour {
      @include font-item;
      position: absolute;
      right: 45px;
      line-height: 140%;
    }
    .d-info {
      position: absolute;
      right: 0px;
    }
  }
  .link {
    width: 55px;
    height: 24px;
    margin-bottom: 22px;
    a {
      text-decoration: none;
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 22px;
      color: #1e6fb9;
    }
  }
}
</style>
