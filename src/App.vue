<template>
  <div id="app" :class="isPc ? 'pc-layout' : 'mobile-layout'">
    <Header />
    <router-view />
    <Footer />
    <Contact />
  </div>
</template>

<script setup>
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { validPcOrPhone, autoFont } from './utils/isPc'
import './style/common.less'
import { ref } from 'vue'

const isPc = ref(validPcOrPhone())
autoFont()
window.onresize = function () {
  autoFont()
  isPc.value = validPcOrPhone()
}

</script>

<style scoped></style>
