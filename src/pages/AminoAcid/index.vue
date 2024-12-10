<template>
  <div class="aminoAcid">
    <div class="aminoAcid-title">
      <img
        class="grid-image"
        src="@/assets/images/grid.png"
        alt="aminoAcid_grid"
      />
      <img
        class="mint-image"
        src="@/assets/images/mint.png"
        alt="aminoAcid_mint"
      />
      <div class="aminoAcid-title-content">
        <p class="aminoAcid-title-content-text1">氨基酸</p>
        <div class="aminoAcid-title-content-text2">
          <p>Brilliant</p>
          <p>BioAmino</p>
        </div>
        <p class="aminoAcid-title-content-text3">生物造</p>
      </div>
    </div>
    <div class="aminoAcid-module1 sector">
      <div class="aminoAcid-module1-content">
        <div class="aminoAcid-module1-content-left">
          <p class="aminoAcid-module1-content-left-text1">生物合成</p>
          <p class="aminoAcid-module1-content-left-text2">氨基酸</p>
        </div>
        <div class="aminoAcid-module1-content-right">
          <ul class="aminoAcid-module1-content-right-text">
            <li>高效AI蛋白设计</li>
            <li>专利前体X</li>
            <li>优化代谢网络</li>
            <li>独家分离纯化工艺</li>
            <li>国际领先的产酸率 & 提取率</li>
            <li>持续降本</li>
          </ul>
        </div>
      </div>
    </div>
    
    <MouseScroll />

    <div class="aminoAcid-module3">
      <div class="aminoAcid-module3-title">
        <span class="aminoAcid-module3-title-text1">应用</span>
        <span class="aminoAcid-module3-title-text2">案例</span>
      </div>
      <div class="aminoAcid-module3-content">
        <div class="aminoAcid-module3-content-name">
          <p>牧原集团</p>
          <p>& 元素驱动</p>
        </div>
        <div class="aminoAcid-module3-content-solution">
          <p class="aminoAcid-module3-content-solution-title">
            [ 节豆日粮解决方案 ]
          </p>
          <ul class="aminoAcid-module3-content-solution-list">
            <li>合成8种氨基酸</li>
            <li>营养供给精准高效</li>
            <li>节约饲养成本</li>
          </ul>
        </div>
      </div>
      <div class="aminoAcid-module3-propagate">
        <div class="aminoAcid-module3-propagate-title">节豆日粮</div>
        <div class="aminoAcid-module3-propagate-target">
          <div class="aminoAcid-module3-propagate-target-top">
            <p>生物智造</p>
            <p>惠及每一个生命</p>
          </div>
          <div class="aminoAcid-module3-propagate-target-bottom">
            <p>
              Create Green Products <br />
              Benefiting Every Life
            </p>
          </div>
        </div>
        <div class="aminoAcid-module3-propagate-more">
          <p>了解更多</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import AaModuleContent from "./AaModuleContent";
import MouseScroll from './MouseScroll';

export default {
  components: {
    AaModuleContent,
    MouseScroll,
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
        imageUrl: require("./images/module2_element.png"),
      },
      {
        title: "生物合成 组氨酸",
        topItems: ["Brilliant", "MiNT BiO", "BioAmino"],
        introductionTitle1: "生物合成",
        introductionTitle2: "组氨酸",
        applyTexts: ["食品", "饲料", "生化试剂制造制药"],
        advantages: ["相较同类产品，具有成本优势", "相较行业头部，发酵效率快35%", "相较化学合成法，产品纯度高"],
        imageUrl: require("./images/module2_element.png"),
      },
      {
        title: "生物合成 色氨酸",
        topItems: ["Brilliant", "MiNT BiO", "BioAmino"],
        introductionTitle1: "生物合成",
        introductionTitle2: "色氨酸",
        applyTexts: ["医药", "食品强化剂", "饲料添加剂"],
        advantages: ["人体与动物必需氨基酸，应用场景广泛", "相较传统生产方法，效率更高、成本更低"],
        imageUrl: require("./images/module2_element.png"),
      },
      {
        title: "生物合成 亮氨酸",
        topItems: ["Brilliant", "MiNT BiO", "BioAmino"],
        introductionTitle1: "生物合成",
        introductionTitle2: "亮氨酸",
        applyTexts: ["运动营养剂", "食品添加剂", "特殊医药用途食品"],
        advantages: ["动物必需氨基酸之一", "相较传统水解法，生产过程更环保、更高效", "相较化学合成法，具有成本优势"],
        imageUrl: require("./images/module2_element.png"),
      },
      {
        title: "生物合成 缬氨酸",
        topItems: ["Brilliant", "MiNT BiO", "BioAmino"],
        introductionTitle1: "生物合成",
        introductionTitle2: "缬氨酸",
        applyTexts: ["医药", "食品强化剂", "饲料添加剂"],
        advantages: ["动物必需氨基酸之一", "提供饲料转化率，降低养殖成本", "相较化学合成法，具有成本优势"],
        imageUrl: require("./images/module2_element.png"),
      },
    ]);

    return {
      module2Data,
    };
  },
};
</script>

<style lang="less" scoped>
@import "@/style/variable.less";

.aminoAcid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &-title {
    width: 988px;
    height: 468px;
    line-height: 468px;
    text-align: center;
    position: relative;
    &-content {
      display: flex;
      justify-content: center;
      gap: 54px;
      background: radial-gradient(
        123.44% 123.44% at 56.63% 100%,
        #ececee 6.77%,
        rgba(255, 255, 255, 0.45) 100%
      );
      background-clip: text;
      color: transparent;
      z-index: 1;
      &-text1,
      &-text3 {
        font-size: 90px;
        font-weight: 500;
        color: #ececee;
      }
      &-text2 {
        font-size: 24px;
        font-weight: 600;
        p {
          height: 23px;
        }
      }
    }
    .grid-image {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 665px;
      height: 470px;
      z-index: 0; /* 确保网格图在下面 */
    }

    .mint-image {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 988px;
      height: 173px;
      z-index: 0; /* 确保Mint图在网格图下面 */
    }
  }
  &-module1 {
    display: flex;
    justify-content: center;
    align-items: center;
    // width: 100%;
    height: 700px;
    // background-image: url("./images/banner1.png");
    // background-size: cover;
    // background-repeat: no-repeat;
    // border-radius: 20px;
    border: 1px solid #ffffff33;
    &-content {
      display: flex;
      justify-content: space-between;
      width: 100%;
      // padding: 0 20px;
      &-left {
        margin-top: 60px;
        &-text1 {
          font-size: 60px;
          font-weight: 500;
          color: #ff7200;
        }
        &-text2 {
          margin-left: 120px;
          font-size: 60px;
          font-weight: 500;
          color: #fff;
        }
      }
      &-right {
        background-color: #2828289f;
        backdrop-filter: blur(68px);
        border-radius: 20px;
        border: 1px solid transparent;
        background-image: linear-gradient(#181a1d, #2828289f),
          linear-gradient(
            156.52deg,
            rgba(255, 255, 255, 0.4) 2.12%,
            rgba(255, 255, 255, 0.0001) 60%,
            rgba(255, 255, 255, 0.0001) 54%,
            rgba(255, 255, 255, 0.1) 93.02%
          );
        background-origin: border-box;
        background-clip: content-box, border-box;
        &-text {
          padding: 40px;
          li {
            position: relative;
            font-size: 24px;
            font-weight: 500;
            color: #f1f3f7;
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
      }
    }
  }
  &-module2 {
    &-swiper {
      margin: 13.875rem 0;
      height: 45.3125rem;
    }
  }
  &-module3 {
    display: flex;
    flex-direction: column;
    &-title {
      &-text1,
      &-text2 {
        font-size: 3.75rem;
        font-weight: 500x;
      }
      &-text1 {
        color: #ff7200;
      }
      &-text2 {
        color: #f1f3f7;
      }
    }
    &-content {
      margin-top: 6.25rem;
      margin-bottom: 3.75rem;
      display: flex;
      gap: 13.5625rem;
      &-name {
        font-size: 2.5rem;
        font-weight: 500;
        color: #f1f3f7;
      }
      &-solution {
        &-title {
          margin-bottom: 2.625rem;
          font-size: 2.5rem;
          font-weight: 500;
          color: #ff7200;
        }
        &-list {
          margin-left: 0.9375rem;
          li {
            position: relative;
            font-size: 1.25rem;
            color: #f1f3f7;
            padding-left: 1.25rem;

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
              margin-bottom: 1rem; /* 每项之间的间隔 */
            }
          }
        }
      }
    }
    &-propagate {
      padding: 6.5625rem 10.125rem 6.625rem 7.0625rem;
      margin-bottom: 10.0625rem;
      display: flex;
      width: 89rem;
      height: 52.6875rem;
      background-image: url("https://s3-alpha-sig.figma.com/img/67a3/33be/13fc3f7d5ea406718a58c2f167b5fc36?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gV-r9UdjryuoX~CFUUAB7Jl1~E1IUAvYlYQtMkwcocut8MuYNKOmiJb7OWa2HlKT6P~57D-YJZ08h3lDofwppqaHk-klYXDcfTr-owBEhvffF9H0IfxbITMO6SvMj70Ltak~khAQChiuoXHJoo3ClGZzsQTikhYJw0ytSH0M1G2Ne2jEWXuQx8amzdzRkvZ8nPFtrVVxm9zGN17LgKO~eZgKgX8L8LvUcZUSA8vZFFe5TujIsiXU3DFP9xRgfw3koONCr4rw6hFurcynFAL6HViRjE2H-29OSB4yYsNmrNQb6jZgnDlvQedJPY5KmaKbIacfAv8VfvNtcVVAEQLtXQ__");
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 1.25rem;
      box-sizing: border-box;
      &-title {
        width: 5.625rem;
        font-size: 6rem;
        font-weight: 500;
        color: #fff;
      }
      &-target {
        margin-left: 10rem;
        &-top {
          margin-bottom: 320px;
          font-size: 4.625rem;
          font-weight: 500;
          color: transparent;
          background-clip: text;
          background-image: linear-gradient(
            90deg,
            #6a3e1d 0%,
            #3e0603 30%,
            #000 50%,
            #000 100%
          );

          p:last-child {
            margin-left: 9.25rem;
          }
        }
        &-bottom {
          font-family: Montserrat;
          font-size: 3.4375rem;
          font-weight: 600;
          color: transparent;
          background-clip: text;
          background-image: linear-gradient(
            200deg,
            #c47c66 0%,
            #fffffe 10%,
            #735546 40%,
            #463c26 60%,
            #605b34 80%,
            #efa085 90%,
            #373020 100%
          );
        }
      }
      &-more {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        p {
          width: 13.125rem;
          height: 6.375rem;
          line-height: 6.375rem;
          color: #f1f3f7;
          font-size: 1.5625rem;
          font-weight: 500;
          text-align: center;
          border-radius: 13.0625rem;
          border: 2.09px solid transparent;
          background-image: linear-gradient(#181a1d, #2828289f),
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
    }
  }
}
</style>