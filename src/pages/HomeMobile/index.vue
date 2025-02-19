<template>
  <div class="home">
    <BannerTitleAnimationMobile :titleImage="require('@/assets/images/home-title.png')" :isShowHeader="false"
      :backgroundImg="require('@/assets/images/home-background.png')" />
    <div class="dna-section mobile-sector">
      <div class="top-title">
        <div class="mint-text">MINT BIO</div>
        <div class="line-group">
          <div v-for="(divide, index) in lineDivides" :key="index" class="line-divide"
            :style="{ marginLeft: divide.marginLeft + 'px' }"></div>
        </div>
        <div class="dna-text">DNA</div>
      </div>

      <Swiper :caseList="caseList" :topTip="topTip" :bottomTip="bottomTip">
        <template #item-content="{ item }">
          <div class="case-list-item-title" :style="{ color: item.moveColor }">{{ item.title }}</div>
          <div class="case-list-item-describe">{{ item.describe }}</div>
          <div class="case-list-item-describe2">{{ item.describe2 }}</div>
        </template>
      </Swiper>
    </div>
    <div class="product-section mobile-sector border-gradient">
      <div class="title">
        <img src="@/assets/images/infinite.png" />
      </div>
      <div class="product-list">
        <Swiper :caseList="productList" :topTip="productTopTip">
          <template #item-content="{ item }">
            <img :src="item.imgSrc" class="case-list-item-img">
            <div class="case-list-item-first">{{ item.first }}</div>
            <div class="case-list-item-second">{{ item.second }}</div>
            <div class="case-list-item-third">
              <div v-for="i in item.advantage" :key="i" class="advantage-item">{{ i }}</div>
            </div>

          </template>
        </Swiper>
      </div>
    </div>
    <div class="banner-section  border-gradient">
      <div class="title">
        <span>您的选择和 </span><span class="orange-text"> 他们 </span><span> 一样</span>
      </div>
      <img src="@/assets/images/banners.png" class="banner-img" />
    </div>
    <div class="new-section mobile-sector border-gradient">
      <div class="new-item" v-for="(item, index) in newsList" :key="index">
        <router-link :to="`/mintNews/detail/${item.id}`">
          <div class="img-box">
            <img :src="getImageUrl(item.pic)" alt="" class="new-img" />


            <div class="overlay">
              <div class="overlay-content">
                <div class="button-more">了解更多</div>
              </div>
            </div>
          </div>
        </router-link>

        <div class="text-top">
          <span class="name" :style="{ color: item.categorycolor, marginRight: '16px' }">{{ item.categorylabel
            }}</span>
          <span class="date">{{ item.time }}</span>
        </div>
        <div class="text-bottom">{{ item.title }}</div>
      </div>
      <router-link :to="`/mintNews`">
        <div class="button-more-lg border-gradient">更多动态</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import BannerTitleAnimationMobile from "@/components/BannerTitleAnimationMobile";
import Swiper from "@/components/Swiper";
import axios from "axios";
import { getImageUrl } from "@/utils/index";


export default {
  name: "MintHome",
  components: {
    BannerTitleAnimationMobile,
    Swiper
  },
  setup() {
    return {};
  },
  data() {
    return {
      lineDivides: [
        { marginLeft: 0 },
        { marginLeft: 1 },
        { marginLeft: 1 },
        { marginLeft: 2 },
        { marginLeft: 4 },
        { marginLeft: 8 },
        { marginLeft: 16 },
        { marginLeft: 32 },
      ],
      caseList: [
        {
          title: "前沿科技力",
          describe: "聚焦合成生物技术突破",
          describe2: "引领生物智造创新",
          moveColor: "#FF7200",
          isShow: false,
        },
        {
          title: "平台强赋能",
          describe: "独创 MiNT X Platform ",
          describe2: "AI赋能生物智造",
          moveColor: "#254ad9",
          isShow: false,
        },
        {
          title: "卓越产品力",
          describe: "生物降解新材料   ",
          describe2: "低成本高性能的环保新材料",
          moveColor: "#3170d3",
          isShow: false,
        },
        {
          title: "卓越产品力",
          describe: "生物合成氨基酸 ",
          describe2: "高效生物合成20+种氨基酸",
          moveColor: "#3880f3",
          isShow: false,
        },
        {
          title: "绿色可持续",
          describe: "与合作伙伴共担ESG",
          describe2: "责任共筑地球可持续未来",
          moveColor: "#42945f",
          isShow: false,
        },
      ],
      topTip: ['N 30.2741°', 'MiNT BiO', 'China'],
      bottomTip: ['Hangzhou', 'DNA', 'E 120.1552°'],
      productTopTip: ['China', 'MiNT BiO', 'Hangzhou'],
      advantageShow: false,
      productList: [
        {
          isShow: false,
          second: "[ 无豆粕日粮解决方案 ]",
          imgSrc: require("../../assets/images/product-1.jpeg"),
          advantage: [
            "高效补充牲畜必需氨基酸",
            "有效减少养殖过程中温室气体排放",
          ],
          first: "[ 牧原集团 ]",
          top: 0,
          width: "50%",
        },
        {
          isShow: false,
          product: "[ 乳品包装 ]",
          imgSrc: require("../../assets/images/product-2.jpg"),
          advantage: ["纸塑复合", "可降解", "可回收", "成本低"],
          friends: "[ 国家乳业创新中心 ]",
        },
        {
          isShow: false,
          second: "[ 快递袋 ]",
          imgSrc: require("../../assets/images/product-3.jpeg"),
          advantage: ["强度高", "成本低", "可降解", "可回收"],
          first: "[ 唯品会 ]",
        },
        {
          isShow: false,
          second: "[ 生物降解地膜 ]",
          imgSrc: require("../../assets/images/product-4.jpeg"),
          advantage: ["寿命长", "保温保墒", "降解期可调控", "有助增产"],
          first: "[ 新疆农科院 ]",
        },
        {
          isShow: false,
          product: "[ 一次性吸管 ]",
          imgSrc: require("../../assets/images/product-5.jpg"),
          advantage: ["耐热耐冷", "硬度大", "韧性强", "成本低"],
          friends: "",
        },
        {
          isShow: false,
          second: "[ 功能性纤维 ]",
          imgSrc: require("../../assets/images/product-6.jpg"),
          advantage: ["吸湿性强", "弹力大", "可降解", "可回收"],
          first: "",
          objectFit: "contain",
        },
      ],
      newsList: [],
      getImageUrl
    };
  },
  methods: {
    expandMargin() {
      this.advantageShow = true;
      this.lineDivides.forEach((element) => {
        element.marginLeft *= 2.5;
      });
    },
    advantageMove(advantage) {
      advantage.color = advantage.moveColor;
      advantage.isShow = true;
    },
    advantageLeave(advantage) {
      advantage.color = "#ffffff";
      advantage.isShow = false;
    },
    productMove(product) {
      product.isShow = true;
    },
    productLeave(product) {
      product.isShow = false;
    },
    async getList() {
      try {
        const response = await axios.get("/data/news_list.json");
        if (response.status === 200) {
          this.newsList = response.data.slice(0, 6);
          this.newsList.forEach((news) => {
            news.transform = 'scale(1)';
          });
        }
      } catch (error) {
        console.error("Error fetching news data:", error);
      }

    }
  },
  mounted() {
    this.getList();
  },
};
</script>

<style lang="less" scoped>
@import "@/style/variable.less";

.home {
  font-size: 16px;
  font: 400 20px MiSans;

  .dna-section {
    padding-bottom: 60px;

    .top-title {

      div,
      span {
        display: inline-block;
      }

      .mint-text {
        margin-left: 34px;
        margin-top: 60px;
        font: 600 24px Montserrat;
        color: #ffffff;
        margin-right: 32px;
      }

      .dna-text {
        font-weight: 600;
        font-size: 24px;
        color: @orange-color;
        margin-left: 32px;
      }

      .line-group {
        .line-divide {
          background: @orange-color;
          width: 2px;
          height: 14px;
          transition: margin-left 0.3s ease; // 添加过渡效果
        }
      }
    }

    .advantage {
      margin: 40px auto;
      display: flex;
      justify-content: space-between;

      &-item {
        font: 600 32px MiSans;
        width: 108px;
        min-height: 200px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        color: rgba(241, 243, 247, 1);

        &:hover {
          cursor: pointer;
          transition: all 0.5s ease;
        }

        .title {
          margin-bottom: 4px;
          width: 96px;
        }

        .sub-title {
          font-size: 15px;
          margin-bottom: 4px;
        }

        .describe {
          font-size: 15px;
          transition: all 1s ease;
        }
      }
    }

    .case {

      &-list {

        &-item {


          &-title {
            text-align: center;
            margin: 40px auto 20px;
            font-size: 24px;
            color: #FF7200;
          }

          &-describe {
            margin: 20px auto 0;
            font-size: 14px;
            line-height: 18.56px;
            color: #F1F3F7;
            white-space: normal;
            text-align: center;
          }

          &-describe2 {
            margin: 0 auto 40px;
            font-size: 14px;
            line-height: 18.56px;
            color: #F1F3F7;
            white-space: normal;
            text-align: center;
            margin-top: 2px;

          }
        }
      }
    }
  }

  .product-section {
    padding: 60px 0;

    .title {
      display: flex;
      justify-content: center;
      margin-bottom: 0 auto 40px;

      img {
        width: 300px;
      }

    }

    .product-list {

      .case {

        &-list {
          font-size: 14px;

          &-item {

            &-img {
              margin-top: 12px;
              width: 100%;
              height: 203px;
              border-radius: 6px;
              object-fit: cover;
              object-position: top;


            }

            &-first {
              font-size: 14px;
              color: #F1F3F7;
              text-align: left;
              margin: 20px 0;
            }

            &-second {
              font-size: 14px;
              color: #F1F3F7;
              margin: 20px 0;
            }

            &-third {
              display: flex;
              justify-content: space-between;
              gap: 4px;
              flex-wrap: wrap;
              font-size: 14px;
              color: #F1F3F7;

              .advantage-item {
                display: flex;
                align-items: center;
              }

              .advantage-item::before {
                content: "";
                display: inline-block;
                width: 4px;
                height: 4px;
                background: #F1F3F7;
                border-radius: 50%;
                margin-right: 4px;
              }
            }
          }
        }
      }
    }

  }

  .banner-section {
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      text-align: center;
      font: 600 25px MiSans;
      margin-bottom: 50px;
      color: #ffffff;

      .orange-text {
        margin: 0 10px;
      }
    }

    img {
      width: 90%;
    }
  }

  .new-section {
    padding: 60px 10px 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .new-item {
      color: #ffffff;
      width: 100%;
      margin-bottom: 40px;
      position: relative;
      cursor: pointer;
      font-size: 14px;

      .img-box {
        position: relative;

        .new-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 12px;
          transition: opacity 0.3s ease;
          cursor: pointer;
        }

        &:hover {
          opacity: 0.5;
          /* 图片悬停时的透明度 */
        }

        &:hover .overlay {
          opacity: 1;
          /* 蒙层悬停时的透明度 */
        }
      }

      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        /* 蒙层背景色 */
        border-radius: 12px;
        opacity: 0;
        transition: opacity 0.3s ease;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .overlay-content {
        text-align: center;
      }

      .text-top {
        margin: 20px 0;
        text-align: left;
        font-size: 12px;
      }



    }

    .button-more-lg {
      color: #F1F3F7;
      text-align: center;
      line-height: 84px;
      border: 1px solid #2c2f34;
      border-radius: 999px;
      height: 84px;
      width: 140px;
      font-size: 14px;
      backdrop-filter: blur(68px);
      background: linear-gradient(0deg,
          rgba(255, 255, 255, 0.01),
          rgba(255, 255, 255, 0.01)),
        radial-gradient(107.5% 107.5% at 50% 215%,
          rgba(255, 255, 255, 0.08) 0%,
          rgba(255, 255, 255, 0) 100%);
    }

    .button-more-lg:hover {
      background: linear-gradient(0deg,
          rgba(255, 255, 255, 0.01),
          rgba(255, 255, 255, 0.01)),
        radial-gradient(84.92% 150% at 50% 138.75%,
          rgba(255, 255, 255, 0.16) 0%,
          rgba(255, 255, 255, 0) 100%);
    }
  }
}
</style>