<!--
 * @Author: glitter xinyu@sjzn.com
 * @Date: 2024-12-16 22:12:51
 * @LastEditors: glitter xinyu@sjzn.com
 * @LastEditTime: 2025-01-03 13:00:54
 * @FilePath: /mint_bio/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app" class="layout">
    <div :class="isPc ? 'pc-layout' : 'mobile-layout'">
      <Header v-if="!$route.meta.unRequiresHeader && isPc" />
      <MobileHeader v-if="!isPc" />
      <router-view />
      <Footer />
      <Contact />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Header,
    Footer,
    Contact,
    MobileHeader
  },
  data() {
    return {
      isPc: validPcOrPhone()
    };
  },
  watch: {
    isPc() {
      window.location.reload();
    }
  },
  mounted() {
    autoFont();
    window.onresize = () => { // 修改: 使用箭头函数确保 this 指向正确
      autoFont();
      this.isPc = validPcOrPhone();
      console.log('this.isPc', this.isPc);
    };
  },
};
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Contact'
import MobileHeader from './components/MobileHeader'
import { validPcOrPhone, autoFont } from './utils/isPc'
import './style/common.less'

</script>

<style scoped>
@import '@/style/common.less';
</style>
