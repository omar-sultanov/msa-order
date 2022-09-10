<template>
  <div class="orders">
    <div class="order copy" @click="incrementItem">
      <span>Дублировать заказ</span><CopyIcon />
    </div>
    <div class="order remove" @click="deleteFromList">
      <span>Отменить заказ</span><RemoveIcon />
    </div>
  </div>
</template>
<script>
import RemoveIcon from '@/components/svg/RemoveSvg';
import CopyIcon from '@/components/svg/CopySvg';
import { mapActions } from 'vuex';
export default {
  components: { RemoveIcon, CopyIcon },
  methods: {
    deleteFromList() {
      this.$emit('deleteFromList');
      this.$router.push({ path: '/orders' });
    },
    incrementItem() {
      this.$emit('increment');
      this.$router.push({ path: '/orders' });
    },
  },
};
</script>

<style lang="scss" scoped>
.orders {
  background: #f5f5f5;
  border-radius: 10px;
  margin: 25px auto;
  width: 344px;
  .order {
    display: flex;
    justify-content: space-between;
    height: 55px;
    align-items: center;
    padding: 0 17px;
    span {
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 22px;
      letter-spacing: -0.41px;
      color: #3f3f3f;
    }
  }
  .order.copy {
    border-bottom: #e7e6e6 solid 1px;
  }
}
</style>
