import { createStore } from 'vuex';
import clients from '@/assets/data/clients.json';
import orders from '@/assets/data/orders.json';

export default createStore({
  state: {
    clients: clients,
    orders: orders,
  },
  mutations: {
    REMOVE_FROM_LIST: (state, index) => {
      state.orders.splice(index, 1);
    },
    INCREMENT: (state, index) => {
      index.id += state.orders.length;
      state.orders.push(index);
    },

  },
  actions: {
    DELETE_FROM_LIST({ commit }, index) {
      commit('REMOVE_FROM_LIST', index);
    },
    COPY_ORDER({ commit }, index) {
      commit('INCREMENT', index);
    },
  },
});
