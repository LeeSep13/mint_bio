<template>
  <div class="corporate">
    <BannerTitleAnimation :titleImage="require('@/assets/images/vision-title.png')"
      :backgroundImg="require('@/assets/images/corporateVision.png')" />
  </div>
</template>

<script>
import BannerTitleAnimation from '@/components/BannerTitleAnimation'
export default {
  name: "CorporateVision",
  components: {
    BannerTitleAnimation
  },
  setup() {
    return {
      titleStyle: { top: '47%' }
    };
  },
  data() {
    return {

    };
  },
};
</script>
<style lang="less" scoped>
.corporate {}
</style>