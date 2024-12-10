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
        marginLeft: "0px", // 默认值
        zIndex: 1, // 默认值
      }),
    },
  },
};
</script>

<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  /* text-align: center;
  font-size: 18px;
  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center; */
}
</style>

<style lang="less" scoped>
.aminoAcid {
  &-module2 {
    width: 89rem;
    // height: 45.3125rem;
    height: 42.8125rem;

    // background-image: url("./images/module2_bg.png");
    // background-size: cover;
    // background-repeat: no-repeat;
    &-swiper {
      margin: 13.875rem 0;
      height: 45.3125rem;
    }

    &-radian {
      margin-left: 0.875rem;
      position: relative;
      top: 1px;
      width: 17.75rem;
      height: 2.5rem;
      overflow: hidden;
      border-radius: 20px 20px 0 0;

      &-inner {
        // margin-left: 0.5rem;
        position: absolute;
        width: 14rem;
        height: 2.5rem;
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
        width: 14rem;
        height: 2.5rem;
        line-height: 2.5rem;
        text-align: center;
        top: 0;
        left: 0;
        z-index: 3;
        color: #F1F3F780;
        font-size: .875rem;
        font-weight: 500;
        border-radius: 30px 30px 0 0;
      }
    }

    &-content {
      border-radius: 1.25rem 1.25rem 1.25rem 1.25rem;
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
        margin: 2.8125rem 4.625rem 3.75rem 4.625rem;
      }

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
        gap: 4.375rem;

        &-introduction {
          margin-top: 4.375rem;
          width: 27.5rem;

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
                margin-bottom: 1rem;
                /* 每项之间的间隔 */
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