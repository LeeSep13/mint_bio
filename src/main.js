import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

Vue.config.productionTip = false

const { createApp } = Vue
const app = createApp({
  render: h => h(App),
})

app.use(router)
app.use(ElementPlus)
app.mount('#app')
