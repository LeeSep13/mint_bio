<template>
  <div class="banner">
    <div class="banner-title">
      <img class="grid-image" src="@/assets/images/grid1.png" alt="vision_grid" />
      <img class="mint-image" src="@/assets/images/mint.png" alt="vision_mint" />
      <img class="text-image" :src="titleImage" :style="titleStyle" alt="title" />
    </div>
  </div>
</template>
<script>
export default {
  name: "BannerTitle",
  components: {},
  props: {
    titleImage: {
      type: String,
      required: true
    },
    titleStyle: {
      type: Object,
      default: () => ({})
    }
  },

};
</script>

<style lang="less" scoped>
.banner {
  &-title {
    margin: auto;
    width: 998px;
    position: relative;
    height: 468px;

    .grid-image {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 663px;
      z-index: 1;
    }

    .mint-image {
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      z-index: 0;
    }

    .text-image {
      position: absolute;
      width: 735px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
    }
  }
}
</style>