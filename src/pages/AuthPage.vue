<template>
  <form @submit.prevent>
    <h3>Добро пожаловать!</h3>
    <my-input type="text" v-model="client.login" placeholder="Логин" />
    <my-input type="password" v-model="client.password" placeholder="Пароль" />
    <router-link :to="clients.length === 1 ? '/orders' : '/error'"
      ><my-button @click="createPost">ВОЙТИ</my-button></router-link
    >
  </form>
</template>

<script>
import { computed } from 'vue';
export default {
  computed: {
    clients() {
      return this.$store.state.clients.filter(
        (user) =>
          user.login === this.client.login &&
          user.password === this.client.password,
      );
    },
  },
  data() {
    return {
      client: {
        login: '',
        password: '',
      },
    };
  },
  methods: {
    createPost() {
      this.$emit('submit', this.client);
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 415px;
  padding: 10px 15px;
  margin: 0px auto;
  font-family: 'Roboto';
  height: 100vh;

  h3 {
    widows: 239px;
    text-align: center;
    margin-bottom: 33px;
    font-size: 25px;
  }
}
</style>
