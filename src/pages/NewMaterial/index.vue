<template>
  <div class="material">
    <BannerTitle :titleImage="require('@/assets/images/material-title.png')" :titleStyle="titleStyle" />
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
.material {
  height: 700px;
  font-size: 16px;
}
</style>