<template>
  <div class="material">
    <BannerTitle :titleImage="require('@/assets/images/material-title.png')" :titleStyle="titleStyle" />
    <div class="material-banner">
      <img src="@/assets/images/material-banner.png" alt="material-banner" class="material-banner-img">
    </div>
    <div class="material-scroll">
      <MouseScroll :modules="modules" />

    </div>
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
        <div class="case-list-item border-gradient" v-for="(item, index) in caseListSecond" :key="index">
          <div class="case-list-item-top"><span>China</span><span>MiNT BiO</span><span>Hangzhou</span></div>
          <img :src="item.imgSrc" alt="case-list-item" class="case-list-item-img">
          <div class="case-list-item-describe">{{ item.describe }}</div>
          <div class="case-list-item-tips">{{ item.tips }}</div>
        </div>
      </div>
    </div>


    <div class="question sector border-gradient">
      <div class="title-first"><span>常见</span><span class="orange-text question-code">？</span><span>问</span></div>
      <div class="title-second"><span :style="{ opacity: 0, }">常见</span><span class="orange-text question-code"
          :style="{ opacity: 0, }">？</span><span>题</span></div>
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
          title: "PiX 002",
          isRow: true,
          topItems: ["Affordable", "Infinity"],
          introductionTitle1: "PiX",
          introductionTitle2: "002",
          applyTexts: ["吸管", "杯材", "瓶材"],
          advantages: [
            "耐温耐冷",
            "使用温度 - 30 ℃-100℃",
            "货架期长"
          ],
          imageUrl: require("@/assets/images/P001.jpeg"),
        },
        {
          title: "PiX 003",
          isRow: true,
          topItems: ["Affordable", "Infinity"],
          introductionTitle1: "PiX",
          introductionTitle2: "003",
          applyTexts: ["日化产品", "文具玩具", "家具家电"],
          advantages: [
            "强度高",
            "抗压性好",
            "适配性强"
          ],
          imageUrl: require("@/assets/images/P002.jpeg"),
        },
        {
          title: "PiX 004",
          isRow: true,
          topItems: ["Affordable", "Infinity"],
          introductionTitle1: "PiX",
          introductionTitle2: "004",
          applyTexts: ["农业", "种植业"],
          advantages: [
            "保温保墒",
            "横纵向拉伸性能优",
            "阻隔性好"
          ],
          imageUrl: require("@/assets/images/P003.jpeg"),
        },
        {
          title: "PiX 005",
          isRow: true,
          topItems: ["Affordable", "Infinity"],
          introductionTitle1: "PiX",
          introductionTitle2: "005",
          applyTexts: ["服装", "纺织"],
          advantages: [
            "透气性好",
            "弹性佳",
            "舒适亲肤"
          ],
          imageUrl: require("@/assets/images/P004.jpeg"),
        },
      ],
      caseList: [
        { imgSrc: require("@/assets/images/case-4.png"), describe: '使用 PiX 001 打造，兼具性能、成本优势及环保性的快递袋。' },
        { imgSrc: require("@/assets/images/case-2.png"), describe: '独创合成工艺进行低成本、高效率量产。' },
        { imgSrc: require("@/assets/images/case-1.png"), describe: '将于 2025 年 3 月正式在唯品会电商物流中投入使用。' },
      ],
      caseListSecond: [
        { imgSrc: require("@/assets/images/case-1.jpeg"), describe: 'PiX 004 全程护航新疆棉成长', tips: '元素驱动与中国农业科学院农业环境与可持续发展研究所合作，在新疆进行棉花大田试验，现已完成棉花成长全周期实验。' },
        { imgSrc: require("@/assets/images/case-2.jpeg"), describe: '可控生物降解，满足长期作物生长条件。' },
        { imgSrc: require("@/assets/images/case-3.jpeg"), describe: '节水性能优异，水蒸气透过量远低于市面普通可降解地膜。' },
      ],
      questionList: [
        { title: '什么是生物降解材料？', content: '生物降解材料是指可以和普通塑料一样使用，并能够被自然界的微生物分解成水和CO2，进而回归自然的环保型材料。' },
        { title: 'PiX材料真的能适配这么多领域吗？', content: '生物降解材料包括生物降解塑料、生物降解纤维、生物降解薄膜、生物降解复合材料等。' },
        { title: '产能是否适配我的需求？', content: '生物降解材料具有环保、可降解、可循环利用等优点，可以减少环境污染，提高资源利用率。' },
        { title: '材料的生产过程环保吗？', content: '生物降解材料广泛应用于包装、农业、医疗、家居等领域。' },
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
  background-color: #11161b;

  &-banner {
    padding: 0 160px;

    &-img {
      width: 100%;
    }

  }

  &-scroll {
    padding: 0 160px;
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
          color: #F1F3F799;
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

    &-code {
      display: inline-block;
      width: 30px;
      margin: 0 20px;
    }

    .title-second {
      margin-bottom: 80px;
    }



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
        border-bottom: 1px solid #66666680;

      }

      .is-active {
        ::v-deep .el-collapse-item__header {
          border-bottom: none;
          height: 120px;
        }

      }


      ::v-deep .el-collapse-item__header {
        border-bottom: 1px solid #66666680;
        height: 120px;
      }



      ::v-deep .el-collapse-item__arrow {
        margin: 0 0 0 10px;
      }

      ::v-deep .el-collapse-item__arrow.is-active {
        transform: rotate(180deg);
      }


    }

    ::v-deep .el-collapse {
      border-top: 1px solid #66666680;
    }
  }



}
</style>