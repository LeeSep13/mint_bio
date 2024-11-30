<template>
  <header class="header">
      <div  class="header-left">
        <div class="header-left-logo">
          <img src="@/assets/images/logo.png" alt="Logo" />
        </div>
      </div>

      <div class="header-middle">
        <ul class="nav">
          <li
            class="nav-item"
            v-for="item in navData"
            :key="item.key"
            :class="{
              'nav-item_current': item.state, 
              'has-submenu': item.submenu && item.submenu.length > 0
            }"
            @mouseover="setMouseOver(item)"
            @mouseleave="setMouseLeave(item)"
            @click.prevent="handleClick(item)"
          >
            <router-link
              class="nav-item-link"
              :to="item.submenu.length ? 'javascript:void(0)' : { name: item.router }"
              v-if="!item.submenu.length"
            >
              {{ item.name }}
            </router-link>
            <span
              class="nav-item-link"
              v-else
            >
              {{ item.name }}
              <img 
                :src="item.state? item.iconUp : item.iconDown" 
                alt="Toggle Icon" 
                class="submenu-icon"
              />
            </span>

            <ul v-if="item.submenu && item.submenu.length" class="submenu">
              <li
                class="submenu-item"
                v-for="subItem in item.submenu"
                :key="subItem.key"
                @mouseover="setMouseOver(subItem)"
                @mouseleave="setMouseLeave(subItem)"
              >
                <router-link
                  :to="{ name: subItem.router }"
                  class="submenu-item-link"
                >
                  {{ subItem.name }}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="header-right">
        <div class="menu">
          <img src="./images/menu.png" alt="Menu" />
        </div>
      </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      navData: [
        {
          key: 0,
          name: '生物智造',
          router: '/',
          state: false,  
          submenu: [],
          disabled: true 
        },
        {
          key: 1,
          name: '产品',
          router: '/',
          state: false,  
          submenu: [
            { key: 2, name: '生物合成氨基酸', router: 'aminoAcid' },
            { key: 3, name: '节豆粮解决方案', router: 'knotWeed' }
          ],
          iconUp: require('@/components/Header/images/arrow_up.png'),  
          iconDown: require('@/components/Header/images/arrow_down.png'),
        },
        {
          key: 2,
          name: '关于我们',
          router: '/',
          state: false,  
          submenu: [
            { key: 21, name: '愿景与责任', router: 'vision' }
          ],
          iconUp: require('@/components/Header/images/arrow_up.png'),  
          iconDown: require('@/components/Header/images/arrow_down.png'),
        },
        {
          key: 3,
          name: '发展动态',
          router: '/',
          state: false,  
          submenu: [],
          disabled: true 
        },
      ]
    };
  },
  methods: {
  setMouseOver(item) {
    this.navData.forEach(navItem => navItem.state = false); 
    item.state = true;  
  },
  setMouseLeave(item) {
    item.state = false;
  },
  handleClick(item) {
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
    if (this.$route.path !== targetPath) { // 只有在目标路径与当前路径不同时才导航
      this.$router.push({ name: item.router });
    }
  }
}

};
</script>



<style lang="less" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, #11161b, #11161b),
    radial-gradient(40.98% 38.14% at 50% 0%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%);
  padding-top: 1rem;
  &-left {
    &-logo {
      img{
        width: 7.625rem;
        height:3.75rem;
      }
    }
  }

  &-middle {
    width: 36.5rem;
    margin-left: 19.5rem;
    margin-right: 21.5625rem;
    .nav {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin: 0;
      list-style: none;
      border: 1px solid #fff;
      border-radius: 1rem;
      background-color: rgba(255, 255, 255, 0.1);

      .nav-item {
        width: 25%;
        text-align: center;
        font-size: 1rem;
        font-weight: 500;
        color: #fff;
        padding: 1rem 0;
        position: relative;
        transition: background-color 0.3s ease, color 0.3s ease;

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
          border-top-left-radius: 1rem;
          border-bottom-left-radius: 1rem;
        }

        &:last-child {
          border-top-right-radius: 1rem;
          border-bottom-right-radius: 1rem;
        }

        &.nav-item_current {
          background-color: #ff7200;
          color: #fff;
        }

        &.has-submenu:hover {
          background-color: #ff7200;
        }

        /* Submenu */
        .submenu {
          display: none;
          list-style: none;
          padding: 0;
          margin-top: 1px;
          position: absolute;
          top: 100%;
          left: 0;
          background-color: #222;
          border-radius: 0.5rem;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 10; 
          width: 100%;
        }

        &:hover .submenu {
          display: block;
          opacity: 1;
        }

        .submenu-icon {
          margin-left: .25rem;
          width: .75rem; 
          vertical-align: middle;
        }
      }

      .submenu-item {
        padding: 0.5rem 1rem;
        font-size: .875rem;
        background-color: rgba(255, 255, 255, 0.1);

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
      width: 3.375rem;
      height: 3.375rem;
    }
  }
}
</style>
