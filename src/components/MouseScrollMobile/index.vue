<template>
  <div class="module-container" @wheel="handleWheel">
    <div v-for="(module, index) in modules" :key="index" :class="['module', `module-${index}`]">
      <div class="crisis-card" :style="getModuleStyle(index)">
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
    const moduleHeight = 284; // 每个模块的高度

    const maxScrollDistance = computed(() => {
      // 最大滚动距离为模块总高度
      return (props.modules.length - 1) * moduleHeight;
    });

    // 处理滚动事件，添加防止默认滚动的逻辑
    const handleWheel = (event) => {
      event.preventDefault(); // 阻止浏览器滚动

      // 节流控制逻辑
      throttleWheel(event);
    };

    // 使用节流函数包装
    const throttleWheel = throttle((event) => {
      const delta = event.deltaY;
      const step = 30; // 每次滚动的步长
      if (delta > 0 && scrollDistance.value < maxScrollDistance.value) {
        scrollDistance.value = Math.min(
          scrollDistance.value + step,
          maxScrollDistance.value
        );
      } else if (delta < 0 && scrollDistance.value > 0) {
        scrollDistance.value = Math.max(scrollDistance.value - step, 0);
      }
    }, 50);

    const getModuleStyle = (index) => {
      // 计算每个模块相对于 scrollDistance 的偏移量
      const offset = index * moduleHeight - scrollDistance.value;

      // 计算模块的 translateY，确保模块滑入
      const translateY = offset >= 0 ? Math.min(offset) : 30 * (index);
      console.log('offset', offset);

      // 动态调整模块的层级，确保当前模块处于上层
      const zIndex = offset >= 0 ? props.modules.length - index : 0;

      return {
        transform: `translateY(${translateY}px)`, // 控制模块的滑动位置
        zIndex: zIndex, // 控制模块层级，使当前模块显示在最上层
      };
    };

    const getTabStyleData = (index) => {
      const marginLeft = index === 0 ? "1%" : `${1 + index * 19.7}%`;
      const offset = index * moduleHeight - scrollDistance.value;
      const zIndex = offset >= 0 ? props.modules.length - index : 0;

      return {
        marginLeft: marginLeft,
        zIndex: zIndex,
      };
    };

    onMounted(() => {
      // 页面加载时，确保显示module1
      scrollDistance.value = 0;
    });

    return {
      scrollDistance,
      maxScrollDistance,
      // debouncedHandleWheel,
      getModuleStyle,
      getTabStyleData,
      handleWheel,
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
  transition: transform 0.3s ease-out;
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