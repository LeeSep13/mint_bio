<template>
  <header class="header">
    <div class="header-left">
      <div class="header-left-logo" :style="{ cursor: 'pointer' }">
        <img src="@/assets/images/logo.png" alt="Logo" @click="handleLogoClick" />
      </div>
    </div>
    <div class="header-right">
      <el-popover placement="bottom" trigger="manual" :visible="visible" :show-arrow="false"
        popper-class="header-popover" :popper-options="popperOptions">
        <div class="popover-content">
          <div class="popover-content-close" @click="visible = !visible">
            <img src="./images/close.png" alt="close" />
          </div>
          <div class="popover-content-box">
            <div class="popover-content-menu">
              <div class="popover-content-menu-item">
                <p>生物智造</p>
              </div>
              <div class="popover-content-menu-item">
                <p>产品</p>
                <p>生物降解新材料</p>
                <p>生物合成氨基酸</p>
                <p>节豆粮解决方案</p>
              </div>
              <div class="popover-content-menu-item">
                <p>关于我们</p>
                <p>企业介绍</p>
                <p>愿景与责任</p>
              </div>
              <div class="popover-content-menu-item">
                <p>发展动态</p>
              </div>
              <div class="popover-content-menu-item">
                <p>加入我们</p>
              </div>
              <div class="popover-content-menu-item">
                <p>下载中心</p>
              </div>
            </div>
            <div class="popover-content-language">
              <p class="popover-content-language-cn">CN</p>
              <p class="popover-content-language-en">EN</p>
            </div>
          </div>
        </div>
        <template #reference>
          <div class="menu" @click="visible = !visible">
            <img src="./images/menu.png" alt="Menu" :style="!$route.meta.unRequiresHeader ? 'opacity:1' : 'opacity: 0.3'
              " />
          </div>
        </template>
      </el-popover>
      <div v-if="visible" class="popover-overlay" @click="visible = false"></div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const navData = ref([
  {
    key: 0,
    name: "生物智造",
    router: "bioIntelligent",
    state: false,
    submenu: [],
    disabled: true,
  },
  {
    key: 1,
    name: "产品",
    router: "/",
    state: false,
    submenu: [
      { key: 1, name: "生物降解新材料", router: "material" },
      { key: 2, name: "生物合成氨基酸", router: "aminoAcid" },
      { key: 3, name: "节豆粮解决方案", router: "knotWeed" },
    ],
    iconUp: require("@/components/Header/images/arrow_up.png"),
    iconDown: require("@/components/Header/images/arrow_down.png"),
  },
  {
    key: 2,
    name: "关于我们",
    router: "/",
    state: false,
    submenu: [
      { key: 21, name: "企业介绍", router: "corporate" },
      { key: 22, name: "愿景与责任", router: "vision" },
    ],
    iconUp: require("@/components/Header/images/arrow_up.png"),
    iconDown: require("@/components/Header/images/arrow_down.png"),
  },
  {
    key: 3,
    name: "发展动态",
    router: "mintNews",
    state: false,
    submenu: [],
    disabled: true,
  },
]);

const visible = ref(false);


const handleLogoClick = () => {
  router.push({ name: "home" });
};

const popperOptions = ref({
  modifiers: [
    {
      name: "offset",
      options: {
        offset: [-415, 30], // 控制水平和垂直偏移
      },
    },
  ],
});
</script>

<style lang="less">
.el-popper.el-popover.header-popover {
  padding: 24px 26px 95px 72px;
  background-color: #2828289f;
  border-radius: 20px;
  border: 1px solid transparent;
  backdrop-filter: blur(10px);
  width: calc(100% - 40px) !important;
  margin: 40px 0px 40px 15px !important;
}

.popover-content {
  width: 100%;

  &-close {
    margin-bottom: 62px;
    text-align: right;

    img {
      width: 54px;
      height: 54px;
    }
  }

  &-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }


  &-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 80px;
  }

  &-menu {
    display: flex;
    gap: 80px;

    &-item {
      display: flex;
      flex-direction: column;
      gap: 39px;

      p {
        font-size: 16px;
        font-weight: 500;
        color: #f1f3f7;
      }
    }
  }

  &-language {
    margin-top: 118px;
    display: flex;
    align-items: center;
    gap: 80px;

    &-cn,
    &-en {
      font-size: 16px;
      font-weight: 500;
      color: #f1f3f7;
    }
  }

  &-download {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 158px;
    height: 67px;
    color: #f1f3f7;
    border: 1px solid #ffffff1a;
    border-radius: 999px;
  }
}

.popover-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9;
}
</style>
<style lang="less" scoped>
.header {
  z-index: 4;
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  width: 390px;
  left: 20px;

  &-left {
    &-logo {
      width: 102px;
      height: 50px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }


  &-right {
    .menu {
      width: 50px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
