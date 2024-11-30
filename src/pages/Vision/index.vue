<template>
  <div class="vision">
    <div class="vision-title">
      <img class="grid-image" src="./images/grid.png" alt="vision_grid" />
      <img class="mint-image" src="./images/mint.png" alt="vision_mint" />
      <p class="vision-title-text">与合作伙伴共担ESG责任</p>
    </div>
    <div class="vision-module1">
      <img src="./images/banner1.png" alt="vision_banner1" />
    </div>
    <div class="vision-module2">
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
    <div class="vision-module3">
      <div class="vision-module3-title">
        <p class="vision-module3-title-text1">生物智造</p>
        <p class="vision-module3-title-text2">势在必行</p>
      </div>
      <div class="vision-module3-content">
        <div class="vision-module3-content-left">
          <p class="vision-module3-content-left-text">据世界经合组织 (OECD) 的案例分析表明，<br/>生物技术的应用可以</p>
          <p class="vision-module3-content-left-more">了解更多</p>
          <div class="vision-module3-content-left-list">
            <img src="./images/banner3_list_info.png" alt="banner3_list_info">
          </div>
        </div>
        <div class="vision-module3-content-right">
          <img src="./images/trend.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "Vision",
  components: {},
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.vision {
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
    &-text {
      font-size: 4.375rem;
      font-weight: 500;
      background: radial-gradient(
        123.44% 123.44% at 56.63% 100%,
        #ececee 6.77%,
        rgba(255, 255, 255, 0.45) 100%
      );
      background-clip: text;
      color: transparent;
      z-index: 1;
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
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 61.75rem;
      height: 10.8125rem;
      z-index: 0; /* 确保Mint图在网格图下面 */
    }
  }
  &-module1 {
    margin-top: 5.4375rem;
    img {
      width: 89rem;
    }
  }
  &-module2 {
    display: flex;
    margin: 10.625rem 0 10.625rem 9.5rem;
    &-left-title,
    &-right-title {
      margin-bottom: 1.875rem;
      padding: 1.25rem;
      width: 3.5rem;
      color: #fff;
      border: 1px solid #fff;
      border-radius: 6.25rem;
    }
    &-left-text,
    &-right-text {
      margin-top: 1.8125rem;
      margin-left: 0.9375rem;
      li {
        position: relative;
        font-size: 1.5rem;
        font-weight: 500;
        color: #fff;
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
    &-left {
      margin-right: 1rem;
      &-img {
        width: 824px;
        height: 450px;
      }
    }
    &-right {
      &-img {
        width: 736px;
        height: 450px;
      }
    }
  }
  &-module3 {
    &-title{
      display: flex;
      gap: 1rem;
      &-text1,
      &-text2{
        font-size: 3.75rem;
        font-weight: 500;
      }
      &-text1{
        color:#FF7200;
      }
      &-text2{
        color:#F1F3F7;
      }
    }
    &-content{
      display: flex;
      margin-top: 3.75rem;
      &-left{
        width: 524px;
        margin-right: 4.75rem;
        &-list{
          img{
            width: 532px;
            height: 418px;
          }
        }
        &-text{
          font-size: 1.5rem;
          color: #fff;
        }
        &-more{
          margin-top: 3.75rem;
          margin-bottom: 2.5rem;
          width: 4rem;
          height: .75rem;
          line-height: .75rem;
          padding: 1.4375rem 1.875rem;
          font-size: 1rem;
          color: #fff;
          border: 1px solid #FFFFFF66;
          border-radius: 13.0625rem;
        }
      }
      &-right{
        img{
          width: 832px;
          height: 640px;
        }
      }
    }
  }
}
</style>