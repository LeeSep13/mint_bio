<template>
  <div class="newslist">
    <div class="newsbox" v-for="news in props.filteredNews" :key="news.id">
      <!-- 展示新闻内容 -->
      <NewsCardPreview :info="news"> </NewsCardPreview>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from "vue";

import NewsCardPreview from "./NewsCardPreview.vue";

const props = defineProps({
  filteredNews: {
    Object,
    required: true,
  },
});
</script>

<style lang="less" scoped>
.newslist {
  width: 100%;
  display: grid;
  // position: relative;
  grid-column-gap: 16px;
  grid-row-gap: 80px;
  grid-template-columns: repeat(3, 1fr);
  overflow: hidden;
  // justify-content: left;

  .newsbox {
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    // display: flex;
    justify-content: center;
  }
}
</style>