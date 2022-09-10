import { createApp } from 'vue';
import App from './App.vue';
import components from '@/components/UI';
import router from '@/router/router';
import store from '@/store';


const app = createApp(App);
components.forEach((component) => {
  app.component(component.name, component);
  console.log(component);
});

app
    .use(router)
    .use(store)
    .mount('#app');
