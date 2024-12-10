<template>
  <div class="footer">
    <el-row>
      <el-col :span="8" class="footer-left">
        <div class="footer-left-logo">
          <img class="footer-left-logo-img" src="@/assets/images/logo.png" alt="" />
          <div class="footer-left-logo-text1">生物智造惠及</div>
          <div class="footer-left-logo-text2">每一个生命</div>
        </div>
        <div class="footer-left-download">
          <span>下载品牌手册</span>
          <img src="./images/download.png" alt="" />
        </div>
      </el-col>
      <el-col :span="2" class="footer-middle">
        <img class="footer-middle-divider" src="./images/divider.png" alt="" />
      </el-col>
      <el-col :span="14" class="footer-right">
        <div class="footer-right-content">
          <div class="footer-right-content-menus footer-common">
            <p class="footer-right-content-menus-item">生物智造</p>
            <p class="footer-right-content-menus-item">发展动态</p>
            <p class="footer-right-content-menus-item">加入我们</p>
            <p class="footer-right-content-menus-item">下载中心</p>
          </div>
          <div class="footer-right-content-products footer-common">
            <p class="footer-right-content-products-item-title">产品</p>
            <p class="footer-right-content-products-item">生物降解新材料</p>
            <p class="footer-right-content-products-item">生物合成氨基酸</p>
            <p class="footer-right-content-products-item">节豆粮解决方案</p>
          </div>
          <div class="footer-right-content-about footer-common">
            <p class="footer-right-content-about-item-title">关于我们</p>
            <p class="footer-right-content-about-item">企业介绍</p>
            <p class="footer-right-content-about-item">愿景与责任</p>
          </div>
        </div>
        <div class="footer-right-info">
          <div class="footer-right-info-qrCode">
            <img
              src="https://s3-alpha-sig.figma.com/img/a8b3/cc3c/75ee7ece7c623aa0b737ec85138f5819?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EdeWMtOpeY6QHeFLCWHcs4nd3NRdv-EmW1AYmXlYO1b6kAjH00wTUXoM7eI5aRvCHsI59f1UsLaN4gv-8Qi71eBAQ87KTTWMQZ~hznTu-nfsjs2CP0xuFA9g3EWQH68ahzAcgYIuXi660l89qSmSWFlHVOzBlbNFgCc1EUfll1eZbExa44MW~DVklpa90MnTZipX8GRE9BR~pu6p2yMi0zS0ryAP3vSJacBu0Hsdaqebj-Jnq7PfF2XP3xvmybbPvp7c5L~9fpmNUP8QPzNTHPxkngBdytFRAie61ocC4Bfl7dx43OPCB6VXpddrsS~f7yQLmmNQ6J7jE4wlN020HA__"
              alt="" />
          </div>
          <div class="footer-right-info-address footer-common">
            <p class="mb26">总部地址</p>
            <p>
              西投·云城犀谷3号楼<br />
              浙江省杭州市西湖区西园七路3号
            </p>
          </div>
          <div class="footer-right-info-copyright">
            <p>
              © 2024 元素驱动(杭州)生物科技有限公司<br />
              浙ICP备08004136号 浙公网备案33021102000954
            </p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.footer {
  background-color: #11161b;
  padding: 5rem 13rem 5rem 9.5rem;
  height: 27.8125rem;
  border-width: 1px 0 0 0;
  /* 只设置上边框 */
  border-style: solid;
  border-image: linear-gradient(to right,
      rgba(53, 52, 74, 0.5) 0%,
      rgba(53, 52, 74, 0.5) 10%,
      rgba(255, 255, 255, 0.4) 30%,
      rgba(255, 255, 255, 0.4) 70%,
      rgba(53, 52, 74, 0.5) 90%,
      rgba(53, 52, 74, 0.5) 100%) 1;

  &-common {
    font-weight: 500;
    font-size: 0.875rem;
    color: #ffffff;
  }

  &-left {
    height: 27.8125rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &-logo {
      display: flex;
      align-items: center;

      &-img {
        width: 6.375rem;
        height: 3.125rem;
      }

      &-text1,
      &-text2 {
        font-weight: 500;
        color: #ffffff;
      }

      &-text1 {
        width: 3.5625rem;
        height: 1.8125rem;
        margin-left: 2.625rem;
        text-align: right;
      }

      &-text2 {
        width: 4.375rem;
        height: 0.625rem;
        margin-left: 0.9375rem;
      }
    }

    &-download {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 7.75rem;
      height: 3.125rem;
      background-color: #ff7200;
      border-radius: 2.3438rem;
      font-size: 0.75rem;
      color: #ffffff;

      img {
        width: 1.125rem;
        height: 1.125rem;
      }
    }
  }

  &-middle {
    &-divider {
      width: 1rem;
    }
  }

  &-right {
    &-content {
      display: flex;
      justify-content: space-between;
      width: 100%;

      &-menus {
        height: 11.875rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &-item {
          width: 3.5rem;
          height: 0.625rem;
          color: #ffffff;
          cursor: pointer;
        }
      }

      &-products {
        &-item {
          width: 6.125rem;
          height: 3rem;
          color: #8a8f98;

          &-title {
            width: 6.125rem;
            color: #ffffff;
            margin-bottom: 3.125rem;
          }
        }
      }

      &-about {
        &-item {
          width: 6.125rem;
          height: 3rem;
          color: #8a8f98;

          &-title {
            width: 6.125rem;
            color: #ffffff;
            margin-bottom: 3.125rem;
          }
        }
      }
    }

    &-info {
      width: 100%;
      margin-top: 7.5625rem;
      display: flex;
      justify-content: space-between;
      align-items: end;

      &-qrCode {
        img {
          width: 8.0625rem;
          height: 8.0625rem;
        }
      }

      &-address {
        margin-left: 3.1875rem;
      }

      &-copyright {
        margin-left: 6.9375rem;
        color: #ffffff;
      }
    }
  }
}

.mb26 {
  margin-bottom: 1.625rem;
}
</style>