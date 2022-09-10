<template>
  <div class="menu">
    <h3>
      Мои заказы <span>{{ $store.state.orders.length }}</span>
    </h3>
    <div class="lists" v-for="(order, index) in $store.state.orders" :key="index" @click="$router.push(`/orders/${index}`)">
      <div class="post">
        <time-progress :order="order"/>
        <order-item :order="order" />
      </div>
    </div>
  </div>
</template>
<script>
import OrderItem from '@/components/OrderItem';
import TimeProgress from '@/components/TimeProgress';
import { mapActions } from 'vuex';
export default {
  components: { OrderItem, TimeProgress },
};
</script>

<style lang="scss" scoped>
.menu {
  padding-top: 30px;
  .post {
  margin: 18px;
  margin-top: 15px;
  font-family: 'Roboto';
  background: #f5f5f5;
  border-radius: 6px;
  padding: 18px;
  }
  h3 {
    font-family: 'Roboto';
    padding-left: 24px;
    span {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 16px;
      color: #929292;
    }
  }
}
</style>
