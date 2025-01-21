<template>
  <div class="home">
    <BannerTitleAnimation
      :titleImage="require('@/assets/images/home-title.png')"
      :backgroundImg="require('@/assets/images/home-background.png')"
    />
    <div class="dna-section sector" @mouseover.once="expandMargin()">
      <div class="top-title">
        <div class="mint-text">MINT BIO</div>
        <div class="line-group">
          <div
            v-for="(divide, index) in lineDivides"
            :key="index"
            class="line-divide"
            :style="{ marginLeft: divide.marginLeft + 'px' }"
          ></div>
        </div>
        <div class="dna-text">DNA</div>
        <!-- <img src="@/assets/images/lines.png" class="line"> -->
      </div>
      <div
        class="advantage animate__animated animate__fadeIn"
        v-if="advantageShow"
      >
        <div
          v-for="(advantage, index) in advantageArr"
          :key="index"
          class="advantage-item"
          @mousemove="advantageMove(advantage)"
          @mouseleave="advantageLeave(advantage)"
        >
          <div
            class="title"
            :style="{ color: advantage.color, transition: 'color 1s' }"
          >
            {{ advantage.title }}
          </div>
          <div class="sub-title" v-if="advantage.subTitle">
            {{ advantage.subTitle }}
          </div>
          <div :class="advantage.animationClass" class="describe">
            {{ advantage.describe }}
          </div>
        </div>
      </div>
    </div>
    <div class="product-section sector border-gradient">
      <div v-intersect="() => titleInView = true">
        <img
          v-if="titleInView"
          src="@/assets/images/infinite.png"
          class="title animate__animated animate__fadeInUp"
        />
      </div>
      <div class="product-list">
        <div class="product-list-top">
          <div class="product-list-top-item product">产品</div>
          <div class="product-list-top-item advantage">性能优势</div>
          <div class="product-list-top-item friends">合作伙伴</div>
        </div>
        <div class="product-list-content">
          <div
            v-for="(item, index) in productList"
            :key="index"
            class="product-list-content-item"
            :style="{ color: item.isShow ? '#fff' : '' }"
            @mousemove="productMove(item)"
            @mouseleave="productLeave(item)"
          >
            <div class="product">
              <span class="product-text">{{ item.product }}</span>
              <transition name="fade">
                <img
                  :src="item.imgSrc"
                  v-if="item.isShow"
                  :style="{ top: item.top + 'px', objectFit: item.objectFit }"
                />
              </transition>
            </div>
            <div class="advantage product-text">
              <span
                class="dot-before"
                v-for="i in item.advantage"
                :key="i"
                :style="{ width: item.width }"
                >{{ i }}</span
              >
            </div>
            <div class="friends product-text">{{ item.friends }}</div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-intersect="() => bannerSectionInView = true"
      class="banner-section-w sector border-gradient"
    >
      <div
        v-if="bannerSectionInView"
        class="animate__animated animate__fadeInUp banner-section"
      >
        <div class="title">
          <span>您的选择和 </span><span class="orange-text"> 他们 </span
          ><span> 一样</span>
        </div>
        <img src="@/assets/images/banners.png" class="banner-img" />
      </div>
    </div>
    <div class="new-section sector border-gradient">
      <div
        v-for="(item, index) in newList"
        :key="index"
        class="new-item hover-scale-transition"
        @mousemove="cardHover(item)"
        @mouseleave="cardLeave(item)"
        :style="{ transform: item.transform }"
      >
        <div class="img-box">
          <img :src="item.imgSrc" alt="" class="new-img" />

          <div class="overlay">
            <div class="overlay-content">
              <div class="button-more">了解更多</div>
            </div>
          </div>
        </div>

        <div class="text-top">
          <span
            class="name"
            :style="{ color: item.color, marginRight: '16px' }"
            >{{ item.title }}</span
          >
          <span class="date">{{ item.date }}</span>
        </div>
        <div class="text-bottom">{{ item.content }}</div>
      </div>
      <div class="new-item">
        <div class="button-more-lg border-gradient">更多动态</div>
        <img
          class="line-bottom-img"
          src="@/assets/images/line-bottom.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from "vue";
import BannerTitleAnimation from "@/components/BannerTitleAnimation";

const lineDivides = reactive([
  { marginLeft: 0 },
  { marginLeft: 1 },
  { marginLeft: 1 },
  { marginLeft: 2 },
  { marginLeft: 4 },
  { marginLeft: 8 },
  { marginLeft: 16 },
  { marginLeft: 32 },
]);

const advantageArr = reactive([
  {
    title: "前沿 科技力",
    describe: "与合作伙伴共担ESG责任共筑地球可持续未来",
    moveColor: "#FF7200",
    animationClass: "",
  },
  {
    title: "平台 强赋能",
    describe: "独创 MiNT X Platform AI赋能生物智造",
    moveColor: "#144BE1",
    animationClass: "",
  },
  {
    title: "卓越 产品力",
    subTitle: "生物降解新材料",
    describe: "低成本高性能的环保新材料",
    moveColor: "#0082FB",
    animationClass: "",
  },
  {
    title: "卓越 产品力",
    subTitle: "生物合成氨基酸",
    describe: "高效生物合成20+种氨基酸",
    moveColor: "#0082FB",
    animationClass: "",
  },
  {
    title: "绿色 可持续",
    describe: "与合作伙伴共担ESG责任共筑地球可持续未来",
    moveColor: "#00965A",
    animationClass: "",
  },
]);

const advantageShow = ref(false);
const productList = reactive([
  {
    isShow: false,
    product: "[ 无豆粕日粮解决方案 ]",
    imgSrc: require("../../assets/images/product-1.jpeg"),
    advantage: ["高效补充牲畜必需氨基酸", "有效减少养殖过程中温室气体排放"],
    friends: "[ 牧原集团 ]",
    top: -12,
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
    product: "[ 快递袋 ]",
    imgSrc: require("../../assets/images/product-3.jpeg"),
    advantage: ["强度高", "成本低", "可降解", "可回收"],
    friends: "[ 唯品会 ]",
  },
  {
    isShow: false,
    product: "[ 生物降解地膜 ]",
    imgSrc: require("../../assets/images/product-4.jpeg"),
    advantage: ["寿命长", "保温保墒", "降解期可调控", "有助增产"],
    friends: "[ 新疆农科院 ]",
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
    product: "[ 功能性纤维 ]",
    imgSrc: require("../../assets/images/product-6.jpg"),
    advantage: ["吸湿性强", "弹力大", "可降解", "可回收"],
    friends: "",
    objectFit: "fill",
  },
]);

const newList = reactive([
  {
    title: "#MiNT产品力",
    date: "2024/09/21",
    content: "低豆粕日粮助力全面绿色转型",
    color: "#144BE1",
    imgSrc: require("../../assets/News/news01.png"),
    transform: "scale(1)",
  },
  {
    title: "#MiNT进行时",
    date: "2024/09/21",
    content: "周扬区长莅临元素驱动调研指导",
    color: "#FF7200",
    imgSrc: require("../../assets/News/news02.png"),
    transform: "scale(1)",
  },
  {
    title: "#MiNT Vision",
    date: "2024/09/21",
    content: "中央首次部署！加快经济社会发展全面绿色转型",
    color: "#007D30",
    imgSrc: require("../../assets/News/news03.png"),
    transform: "scale(1)",
  },
  {
    title: "#MiNT进行时",
    date: "2024/09/21",
    content: "姚高员市长调研重点产业赛道企业，莅临元素驱动指导",
    color: "#FF7200",
    imgSrc: require("../../assets/News/news04.png"),
    transform: "scale(1)",
  },
  {
    title: "#MiNT进行时",
    date: "2024/09/21",
    content: "聚焦发展新质生产力，元素驱动年产3万吨PBX生物降解材料项目开工",
    color: "#FF7200",
    imgSrc: require("../../assets/News/news05.png"),
    transform: "scale(1)",
  },
]);

const titleInView = ref(false);
const bannerSectionInView = ref(false);

const expandMargin = () => {
  advantageShow.value = true;
  lineDivides.forEach((element) => {
    element.marginLeft *= 2.5;
  });
};

const advantageMove = (advantage) => {
  advantage.color = advantage.moveColor;
  advantage.animationClass = "animate__animated animate__fadeIn";
};

const advantageLeave = (advantage) => {
  advantage.color = "#ffffff";
  advantage.animationClass = "animate__animated animate__fadeOut";
};

const productMove = (product) => {
  product.isShow = true;
};

const productLeave = (product) => {
  product.isShow = false;
};

const cardHover = (card) => {
  card.transform = "scale(1.05)";
};

const cardLeave = (card) => {
  card.transform = "scale(1)";
};
</script>

<style lang="less" scoped>
@import "@/style/variable.less";

.home {
  font-size: 16px;
  font: 400 20px MiSans;

  .dna-section {
    // padding: 100px 0;
    height: 300px;

    .top-title {
      div,
      span {
        display: inline-block;
      }

      .mint-text {
        font: 600 56px Montser;
        color: #ffffff;
        margin-right: 32px;
      }

      .dna-text {
        font-weight: 600;
        font-size: 56px;
        color: @orange-color;
        margin-left: 32px;
      }

      .line-group {
        .line-divide {
          background: @orange-color;
          width: 2px;
          height: 30px;
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
        width: 180px;
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
          margin-bottom: 20px;
          width: 96px;
        }

        .sub-title {
          font-size: 15px;
          margin-bottom: 20px;
        }

        .describe {
          font-size: 15px;
          transition: all 1s ease;
          opacity: 0;
        }
      }
    }
  }

  .product-section {
    // padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      width: 678px;
      margin-bottom: 170px;
    }

    .product-list {
      width: 100%;

      .product {
        width: 35%;
      }

      .advantage {
        width: 50%;

        span {
          display: inline-block;
          width: 150px;
        }

        .dot-before {
          &::before {
            content: "•";
            /* 原点字符 */
            margin-right: 5px;
            /* 原点与文字之间的间距 */
          }
        }
      }

      .product-item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 32px;

        img {
          width: 35%;
        }
      }

      &-item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 32px;

        img {
          width: 35%;
        }
      }

      .friends {
        width: calc(15% - 16px);
      }

      &-top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;

        &-item {
          color: #ffffff;
          margin-right: 8px;
          height: 45px;
          line-height: 45px;
          padding: 10px 0;
          font: 520 20px MiSans;
          border-bottom: 1px solid rgba(241, 243, 247, 0.4);

          &:nth-last-child {
            margin-right: 0;
          }
        }
      }

      &-content {
        width: 100%;
        margin-top: 32px;

        .product-text {
          z-index: 2;
        }

        &-item {
          padding: 16px 0;
          margin-bottom: 8px;
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          position: relative;
          width: 100%;
          cursor: pointer;

          img {
            width: calc(35% - 200px);
            height: 255px;
            object-fit: cover;
            position: absolute;
            top: -48px;
            left: 180px;
            z-index: 0;
            transition: all 0.5s ease;
          }
        }
      }
    }
  }

  .banner-section {
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      text-align: center;
      font: 600 60px MiSans;
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
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .new-item {
      color: #ffffff;
      width: 32%;
      margin-bottom: 40px;
      position: relative;
      cursor: pointer;
      .img-box {
        position: relative;

        .new-img {
          width: 100%;
          height: 367px;
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
      }

      .button-more {
        width: 104px;
        border-radius: 50px;
        height: 52px;
        line-height: 52px;
        text-align: center;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
        border: 1px solid #ffffff;
      }

      .button-more-lg {
        text-align: center;
        line-height: 84px;
        border: 1px solid #2c2f34;
        border-radius: 999px;
        position: absolute;
        top: calc(50% - 80px);
        left: 50%;
        transform: translate(-50%, -50%);
        height: 84px;
        width: 140px;
        font-family: MiSans VF;
        font-size: 20px;
        background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.01),
            rgba(255, 255, 255, 0.01)
          ),
          radial-gradient(
            107.5% 107.5% at 50% 215%,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0) 100%
          );
      }

      .button-more-lg:hover {
        background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.01),
            rgba(255, 255, 255, 0.01)
          ),
          radial-gradient(
            84.92% 150% at 50% 138.75%,
            rgba(255, 255, 255, 0.16) 0%,
            rgba(255, 255, 255, 0) 100%
          );
      }

      .line-bottom-img {
        width: 100%;
        position: absolute;
        top: 367px;
        transform: translateY(-100%);
      }
    }
  }
}
</style>