<template>
  <div class="module-container" @wheel="handleWheel">
    <div v-for="(module, index) in modules" :key="index" :class="['module', `module-${index}`]"
      :style="getModuleStyle(index)">
      <aa-module-content :title="module.title" :topItems="module.topItems"
        :introductionTitle1="module.introductionTitle1" :introductionTitle2="module.introductionTitle2"
        :applyTexts="module.applyTexts" :advantages="module.advantages" :imageUrl="module.imageUrl"
        :isRow="module.isRow" :tabStyle="getTabStyleData(index)"></aa-module-content>
    </div>
  </div>
</template>

<script>
import AaModuleContent from "@/components/AaModuleContent";

export default {
  components: {
    AaModuleContent,
  },
  props: {
    modules: Array,
  },
  data() {
    return {
      scrollDistance: 0, // 初始滚动距离为0，加载时显示module1
      moduleHeight: 800, // 每个模块的高度

    };
  },
  computed: {
    maxScrollDistance() {
      // 最大滚动距离为模块总高度
      return (this.modules.length - 1) * this.moduleHeight;
    },
  },
  methods: {
    handleWheel(event) {
      event.preventDefault();
      const delta = event.deltaY;
      // 控制滚动的范围和步长
      if (delta > 0 && this.scrollDistance < this.maxScrollDistance) {
        this.scrollDistance += 30; // 每次滚动增加30px
      } else if (delta < 0 && this.scrollDistance > 0) {
        this.scrollDistance -= 30; // 向上滚动时，减少30px
      }
    },
    getModuleStyle(index) {
      // 计算每个模块相对于 scrollDistance 的偏移量
      const offset = index * this.moduleHeight - this.scrollDistance;

      // 计算模块的 translateY，确保模块滑入
      const translateY = offset >= 0 ? Math.min(offset, this.moduleHeight) : 0;

      // 动态调整模块的层级，确保当前模块处于上层
      const zIndex = offset >= 0 ? this.modules.length - index : 0;

      return {
        transform: `translateY(${translateY}px)`, // 控制模块的滑动位置
        zIndex: zIndex, // 控制模块层级，使当前模块显示在最上层
      };
    },
    getTabStyleData(index) {
      const marginLeft = index === 0 ? "1%" : `${1 + index * 19.7}%`;
      const offset = index * this.moduleHeight - this.scrollDistance;
      const zIndex = offset >= 0 ? this.modules.length - index : 0;

      return {
        marginLeft: marginLeft,
        zIndex: zIndex,
      };
    },
  },
  mounted() {
    // 页面加载时，确保显示module1
    this.scrollDistance = 0;
  },
};
</script>

<style scoped>
.module-container {
  margin: 222px 0;
  position: relative;
  width: 100%;
  height: 740px;
  overflow: hidden;
}

.module {
  position: absolute;
  width: 100%;
  height: 740px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-out;
}
</style>