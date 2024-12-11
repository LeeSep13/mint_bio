<template>
  <header class="header ">
    <div class="header-left">
      <div class="header-left-logo">
        <img src="@/assets/images/logo.png" alt="Logo" />
      </div>
    </div>

    <div class="header-middle">
      <ul class="nav">
        <li class="nav-item" v-for="item in navData" :key="item.key" :class="{
          'nav-item_current': item.state,
          'has-submenu': item.submenu && item.submenu.length > 0,
        }" @mouseover="setMouseOver(item)" @mouseleave="setMouseLeave(item)" @click.prevent="handleClick(item)">
          <router-link class="nav-item-link" :to="item.submenu.length ? 'javascript:void(0)' : { name: item.router }
            " v-if="!item.submenu.length">
            {{ item.name }}
          </router-link>
          <span class="nav-item-link" v-else>
            {{ item.name }}
            <img :src="item.state ? item.iconUp : item.iconDown" alt="Toggle Icon" class="submenu-icon" />
          </span>

          <ul v-if="item.submenu && item.submenu.length" class="submenu">
            <li class="submenu-item" v-for="subItem in item.submenu" :key="subItem.key"
              @mouseover="setMouseOver(subItem)" @mouseleave="setMouseLeave(subItem)">
              <router-link :to="{ name: subItem.router }" class="submenu-item-link">
                {{ subItem.name }}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="header-right">
      <el-popover placement="bottom" width="891" trigger="manual" :visible="visible" :show-arrow="false"
        popper-class="header-popover" :popper-options="popperOptions">
        <div class="popover-content">
          <div class="popover-content-close" @click="visible = !visible">
            <img src="./images/close.png" alt="close" />
          </div>
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
            <p class="popover-content-language-cn">简体中文</p>
            <p class="popover-content-language-en">ENGLISH</p>
            <div class="popover-content-download">
              <p>下载品牌手册</p>
              <img src="./images/download.png" alt="download" />
            </div>
          </div>
        </div>
        <template #reference>
          <div class="menu" @click="visible = !visible">
            <img src="./images/menu.png" alt="Menu"
              :style="!$route.meta.unRequiresHeader ? 'opacity:1' : 'opacity: 0.3'" />
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

const setMouseOver = (item) => {
  navData.value.forEach((navItem) => (navItem.state = false));
  item.state = true;
};

const setMouseLeave = (item) => {
  item.state = false;
};

const handleClick = (item) => {
  // 如果菜单项被禁用，阻止点击
  if (item.disabled) {
    return;
  }
  // 如果主菜单项有子菜单，阻止点击事件
  if (item.submenu && item.submenu.length > 0) {
    return;
  }
  // 如果没有子菜单，正常跳转
  const targetPath = item.router;
  if (router.currentRoute.value.path !== targetPath) {
    // 只有在目标路径与当前路径不同时才导航
    router.push({ name: item.router });
  }
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
  // margin-right: 40px;
  padding: 24px 26px 95px 72px;
  background-color: #2828289f;
  border-radius: 20px;
  border: 1px solid transparent;
  backdrop-filter: blur(10px);
}

.popover-content {
  &-close {
    margin-bottom: 62px;
    text-align: right;

    img {
      width: 54px;
      height: 54px;
    }
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
  /* Semi-transparent background */
  z-index: 9;
  /* Ensure it's above the page content but below the popover */
}
</style>
<style lang="less" scoped>
.header {
  z-index: 4;
  position: relative;
  display: flex;
  padding: 16px 160px 0 160px;


  &-left {
    &-logo {
      width: 122px;
      height: 60px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  &-middle {
    width: 100%;
    margin-left: 21.5%;
    margin-right: 23.6%;

    .nav {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin: 0;
      list-style: none;
      border: 1px solid #fff;
      border-radius: 16px;
      background-color: rgba(255, 255, 255, 0.1);

      .nav-item {
        width: 25%;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        color: #fff;
        padding: 16px 0;
        position: relative;
        transition: background-color 0.3s ease, color 0.3s ease;
        cursor: pointer;

        &-link {
          text-decoration: none;
          color: inherit;
        }

        &-current {
          color: #ff7200;
        }

        &:hover {
          background-color: #ff7200;
          color: #fff;
          cursor: pointer;
        }

        &:first-child {
          border-top-left-radius: 16px;
          border-bottom-left-radius: 16px;
        }

        &:last-child {
          border-top-right-radius: 16px;
          border-bottom-right-radius: 16px;
        }

        &.nav-item_current {
          background-color: #ff7200;
          color: #fff;
        }

        &.has-submenu:hover {
          background-color: #ff7200;
        }

        .submenu {
          display: none;
          list-style: none;
          padding: 0;
          margin-top: 1px;
          position: absolute;
          top: 100%;
          left: 0;
          background-color: #2828289f;
          border-radius: 12px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 10;
          white-space: nowrap;
        }

        &:hover .submenu {
          padding: 19px 26px;
          display: flex;
          box-sizing: border-box;
          gap: 8px;
          opacity: 1;
        }

        .submenu-icon {
          margin-left: 4px;
          width: 12px;
          vertical-align: middle;
        }
      }

      .submenu-item {
        padding: 30px;
        font-size: 16px;
        border-radius: 12px;
        background-color: #02030833;

        &-link {
          text-decoration: none;
          color: inherit;
        }

        &:hover {
          background-color: #ff7200;
          color: #fff;
        }
      }
    }
  }

  &-right {
    .menu {
      width: 54px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
