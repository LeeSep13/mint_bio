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

    <div class="knotWeed-module2">
      <Propagate />
      <div class="knotWeed-module2-advantage">
        <span>合成8种氨基酸</span>
        <span>营养供给精准高效</span>
        <span>节约饲养成本</span>
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
import Propagate from "@/components/Propagate";

export default {
  components: {
    MiNTDivider,
    Propagate
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
    height: 248px;
    line-height: 248px;
    text-align: center;
    position: relative;

    &-text {
      font-size: 20px;
      font-weight: 500;

      &-top {
        height: 36px;
        color: #ffffff73;

        span {
          font-size: 20px;
        }
      }

      &-bottom {
        color: rgba(236, 236, 238, 0.8);

        span {
          font-size: 20px;
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
    height: 224px;
    background-image: url("@/assets/KnotWeed/banner1.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 12px;
    border: 1px solid #ffffff33;

    &-title {
      margin-top: 60px;
      margin-left: 60px;
      display: flex;
      align-items: center;
      font-size: 24px;
      font-weight: 500;
      color: #fff;

      &-replace {
        width: 48px;
        text-align: center;
        color: #ff7200;
      }
    }

    &-desc {
      margin-left: 10px;
      margin-top: 20px;
      font-size: 16px;
      font-weight: 500;
      color: #fff;
    }
  }

  &-module2 {

    &-advantage {
      color: #f1f3f7;
      display: flex;
      gap: 16px;
      font-size: 12px;
      font-weight: 450;
      line-height: 16.8px;
      text-align: left;
      margin: 20px 0 40px 32px;

      span {
        display: flex;
        align-items: center;
      }

      span::before {
        content: "";
        width: 4px;
        height: 4px;
        background-color: #f6f3f0;
        display: inline-block;
        border-radius: 50%;
        margin-right: 4px;
      }

    }
  }

  &-module3 {
    padding: 60px 0 60px 46px;

    &-title {
      margin-bottom: 40px;
      font-size: 25px;
      font-weight: 500;
      color: #f1f3f7;
    }

    &-data {
      display: flex;
      flex-wrap: wrap;
      width: 87%;
      gap: 16px;

      &-item {

        &:nth-child(1),
        &:nth-child(3) {
          margin-right: 40px;
        }

        &-important {
          font-size: 40px;
          font-weight: 500;
          color: #ff7200;
        }

        &-content {
          font-size: 10px;
          color: #f1f3f7;
        }
      }
    }
  }
}
</style>