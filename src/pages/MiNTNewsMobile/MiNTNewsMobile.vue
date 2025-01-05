<template>
  <div class="news">
    <BannerTitle>
      <div class="text-section">
        <div class="title">
          <div label1>发展&nbsp;&nbsp;<span class="sub"> & </span>&nbsp;&nbsp;动态</div>
        </div>
        <div class="desc">
          实时发布元素驱动最新信息和重要事件，为您提供元素驱动的第一手资讯。
        </div>
      </div>
    </BannerTitle>
    <div class="button">
      <div class="button-btn">
        <p>下载品牌手册</p>
        <img src="@/assets/images/download.png" alt="download" />
      </div>
    </div>
    <MiNTDivider :content="'+'"></MiNTDivider>
    <div class="newslist">
      <MiNTNewsListMobile> </MiNTNewsListMobile>
    </div>
  </div>
</template>

<script>
import MiNTNewsListMobile from "../../components/MiNTNews/MiNTNewsListMobile.vue";
import MiNTDivider from "@/components/Divider";
import BannerTitle from "@/components/BannerTitle";

export default {
  components: {
    MiNTDivider,
    BannerTitle,
    MiNTNewsListMobile
  },

};
</script>
<style lang="less" scoped>
.news {
  padding-top: 70px;

  .text-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    font-weight: 450;
    line-height: 47.74px;
    text-align: center;
    color: #e8e8ea;

    .sub {
      color: #FF7200;
      position: relative;
      top: 15px;
    }

    .desc {
      margin-top: 20px;
      font-size: 10px;
      line-height: 13.26px;
      text-align: center;
      width: 180px;
      height: 26px;
      white-space: normal;
      color: #b4b5b7;
    }
  }

  .button {
    display: flex;
    justify-content: center;

    .button-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 158px;
      height: 67px;
      font-size: 14px;
      color: #ffffff;
      border: 1px solid #FFFFFF1A;
      border-radius: 9999px;

      img {
        width: 1.125rem;
        height: 1.125rem;
      }

      margin-bottom: 60px;
    }
  }
}
</style>
