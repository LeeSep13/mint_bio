<template>
  <div class="knotWeed">
    <div class="knotWeed-title">
      <img
        class="grid-image"
        src="@/assets/images/grid.png"
        alt="knotWeed_grid"
      />
      <img
        class="mint-image"
        src="@/assets/images/mint.png"
        alt="knotWeed_mint"
      />
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
    <MiNTDivider :content="'+'"></MiNTDivider>

    <div class="knotWeed-module3">
      <div class="knotWeed-module3-title">
        <p>节豆日粮助力</p>
        <p>解决粮食安全“卡脖子问题”</p>
      </div>
      <div class="knotWeed-module3-data">
        <div
          class="knotWeed-module3-data-item"
          v-for="item in knotData"
          :key="item.key"
        >
          <p class="knotWeed-module3-data-item-important">
            {{ item.important }}
          </p>
          <p class="knotWeed-module3-data-item-content">{{ item.content }}</p>
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
/* 样式部分保持不变 */
.knotWeed {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #11161b;
  &-title {
    height: 29.25rem;
    line-height: 29.25rem;
    text-align: center;
    position: relative;
    &-text {
      font-family: MiSans VF;
      font-size: 4.375rem;
      font-weight: 500;
      &-top {
        height: 8.125rem;
        color: #ffffff73;
        span {
          font-size: 8rem;
        }
      }
      &-bottom {
        color: rgba(236, 236, 238, 0.8);
        span {
          font-size: 8rem;
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
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 61.75rem;
      height: 10.8125rem;
      z-index: 0; /* 确保Mint图在网格图下面 */
    }
  }
  &-module1 {
    margin-top: 5.4375rem;
    width: 89rem;
    height: 52.6875rem;
    background-image: url("https://s3-alpha-sig.figma.com/img/f1ee/a79e/759d87331235271b5da8916134e51224?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YtG9cYOQWsxucn1Puv2R19PYEy5XMWsxQqPYVPOCl4oJBpbBeuWcWpJYhVnciUXjkx8fE79RpnLaAOVcf94SaOo~7-GB0zOSJebIRtBsES1oPsBZOiUTMSXvmW9m8Ca8Muzet2FT25Szqqz6rzh909bOIoAxvOoG4lhrj821nxv1zeIyMJsfua~0WtudYGKpI4NoNYoaNrtkuZObD-xLyUGA1XCtel8gShRyHf7VQ327cHKkMPOMYmxnmM~yAdrbs2e9UW2ml88Ok8honI7XRyGAO5elzDa67fcXJUbedjRh6td5jy67uhfCEX8lxGUMIVxZnkpYbQ-rtkD3MM0PYg__");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 1.25rem;
    border: 1px solid #ffffff33;
    &-title {
      margin-top: 9rem;
      margin-left: 3.75rem;
      display: flex;
      align-items: center;
      font-size: 5.625rem;
      font-weight: 500;
      color: #fff;
      &-replace {
        width: 130px;
        text-align: center;
        color: #ff7200;
      }
    }
    &-desc {
      margin-left: 3.75rem;
      margin-top: 1.25rem;
      font-size: 4.125rem;
      font-weight: 500;
      color: #fff;
    }
  }
  &-module2 {
    margin-top: 10.625rem;
    margin-bottom: 9.375rem;
    padding: 8.4375rem 10.25rem 8.375rem 5.9375rem;
    display: flex;
    width: 89rem;
    height: 52.6875rem;
    background-image: url("https://s3-alpha-sig.figma.com/img/67a3/33be/13fc3f7d5ea406718a58c2f167b5fc36?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gV-r9UdjryuoX~CFUUAB7Jl1~E1IUAvYlYQtMkwcocut8MuYNKOmiJb7OWa2HlKT6P~57D-YJZ08h3lDofwppqaHk-klYXDcfTr-owBEhvffF9H0IfxbITMO6SvMj70Ltak~khAQChiuoXHJoo3ClGZzsQTikhYJw0ytSH0M1G2Ne2jEWXuQx8amzdzRkvZ8nPFtrVVxm9zGN17LgKO~eZgKgX8L8LvUcZUSA8vZFFe5TujIsiXU3DFP9xRgfw3koONCr4rw6hFurcynFAL6HViRjE2H-29OSB4yYsNmrNQb6jZgnDlvQedJPY5KmaKbIacfAv8VfvNtcVVAEQLtXQ__");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 1.25rem;
    box-sizing: border-box;
    &-propagate {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &-title {
        font-size: 6rem;
        font-weight: 500;
        color: #fff;
      }
      &-target {
        font-size: 4.625rem;
        font-weight: 500;
        color: transparent;
        background-clip: text;
        background-image: linear-gradient(
          90deg,
          #000000 0%,
          #000 30%,
          #3e0603 40%,
          #000 50%,
          #3e0603 60%,
          #000 100%
        );

        p:last-child {
          margin-left: 9.25rem;
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
  &-divider {
    width: 99%;
    height: 1rem;
    text-align: center;
    color: #ff7200;
    font-size: 1rem; // 字体大小可以根据需要调整
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      height: 1px; // 分割线的高度
      background-color: #f1f3f71a;
      z-index: 1;
    }
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      height: 1px; // 分割线的高度
      background-color: #f1f3f71a;
      z-index: 1;
    }
  }
  &-module3 {
    margin-top: 8.25rem;
    margin-bottom: 18.75rem;
    &-title {
      margin-bottom: 12.5rem;
      font-size: 3.75rem;
      font-weight: 500;
      color: #f1f3f7;
      p:last-child {
        margin-left: 15rem;
      }
    }
    &-data {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      row-gap: 9.3125rem;
      width: 71.75rem;
      &-item {
        width: 24.25rem;
        &:nth-child(1),
        &:nth-child(3) {
          margin-right: 7.5rem;
        }
        &-important {
          font-size: 7.5rem;
          font-weight: 500;
          color: #ff7200;
        }
        &-content {
          font-size: 2rem;
          color: #f1f3f7;
        }
      }
    }
  }
}
</style>