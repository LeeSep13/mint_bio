<template>
  <div class="vision">
    <BannerTitle>
      <div class="text-section">
        <div>与合作伙伴</div>
        <div>共担ESG责任</div>
      </div>
    </BannerTitle>
    <div class="vision-module1 ">
      <img src="./images/banner1.png" alt="vision_banner1" />
    </div>
    <div class="vision-module2 ">
      <div class="vision-module2-item" v-for="(item, index) in impactData" :key="index">
        <p class="vision-module2-item-title" >{{ item.title }}</p>
        <div class="hover-scale-transition">
          <img class="vision-module2-item-img" :src="item.imgSrc"  />
          <ul class="vision-module2-item-text">
            <li v-for="(text, idx) in item.texts" :key="idx">{{ text }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="vision-module3 ">
      <div class="vision-module3-title">
        <span class="vision-module3-title-text1">生物智造</span>
        <span class="vision-module3-title-text2">势在必行</span>
        <p class="vision-module3-title-text3">据世界经合组织 (OECD) 的案例分析表明，</p>
        <p class="vision-module3-title-text3"> 生物技术的应用可以</p>
      </div>
      <div class="mouse-scroll">
        <MouseScrollM :modules="declineData" :originHeight="430">
          <template #item-content="{ module }">
            <CrisisCard :module="module" />
          </template>
        </MouseScrollM>
      </div>

    </div>

    <div class="vision-module4 border-gradient">
      <div class="vision-module4-w">
        <div class="vision-module4-top">
          <div class="vision-module4-top-title">
            <p class="vision-module4-top-title-text1">响应</p>
            <p class="vision-module4-top-title-text2">号召</p>
          </div>
          <div class="vision-module4-top-description">
            <img src="./images/semicolon_icon.png" alt="semicolon" />
            <p class="vision-module4-top-description-text">
              生物制造是我国新兴战略行业之一，<br />是创新、质优、高效能的新质生产力代表。
            </p>
          </div>
        </div>
        <div class="vision-module4-bottom">
          <div class="vision-module4-bottom-card border-white" v-for="item in cardData" :key="item.key">
            <div class="book-icon">
              <img src="./images/book_icon.png" alt="book-icon" />

            </div>
            <div class="vision-module4-bottom-card-content">
              <p class="vision-module4-bottom-card-content-text1">
                {{ item.title }}
              </p>
              <p class="vision-module4-bottom-card-content-text2">
                {{ item.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <VisionModule5 />
  </div>
</template>

<script setup>
import { ref } from "vue";
import VisionModule5 from "./VisionModule5.vue";
import BannerTitle from '@/components/BannerTitle'
import MouseScrollM from '@/components/MouseScrollM'
import CrisisCard from "./CrisisCard";



const cardData = ref([
  {
    key: 0,
    title: "《“十四五”塑料污染治理行动方案》",
    content:
      "科学稳妥推广塑料替代产品。加大可降解塑料关键核心技术攻关和成果转化，不断提升产品质量和性能，降低应用成本。",
  },
  {
    key: 1,
    title: "《“十四五”生物经济发展规划》",
    content:
      "培育壮大生物经济支柱产业。加快生物技术广泛赋能健康、农业、能源、环保等产业，促进生物技术与信息技术深度融合，全面提升生物产业多样化水平，推动生物经济高质量发展。",
  },
  {
    key: 2,
    title: "《新产业标准化领航工程实施方案(2023-2035年)》",
    content:
      "聚焦元宇宙、脑机接口、量子信息、人形机器人、生成式人工智能、生物制造、未来显示、未来网络、新型储能等9大未来产业。",
  },
  {
    key: 3,
    title: "《加快非粮生物基材料创新发展三年行动方案》",
    content:
      "到 2025 年，非粮生物基材料产业基本形成自主创新能力强、产品体系不断丰富、绿色循环低碳的创新发展生态，非粮生物质原料利用和应用技术基本成熟，部分非粮生物基产品竞争力与化石基产品相当，高质量、可持续的供给和消费体系初步建立。",
  },
]);
const declineData = ref(
  [
    {
      key: 0,
      name: "工业过程能耗 (下降)",
      rate: "15%～88%",
    },
    {
      key: 1,
      name: "原料消耗 (下降)",
      rate: "35%～75%",
    },
    {
      key: 2,
      name: "空气污染 (下降)",
      rate: "50%～90%",
    },
    {
      key: 3,
      name: "水污染 (下降)",
      rate: "33%～80%",
    },
    {
      key: 4,
      name: "生产成本 (下降)",
      rate: "9%～90%",
    },
  ]
)

const impactData = ref([
  {
    title: '白色污染',
    imgSrc: require('./images/banner2_1.jpg'),
    texts: [
      '海洋飘浮着 5 亿+块不可降解的塑料垃圾',
      '每人每年吞入 5万+个微塑料颗粒=50+张信用卡'
    ]
  },
  {
    title: '资源枯竭',
    imgSrc: require('./images/banner2_2.jpg'),
    texts: [
      '地球土壤、土地和水资源状况持续恶化，均已“濒临极限”',
      '到2050年，难以满足将近100亿全球人口的粮食需求'
    ]
  },
  {
    title: '气候危机',
    imgSrc: require('./images/banner2_3.jpg'),
    texts: [
      '84%的碳排放来自工业和能源生产，导致全球变暖',
      '近2/3人口超过500万的世界城市面临海平面上升的威胁'
    ]
  },
  {
    title: '生态破坏',
    imgSrc: require('./images/banner2_4.jpg'),
    texts: [
      '传统化工生产方式的有毒化学助剂等，对生态系统造成了严重破坏。',
      '全球约34%的农地受到人为土壤退化的影响，每年有12万+平方公里的土地进一步退化，严重威胁生物多样性和生态平衡。'
    ]
  },
])

</script>

<style lang="less" scoped>
@import "@/style/variable.less";

.mouse-scroll {
  height: 430px;
}

.vision {

  .text-section {
    font-size: 36px;
    font-weight: 450;
    line-height: 47.74px;
    text-align: center;
    color: #e8e8ea;
  }

  &-module1 {
    display: flex;
    justify-content: center;

    img {
      width: 370px;
    }

    margin-bottom: 70px;
  }

  &-module2 {
    padding: 30px 0;
    overflow: auto;
    display: flex;
    margin-bottom: 70px;
    margin-left: 45px;

    &::-webkit-scrollbar {
      display: none;
    }

    &-item-title{
      padding: 10px;
      width: 72px;
      color: #fff;
      border: 1px solid #fff;
      border-radius: 100px;
      font-size: 13px;
      text-align: center;
      margin-bottom: 14px;
    }

    &-item-text {
      margin-top: 14px;
      margin-left: 6px;

      li {
        position: relative;
        font-size: 13px;
        font-weight: 400;
        color: #fff;
        padding-left: 13px;

        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 9px;
          transform: translateY(-50%);
          width: 5px;
          height: 5px;
          background-color: #fff;
          border-radius: 50%;
        }

        &:not(:last-child) {
          margin-bottom: 14px;
        }
      }
    }

    &-item {
      margin-right: 16px;

      &-img {
        width: 300px;
        height: 210px;
        object-fit: cover;
        border-radius: 12px;
      }
    }
  }

  &-module3 {
    &-title {
      margin-left: 45px;
      margin-bottom: 60px;

      &-text1,
      &-text2 {
        display: inline-block;
        font-size: 25px;
        font-weight: 500;
        padding-bottom: 14px;
      }

      &-text1 {
        color: #ff7200;
      }

      &-text2 {
        color: #f1f3f7;
      }

      &-text3 {
        font-size: 12px;
        color: #f1f3f7;
        line-height: 17px;
      }
    }



    &-grid {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 663px;
      height: 468px;
      z-index: 0;
      /* 确保网格图在下面 */
    }

    &-trend {
      position: absolute;
      top: 65%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 824px;
      height: 386px;
      z-index: 0;
      /* 确保Mint图在网格图下面 */
    }
  }

  &-module4 {
    margin-top: 60px;
    width: 100%;

    &-top {
      margin: 60px 0 0 60px;
      display: flex;
      flex-direction: column;

      &-title-text1,
      &-title-text2 {
        font-size: 25px;
      }

      &-title {
        display: flex;

        &-text1 {
          color: #ff7200;
          margin-right: 8px;
        }

        &-text2 {
          color: #f1f3f7;
        }
      }

      &-description {
        display: flex;
        justify-content: flex-start;
        margin: 10px 0 45px;

        img {
          width: 23px;
          height: 22px;
          margin: -4px 8px 0 0;
        }

        &-text {
          font-size: 12px;
          color: #fff;
        }
      }
    }

    &-bottom {
      padding: 0 10px 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 14px;

      &-card {
        display: flex;
        font-size: 13px;
        color: #fff;
        padding: 16px;
        border-radius: 12px;
        // border: 1px solid rgba(255, 255, 255, 0.2);

        .book-icon {
          width: 15.89px;
          height: 20px;

          img {
            height: 100%;
          }


        }

        &-content {
          margin-left: -4px;

          &-text1 {
            margin-top: 36px;
            font-size: 16px;
            font-weight: 500;
            color: #f1f3f7;
          }

          &-text2 {
            margin-top: 30px;
            font-size: 13px;
            line-height: 21px;
            color: #f1f3f7;
            margin-bottom: 14px;
          }
        }
      }
    }
  }
}
</style>