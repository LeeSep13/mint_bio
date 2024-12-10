<template>
  <div>
    <h3>选择一个选项：</h3>
    <label>
      <input type="radio" v-model="selected" value="A" /> A
    </label>
    <label>
      <input type="radio" v-model="selected" value="B" /> B
    </label>
    <label>
      <input type="radio" v-model="selected" value="C" /> C
    </label>
    <p>你选择了：{{ selected }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const selected = ref('');
    return { selected };
  }
};
</script>

<style scoped>
/* 样式可以根据需要添加 */
</style>
