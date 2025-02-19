<template>
  <div class="material">
    <BannerTitle :titleImage="require('@/assets/images/material-title.png')" :titleStyle="titleStyle" />
    <div class="material-banner">
      <img src="@/assets/images/material-banner.png" alt="material-banner" class="material-banner-img" />
      <div class="material-banner-list">
        <div class="material-banner-list-item" v-for="(item, index) in bannerList" :key="index">
          {{ item }}
        </div>
      </div>

    </div>
    <div class="mouse-scroll">
      <MouseScrollM :modules="modules" :originHeight="600">
        <template #item-content="{ module, index }">
          <aa-module-content-mobile :title="module.title" :topItems="module.topItems"
            :introductionTitle1="module.introductionTitle1" :introductionTitle2="module.introductionTitle2"
            :applyTexts="module.applyTexts" :advantages="module.advantages" :imageUrl="module.imageUrl"
            :isRow="module.isRow" :tabStyle="getTabStyleData(index)"></aa-module-content-mobile>
        </template>
      </MouseScrollM>
    </div>
    <div class="case border-gradient" :style="{marginTop:'100px'}">
      <div class="case-title">
        <div class="case-title-first">
          <span class="orange-text">应用</span><span>案例</span>
        </div>
        <div class="text-wrapper">
          <div class="case-title-third">
            <p>唯品会</p>
            <p>&元素驱动</p>
          </div>
          <div class="case-title-second">
            <span class="orange-text">[ 生物降解快递袋 ]</span>
          </div>

        </div>

      </div>
      <div class="case-list" ref="caseList" @mousedown="startDrag($event, 'caseList')"
        @mousemove="onDrag($event, 'caseList')" @mouseup="endDrag" @mouseleave="endDrag">
        <div class="case-list-item border-gradient" v-for="(item, index) in caseList" :key="index">
          <div class="case-list-item-top">
            <span>China</span><span>MiNT BiO</span><span>Hangzhou</span>
          </div>
          <img :src="item.imgSrc" alt="case-list-item" class="case-list-item-img" />
          <div class="case-list-item-describe">{{ item.describe }}</div>
          <div class="case-list-item-tips">{{ item.tips }}</div>
        </div>
      </div>
    </div>

    <div class="case mobile-sector ">
      <div class="case-title">
        <div class=" text-wrapper">
          <div class="case-title-second">
            <span class="orange-text">[ 全生物降解地膜 ]</span>
          </div>
          <div class="case-title-third">
            <p>新疆农科院</p>
            <p>& 元素驱动</p>
          </div>
        </div>
      </div>
      <div class="case-list" ref="caseListSecond" @mousedown="startDrag($event, 'caseListSecond')"
        @mousemove="onDrag($event, 'caseListSecond')" @mouseup="endDrag" @mouseleave="endDrag">
        <div class="case-list-item border-gradient" v-for="(item, index) in caseListSecond" :key="index">
          <div class="case-list-item-top">
            <span>China</span><span>MiNT BiO</span><span>Hangzhou</span>
          </div>
          <img :src="item.imgSrc" alt="case-list-item" class="case-list-item-img" />
          <div class="case-list-item-describe">{{ item.describe }}</div>
          <div class="case-list-item-tips">{{ item.tips }}</div>
        </div>
      </div>
    </div>

    <div class="question mobile-sector border-gradient">
      <div class="title-first">
        <span>常见</span><span class="orange-text question-code">？</span><span>问</span>
      </div>
      <div class="title-second">
        <span :style="{ opacity: 0 }">常见</span><span class="orange-text question-code"
          :style="{ opacity: 0 }">？</span><span>题</span>
      </div>
      <el-collapse class="collapse" @change="handleChange">
        <el-collapse-item class="collapse-item" v-for="(item, index) in questionList" :key="index" :title="item.title"
          :name="index" :icon="activeNames.includes(index) ? Minus : Plus">
          <div class="collapse-item-content">{{ item.content }}</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import BannerTitle from "@/components/BannerTitle";
import MouseScrollM from "@/components/MouseScrollM";
import AaModuleContentMobile from "@/components/AaModuleContentMobile";

import { Plus, Minus } from "@element-plus/icons-vue";


export default {
  name: "NewMaterial",
  components: {
    BannerTitle,
    MouseScrollM,
    AaModuleContentMobile
  },
  setup() {
    return {
      titleStyle: { top: "57%" },
    };
  },
  data() {
    return {
      Plus,
      Minus,
      activeNames: [],
      bannerList: ['全新化学结构', '高适配性', '可回收', '高性能', '可生物降解', '低成本'],
      modules: [
        {
          title: "PiX 001",
          isRow: true,
          topItems: ["Affordable", "Infinity"],
          introductionTitle1: "PiX",
          introductionTitle2: "001",
          applyTexts: ["电商包装", "物流包装"],
          advantages: [
            "韧性好",
            "强度高",
            "阻隔性能优",
            "承重性足",
            "可搭竹粉等环保材料",
          ],
          imageUrl: [
            {
              url: "assets/NewMaterial/P001-1.png",
              desc: "快递袋",
            },
            {
              url: "assets/NewMaterial/P001-2.jpeg",
              desc: "快递袋",
            },
            {
              url: "assets/NewMaterial/P001-3.jpeg",
              desc: "快递包装泡沫膜",
            },
          ],
        },
        {
          title: "PiX 002",
          isRow: true,
          topItems: ["Affordable", "Infinity"],
          introductionTitle1: "PiX",
          introductionTitle2: "002",
          applyTexts: ["吸管", "杯材", "瓶材"],
          advantages: ["耐温耐冷", "使用温度 - 30 ℃-100℃", "货架期长"],
          imageUrl: [
            {
              url: "assets/NewMaterial/P002-1.jpeg",
              desc: "吸管",
            },
            {
              url: "assets/NewMaterial/P002-2.jpeg",
              desc: "杯子",
            },
            {
              url: "assets/NewMaterial/P002-3.jpeg",
              desc: "矿泉水瓶",
            },
          ],
        },
        {
          title: "PiX 003",
          isRow: true,
          topItems: ["Affordable", "Infinity"],
          introductionTitle1: "PiX",
          introductionTitle2: "003",
          applyTexts: ["日化产品", "文具玩具", "家具家电"],
          advantages: ["强度高", "抗压性好", "适配性强"],
          imageUrl: [
            {
              url: "assets/NewMaterial/P003-1.jpeg",
              desc: "化妆品",
            },
            {
              url: "assets/NewMaterial/P003-2.png",
              desc: "笔",
            },
            {
              url: "assets/NewMaterial/P003-3.png",
              desc: "玩具",
            },
            {
              url: "assets/NewMaterial/P003-4.png",
              desc: "功能性家具",
            },
            {
              url: "assets/NewMaterial/P003-5.png",
              desc: "日用家具",
            },
            {
              url: "assets/NewMaterial/P003-6.png",
              desc: "白电",
            },
          ],
        },
        {
          title: "PiX 004",
          isRow: true,
          topItems: ["Affordable", "Infinity"],
          introductionTitle1: "PiX",
          introductionTitle2: "004",
          applyTexts: ["农业", "种植业"],
          advantages: ["保温保墒", "横纵向拉伸性能优", "阻隔性好"],
          imageUrl: [
            {
              url: "assets/NewMaterial/P004-1.jpeg",
              desc: "地膜",
            },
            {
              url: "assets/NewMaterial/P004-2.png",
              desc: "地膜",
            },
            {
              url: "assets/NewMaterial/P004-4.jpg",
              desc: "棚膜",
            },
            {
              url: "assets/NewMaterial/P004-3.png",
              desc: "育苗盆",
            },
          ],
        },
        {
          title: "PiX 005",
          isRow: true,
          topItems: ["Affordable", "Infinity"],
          introductionTitle1: "PiX",
          introductionTitle2: "005",
          applyTexts: ["服装", "纺织"],
          advantages: ["透气性好", "弹性佳", "舒适亲肤"],
          imageUrl: [
            {
              url: "assets/NewMaterial/P005-1.jpg",
              desc: "运动服",
            },
            {
              url: "assets/images/product-6.jpg",
              desc: "运动鞋",
            },
          ],
        },
      ],
      caseList: [
        {
          imgSrc: require("@/assets/images/case-4.png"),
          describe: "使用 PiX 001 打造，兼具性能、成本优势及环保性的快递袋。",
        },
        {
          imgSrc: require("@/assets/images/case-2.png"),
          describe: "独创合成工艺进行低成本、高效率量产。",
        },
        {
          imgSrc: require("@/assets/images/case-1.png"),
          describe: "将于 2025 年 3 月正式在唯品会电商物流中投入使用。",
        },
      ],
      caseListSecond: [
        {
          imgSrc: require("@/assets/images/case-1.jpeg"),
          describe: "PiX 004 全程护航新疆棉成长",
          tips: "元素驱动与中国农业科学院农业环境与可持续发展研究所合作，在新疆进行棉花大田试验，现已完成棉花成长全周期实验。",
        },
        {
          imgSrc: require("@/assets/images/case-2.jpeg"),
          describe: "可控生物降解，满足长期作物生长条件。",
        },
        {
          imgSrc: require("@/assets/images/case-3.jpeg"),
          describe: "节水性能优异，水蒸气透过量远低于市面普通可降解地膜。",
        },
      ],
      questionList: [
        {
          title: "什么是生物降解材料？",
          content:
            "生物降解材料是指可以和普通塑料一样使用，并能够被自然界的微生物分解成水和CO2，进而回归自然的环保型材料。",
        },
        {
          title: "PiX材料真的能适配这么多领域吗？",
          content:
            "生物降解材料包括生物降解塑料、生物降解纤维、生物降解薄膜、生物降解复合材料等。",
        },
        {
          title: "产能是否适配我的需求？",
          content:
            "生物降解材料具有环保、可降解、可循环利用等优点，可以减少环境污染，提高资源利用率。",
        },
        {
          title: "材料的生产过程环保吗？",
          content: "生物降解材料广泛应用于包装、农业、医疗、家居等领域。",
        },
      ],
    };
  },
  methods: {
    getTabStyleData(index) {
      const marginLeft = index === 0 ? "1%" : `${1 + index * 19.7}%`;

      return {
        marginLeft: marginLeft,
        zIndex: index,
      };
    },
    handleChange(activeNames) {
      this.activeNames = activeNames;
    },
    startDrag(event, listRef) {
      this.isDragging = true;
      this.startX = event.clientX;
      this.scrollLeft = this.$refs[listRef].scrollLeft;
    },
    onDrag(event, listRef) {
      if (!this.isDragging) return;
      const x = event.clientX;
      const walk = (x - this.startX) * 2; // Adjust the multiplier for sensitivity
      this.$refs[listRef].scrollLeft = this.scrollLeft - walk;
    },
    endDrag() {
      this.isDragging = false;
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/style/variable.less";

.mouse-scroll {
  margin-top: 100px;
  height: 600px;
}

.icon-ele {
  margin: 0 8px 0 auto;
  color: #409eff;
}

.material {
  background-color: #11161b;

  &-banner {
    padding: 0 10px;

    &-img {
      width: 100%;
    }

    &-list {
      margin: 10px auto 20px;
      width: 282px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 8px;

      &-item {
        padding: 0 20px;
        border-radius: 8px;
        height: 34px;
        color: white;
        font-size: 11px;
        font-weight: 380;
        line-height: 34px;
        text-align: center;
        border: 0.4px solid #F1F3F799
      }
    }
  }

  &-scroll {}

  .case {
    color: #fff;
    padding: 60px 0 60px 45px;

    &-title {
      &-first {
        text-align: left;
        font: 520 25px MiSans;
      }

      .text-wrapper {
        margin-top: 30px;
        display: flex;
        justify-content: flex-start;
        gap: 16px;

        .case-title-second {
          text-align: center;
          font: 520 16px MiSans;
        }

        .case-title-third {
          margin-right: 30px;
          text-align: left;
          font: 520 16px MiSans;
        }

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


      &-item {
        background: hsla(206, 9%, 15%, 1);
        backdrop-filter: blur(68px);
        flex-shrink: 0;
        padding: 12px;
        width: 300px;
        margin-right: 20px;
        border-width: 2px;
        border: 1px solid transparent;
        border-image: linear-gradient(156.52deg,
            rgba(255, 255, 255, 0.4) 2.12%,
            rgba(255, 255, 255, 0.0001) 39%,
            rgba(255, 255, 255, 0.0001) 54.33%,
            rgba(255, 255, 255, 0.1) 93.02%);
        border-radius: 20px;

        &-top {
          font: 400 8px Montserrat;
          color: rgba(241, 243, 247, 0.5);
          display: flex;
          justify-content: space-between;
        }

        &-img {
          width: 100%;
          height: 233px;
          object-fit: cover;
          margin: 16px 0;
          border-radius: 20px;
        }

        &-describe {
          margin-top: 8px;
          font-size: 12px;
          font-weight: 550;
          color: #fff;
          white-space: normal;
        }

        &-tips {
          margin-top: 20px;
          font-size: 12px;
          line-height: 24px;
          font-weight: 400;
          white-space: normal;
          color: #f1f3f799;
        }
      }
    }
  }

  .question {
    padding: 60px 0 60px 45px;
    color: #fff;
    font-size: 25px;
    font-weight: 520;
    text-align: left;

    &-code {
      display: inline-block;
      width: 30px;
      margin: 0 20px;
    }

    .title-second {
      margin-bottom: 40px;
    }

    .collapse {
      font: 400 14px MiSans;
      color: #fff;

      &-item {
        &-content {
          font: 400 14px MiSans !important;
          color: #fff !important;
        }
      }

      --el-collapse-header-bg-color: #11161b !important;
      --el-collapse-header-text-color: #fff !important;
      --el-collapse-header-font-size: 14px !important;
      --el-collapse-header-padding: 0 !important;
      --el-collapse-header-font-weight: 500 !important;
      --el-collapse-header-border-bottom: none !important;

      /* 使用深度选择器 */
      ::v-deep .el-collapse-item__wrap {
        padding: 20px 0;
        background-color: #11161b;
        border-bottom: 1px solid #66666680;
      }

      .is-active {
        ::v-deep .el-collapse-item__header {
          border-bottom: none;
          height: 80px;
        }
      }

      ::v-deep .el-collapse-item__header {
        border-bottom: 1px solid #66666680;
        height: 80px;
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