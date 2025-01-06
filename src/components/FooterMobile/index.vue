<template>
  <div class="footer">
    <img src="@/assets/images/left-line.png" class="left-line">
    <el-row>
      <el-col :span="24" class="footer-left">
        <div class="footer-left-logo">
          <div class="footer-left-logo-img-w pointer" @click="handleJumps('home')">
            <img class="footer-left-logo-img" src="@/assets/images/logo.png" alt="" />
          </div>
          <div class="footer-left-logo-text1">生物智造惠及</div>
          <div class="footer-left-logo-text2">每一个生命</div>
        </div>

      </el-col>
      <el-col :span="24" class="footer-right">
        <div class="footer-right-content">
          <div class="footer-right-content-menus footer-common">
            <p class="footer-right-content-menus-item " @click="handleJumps('bioIntelligent')">生物智造</p>

          </div>
          <div class="footer-right-content-products footer-common">
            <p class="footer-right-content-products-item-title gray-text">产品</p>
            <p class="footer-right-content-products-item pointer " @click="handleJumps('material')">生物降解新材料</p>
            <p class="footer-right-content-products-item pointer" @click="handleJumps('aminoAcid')">生物合成氨基酸</p>
            <p class="footer-right-content-products-item pointer" @click="handleJumps('knotWeed')">节豆粮解决方案</p>
          </div>
          <div class="footer-right-content-about footer-common">
            <p class="footer-right-content-about-item-title gray-text">关于我们</p>
            <p class="footer-right-content-about-item pointer" @click="handleJumps('corporate')">企业介绍</p>
            <p class="footer-right-content-about-item pointer" @click="handleJumps('vision')">愿景与责任</p>
          </div>
          <p class="footer-right-content-dynamic " @click="handleJumps('mintNews')">发展动态</p>
          <p class="footer-right-content-join">加入我们</p>
          <p class="footer-right-content-down">下载中心</p>
        </div>

      </el-col>
      <div class="download-qrCode">
        <img src="@/assets/images/down.png" class="down">
        <img src="@/assets/images/wechat.png" class="weChat" @click="toggleQRCode">
        <img src="@/assets/images/QRcode.png" class="QRcode" v-if="showQRCode" />

      </div>
      <div class="overlay" v-if="showQRCode" @click="toggleQRCode"></div>

      <div class="address footer-common">
        <p class="mb26">总部地址</p>
        <p>
          西投·云城犀谷3号楼<br />
          浙江省杭州市西湖区西园七路3号
        </p>
      </div>
      <div class="copyright">
        <p>
          © 2024 元素驱动(杭州)生物科技有限公司<br />
          浙ICP备08004136号 浙公网备案33021102000954
        </p>
      </div>

    </el-row>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const showQRCode = ref(false);

const toggleQRCode = () => {
  showQRCode.value = !showQRCode.value;
};

const handleJumps = (item) => {
  router.push({ name: item });
};
</script>
<style lang="less" scoped>
@import "@/style/variable.less";

.footer {
  position: relative;
  display: flex;
  justify-content: space-between;
  position: relative;
  background-color: #11161b;
  border-width: 1px 0 0 0;
  padding: 40px 0;
  /* 只设置上边框 */
  border-style: solid;
  border-image: linear-gradient(to right,
      rgba(53, 52, 74, 0.5) 0%,
      rgba(53, 52, 74, 0.5) 10%,
      rgba(255, 255, 255, 0.4) 30%,
      rgba(255, 255, 255, 0.4) 70%,
      rgba(53, 52, 74, 0.5) 90%,
      rgba(53, 52, 74, 0.5) 100%) 1;

  .left-line {
    width: 20px;
    margin: 0 30px 0 5px;
  }

  &-common {
    font-weight: 500;
    font-size: 14px;
    color: #ffffff;
  }

  &-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 40px;

    &-logo {
      display: flex;
      align-items: center;

      &-img {
        width: 100%;
        height: 100%;

        &-w {
          width: 110px;

          img {
            width: 90px;
          }

          border-right: 1px solid white;
        }
      }

      &-text1,
      &-text2 {
        font-size: 14px;
        font-weight: 500;
        color: #ffffff;
      }

      &-text1 {
        width: 57px;
        margin-left: 42px;
        text-align: right;
      }

      &-text2 {
        width: 70px;
        margin-left: 15px;
      }
    }


  }

  &-middle {
    &-divider {
      width: 12.5%;
      height: 100%;
    }
  }

  &-right {
    &-content {
      color: #ffffff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      gap: 30px;
      margin-bottom: 40px;

      .gray-text {
        color: #6c7077;
      }


      &-menus {
        font-size: 13px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &-item {
          width: 101px;
          height: 30px;
          line-height: 30px;
          cursor: pointer;
        }
      }

      &-products {
        display: flex;
        flex-direction: column;
        gap: 20px;

        &-item {
          width: 101px;
          height: 30px;
          line-height: 30px;


          &-title {
            width: 101px;
          }
        }
      }

      &-about {
        display: flex;
        flex-direction: column;
        gap: 20px;

        &-item {
          width: 101px;
          height: 30px;

          &-title {
            width: 101px;
          }
        }
      }
    }






  }

  .download-qrCode {
    display: flex;
    gap: 30px;

    .down {
      width: 140px;
      height: 60px;
    }

    .weChat {
      width: 60px;
    }
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }

  .QRcode {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1001;
    width: 200px;
    height: 200px;
  }

  .address {
    font-size: 13px;
    line-height: 20px;
    margin: 40px 0 30px;
  }

  .copyright {
    color: #ffffff;
    margin: 30px 0 0;
    font-size: 10px;
    line-height: 17px;
  }

}

.footer::after {
  content: "";
  position: absolute;
  top: 0;
  /* 位于边框下方 */
  left: 50%;
  /* 水平居中 */
  width: 90%;
  /* 光晕的宽度 */
  height: 50px;
  /* 光晕的高度 */
  background: radial-gradient(circle,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0) 80%);
  transform: translateX(-50%);
  filter: blur(30px);
  opacity: 0.1;
  pointer-events: none;
  /* 光晕不影响交互 */
}

.mb26 {
  margin-bottom: 26px;
}
</style>