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

    <div class="aminoAcid-module1">
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


      <div class="aminoAcid-module2-swiper">
        <swiper
          :direction="'vertical'"
          :slidesPerView="1"
          :spaceBetween="30"
          :mousewheel="true"
          :pagination="{
            clickable: true,
          }"
          :modules="modules"
        >
          <swiper-slide>
            <aa-module-content></aa-module-content>
          </swiper-slide>
          <swiper-slide>
            <aa-module-content></aa-module-content>
          </swiper-slide>
          <swiper-slide>
            <aa-module-content></aa-module-content>
          </swiper-slide>
        </swiper>
      </div>

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
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel, Pagination } from 'swiper/modules';
import AaModuleContent from './AaModuleContent'
import 'swiper/css';

export default {
  name: "AminoAcid",
  components: {
    Swiper,
    SwiperSlide,
    AaModuleContent
  },
  setup() {
    return {
      modules: [Mousewheel, Pagination],
    };
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.aminoAcid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #11161b;
  &-title {
    width: 61.75rem;
    height: 29.25rem;
    line-height: 29.25rem;
    text-align: center;
    position: relative;
    &-content {
      display: flex;
      justify-content: center;
      gap: 3.375rem;
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
        font-size: 5.625rem;
        font-weight: 500;
        color: #ececee;
      }
      &-text2 {
        font-size: 1.5rem;
        font-weight: 600;
        p {
          height: 1.4375rem;
        }
      }
    }
    .grid-image {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 41.5625rem;
      height: 29.375rem;
      z-index: 0; /* 确保网格图在下面 */
    }

    .mint-image {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 61.75rem;
      height: 10.8125rem;
      z-index: 0; /* 确保Mint图在网格图下面 */
    }
  }
  &-module1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 89rem;
    height: 43.75rem;
    background-image: url("./images/banner1.png");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 1.25rem;
    border: 1px solid #ffffff33;
    background-origin: border-box;
    background-clip: content-box, border-box;
    &-content {
      display: flex;
      justify-content: space-between;
      width: 80.875rem;
      &-left {
        margin-top: 3.75rem;
        &-text1 {
          font-size: 3.75rem;
          font-weight: 500;
          color: #ff7200;
        }
        &-text2 {
          margin-left: 7.5rem;
          font-size: 3.75rem;
          font-weight: 500;
          color: #fff;
        }
      }
      &-right {
        background-color: #2828289f;
        backdrop-filter: blur(68px);
        border-radius: 1.25rem;
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
          padding: 2.5rem;
          li {
            position: relative;
            font-size: 1.5rem;
            font-weight: 500;
            color: #f1f3f7;
            padding-left: 2rem;

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
  }
  &-module2 {
    margin: 13.875rem 0;
    width: 89rem;
    height: 45.3125rem;
    background-image: url("./images/module2_bg.png");
    background-size: cover;
    background-repeat: no-repeat;
    &-swiper{
      height: 750px;
    }
    &-title {
      margin-left: 4.625rem;
      width: 17.75rem;
      height: 2.5rem;
      line-height: 2.5rem;
      font-size: 0.875rem;
      font-weight: 500;
      color: #f1f3f780;
    }
    &-content {
      margin: 2.8125rem 4.625rem 3.75rem 4.625rem;
      &-top {
        margin-bottom: 2.75rem;
        display: flex;
        justify-content: space-between;
        font-size: 0.875rem;
        font-weight: 500;
        color: #f1f3f780;
      }
      &-bottom {
        display: flex;
        gap: 5.125rem;
        &-introduction {
          margin-top: 4.375rem;
          &-title {
            &-text1,
            &-text2 {
              font-size: 2.5rem;
              font-weight: 500;
            }
            &-text1 {
              color: #ff7200;
            }
            &-text2 {
              color: #f1f3f7;
            }
          }
          &-apply {
            margin-top: 2.0625rem;
            margin-bottom: 7.5625rem;
            display: flex;
            gap: 1.875rem;
            &-text {
              padding: 1.25rem;
              font-size: 0.875rem;
              font-weight: 500;
              color: #f1f3f7;
              border-radius: 3.125rem;
              border: 1px solid #ffffff;
            }
          }
          &-advantage {
            li {
              position: relative;
              font-size: 1.25rem;
              font-weight: 500;
              color: #f1f3f7;
              padding-left: 1.5rem;

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
        &-img {
          img {
            width: 764px;
            height: 526px;
          }
        }
      }
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
            #6A3E1D 0%,
            #3E0603 30%,
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
            #C47C66 0%,
            #FFFFFE 10%,
            #735546 40%,
            #463C26 60%,
            #605B34 80%,
            #EFA085 90%,
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