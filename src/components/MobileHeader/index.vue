<template>
  <header class="header-w">
    <div class="header">
      <div class="header-left">
        <div class="header-left-logo" :style="{ cursor: 'pointer' }">
          <img src="@/assets/images/logo.png" alt="Logo" @click="handleJumps('home')" />
        </div>
      </div>
      <div class="header-right">
        <el-popover placement="bottom" width="891" trigger="manual" :visible="visible" :show-arrow="false"
          popper-class="header-popover" :popper-options="popperOptions">
          <div class="popover-close" @click="visible = !visible">
            <img src="./images/close.png" alt="close" />
          </div>
          <div class="popover-content">
            <div class="popover-content-menu">
              <div class="popover-content-menu-item">
                <p class="pointer" @click="handleJumps('bioIntelligent')">
                  生物智造
                </p>
              </div>
              <div class="popover-content-menu-item">
                <div @click="togglePanel('productPanel')">产品 <span class="plus"
                    :class="{ 'rotated': isPanelOpen.productPanel }">+</span></div>
                <p class="pointer" v-if="isPanelOpen.productPanel" @click="handleJumps('material')">生物降解新材料</p>
                <p class="pointer" v-if="isPanelOpen.productPanel" @click="handleJumps('aminoAcid')">生物合成氨基酸</p>
                <p class="pointer" v-if="isPanelOpen.productPanel" @click="handleJumps('knotWeed')">节豆粮解决方案</p>
              </div>
              <div class="popover-content-menu-item">
                <div @click="togglePanel('aboutUsPanel')">关于我们<span class="plus"
                    :class="{ 'rotated': isPanelOpen.aboutUsPanel }">+</span></div>
                <p class="pointer" v-if="isPanelOpen.aboutUsPanel" @click="handleJumps('vision')">企业介绍</p>
                <p class="pointer" v-if="isPanelOpen.aboutUsPanel" @click="handleJumps('corporate')">愿景与责任</p>
              </div>
              <div class="popover-content-menu-item">
                <p class="pointer" @click="handleJumps('mintNews')">发展动态</p>
              </div>
              <div class="popover-content-menu-item">
                <p>加入我们</p>
              </div>
              <div class="popover-content-menu-item">
                <p>下载中心</p>
              </div>
            </div>
            <div class="popover-content-language">
              <p class="popover-content-language-cn" :class="{ 'active-language': currentLanguage === 'CN' }"
                @click="toggleToCN">CN</p>
              <p class="popover-content-language-en" :class="{ 'active-language': currentLanguage === 'EN' }"
                @click="toggleToEN">EN</p>
            </div>
          </div>
          <template #reference>
            <div class="menu" @click="visible = !visible">
              <img src="@/assets/images/menu.png" alt="Menu" />
            </div>
          </template>
        </el-popover>
        <div v-if="visible" class="popover-overlay" @click="visible = false"></div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const visible = ref(false);
const isPanelOpen = reactive({
  productPanel: false,
  aboutUsPanel: false
});
const currentLanguage = ref('CN');

const togglePanel = (panel) => {
  isPanelOpen[panel] = !isPanelOpen[panel];
};

const handleJumps = (target) => {
  router.push({ name: target });
};
const toggleToCN = () => {
  currentLanguage.value = 'CN';
};
const toggleToEN = () => {
  currentLanguage.value = 'EN';
};
</script>

<style lang="scss">
.header-popover {
  padding: 24px 26px 95px 72px;
  background-color: #12161b !important;
  border-radius: 20px;
  width: calc(100% - 20px) !important;
  margin: 40px auto !important;
  left: 10px;

}

.el-popover.el-popper {
  border: 1px solid #12161b !important;
  ;
}
</style>
<style lang="less" scoped>
@import "@/style/variable.less";

.popover-close {
  margin-bottom: 22px;
  text-align: right;

  img {
    width: 34px;
    height: 34px;
  }
}

.popover-content {
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-bottom: 30px;


  &-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }

  &-wrapper {
    display: flex;
    justify-content: space-between;
  }

  &-menu {
    display: flex;
    flex-direction: column;

    &-item {
      min-height: 50px;
      line-height: 50px;
      width: 200px;
      border-bottom: 1px solid #3a3e41;
      font-size: 14px;
      color: #f1f3f7;

      .plus {
        margin-left: 40px;
        transition: transform 0.3s ease;
        display: inline-block; // 确保 span 可以旋转
      }

      .rotated {
        transform: rotate(45deg); // 修改为 45deg 以实现 + 变成 x 的效果
      }
    }
  }

  &-language {
    margin-left: 80px;

    &-cn,
    &-en {
      width: 80px;
      height: 50px;
      line-height: 50px;
      font-size: 14px;
      font-weight: 500;
      color: #f1f3f7;
    }

    .active-language::before {
      content: '';
      display: inline-block;
      width: 8px;
      height: 8px;
      background-color: orange;
      border-radius: 50%;
      margin-right: 4px;
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

.header {
  z-index: 4;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
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
      width: 54px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.header::after {
  content: "";
  position: absolute;
  top: 0;
  /* 位于边框下方 */
  left: 50%;
  /* 水平居中 */
  width: 80%;
  /* 光晕的宽度 */
  height: 450px;
  /* 光晕的高度 */
  background: radial-gradient(55% 50% at 50% 0%,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0) 100%);
  transform: translateX(-50%);
  filter: blur(20px);
  opacity: 0.1;
  pointer-events: none;
  /* 光晕不影响交互 */
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
