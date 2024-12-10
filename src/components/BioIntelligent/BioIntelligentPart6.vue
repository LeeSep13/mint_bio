<template>
	<div class="biointelligentpart6v2">
		<div class="title">
			<span class="label1">
				生物智造&nbsp;&nbsp;
			</span>
			<span class="label2">
				基 <br />地
			</span>
		</div>

		<div class="content">
			<div class="box box1" :class="{'hiddenbox':isHidden(0)}"
				@mouseover="handleMouseOver(0)" @mouseout="handleMouseOut(0)">
				<img :src="require('@/assets/BioIntelligent/nanyang.jfif')" />
			</div>
		
			<div class="box box2" :class="{'hiddenbox':isHidden(1)}"
				@mouseover="handleMouseOver(1)" @mouseout="handleMouseOut(1)">
				<img :src="require('@/assets/BioIntelligent/hangzhou.jfif')" />
			</div>
		
			<div class="box box3" :class="{'hiddenbox':isHidden(2)}"
				@mouseover="handleMouseOver(2)" @mouseout="handleMouseOut(2)">
				<img :src="require('@/assets/BioIntelligent/jiande.jfif')" />
			</div>
		</div>
	</div>
</template>

<script setup>
	import {
		ref
	} from 'vue'

	// 使用 ref 创建响应式变量
	const expandedIndex = ref(-1); // 当前扩展的盒子索引

	// 方法定义

	const isHidden = (index) => {
		// 根据逻辑，当最左边或最右边的盒子扩展时，隐藏中间的盒子
		let res = (expandedIndex.value === 0 && index === 1) 
		|| (expandedIndex.value == 1 && index == 0)
		|| (expandedIndex.value == 1 && index == 2)
		|| (expandedIndex.value === 2 && index === 1) 
		return res;
	};

	const handleMouseOver = (index) => {
		expandedIndex.value = index;
	};

	const handleMouseOut = () => {
		expandedIndex.value = -1; // 重置扩展状态
	};

</script>

<style lang="scss">
	.biointelligentpart6v2 {
		margin-bottom: 170px;
		width: 1728px;
		height: 1300px;
		background-color: #11161b;
		.title {
			width: 82.4%;
			height: 30%;
			display: flex;
			margin: auto;
			text-align: left;
			align-items: center;

			.label1 {
				color: white;
				font-size: 60px;
			}

			.label2 {
				color: #ff7200;
				font-size: 60px;
			}
		}

		.content {
			width: 82.4%;
			height: 60%;
			border-radius: 15px;
			margin: auto;
			justify-content: space-between;
			position: relative;

			.box {
				width: 32.5%;
				height: 100%;
				transition-property: all;
				transition-duration: 0.5s;
				// transition: all 0.5s;
				position: absolute;
				
				img{
					width: 100%;
					height: 100%;
					border-radius: 15px;
				}
			}
			.box1{
				left: 0%;
				// z-index: 2;
				&:hover{
					width: 66%;
					z-index: 2;
				}
			}
			
			.box2{
				left: 33.3%;
				
				&:hover{
					width: 99.9%;
					left: 0%;
					z-index: 2;
				}
			}
			
			.box3{
				left: 66.6%;
				&:hover{
					left: 33.3%;
					width: 66.6%;
					z-index: 2;
				}
			}
			
			
			
			.hiddenbox{
				// display: none;
				opacity: 0%;
				z-index: 1;
			}

		}
	}
</style>