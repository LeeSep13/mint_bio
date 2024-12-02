<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
    <Contact/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Contact'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Contact
  }
}
</script>

<style scoped>
</style>
