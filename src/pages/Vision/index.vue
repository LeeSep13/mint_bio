<template>
  <div class="vision">
    <BannerTitle :titleImage="require('./images/banner_title.png')" />
    <div class="vision-module1 sector">
      <img src="./images/banner1.png" alt="vision_banner1" />
    </div>
    <div class="vision-module2 sector">
      <div class="vision-module2-left">
        <p class="vision-module2-left-title">白色污染</p>
        <img
          class="vision-module2-left-img"
          src="./images/banner2_left.png"
          alt="vision_module2_left"
        />
        <ul class="vision-module2-left-text">
          <li>海洋飘浮着 5 亿+块不可降解的塑料垃圾</li>
          <li>每人每年吞入 5万+个微塑料颗粒=50+张信用卡</li>
        </ul>
      </div>
      <div class="vision-module2-right">
        <p class="vision-module2-right-title">资源枯竭</p>
        <img
          class="vision-module2-right-img"
          src="./images/banner2_right.png"
          alt="vision_module2_right"
        />
        <ul class="vision-module2-right-text">
          <li>地球土壤、土地和水资源状况持续恶化，均已“濒临极限”</li>
          <li>到2050年，难以满足将近100亿全球人口的粮食需求</li>
        </ul>
      </div>
    </div>
    <div class="vision-module3 sector">
      <div class="vision-module3-title">
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
              <li
                v-for="(item, index) in declineData"
                :key="item.title"
                :class="{
                  highlight: highlightedIndex === index,
                }"
                @mouseover="updateHoverData(item.rate, index)"
              >
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
    <div class="vision-module4">
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
          <div
            class="vision-module4-bottom-card"
            v-for="item in cardData"
            :key="item.key"
          >
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
import BannerTitle from '@/components/BannerTitle'

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
const highlightedIndex = ref(0);
const hoverData = ref("15%～88%");

function updateHoverData(data, index) {
      this.highlightedIndex = index;
      this.hoverData = data;
}

</script>

<style lang="less" scoped>
@import "@/style/variable.less";

.vision {
  &-module1 {
    margin-top: 5.4375rem;
    img {
      width: 89rem;
    }
  }
  &-module2 {
    padding: 70px 0 170px 160px;
    display: flex;
    &-left-title,
    &-right-title {
      margin-bottom: 30px;
      padding: 20px;
      width: 56px;
      color: #fff;
      border: 1px solid #fff;
      border-radius: 100px;
    }
    &-left-text,
    &-right-text {
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
          margin-bottom: 16px; /* 每项之间的间隔 */
        }
      }
    }
    &-left {
      margin-right: 16px;
      &-img {
        width: 824px;
        height: 450px;
      }
    }
    &-right {
      &-img {
        width: 780px;
        height: 450px;
      }
    }
  }
  &-module3 {
    &-title {
      display: flex;
      gap: 16px;
      &-text1,
      &-text2 {
        font-size: 60px;
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
      margin-top: 60px;
      color: transparent;
      z-index: 1;
      &-left {
        width: 524px;
        margin-right: 76px;
        &-list {
          padding: 8px 62px;
          &-w {
            text-align: center;
            width: 524px;
            height: 410px;
            border-radius: 20px;
            border: 1px solid transparent;
            background-image: linear-gradient(#181a1d, #12161b),
              linear-gradient(
                156.52deg,
                rgba(255, 255, 255, 0.4) 2.12%,
                rgba(255, 255, 255, 0.0001) 60%,
                rgba(255, 255, 255, 0.0001) 54%,
                rgba(255, 255, 255, 0.1) 93.02%
              );
            background-origin: border-box;
            background-clip: content-box, border-box;
          }
          li {
            height: 79px;
            line-height: 79px;
            font-size: 20px;
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
          font-size: 24px;
          color: #fff;
        }
        &-more {
          margin-top: 60px;
          margin-bottom: 40px;
          width: 124px;
          height: 58px;
          line-height: 58px;
          text-align: center;
          font-size: 16px;
          color: #fff;
          border-radius: 209px;
          border: 1px solid transparent;
          background-image: linear-gradient(#181a1d, #12161b),
            linear-gradient(
              156.52deg,
              rgba(255, 255, 255, 0.4) 2.12%,
              rgba(255, 255, 255, 0.0001) 60%,
              rgba(255, 255, 255, 0.0001) 54%,
              rgba(255, 255, 255, 0.1) 93.02%
            );
          background-origin: border-box;
          background-clip: content-box, border-box;
        }
      }
      &-right {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 824px;
        height: 632px;
        border-radius: 20px;
        border: 1px solid transparent;
        background-image: linear-gradient(#181a1d, #12161b),
          linear-gradient(
            156.52deg,
            rgba(255, 255, 255, 0.4) 2.12%,
            rgba(255, 255, 255, 0.0001) 60%,
            rgba(255, 255, 255, 0.0001) 54%,
            rgba(255, 255, 255, 0.1) 93.02%
          );
        background-origin: border-box;
        background-clip: content-box, border-box;
        &-content {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 34px;
          img {
            width: 100px;
            height: 100px;
          }
          p {
            font-size: 100px;
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
      width: 663px;
      height: 468px;
      z-index: 0; /* 确保网格图在下面 */
    }
    &-trend {
      position: absolute;
      top: 65%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 824px;
      height: 386px;
      z-index: 0; /* 确保Mint图在网格图下面 */
    }
  }
  &-module4 {
    margin-top: 170px;
    width: 100%;
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(
        to right,
        rgba(53, 52, 74, 1) 0%,
        rgba(53, 52, 74, 0.5) 33%,
        rgba(255, 255, 255, 1) 58%,
        rgba(255, 255, 255, 1) 60%,
        rgba(53, 52, 74, 0.5) 67%,
        rgba(53, 52, 74, 1) 100%
      )
      1;
    &-top {
      margin: 170px 0 126px 152px;
      display: flex;
      &-title-text1,
      &-title-text2 {
        font-size: 60px;
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
          font-size: 24px;
          color: #fff;
        }
      }
    }
    &-bottom {
      margin-bottom: 170px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 14px;
      &-card {
        display: flex;
        width: 704px;
        height: 330px;
        font-size: 16px;
        color: #fff;
        border-radius: 20px;
        border: 1px solid transparent;
        background-image: linear-gradient(#181a1d, #12161b),
          linear-gradient(
            156.52deg,
            rgba(255, 255, 255, 0.4) 2.12%,
            rgba(255, 255, 255, 0.0001) 60%,
            rgba(255, 255, 255, 0.0001) 54%,
            rgba(255, 255, 255, 0.1) 93.02%
          );
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
            font-size: 24px;
            font-weight: 500;
            color: #f1f3f7;
          }
          &-text2 {
            margin-right: 102px;
            margin-bottom: 56px;
            font-size: 20px;
            color: #f1f3f7;
          }
        }
      }
    }
  }
}
</style>