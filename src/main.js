import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'animate.css'
import "@/assets/font/font.css";
import directives from './utils/directives' 

Vue.config.productionTip = false

const { createApp } = Vue
const app = createApp({
  render: h => h(App),
})

app.use(router)
app.use(ElementPlus)
app.use(directives);
app.mount('#app')
