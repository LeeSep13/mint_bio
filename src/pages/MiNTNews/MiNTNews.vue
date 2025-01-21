<template>
  <div class="container">
    <div class="top">
      <MiNTNewsTop> </MiNTNewsTop>
    </div>
    <MiNTDivider :content="'+'"></MiNTDivider>
    <div class="newslist">
      <MiNTNewsList> </MiNTNewsList>
    </div>
  </div>
</template>

<script setup>
import MiNTNewsTop from "../../components/MiNTNews/MiNTNewsTop.vue";
import MiNTNewsList from "../../components/MiNTNews/MiNTNewsList.vue";
import MiNTDivider from "@/components/Divider";
</script>

<style lang="less" scoped>
.container {
  width: 100%;

  .top {
    width: 100%;
    height: 650px;
  }

  .newslist {
    width: 100%;
    /* height: 2835px; */
  }
}
</style>
