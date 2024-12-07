<template>
  <div class="section-container">
    <div class="section-head">
      <span> {{ props.info.head }} </span>
    </div>

    <div class="section-content">
      <div v-for="content in props.info.contents" :key="content.id">
        <div
          v-if="content.pic"
          class="pic"
          :style="{ height: content.height + 'px' }"
        >
          <img :src="getImageUrl(content.pic)" />
        </div>

        <div class="section-desc">
          <span> {{ content.desc }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getImageUrl } from "@/utils/index";
const props = defineProps({
  info: {
    Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.section-container {
  width: 100%;

  .section-head {
    color: white;
    font-size: 32px;
    font-weight: 380;
    line-height: 33px;
    font-family: MiSans VF;
    padding-bottom: 50px;
    padding-top: 100px;
  }

  .section-content {
    width: 100%;
    .pic {
      width: 100%;
      margin: 50px 0px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .section-desc {
      margin-top: 50px;
      white-space: pre-wrap; 
      span {
        color: white;
        font-size: 21px;
        font-weight: 330;
        line-height: 33px;
        font-family: MiSans VF;
      }
    }
  }
}
</style>