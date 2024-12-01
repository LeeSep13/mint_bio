import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

const { createApp } = Vue
const app = createApp({
  render: h => h(App),
})

app.use(router)

app.mount('#app')
