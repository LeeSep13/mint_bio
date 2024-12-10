<template>
  <div class="layout">
    <!-- <div class="part1">
			<span>
				生物智造
			</span>
		</div> -->

    <BioIntelligentPart2></BioIntelligentPart2>
    <div class="line2"></div>
    <BioIntelligentPart3></BioIntelligentPart3>
    <div class="line3"></div>
    <BioIntelligentPart4></BioIntelligentPart4>
    <div class="line2"></div>
    <VisionModule5></VisionModule5>
    <!-- <BioIntelligentPart5></BioIntelligentPart5> -->
    <div class="line2"></div>
    <BioIntelligentPart6></BioIntelligentPart6>
  </div>
</template>

<script setup>
import BioIntelligentPart2 from "@/components/BioIntelligent/BioIntelligentPart2.vue";
import BioIntelligentPart3 from "@/components/BioIntelligent/BioIntelligentPart3.vue";
import BioIntelligentPart4 from "@/components/BioIntelligent/BioIntelligentPart4.vue";
// import BioIntelligentPart5 from '@/components/BioIntelligent/BioIntelligentPart5.vue';
import VisionModule5 from "@/pages/Vision/VisionModule5.vue";

import BioIntelligentPart6 from "@/components/BioIntelligent/BioIntelligentPart6.vue";
</script>

<style lang="scss" scoped>
.layout {
  width: 1728px;
}

.part1 {
  width: 100%;
  height: 1282px;
  background-color: #000;

  text {
    color: #ececee;
  }
}

.line2 {
  height: 1px;
  width: 100%;
  background-image: linear-gradient(
    to right,
    #35344a 30%,
    #666666 50%,
    #35344a 70%
  );
}

.line3 {
  height: 1px;
  width: 100%;
  background: rgba(49, 49, 50, 1);
}
</style>