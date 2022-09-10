<template>
  <input :value="modelValue" @input="updateInput" class="input" />
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
};
</script>

<style scoped>
.input {
  width: 379px;
  border: solid 2px #1e6fb9;
  margin-top: 12px;
  height: 56px;
  border-radius: 6px;
  padding: 17px;
}
</style>
