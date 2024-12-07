<template>
  <div class="divider">{{ props.content }}</div>
</template>
<script setup>
const props = defineProps({
  content: {
    String,
  },
});
</script>
<style lang="less" scoped>
.divider {
  width: 100%;
  height: 2px;
  line-height: 2px;
  background-image: linear-gradient(
    to right,
    #35344a 30%,
    #666666 50%,
    #35344a 70%
  );
  color: #ff7200;
  text-align: center;
  font-size: 16px;
}
</style>