<template>
  <div class="material">
    <BannerTitle :titleImage="require('@/assets/images/material-title.png')" :titleStyle="titleStyle" />
    <div class="sector">
      <img src="@/assets/images/material-banner.png" alt="material-banner" class="material-img">
    </div>
  </div>
</template>

<script>
import BannerTitle from '@/components/BannerTitle'
export default {
  name: "NewMaterial",
  components: {
    BannerTitle
  },
  setup() {
    return {
      titleStyle: { top: '57%' }
    };
  },
  data() {
    return {

    };
  },
};
</script>
<style lang="less" scoped>
@import "@/style/variable.less";

.material {

  &-img {
    width: 100%;
    margin-bottom: 80px;
  }
}
</style>