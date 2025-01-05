<template>
  <div>
    <BannerTitleAnimationMobile :titleImage="require('@/assets/BioIntelligent/banner_title.png')"
      :backgroundImg="require('@/assets/BioIntelligent/module1_bg.jpeg')" :isShowHeader="false" />
    <div class="line2 mt120"></div>

    <div class="part2">
      <div class="title">
        <span class="first-text">0~1</span>
        <span class="orange-text">科研</span>
        <span>到</span>
        <span class="orange-text"> 产业</span>
        <span class="last-text">1~&infin;</span>
      </div>
      <div class="swiper-content2">
        <Swiper :caseList="caseList" :topTip="topTip" :bottomTip="bottomTip">
          <template #item-content="{ item }">
            <img :src="item.imgSrc" class="part2-list-item-img">
            <div class="part2-list-item-title">{{ item.title }}</div>
            <div class="part2-list-item-describe">{{ item.describe }}</div>
          </template>
        </Swiper>
      </div>
    </div>

    <div class="part3">
      <div class="title">
        <span class="first-text">一起了解</span>
        <span class="orange-text">生物智造</span>
      </div>
      <div class="swiper-content3">
        <Swiper :caseList="caseList2" :topTip="topTip3">
          <template #item-content="{ item }">
            <img :src="item.url" class="part3-list-item-img">
            <div class="part3-list-item-title">{{ item.title }}</div>
            <div class="part3-list-item-describe">{{ item.description }}</div>
          </template>
        </Swiper>
      </div>
    </div>
    <div class="part4">
      <img src="@/assets/images/part4.png" alt="">
    </div>
    <VisionModule5 />
    <div class="part6">
      <div class="title"><span>生物智造</span><span class="orange-text">基地</span></div>
      <img src="@/assets/images/base-1.png" alt="">
      <img src="@/assets/images/base-2.png" alt="">
      <img src="@/assets/images/base-3.png" alt="">
    </div>

  </div>
</template>

<script>
import Swiper from "@/components/Swiper";
import VisionModule5 from "@/pages/VisionMobile/VisionModule5";

import BannerTitleAnimationMobile from "@/components/BannerTitleAnimationMobile";
export default {
  name: "MintHome",
  components: {
    BannerTitleAnimationMobile,
    Swiper,
    VisionModule5
  },
  setup() {
    return {};
  },
  data() {
    return {
      caseList: [
        {
          title: "科研 0～1",
          describe: "我们在实验室中进行基础研究和概念验证，打造能够高效生产目标产品的菌株及元件库。通过小试分析和工艺优化后，满足要求的工程微生物将被送往生物智造基地，进行量产验证和放大。",
          imgSrc: require("@/assets/BioIntelligent/Laboratory.png"),

        },
        {
          title: "产业 1～",
          describe: "我们在实验室中进行基础研究和概念验证，打造能够高效生产目标产品的菌株及元件库。通过小试分析和工艺优化后，满足要求的工程微生物将被送往生物智造基地，进行量产验证和放大。 ",
          imgSrc: require("@/assets/BioIntelligent/Industry.png"),

        },
      ],
      caseList2: [
        {
          url: require("@/assets/BioIntelligent/swipper1.png"),
          title: "可再生原料",
          description: "源自微生物和秸秆、淀粉等非粮生物质。",
        },
        {
          url: require("@/assets/BioIntelligent/swipper2.png"),
          title: "AI蛋白质设计",
          description: "与商汤科技战略合作，AI高效预测和生成分子。",
        },
        {
          url: require("@/assets/BioIntelligent/swipper3.png"),
          title: "科技引擎",
          description: "自研MiNT X Platform 配备全面的菌种、元件库，实现高效、精准、可预测的底层微生物设计和代谢优化。",
        }, {
          url: require("@/assets/BioIntelligent/swipper3.png"),
          title: "量产无忧",
          description: "布局2个生物智造基地，年产能超10万吨，成熟产品均已具备量产条件，并配备严格的质量管理流程。",
        }, {
          url: require("@/assets/BioIntelligent/swipper3.png"),
          title: "应用无限",
          description: "生物智造产品在农业、包装、消费品等重要领域均可布局应用，并推动传统工业进行绿色转型升级。",
        },
      ],
      topTip: ['N 30.2741°', 'MiNT BiO', 'China'],
      bottomTip: ['Hangzhou', 'LAB&IND', 'E 120.1552°'],
      topTip3: ['China', 'MiNT BiO', 'Hangzhou'],

    };
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>
.part1 {
  width: 100%;
  height: 1282px;
  background-color: #000;

  text {
    color: #ececee;
  }
}

.part2 {
  padding: 60px 0px;

  .title {
    font-size: 25px;
    color: #fff;
    text-align: center;

    .first-text {
      margin-right: 10px;
    }

    .orange-text {
      color: #ff8c00;
    }

    .last-text {
      margin-left: 10px;
    }
  }

  .swiper-content2 {
    margin-top: 40px;

    .part2-list-item {


      &-img {
        width: 276px;
        height: 233px;
        border-radius: 6px;
        object-fit: cover;
        margin-top: 20px;
      }

      &-title {
        font-size: 14px;
        text-align: left;
        margin: 20px 0;
        color: #F1F3F7;
        white-space: normal;
      }

      &-describe {
        font-size: 12px;
        line-height: 15.91px;
        text-align: left;
        color: #F1F3F7;
        white-space: normal;
        margin-bottom: 40px;
      }
    }
  }
}

.part3 {
  height: auto;
  padding: 60px 0px;

  .title {
    font-size: 25px;
    color: #fff;
    text-align: center;

    .first-text {
      margin-right: 10px;
    }

    .orange-text {
      color: #ff8c00;
    }

  }

  .swiper-content3 {
    margin-top: 40px;

    .part3-list-item {


      &-img {
        width: 276px;
        height: 233px;
        border-radius: 6px;
        object-fit: cover;
        margin-top: 20px;
      }

      &-title {
        font-size: 14px;
        text-align: left;
        margin: 20px 0;
        color: #F1F3F7;
        white-space: normal;
      }

      &-describe {
        font-size: 12px;
        line-height: 15.91px;
        text-align: left;
        color: #F1F3F7;
        white-space: normal;
        margin-bottom: 40px;
      }
    }
  }
}

.part4 {
  padding: 60px 5px;

  img {
    width: 100%;
  }
}

.part6 {
  padding: 60px 5px;

  .title {
    color: #fff;
    font-size: 25px;
    font-weight: 450;
    text-align: center;
    margin-bottom: 60px;

    .orange-text {
      color: #ff8c00;
      margin-left: 20px;
    }

  }

  img {
    width: 100%;
    margin: 16px auto;
  }
}

.line2 {
  height: 1px;
  width: 100%;
  background-image: linear-gradient(to right,
      #35344a 30%,
      #666666 50%,
      #35344a 70%);
}

.line3 {
  height: 1px;
  width: 100%;
  background: rgba(49, 49, 50, 1);
}

.mt120 {
  margin-top: 120px;
}
</style>