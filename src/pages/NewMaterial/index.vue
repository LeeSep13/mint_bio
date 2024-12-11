<template>
  <div class="material">
    <BannerTitle :titleImage="require('@/assets/images/material-title.png')" :titleStyle="titleStyle" />
    <div class="material-banner">
      <img src="@/assets/images/material-banner.png" alt="material-banner" class="material-banner-img">
    </div>
    <MouseScroll :modules="modules" />
    <div class="case sector">
      <div class="case-title">
        <div class="case-title-first"><span class="orange-text">应用</span><span>案例</span></div>
        <div class="case-title-second"><span class="orange-text">[ 生物降解快递袋 ]</span></div>
        <div class="case-title-third">
          <p>唯品会</p>
          <p>&元素驱动</p>
        </div>
      </div>
      <div class="case-list">
        <div class="case-list-item border-gradient" v-for="(item, index) in caseList" :key="index">
          <div class="case-list-item-top"><span>China</span><span>MiNT BiO</span><span>Hangzhou</span></div>
          <img :src="item.imgSrc" alt="case-list-item" class="case-list-item-img">
          <div class="case-list-item-describe">{{ item.describe }}</div>
          <div class="case-list-item-tips">{{ item.tips }}</div>
        </div>
      </div>
    </div>

    <div class="case sector">
      <div class="case-title">
        <div class="case-title-second"><span class="orange-text">[ 全生物降解地膜 ]</span></div>
        <div class="case-title-third">
          <p>中国农科院</p>
          <p>&元素驱动</p>
        </div>
      </div>
      <div class="case-list">
        <div class="case-list-item border-gradient" v-for="(item, index) in caseList" :key="index">
          <div class="case-list-item-top"><span>China</span><span>MiNT BiO</span><span>Hangzhou</span></div>
          <img :src="item.imgSrc" alt="case-list-item" class="case-list-item-img">
          <div class="case-list-item-describe">{{ item.describe }}</div>
          <div class="case-list-item-tips">{{ item.tips }}</div>
        </div>
      </div>
    </div>


    <div class="question sector">
      <div class="title-first"><span>常见</span><span class="orange-text ">？</span><span>问</span></div>
      <div class="title-second"><span :style="{ opacity: 0, }">常见？</span><span>题</span></div>
      <el-collapse class="collapse" @change="handleChange">
        <el-collapse-item class="collapse-item" v-for="(item, index) in questionList" :key="index" :title="item.title"
          :name="index" :icon="activeNames.includes(index) ? Minus : Plus">
          <div class=" collapse-item-content">{{ item.content }}
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>


  </div>
</template>

<script>
import BannerTitle from '@/components/BannerTitle'
import MouseScroll from '@/components/MouseScroll'
import { Plus, Minus } from '@element-plus/icons-vue'




export default {
  name: "NewMaterial",
  components: {
    BannerTitle,
    MouseScroll,
  },
  setup() {
    return {
      titleStyle: { top: '57%' }
    };
  },
  data() {

    return {
      Plus,
      Minus,
      activeNames: [],
      modules: [
        {
          title: "PiX 001",
          isRow: true,
          topItems: ["Affordable", "Infinity"],
          introductionTitle1: "PiX",
          introductionTitle2: "001",
          applyTexts: ["电商包装", "物流包装",],
          advantages: [
            "韧性好",
            "强度高",
            "阻隔性能优",
            "承重性足",
            "可搭竹粉等环保材料",
          ],
          imageUrl: require("@/assets/images/P001.png"),
        },
        {
          title: "生物合成 组氨酸",
          isRow: true,
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
      caseList: [
        { imgSrc: require("@/assets/images/case-1.png"), describe: '使用 PiX 001 打造，兼具性能、成本优势及环保性的快递袋。' },
        { imgSrc: require("@/assets/images/case-2.png"), describe: '独创合成工艺进行低成本、高效率量产。' },
        { imgSrc: require("@/assets/images/case-3.png"), describe: '将于 2025 年 3 月正式在唯品会电商物流中投入使用。', tips: '元素驱动与中国农业科学院农业环境与可持续发展研究所合作，在新疆进行棉花大田试验，现已完成棉花成长全周期实验。' },
      ],
      questionList: [
        { title: '什么是生物降解材料？', content: '生物降解材料是指可以和普通塑料一样使用，并能够被自然界的微生物分解成水和CO2，进而回归自然的环保型材料。' },
        { title: '生物降解材料有哪些？', content: '生物降解材料包括生物降解塑料、生物降解纤维、生物降解薄膜、生物降解复合材料等。' },
        { title: '生物降解材料有哪些优势？', content: '生物降解材料具有环保、可降解、可循环利用等优点，可以减少环境污染，提高资源利用率。' },
        { title: '生物降解材料有哪些应用场景？', content: '生物降解材料广泛应用于包装、农业、医疗、家居等领域。' },
      ]

    };
  },
  methods: {
    handleChange(activeNames) {
      this.activeNames = activeNames;
    }
  }
};
</script>
<style lang="less" scoped>
@import "@/style/variable.less";

.icon-ele {
  margin: 0 8px 0 auto;
  color: #409eff;
}

.material {
  &-banner {
    padding: 0 160px;

    &-img {
      width: 100%;
      margin-bottom: 80px;
    }

  }

  .case {
    color: #fff;

    &-title {
      &-first {
        text-align: left;
        font: 520 60px MiSans VF;
      }

      &-second {
        text-align: center;
        font: 520 40px MiSans VF;
      }

      &-third {
        text-align: left;
        font: 520 40px MiSans VF;
      }
    }

    &-list {
      margin-top: 40px;
      white-space: nowrap;
      overflow-x: auto;
      display: flex;
      align-items: stretch;



      /* 初始状态下隐藏滚动条 */
      &::-webkit-scrollbar {
        height: 0;
        /* 初始状态下滚动条高度为0 */
        background: rgba(255, 255, 255, 0);
        /* 初始状态下滚动条背景透明 */
      }

      &::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0);
        /* 初始状态下滚动条滑块透明 */
        border-radius: 4px;
      }

      &::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0);
        /* 初始状态下滚动条轨道透明 */
      }

      &:hover {

        /* 悬停时显示滚动条 */
        &::-webkit-scrollbar {
          height: 8px;
          /* 恢复滚动条高度 */
          background: rgba(255, 255, 255, 0.1);
          /* 恢复滚动条背景颜色 */
        }

        &::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          /* 恢复滚动条滑块颜色 */
        }

        &::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          /* 恢复滚动条轨道颜色 */
        }
      }


      &-item {
        background: hsla(206, 9%, 15%, 1);
        backdrop-filter: blur(68px);
        flex-shrink: 0;
        padding: 32px;
        width: 516px;
        margin-right: 20px;
        border-width: 2px;
        border: 1px solid transparent;
        border-image: linear-gradient(156.52deg, rgba(255, 255, 255, 0.4) 2.12%, rgba(255, 255, 255, 0.0001) 39%, rgba(255, 255, 255, 0.0001) 54.33%, rgba(255, 255, 255, 0.1) 93.02%);
        border-radius: 20px;

        &-top {
          font: 400 14 Montserrat;
          color: rgba(241, 243, 247, 0.5);
          display: flex;
          justify-content: space-between;
        }

        &-img {
          width: 100%;
          height: 416px;
          object-fit: cover;
          margin: 16px 0;
          border-radius: 20px;
        }

        &-describe {
          margin-top: 40px;
          font-size: 24px;
          font-weight: 550;
          color: #fff;
          white-space: normal;
          line-height: 34px;
        }

        &-tips {
          margin-top: 20px;
          font-size: 14px;
          line-height: 24px;
          font-weight: 400;
          white-space: normal;
        }
      }
    }
  }

  .question {
    color: #fff;
    font-family: MiSans VF;
    font-size: 60px;
    font-weight: 520;
    line-height: 79.56px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;



    .collapse {
      font: 400 24px MiSans VF;
      color: #fff;

      &-item {
        &-content {
          font: 400 24px MiSans VF !important;
          color: #fff !important;
        }
      }

      --el-collapse-header-bg-color: #11161b !important;
      --el-collapse-header-text-color: #fff !important;
      --el-collapse-header-font-size: 24px !important;
      --el-collapse-header-padding: 0 !important;
      --el-collapse-header-font-weight: 500 !important;
      --el-collapse-header-border-bottom: none !important;

      /* 使用深度选择器 */
      ::v-deep .el-collapse-item__wrap {
        padding: 40px 0;
        background-color: #11161b;

      }

      ::v-deep .el-collapse-item__header {
        height: 120px;
      }

      ::v-deep .el-collapse-item__arrow {
        margin: 0 0 0 10px;
      }

      ::v-deep .el-collapse-item__arrow.is-active {
        transform: rotate(180deg);
      }


    }
  }



}
</style>