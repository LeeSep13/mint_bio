<template>
  <div class="module-container" @wheel="throttleWheel" ref="moduleContainer">
    <div v-for="(module, index) in modules" :key="index" :class="['module', `module-${index}`]"
      :style="getModuleStyle(index)">
      <div class="crisis-card">
        <div class="crisis-card-top"><span>生物制造</span>MiNT BiO<span></span><span>势在必行</span></div>
        <div class="crisis-card-title">{{ module.name }}</div>
        <div class="crisis-card-data">
          <img src="@/assets/images/crisis-back.png">
          <div class="crisis-card-data-text">{{ module.rate }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { throttle } from "lodash";

export default {
  components: {
  },
  props: {
    modules: Array,
  },
  setup(props) {
    const scrollDistance = ref(0); // 初始滚动距离为0，加载时显示module1

    const handleWheel = (event) => {
      event.preventDefault(); // 阻止浏览器滚动
      scrollDistance.value += event.deltaY;
    };

    const throttleWheel = throttle(handleWheel, 50);

    const getModuleStyle = (index) => {
      const translateY = 30 * index - scrollDistance.value;
      return {
        transform: `translateY(${translateY}px)`,
        zIndex: index,
      };
    };

    onMounted(() => {
      // 页面加载时，确保显示module1
      scrollDistance.value = 0;
    });

    return {
      scrollDistance,
      getModuleStyle,
      throttleWheel,
    };
  },
};
</script>

<style scoped lang="less">
.module-container {
  position: relative;
  width: 100%;
  height: 434px;
  overflow: hidden;
}

.module {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-out;
}

.crisis-card {
  padding: 15px;
  width: 370px;
  height: 284px;
  border-radius: 12px;
  background: #24272a;
  border: 1px solid;

  &-top {
    display: flex;
    justify-content: space-between;
    font-size: 8px;
    font-weight: 500;
    line-height: 9.75px;
    color: rgba(241, 243, 247, 0.5);
  }

  &-title {
    font-size: 20px;
    font-weight: 450;
    line-height: 26.52px;
    text-align: center;
    margin: 30px auto;
    color: white;
  }

  &-data {
    position: relative;
    width: 100%;
    height: 100%;

    img {
      width: 346px;
    }

    &-text {
      font-size: 40px;
      font-weight: 450;
      line-height: 22px;
      text-align: left;
      position: absolute;
      top: 52px;
      left: 105px;
      color: rgba(255, 114, 0, 1);
    }
  }
}
</style>