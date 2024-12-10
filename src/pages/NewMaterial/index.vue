<template>
  <div class="material">
    <BannerTitle :titleImage="require('@/assets/images/material-title.png')" :titleStyle="titleStyle" />
    <div class="sector">
      <img src="@/assets/images/material-banner.png" alt="material-banner" class="material-img">
    </div>
    <MouseScroll :modules="modules" />

  </div>
</template>

<script>
import BannerTitle from '@/components/BannerTitle'
import MouseScroll from '@/components/MouseScroll'

export default {
  name: "NewMaterial",
  components: {
    BannerTitle,
    MouseScroll
  },
  setup() {
    return {
      titleStyle: { top: '57%' }
    };
  },
  data() {
    return {
      modules: [
        {
          title: "生物合成 异亮氨酸",
          topItems: ["Brilliant", "MiNT BiO", "BioAmino"],
          introductionTitle1: "生物合成",
          introductionTitle2: "异亮氨酸",
          applyTexts: ["医药", "化学试剂", "饲料添加剂"],
          advantages: [
            "添加于饲料中，减少大豆用量，降低养殖成本",
            "相较同类产品，具有大幅成本优势",
            "相较行业头部，发酵效率高200%",
          ],
          imageUrl: require("@/assets/images/home-background.png"),
        },
        {
          title: "生物合成 组氨酸",
          topItems: ["Brilliant", "MiNT BiO", "BioAmino"],
          introductionTitle1: "生物合成",
          introductionTitle2: "组氨酸",
          applyTexts: ["食品", "饲料", "生化试剂制造制药"],
          advantages: [
            "相较同类产品，具有成本优势",
            "相较行业头部，发酵效率快35%",
            "相较化学合成法，产品纯度高",
          ],
          imageUrl: require("@/assets/images/home-background.png"),
        },
        {
          title: "生物合成 色氨酸",
          topItems: ["Brilliant", "MiNT BiO", "BioAmino"],
          introductionTitle1: "生物合成",
          introductionTitle2: "色氨酸",
          applyTexts: ["医药", "食品强化剂", "饲料添加剂"],
          advantages: [
            "人体与动物必需氨基酸，应用场景广泛",
            "相较传统生产方法，效率更高、成本更低",
          ],
          imageUrl: require("@/assets/images/home-background.png"),
        },
        {
          title: "生物合成 亮氨酸",
          topItems: ["Brilliant", "MiNT BiO", "BioAmino"],
          introductionTitle1: "生物合成",
          introductionTitle2: "亮氨酸",
          applyTexts: ["运动营养剂", "食品添加剂", "特殊医药用途食品"],
          advantages: [
            "动物必需氨基酸之一",
            "相较传统水解法，生产过程更环保、更高效",
            "相较化学合成法，具有成本优势",
          ],
          imageUrl: require("@/assets/images/home-background.png"),
        },
        {
          title: "生物合成 缬氨酸",
          topItems: ["Brilliant", "MiNT BiO", "BioAmino"],
          introductionTitle1: "生物合成",
          introductionTitle2: "缬氨酸",
          applyTexts: ["医药", "食品强化剂", "饲料添加剂"],
          advantages: [
            "动物必需氨基酸之一",
            "提供饲料转化率，降低养殖成本",
            "相较化学合成法，具有成本优势",
          ],
          imageUrl: require("@/assets/images/home-background.png"),
        },
      ],

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