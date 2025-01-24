<template>
  <div class="vision">
    <BannerTitle :titleImage="require('./images/banner_title.png')" />
    <div class="vision-module1 sector">
      <div class="vision-module1-banner">
        <img src="./images/banner1.png" alt="vision_banner1" />
      </div>
    </div>
    <div class="vision-module2 sector">
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
    <div class="vision-module3-w">
      <div v-intersect="() => title1InView = true" class="vision-module3 sector">
        <div v-if="title1InView" class="vision-module3-title animate__animated animate__fadeInUp">
          <p class="vision-module3-title-text1">生物智造</p>
          <p class="vision-module3-title-text2">势在必行</p>
        </div>
        <div class="vision-module3-content">
          <div class="vision-module3-content-left">
            <p class="vision-module3-content-left-text">
              据世界经合组织 (OECD) 的案例分析表明，<br />生物技术的应用可以
            </p>
            <p class="vision-module3-content-left-more">了解更多</p>
            <div class="vision-module3-content-left-list-w">
              <ul class="vision-module3-content-left-list">
                <li v-for="(item, index) in declineData" :key="item.title" :class="{
                  highlight: highlightedIndex === index,
                }" @mouseover="updateHoverData(item.rate, index)">
                  {{ item.name }}
                </li>
              </ul>
            </div>
          </div>
          <div class="vision-module3-content-right">
            <img class="vision-module3-grid" src="./images/grid.png" alt="" />
            <img class="vision-module3-trend" src="./images/trend.png" alt="" />
            <div class="vision-module3-content-right-content">
              <img src="./images/down.png" alt="down" />
              <p>{{ hoverData }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="vision-module4-w">
      <div v-intersect="() => title2InView = true" class="vision-module4 sector border-gradient">
        <div v-if="title2InView" class="vision-module4-top animate__animated animate__fadeInUp">
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
          <div v-for="item in cardData" :key="item.key" class="vision-module4-bottom-card hover-scale-transition"
            @mousemove="cardHover(item)" @mouseleave="cardLeave(item)" :style="{ transform: item.transform }">
            <img src="./images/book_icon.png" alt="book_icon" />
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
import BannerTitle from "@/components/BannerTitle";

const cardData = ref([
  {
    key: 0,
    title: "《“十四五”塑料污染治理行动方案》",
    content:
      "科学稳妥推广塑料替代产品。加大可降解塑料关键核心技术攻关和成果转化，不断提升产品质量和性能，降低应用成本。",
    transform: "scale(1)",
  },
  {
    key: 1,
    title: "《“十四五”生物经济发展规划》",
    content:
      "培育壮大生物经济支柱产业。加快生物技术广泛赋能健康、农业、能源、环保等产业，促进生物技术与信息技术深度融合，全面提升生物产业多样化水平，推动生物经济高质量发展。",
    transform: "scale(1)",
  },
  {
    key: 2,
    title: "《新产业标准化领航工程实施方案(2023-2035年)》",
    content:
      "聚焦元宇宙、脑机接口、量子信息、人形机器人、生成式人工智能、生物制造、未来显示、未来网络、新型储能等9大未来产业。",
    transform: "scale(1)",
  },
  {
    key: 3,
    title: "《加快非粮生物基材料创新发展三年行动方案》",
    content:
      "到 2025 年，非粮生物基材料产业基本形成自主创新能力强、产品体系不断丰富、绿色循环低碳的创新发展生态，非粮生物质原料利用和应用技术基本成熟，部分非粮生物基产品竞争力与化石基产品相当，高质量、可持续的供给和消费体系初步建立。",
    transform: "scale(1)",
  },
]);
const declineData = ref([
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
]);

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
const highlightedIndex = ref(0);
const hoverData = ref("15%～88%");
const title1InView = ref(false);
const title2InView = ref(false);

function updateHoverData(data, index) {
  highlightedIndex.value = index;
  hoverData.value = data;
}

function cardHover(card) {
  card.transform = "scale(1.05)";
}
function cardLeave(card) {
  card.transform = "scale(1)";
}
</script>

<style lang="less" scoped>
@import "@/style/variable.less";

.vision {
  &-module1 {
    margin-top: 5.4375rem;

    &-banner {
      width: 100%;

      img {
        width: 100%;
      }
    }
  }

  &-module2 {
    padding: 70px 0 170px 160px;
    display: flex;
    overflow: scroll;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        display: none;
      }
    &-item-title{
      margin-bottom: 30px;
      width: 96px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: #fff;
      border: 1px solid #fff;
      border-radius: 100px;
    }

    &-item-text {
      margin-top: 29px;
      margin-left: 15px;

      li {
        position: relative;
        font-size: 24px;
        font-weight: 500;
        color: #fff;
        padding-left: 32px;

        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 10px;
          height: 10px;
          background-color: #fff;
          border-radius: 50%;
        }

        &:not(:last-child) {
          margin-bottom: 16px;
          /* 每项之间的间隔 */
        }
      }
    }

    &-item {
      margin-right: 16px;

      &-img {
        width: 824px;
        height: 450px;
        border-radius: 20px;
      }
    }

    &-right {
      &-img {
        width: 780px;
        height: 450px;
        border-radius: 20px;
      }
    }
  }

  &-module3 {
    width: 80%;
    &-w{
      display: flex;
      justify-content: center;
    }
    &-title {
      display: flex;
      gap: 16px;

      &-text1,
      &-text2 {
        font-size: 50px;
        font-weight: 500;
      }

      &-text1 {
        color: #ff7200;
      }

      &-text2 {
        color: #f1f3f7;
      }
    }

    &-content {
      display: flex;
      justify-content: space-between;
      margin-top: 60px;
      color: transparent;
      z-index: 1;

      &-left {
        width: 35%;
        margin-right: 56px;

        &-list {
          padding: 8px 62px;

          &-w {
            text-align: center;
            width: 419px;
            height: 328px;
            border-radius: 20px;
            border: 1px solid transparent;
            background-image: linear-gradient(#181a1d, #12161b),
              linear-gradient(156.52deg,
                rgba(255, 255, 255, 0.4) 2.12%,
                rgba(255, 255, 255, 0.0001) 60%,
                rgba(255, 255, 255, 0.0001) 54%,
                rgba(255, 255, 255, 0.1) 93.02%);
            background-origin: border-box;
            background-clip: content-box, border-box;
          }

          li {
            height: 63px;
            line-height: 63px;
            font-size: 16px;
            font-weight: 500;
            color: #5d5f61;
            transition: color 0.3s ease;

            &:not(:last-child) {
              border-bottom: 0.4px solid #f1f3f7;
            }
          }

          .highlight {
            color: #ffffff;
          }
        }

        &-text {
          font-size: 20px;
          color: #fff;
        }

        &-more {
          margin-top: 50px;
          margin-bottom: 30px;
          width: 124px;
          height: 58px;
          line-height: 58px;
          text-align: center;
          font-size: 16px;
          color: #fff;
          border-radius: 209px;
          border: 1px solid transparent;
          background-image: linear-gradient(#181a1d, #12161b),
            linear-gradient(156.52deg,
              rgba(255, 255, 255, 0.4) 2.12%,
              rgba(255, 255, 255, 0.0001) 60%,
              rgba(255, 255, 255, 0.0001) 54%,
              rgba(255, 255, 255, 0.1) 93.02%);
          background-origin: border-box;
          background-clip: content-box, border-box;
        }
      }

      &-right {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 55%;
        height: 520px;
        border-radius: 20px;
        border: 1px solid transparent;
        background-image: linear-gradient(#181a1d, #12161b),
        linear-gradient(140deg,
            rgba(255, 255, 255, 0.4) 40%,
            rgba(255, 255, 255, 0.0001) 60%,
            rgba(255, 255, 255, 0.0001) 70%,
            rgba(255, 255, 255, 0.1) 93.02%);
        background-origin: border-box;
        background-clip: content-box, border-box;

        &-content {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 34px;

          img {
            width: 80px;
            height: 80px;
          }

          p {
            font-size: 80px;
            font-weight: 500;
            color: #ff7200;
            transition: all 0.3s ease;
          }
        }
      }
    }

    &-grid {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 76%;
      height: 468px;
      z-index: 0;
      /* 确保网格图在下面 */
    }

    &-trend {
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 386px;
      z-index: 0;
      /* 确保Mint图在网格图下面 */
    }
  }

  &-module4 {
    width: 80%;
    &-w{
      display: flex;
      justify-content: center;
      margin-top: 170px;
    }
    &-top {
      margin-bottom: 88px;
      display: flex;

      &-title-text1,
      &-title-text2 {
        font-size: 50px;
      }

      &-title {
        display: flex;

        &-text1 {
          color: #ff7200;
          margin-right: 16px;
        }

        &-text2 {
          color: #f1f3f7;
        }
      }

      &-description {
        margin-left: 152px;

        img {
          width: 46px;
          height: 45px;
        }

        &-text {
          margin-left: 72px;
          font-size: 20px;
          color: #fff;
        }
      }
    }

    &-bottom {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 20px;

      &-card {
        display: flex;
        width: 49%;
        height: 290px;
        font-size: 14px;
        color: #fff;
        border-radius: 20px;
        border: 1px solid transparent;
        background-image: linear-gradient(#181a1d, #12161b),
          linear-gradient(156.52deg,
            rgba(255, 255, 255, 0.4) 2.12%,
            rgba(255, 255, 255, 0.0001) 60%,
            rgba(255, 255, 255, 0.0001) 54%,
            rgba(255, 255, 255, 0.1) 93.02%);
        background-origin: border-box;
        background-clip: content-box, border-box;

        img {
          width: 32px;
          height: 40px;
          margin-top: 36px;
          margin-left: 36px;
        }

        &-content {
          margin-left: 33px;

          &-text1 {
            margin: 48px 52px 60px 0;
            font-size: 20px;
            font-weight: 500;
            color: #f1f3f7;
          }

          &-text2 {
            margin-right: 102px;
            margin-bottom: 56px;
            font-size: 16px;
            color: #f1f3f7;
          }
        }
      }
    }
  }
}
</style>