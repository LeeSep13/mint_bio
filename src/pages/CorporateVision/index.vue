<template>
  <div class="corporate">
    <BannerTitle :titleImage="require('@/assets/images/vision-title.png')" :titleStyle="titleStyle" />
  </div>
</template>

<script>
import BannerTitle from '@/components/BannerTitle'
export default {
  name: "CorporateVision",
  components: {
    BannerTitle
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
.corporate {
  height: 700px;
  font-size: 16px;
}
</style>