<template>
  <div class="module-container" @wheel="handleWheel">
    <div
      v-for="(module, index) in modules"
      :key="index"
      :class="['module', `module-${index}`]"
      :style="getModuleStyle(index)"
    >
      <aa-module-content
        :title="module.title"
        :topItems="module.topItems"
        :introductionTitle1="module.introductionTitle1"
        :introductionTitle2="module.introductionTitle2"
        :applyTexts="module.applyTexts"
        :advantages="module.advantages"
        :imageUrl="module.imageUrl"
        :titleStyle="getModuleMargin(index)"
      ></aa-module-content>
    </div>
  </div>
</template>
  
  <script>
import AaModuleContent from "./AaModuleContent";

export default {
  components: {
    AaModuleContent,
  },
  data() {
    return {
      scrollDistance: 0, // 初始滚动距离为0，加载时显示module1
      moduleHeight: 800, // 每个模块的高度
      modules: [
        {
          title: "生物合成 异亮氨酸",
          topItems: ["Brilliant", "MiNT BiO", "BioAmino"],
          introductionTitle1: "生物合成",
          introductionTitle2: "异亮氨酸",
          applyTexts: ["医药", "化学试剂", "饲料添加剂"],
          advantages: [
            "添加于饲料中，减少大豆用量，降低养殖成本",
            "相较同类产品，具有大幅成本优势",
            "相较行业头部，发酵效率高200%",
          ],
          imageUrl: require("./images/module2_element.png"),
        },
        {
          title: "生物合成 组氨酸",
          topItems: ["Brilliant", "MiNT BiO", "BioAmino"],
          introductionTitle1: "生物合成",
          introductionTitle2: "组氨酸",
          applyTexts: ["食品", "饲料", "生化试剂制造制药"],
          advantages: [
            "相较同类产品，具有成本优势",
            "相较行业头部，发酵效率快35%",
            "相较化学合成法，产品纯度高",
          ],
          imageUrl: require("./images/module2_element.png"),
        },
        {
          title: "生物合成 色氨酸",
          topItems: ["Brilliant", "MiNT BiO", "BioAmino"],
          introductionTitle1: "生物合成",
          introductionTitle2: "色氨酸",
          applyTexts: ["医药", "食品强化剂", "饲料添加剂"],
          advantages: [
            "人体与动物必需氨基酸，应用场景广泛",
            "相较传统生产方法，效率更高、成本更低",
          ],
          imageUrl: require("./images/module2_element.png"),
        },
        {
          title: "生物合成 亮氨酸",
          topItems: ["Brilliant", "MiNT BiO", "BioAmino"],
          introductionTitle1: "生物合成",
          introductionTitle2: "亮氨酸",
          applyTexts: ["运动营养剂", "食品添加剂", "特殊医药用途食品"],
          advantages: [
            "动物必需氨基酸之一",
            "相较传统水解法，生产过程更环保、更高效",
            "相较化学合成法，具有成本优势",
          ],
          imageUrl: require("./images/module2_element.png"),
        },
        {
          title: "生物合成 缬氨酸",
          topItems: ["Brilliant", "MiNT BiO", "BioAmino"],
          introductionTitle1: "生物合成",
          introductionTitle2: "缬氨酸",
          applyTexts: ["医药", "食品强化剂", "饲料添加剂"],
          advantages: [
            "动物必需氨基酸之一",
            "提供饲料转化率，降低养殖成本",
            "相较化学合成法，具有成本优势",
          ],
          imageUrl: require("./images/module2_element.png"),
        },
      ],
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
    getModuleMargin(index) {
      return `${index * 284}px`;
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
  margin: 13.875rem 0;
  position: relative;
  width: 100%;
  height: 800px;
  overflow: hidden;
}

.module {
  position: absolute;
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-out;
}
</style>
  