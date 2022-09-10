<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MyButton',
};
</script>

<style scoped>
.btn {
  background-color: #1e6fb9;
  color: white;
  border: none;
  width: 379px;
  padding: 21px;
  margin-top: 51px;
  border-radius: 6px;
  height: 65px;
  font-family: 'Roboto' !important;
}
</style>
