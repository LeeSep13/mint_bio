<template>
  <div v-intersect="() => titleInView = true" class="part7layout sector">
    <div class="title">
        <img src="@/assets/BioIntelligent/component_title.png" alt="">
    </div>
    <div  v-if="titleInView" class="content">
      <img
        v-show="currentIndex >= 0"
        class="comp1 animate__animated animate__fadeIn"
        src="@/assets/BioIntelligent/component_1.png"
        @animationend="nextComponent"
      />
      <img
        v-show="currentIndex >= 1"
        class="comp2 animate__animated animate__fadeIn"
        src="@/assets/BioIntelligent/component_2.png"
        @animationend="nextComponent"
      />
      <img
        v-show="currentIndex >= 2"
        class="comp3 animate__animated animate__fadeIn"
        src="@/assets/BioIntelligent/component_3.png"
        @animationend="nextComponent"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const currentIndex = ref(0);
    const titleInView = ref(false);

    const nextComponent = () => {
      if (currentIndex.value < 2) {
        currentIndex.value++;
      }
    };

    return {
      currentIndex,
      titleInView,
      nextComponent
    };
  }
};
</script>

<style lang="less" scoped>
@import "@/style/variable.less";

.part7layout {
  height: 778px;
  .title{
    width: 1219px;
    height: 69px;
    img{
        width: 100%;
    }
  }
  .content {
    position: relative;
    display: flex;
    height: 90%;
    .comp1 {
      position: absolute;
      top: 88px;
      left: 0;
      width: 462px;
      height: 390px;
      z-index: 3;
      img {
        width: 100%;
      }
    }
    .comp2 {
      position: absolute;
      top: 103px;
      left: 420px;
      width: 452px;
      height: 375px;
      z-index: 2;
      img {
        width: 100%;
      }
    }
    .comp3 {
      position: absolute;
      top: 17px;
      left: 839px;
      width: 584px;
      height: 690px;
      z-index: 1;
      img {
        width: 100%;
      }
    }
  }
}
</style>