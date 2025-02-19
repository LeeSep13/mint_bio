<template>
  <div class="swiper">
    <div class="case-list" ref="caseList" @mousedown="startDrag($event, 'caseList')"
      @mousemove="onDrag($event, 'caseList')" @mouseup="endDrag" @mouseleave="endDrag"
      @touchstart="startDrag($event, 'caseList')" @touchmove="onDrag($event, 'caseList')" @touchend="endDrag"
      @scroll="onScroll">
      <div class="case-list-item border-gradient" v-for="(item, index) in caseList" :key="index">
        <div class="case-list-item-top">
          <span v-for="i in topTip" :key="i">{{ i }}</span>
        </div>
        <slot name="item-content" :item="item"></slot>
        <div class="case-list-item-bottom">
          <span v-for="bottom in bottomTip" :key="bottom">{{ bottom }}</span>
        </div>
      </div>
    </div>
    <div class="indicators">
      <div class="indicator" v-for="(item, index) in caseList" :key="index" :class="{ active: activeIndex === index }">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    caseList: {
      type: Array,
      default: () => ([])
    },
    topTip: {
      type: Array,
      default: () => ([])
    },
    bottomTip: {
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {
      isDragging: false,
      startX: 0,
      scrollLeft: 0,
      activeIndex: 0, // 当前激活的指示圆点索引
    };
  },
  methods: {
    handleChange(activeNames) {
      this.activeNames = activeNames;
    },
    startDrag(event, listRef) {
      this.isDragging = true;
      if (event.type === 'touchstart') {
        this.startX = event.touches[0].clientX;
      } else {
        this.startX = event.clientX;
      }
      this.scrollLeft = this.$refs[listRef].scrollLeft;
    },
    onDrag(event, listRef) {
      if (!this.isDragging) return;
      let x;
      if (event.type === 'touchmove') {
        x = event.touches[0].clientX;
      } else {
        x = event.clientX;
      }
      const walk = (x - this.startX) * 2; // Adjust the multiplier for sensitivity
      this.$refs[listRef].scrollLeft = this.scrollLeft - walk;
      this.updateActiveIndex();
    },
    endDrag() {
      this.isDragging = false;
      this.updateActiveIndex();
    },
    onScroll() {
      this.updateActiveIndex();
    },
    updateActiveIndex() {
      const list = this.$refs.caseList;
      if (list.children.length === 0) return;
      const itemWidth = list.children[0].offsetWidth;
      const scrollLeft = list.scrollLeft;
      this.activeIndex = Math.round(scrollLeft / itemWidth);
    },
  },
}
</script>

<style lang="less" scoped>
.swiper {
  background-color: #11161b;

  .case {
    color: #fff;

    &-title {
      &-first {
        text-align: left;
        font: 520 60px MiSans;
      }

      &-second {
        text-align: center;
        font: 520 40px MiSans;
      }

      &-third {
        text-align: left;
        font: 520 40px MiSans;
      }
    }

    &-list {
      margin-top: 40px;
      white-space: nowrap;
      overflow-x: auto;
      display: flex;
      align-items: stretch;
      padding-right: 45px;
      padding-left: 45px;

      /* 初始状态下隐藏滚动条 */
      &::-webkit-scrollbar {
        height: 0;
        /* 初始状态下滚动条高度为0 */
        background: rgba(255, 255, 255, 0);
        /* 初始状态下滚动条背景透明 */
      }

      &::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0);
        /* 初始状态下滚动条滑块透明 */
        border-radius: 4px;
      }

      &::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0);
        /* 初始状态下滚动条轨道透明 */
      }

      &-item {
        background: hsla(206, 9%, 15%, 1);
        backdrop-filter: blur(68px);
        flex-shrink: 0;
        padding: 12px;
        width: 300px;
        margin-right: 20px;
        border-width: 2px;
        border: 1px solid transparent;
        border-image: linear-gradient(156.52deg,
            rgba(255, 255, 255, 0.4) 2.12%,
            rgba(255, 255, 255, 0.0001) 39%,
            rgba(255, 255, 255, 0.0001) 54.33%,
            rgba(255, 255, 255, 0.1) 93.02%);
        border-radius: 20px;

        &-top,
        &-bottom {
          font-size: 8px;
          color: rgba(241, 243, 247, 0.5);
          display: flex;
          justify-content: space-between;
        }

        &-img {
          width: 100%;
          height: 203px;
          object-fit: cover;
          margin: 16px 0;
          border-radius: 20px;
        }

        &-describe {
          margin-top: 40px;
          font-size: 24px;
          font-weight: 550;
          color: #fff;
          white-space: normal;
          line-height: 34px;
        }

        &-tips {
          margin-top: 20px;
          font-size: 14px;
          line-height: 24px;
          font-weight: 400;
          white-space: normal;
          color: #f1f3f799;
        }
      }
    }
  }

  .indicators {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .indicator {
    width: 6px;
    height: 6px;
    background-color: #ccc;
    border-radius: 50%;
    margin: 0 5px;
    transition: background-color 0.3s;

    &.active {
      background-color: #FF7200;
      ;
    }
  }

}
</style>