<template>
  <div class="knotWeed">
    <div class="knotWeed-title">
      <img class="grid-image" src="@/assets/images/grid1.png" alt="knotWeed_grid" />
      <img class="mint-image" src="@/assets/images/mint.png" alt="knotWeed_mint" />
      <div class="knotWeed-title-text">
        <p class="knotWeed-title-text-top">
          每年大豆进口量近
          <span>1亿</span>
          吨
        </p>
        <p class="knotWeed-title-text-bottom">
          <span>52%</span>
          进口大豆用于提供饲用蛋白
        </p>
      </div>
    </div>

    <div class="knotWeed-module1-w mobile-sector">
      <div class="knotWeed-module1">
        <div class="knotWeed-module1-title">
          <p>节豆日粮</p>
          <p class="knotWeed-module1-title-replace">替代</p>
          <p>大豆</p>
        </div>
        <div class="knotWeed-module1-desc">
          <p>提供动物生长的必要氨基酸</p>
        </div>
      </div>
    </div>
    <div class="knotWeed-module2-w mobile-sector">
      <div class="knotWeed-module2">
        <div class="knotWeed-module2-propagate">
          <div class="knotWeed-module2-propagate-title">节豆日粮</div>
          <div class="knotWeed-module2-propagate-target">
            <p>生物智造</p>
            <p>惠及每一个生命</p>
          </div>
        </div>
        <div class="knotWeed-module2-advantage">
          <div class="knotWeed-module2-advantage-content">
            <ul class="knotWeed-module2-advantage-content-text">
              <li>合成8种氨基酸</li>
              <li>营养供给精准高效</li>
              <li>节约饲养成本</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <MiNTDivider :content="'+'"></MiNTDivider>

    <div class="knotWeed-module3-w mobile-sector">
      <div class="knotWeed-module3">
        <div class="knotWeed-module3-title">
          <p>节豆日粮助力</p>
          <p>解决粮食安全“卡脖子问题”</p>
        </div>
        <div class="knotWeed-module3-data">
          <div class="knotWeed-module3-data-item" v-for="item in knotData" :key="item.key">
            <p class="knotWeed-module3-data-item-important">
              {{ item.important }}
            </p>
            <p class="knotWeed-module3-data-item-content">{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import MiNTDivider from "@/components/Divider";

export default {
  components: {
    MiNTDivider,
  },
  setup() {
    const knotData = ref([
      {
        key: 0,
        important: "8类",
        content: "合成8类养猪氨基酸",
      },
      {
        key: 1,
        important: "100%",
        content: "有望实现100%豆粕代替",
      },
      {
        key: 2,
        important: "3亿",
        content: "节省3亿亩大豆种植面积",
      },
      {
        key: 3,
        important: "4000万",
        content: "减少进口4000万吨大豆",
      },
    ]);

    return {
      knotData,
    };
  },
};
</script>

<style lang="less" scoped>
@import "@/style/variable.less";

/* 样式部分保持不变 */
.knotWeed {
  &-title {
    height: 468px;
    line-height: 468px;
    text-align: center;
    position: relative;

    &-text {
      font-size: 70px;
      font-weight: 500;

      &-top {
        height: 130px;
        color: #ffffff73;

        span {
          font-size: 128px;
        }
      }

      &-bottom {
        color: rgba(236, 236, 238, 0.8);

        span {
          font-size: 128px;
        }
      }
    }

    .grid-image {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 34.5%;
      z-index: 0;
      /* 确保网格图在下面 */
    }

    .mint-image {
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 52%;
      z-index: 0;
      /* 确保Mint图在网格图下面 */
    }
  }

  &-module1 {
    height: 100%;
    background-image: url("@/assets/KnotWeed/banner1.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 1.25rem;
    border: 1px solid #ffffff33;

    &-w {
      padding-bottom: 70px;
      height: 843px;
    }

    &-title {
      margin-top: 144px;
      margin-left: 60px;
      display: flex;
      align-items: center;
      font-size: 90px;
      font-weight: 500;
      color: #fff;

      &-replace {
        width: 130px;
        text-align: center;
        color: #ff7200;
      }
    }

    &-desc {
      margin-left: 60px;
      margin-top: 20px;
      font-size: 66px;
      font-weight: 500;
      color: #fff;
    }
  }

  &-module2 {
    padding: 135px 164px 134px 95px;
    height: 100%;
    display: flex;
    background-image: url("@/assets/AminoAcid/module3_bg.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 20px;
    box-sizing: border-box;

    &-w {
      padding-bottom: 150px;
      height: 843px;
    }

    &-propagate {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &-title {
        font-size: 96px;
        font-weight: 500;
        color: #fff;
      }

      &-target {
        font-size: 74px;
        font-weight: 500;
        color: transparent;
        background-clip: text;
        background-image: linear-gradient(90deg,
            #000000 0%,
            #000 30%,
            #3e0603 40%,
            #000 50%,
            #3e0603 60%,
            #000 100%);

        p:last-child {
          margin-left: 148px;
        }
      }
    }

    &-advantage {
      margin-left: 10.625rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

      &-content {
        width: 20.375rem;
        height: 12.125rem;
        background-color: #2828289f;
        backdrop-filter: blur(68px);
        border-radius: 1.25rem;
        border: 1px solid transparent;
        background-image: linear-gradient(#181a1d, #2828289f),
          linear-gradient(156.52deg,
            rgba(255, 255, 255, 0.4) 2.12%,
            rgba(255, 255, 255, 0.0001) 60%,
            rgba(255, 255, 255, 0.0001) 54%,
            rgba(255, 255, 255, 0.1) 93.02%);
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
              margin-bottom: 1rem;
              /* 每项之间的间隔 */
            }
          }
        }
      }
    }
  }

  &-module3 {
    &-w {
      padding-top: 132px;
      padding-bottom: 300px;
    }

    &-title {
      margin-bottom: 200px;
      font-size: 60px;
      font-weight: 500;
      color: #f1f3f7;

      p:last-child {
        margin-left: 240px;
      }
    }

    &-data {
      padding-left: 125px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      row-gap: 149px;
      column-gap: 369px;
      width: 87%;

      &-item {
        width: 388px;

        &:nth-child(1),
        &:nth-child(3) {
          margin-right: 120px;
        }

        &-important {
          font-size: 120px;
          font-weight: 500;
          color: #ff7200;
        }

        &-content {
          font-size: 32px;
          color: #f1f3f7;
        }
      }
    }
  }
}
</style>