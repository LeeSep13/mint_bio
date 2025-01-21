<template>
  <div class="aminoAcid">
    <BannerTitle :titleImage="require('@/assets/AminoAcid/banner_title.png')" />

    <div class="aminoAcid-module1">
      <div class="aminoAcid-module1-content">
        <div class="aminoAcid-module1-content-top">
          <p class="aminoAcid-module1-content-top-text1">生物合成</p>
          <p class="aminoAcid-module1-content-top-text2">氨基酸</p>
        </div>
        <div class="aminoAcid-module1-content-bottom">
          <span>高效AI蛋白设计</span>
          <span>专利前体X</span>
          <span>优化代谢网络</span>
          <span>独家分离纯化工艺</span>
          <span>国际领先的产酸率 & 提取率</span>
          <span>持续降本</span>
        </div>
      </div>
    </div>
    <div class="mouse-scroll">
      <MouseScrollM :modules="module2Data" :originHeight="600">
        <template #item-content="{ module, index }">
          <aa-module-content-mobile :title="module.title" :topItems="module.topItems"
            :introductionTitle1="module.introductionTitle1" :introductionTitle2="module.introductionTitle2"
            :applyTexts="module.applyTexts" :advantages="module.advantages" :imageUrl="module.imageUrl"
            :isRow="module.isRow" :tabStyle="getTabStyleData(index)"></aa-module-content-mobile>
        </template>
      </MouseScrollM>
    </div>

    <div class="aminoAcid-module3 border-gradient" :style="{marginTop:'100px'}">
      <div class="aminoAcid-module3-title">
        <span class="orange-text">应用</span>
        <span>案例</span>
      </div>
      <div class="aminoAcid-module3-content">
        <div class="second">
          <div class="second-left">
            <p>牧原集团</p>
            <p>& 元素驱动</p>
          </div>
          <p class="second-right">
            [ 节豆日粮解决方案 ]
          </p>
        </div>
        <ul class="third">
          <li>合成8种氨基酸</li>
          <li>营养供给精准高效</li>
          <li>节约饲养成本</li>
        </ul>
      </div>
      <Propagate />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import BannerTitle from '@/components/BannerTitle'
import MouseScrollM from '@/components/MouseScrollM';
import Propagate from '@/components/Propagate';
import AaModuleContentMobile from "@/components/AaModuleContentMobile";


export default {
  components: {
    BannerTitle,
    MouseScrollM,
    AaModuleContentMobile,
    Propagate
  },
  setup() {
    const module2Data = ref([
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
        imageUrl: ["assets/AminoAcid/module2_ele1.png"],
      },
      {
        title: "生物合成 组氨酸",
        topItems: ["Brilliant", "MiNT BiO", "BioAmino"],
        introductionTitle1: "生物合成",
        introductionTitle2: "组氨酸",
        applyTexts: ["食品", "饲料", "生化试剂制造制药"],
        advantages: ["相较同类产品，具有成本优势", "相较行业头部，发酵效率快35%", "相较化学合成法，产品纯度高"],
        imageUrl: ["assets/AminoAcid/module2_ele2.png"],
      },
      {
        title: "生物合成 色氨酸",
        topItems: ["Brilliant", "MiNT BiO", "BioAmino"],
        introductionTitle1: "生物合成",
        introductionTitle2: "色氨酸",
        applyTexts: ["医药", "食品强化剂", "饲料添加剂"],
        advantages: ["人体与动物必需氨基酸，应用场景广泛", "相较传统生产方法，效率更高、成本更低"],
        imageUrl: ["assets/AminoAcid/module2_ele3.png"],
      },
      {
        title: "生物合成 亮氨酸",
        topItems: ["Brilliant", "MiNT BiO", "BioAmino"],
        introductionTitle1: "生物合成",
        introductionTitle2: "亮氨酸",
        applyTexts: ["运动营养剂", "食品添加剂", "特殊医药用途食品"],
        advantages: ["动物必需氨基酸之一", "相较传统水解法，生产过程更环保、更高效", "相较化学合成法，具有成本优势"],
        imageUrl: ["assets/AminoAcid/module2_ele4.png"],
      },
      {
        title: "生物合成 缬氨酸",
        topItems: ["Brilliant", "MiNT BiO", "BioAmino"],
        introductionTitle1: "生物合成",
        introductionTitle2: "缬氨酸",
        applyTexts: ["医药", "食品强化剂", "饲料添加剂"],
        advantages: ["动物必需氨基酸之一", "提供饲料转化率，降低养殖成本", "相较化学合成法，具有成本优势"],
        imageUrl: ["assets/AminoAcid/module2_ele5.png"],
      },
    ]);


    const getTabStyleData = (index) => {
      const marginLeft = index === 0 ? "1%" : `${1 + index * 19.7}%`;

      return {
        marginLeft: marginLeft,
        zIndex: index,
      };
    };
    return {
      module2Data,
      getTabStyleData
    };
  },
};
</script>

<style lang="less" scoped>
@import "@/style/variable.less";

.mouse-scroll {
  width: 370px;
  margin-top: 100px;
  height: 600px;
}

.aminoAcid {
  padding: 60px 5px;

  &-module1 {
    padding-bottom: 60px;

    &-content {
      &-top {
        border-radius: 12px;
        width: 100%;
        background-image: url("@/assets/AminoAcid/banner1.png");
        background-size: cover;
        background-repeat: no-repeat;
        margin-top: 60px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        &-text1 {
          flex-shrink: 0;
          font-size: 50px;
          font-weight: 500;
          color: #ff7200;
        }

        &-text2 {
          flex-shrink: 0;
          margin-left: 120px;
          font-size: 50px;
          font-weight: 500;
          color: #fff;
        }
      }

      &-bottom {
        padding: 10px 20px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;

        span {
          border-radius: 20px;
          text-align: center;
          color: #f1f3f7;
          border: 1px solid #F1F3F799;
          padding: 13px 20px;

        }
      }
    }
  }

  &-module3 {
    padding: 60px 0;
    display: flex;
    flex-direction: column;

    &-title {
      padding-left: 45px;
      font-size: 25px;
      font-weight: 450;
      text-align: left;
      color: white;

      .orange-text {
        color: #ff7200;
      }
    }

    &-content {
      margin: 20px 0;
      padding-left: 45px;

      .second {
        color: #f1f3f7;
        font-size: 16px;
        font-weight: 450;
        text-align: left;
        display: flex;

        &-left {
          margin-right: 16px;
        }

        &-right {
          color: #ff7200;
        }
      }

      .third {
        margin-top: 20px;
        color: white;
        font-size: 12px;
        font-weight: 450;
        text-align: left;
        display: flex;
        gap: 8px;

        li::before {
          content: '';
          display: inline-block;
          width: 5px;
          height: 5px;
          background-color: white;
          border-radius: 50%;
          margin-right: 5px;
        }
      }

    }


  }
}
</style>