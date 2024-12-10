<template>
  <div class="vision-module5">
    <div class="vision-module5-title">
      <p class="vision-module5-title-text1">60%</p>
      <p class="vision-module5-title-text2">
        未来60%的物质<br />可以通过生物制造生产
      </p>
    </div>
    <div class="vision-module5-content">
      <div class="vision-module5-content-img1">
        <p class="vision-module5-content-img1-title">
          生物智造 [ 产品解决方案 ]
        </p>
        <p class="vision-module5-content-img1-desc">
          匹配元素驱动现有产品，并针对性您的应用领域针对性优化。
        </p>
      </div>
      <div class="vision-module5-content-img2">
        <div class="vision-module5-content-img2-item1">
          <p class="vision-module5-content-img2-item1-text">生物降解新材料</p>
          <p class="learn-more-btn">了解更多</p>
        </div>
        <div class="vision-module5-content-img2-item2">
          <p class="vision-module5-content-img2-item2-text">生物合成氨基酸</p>
          <p class="learn-more-btn">了解更多</p>
        </div>
      </div>
      <div class="vision-module5-content-img3">
        <p class="vision-module5-content-img3-title">
          生物智造 [ 定制解决方案 ]
        </p>
        <p class="vision-module5-content-img3-desc">
          元素驱动将针对您的需求，进行菌种定制、优化、产品延展等<br />生物智造全流程服务。
        </p>
        <p class="vision-module5-content-img3-btn">匹配顾问</p>
      </div>
      <div class="vision-module5-content-img4">
        <img src="./images/process.png" alt="" />
      </div>
    </div>
  </div>
</template>


<style lang="less" scoped>
.vision-module5 {
  &-title {
    margin-top: 10.625rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    &-text1 {
      font-size: 12.5rem;
      font-weight: 500;
      color: #ff7200;
      line-height: 0.8;
      margin: 0;
    }
    &-text2 {
      font-size: 3rem;
      font-weight: 500;
      color: #f1f3f7;
      line-height: 1;
      margin: 0;
    }
  }
  &-content {
    margin-top: 10rem;
    margin-bottom: 10.625rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    column-gap: 1rem;
    row-gap: 6.25rem;
    &-img1,
    &-img3 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 3.75rem;
      width: 944px;
      height: 460px;
      border-radius: 1.25rem;
      &-title {
        font-size: 1.875rem;
        font-weight: 500;
        color: #f1f3f7;
        margin-bottom: 2.5rem;
      }
      &-desc {
        font-size: 1.25rem;
        color: #f1f3f7;
      }
    }
    &-img1 {
      background: url("./images/module5_img1.jpeg");
      background-size: cover;
      background-repeat: no-repeat;
    }
    &-img2 {
      &-item1,
      &-item2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3.1875rem;
        border-radius: 1.25rem;
        &-text {
          font-size: 1.5rem;
          font-weight: 500;
          color: #fff;
        }
      }
      &-item1 {
        margin-bottom: 1rem;
        width: 464px;
        height: 222px;
        background: url("./images/module5_img2.png");
        background-size: cover;
        background-repeat: no-repeat;
      }
      &-item2 {
        width: 464px;
        height: 222px;
        background: url("./images/module5_img3.jpeg");
        background-size: cover;
        background-repeat: no-repeat;
      }
      .learn-more-btn {
        width: 6rem;
        height: 2.375rem;
        line-height: 2.375rem;
        text-align: center;
        font-size: 0.875rem;
        font-weight: 500;
        color: #f1f3f7;
        background-color: rgba(255, 114, 0, 0.8);
        border-radius: 13.0625rem;
      }
    }
    &-img3 {
      background: url("./images/module5_img4.png");
      background-size: cover;
      background-repeat: no-repeat;
      &-btn {
        margin-top: 5.4375rem;
        width: 7.75rem;
        height: 3.625rem;
        line-height: 3.625rem;
        text-align: center;
        font-size: 1rem;
        font-weight: 500;
        color: #f1f3f7;
        background-color: rgba(40, 40, 40, 0.62);
        border-radius: 13.0625rem;
      }
    }
    &-img4 {
      img {
        width: 464px;
        height: 460px;
      }
    }
  }
}
</style>