<template>
  <div class="aminoAcid-module2">
    <div class="aminoAcid-module2-radian" :style="{ marginLeft: tabStyle.marginLeft, zIndex: tabStyle.zIndex }">
      <div class="aminoAcid-module2-radian-inner"></div>
      <div class="aminoAcid-module2-radian-title">
        <p>{{ title }}</p>
      </div>
    </div>
    <div class="aminoAcid-module2-content">
      <div class="aminoAcid-module2-content-w">
        <div class="aminoAcid-module2-content-top">
          <p v-for="(item, index) in topItems" :key="index">{{ item }}</p>
        </div>
        <div class="aminoAcid-module2-content-bottom">
          <div class="aminoAcid-module2-content-bottom-introduction">
            <div class="aminoAcid-module2-content-bottom-introduction-title">
              <p class="aminoAcid-module2-content-bottom-introduction-title-text1">
                {{ introductionTitle1 }}
              </p>
              <p class="aminoAcid-module2-content-bottom-introduction-title-text2">
                {{ introductionTitle2 }}
              </p>
            </div>
            <div class="aminoAcid-module2-content-bottom-introduction-apply">
              <p v-for="(applyText, index) in applyTexts" :key="index"
                class="aminoAcid-module2-content-bottom-introduction-apply-text">
                {{ applyText }}
              </p>
            </div>
            <div class="aminoAcid-module2-content-bottom-introduction-advantage">
              <ul class="aminoAcid-module2-content-bottom-introduction-advantage-text">
                <li v-for="(advantage, index) in advantages" :key="index">
                  {{ advantage }}
                </li>
              </ul>
            </div>
          </div>
          <div class="aminoAcid-module2-content-bottom-img">
            <img :src="imageUrl" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AaModuleContent",
  props: {
    title: String,
    topItems: Array,
    introductionTitle1: String,
    introductionTitle2: String,
    applyTexts: Array,
    advantages: Array,
    imageUrl: String,
    tabStyle: {
      type: Object,
      default: () => ({
        marginLeft: "0%", // 默认值
        zIndex: 1, // 默认值
      }),
    },
  },
};
</script>


<style lang="less" scoped>
.aminoAcid {
  &-module2 {
    width: 100%;
    &-radian {
      position: relative;
      top: 1px;
      width: 20%;
      height: 40px;
      overflow: hidden;
      border-radius: 20px 20px 0 0;

      &-inner {
        position: absolute;
        width: 224px;
        height: 40px;
        background: #17191c;
        bottom: 0;
        left: 24px;
        border-radius: 20px 20px 0 0;
        z-index: 2;
        transform: perspective(40px) scaleX(1.2) scaleY(1.5) rotateX(24deg);
        border: 1px solid #ffffff66;
        border-bottom: none;
        transform-origin: center bottom;

        &::before {
          content: "";
          position: absolute;
          width: 8px;
          height: 10px;
          bottom: -8px;
          left: -8px;
          background: radial-gradient(circle at 0% 0,
              transparent,
              transparent 9.5px,
              #626568 10px,
              #17191c);
        }

        &::after {
          content: "";
          position: absolute;
          width: 8px;
          height: 10px;
          top: 40px;
          right: -8px;
          background: radial-gradient(circle at 10px 0,
              transparent,
              transparent 9.5px,
              #626568 10px,
              #17191c);
        }
      }

      &-title {
        margin-left: 25px;
        position: absolute;
        width: 224px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        top: 0;
        left: 0;
        z-index: 3;
        color: #F1F3F780;
        font-size: 14px;
        font-weight: 500;
        border-radius: 30px 30px 0 0;
      }
    }

    &-content {
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

      &-w {
        margin: 45px 74px 60px 74px;
      }

      &-top {
        margin-bottom: 44px;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        font-weight: 500;
        color: #f1f3f780;
      }

      &-bottom {
        display: flex;
        gap: 70px;
        &-introduction {
          margin-top: 70px;
          width: 440px;
          &-title {

            &-text1,
            &-text2 {
              font-size: 40px;
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
            margin-top: 33px;
            margin-bottom: 121px;
            display: flex;
            gap: 30px;
            &-text {
              padding: 20px;
              font-size: 14px;
              font-weight: 500;
              color: #f1f3f7;
              border-radius: 50px;
              border: 1px solid #ffffff;
            }
          }

          &-advantage {
            li {
              position: relative;
              font-size: 20px;
              font-weight: 500;
              color: #f1f3f7;
              padding-left: 24px;

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

        &-img {
          img {
            width: 764px;
            height: 526px;
          }
        }
      }
    }
  }
}
</style>