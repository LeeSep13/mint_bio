<template>
	<div class="applicationlistlayout">
		<div class="label">
			<span> {{ `${labeltext}` }} </span>
		</div>
		<div class="pic">
			<img :src="getImageUrl(picsrc)" />
		</div>
	</div>
</template>

<script setup>
	import { defineProps } from 'vue'
	import { getImageUrl } from "@/utils/index";
	const props = defineProps({
		picsrc:{
			type: String,
			required: true,
		},
		labeltext:{
			type: String,
			required: true,
		}
	});
</script>

<style lang="scss">
	.applicationlistlayout{
		width: 300px;
		height: 90px;
		display: flex;
		justify-content: center;
		align-items: center;
		.label{
			display: inline-block;
			color: #F1F3F7;
			font-size: 20px;
			padding-right: 13px;
			text-align: center;
		}
		.pic{
			display: inline-block;
			width: 162px;
			height: 90px;
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>