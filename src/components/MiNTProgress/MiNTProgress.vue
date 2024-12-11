<template>
	<svg :width="width" :height="height">
		<linearGradient :id="uniqueId" x1="0%" y1="0%" x2="100%" y2="0%">
			<stop offset="0%" :stop-color="startcolor" stop-opacity="0.5" />
			<stop offset="100%" :stop-color="endcolor" stop-opacity="0.5" />
		</linearGradient>

		<path :d="curvePath" :stroke="`url(#${uniqueId})`" :stroke-width="strokeWidth" fill="none"
			stroke-dasharray="100%" stroke-dashoffset="100%">
			<animate attributeName="stroke-dashoffset" from="100%" to="0%" dur="2s" ease="ease-in-out" fill="freeze" />
		</path>

		<path :d="startlinePath" :stroke="startcolor" :stroke-width="startlinewidth" fill="none"></path>

		<path :d="endlinePath" :stroke="endcolor" :stroke-width="endlinewidth" fill="none"></path>
	</svg>
</template>

<script setup>
	import {
		computed,
		defineProps,
		ref
	} from 'vue';

	const props = defineProps({
		coordinates: {
			type: Array,
			required: true,
			validator: (value) => value.length >= 2, // 确保 coordinates 至少有两个点
		},
		widthheight: {
			type: Object, // 指定参数类型为 Object
			required: true, // 设置为必传
			validator: function(value) {
				// 自定义验证器，确保传入的对象包含 x 和 y 属性
				return ('x' in value && 'y' in value);
			}
		},
		strokeWidth: {
			type: Number,
			default: 2, // 提供一个默认值
		},
		axis: {
			type: Boolean,
			default: true,
		},
		startcolor: {
			type: String,
			default: "red", // 提供一个默认值
		},
		endcolor: {
			type: String,
			default: "blue", // 提供一个默认值
		},
		uniqueId: {
			type: String,
			required: true
		},
		
		startlinewidth: {
			type: Number,
			default: 5,
		},
		
		endlinewidth:{
			type: Number,
			default: 5,
		}
	});

	const strokeWidth = props.strokeWidth;
	const coordinates = props.coordinates;
	const width = props.widthheight.x;
	const height = props.widthheight.y;
	const uniqueId = props.uniqueId;
	const startcolor = props.startcolor;
	const endcolor = props.endcolor;
	const startlinewidth = props.startlinewidth;
	const endlinewidth = props.endlinewidth;

	let viewBox = `0 0 ${width + 10} ${height + 10}`;

	// 计算曲线路径
	const curvePath = computed(() => {
		const [start, end] = coordinates;
		const d = ['M', start.x, start.y];

		if (props.axis) {
			// 横向曲线，使用三次贝塞尔曲线
			const controlX1 = start.x + (end.x - start.x) * 1 / 2;
			const controlY1 = start.y; // 控制点1在起始点的水平线上
			const controlX2 = start.x + (end.x - start.x) * 1 / 2;
			const controlY2 = end.y; // 控制点2在结束点的水平线上
			d.push('C', controlX1, controlY1, controlX2, controlY2, end.x, end.y);
		} else {
			// 纵向曲线，使用三次贝塞尔曲线
			const controlX1 = start.x; // 控制点1在起始点的垂直线上
			const controlY1 = start.y + (end.y - start.y) * 1 / 2;
			const controlX2 = end.x; // 控制点2在结束点的垂直线上
			const controlY2 = start.y + (end.y - start.y) * 1 / 2;
			d.push('C', controlX1, controlY1, controlX2, controlY2, end.x, end.y);
		}

		return d.join(' ');
	});

	// 起点和终点生成两根加重线条

	const startlinePath = computed(() => {
		const [start, end] = coordinates;
		const d = [];
		
		if (props.axis) {
			// 横向曲线，生成竖向线条
			// 起点
			d.push('M', start.x, start.y - 1 / 2 * strokeWidth)
			d.push('L', start.x, start.y + 1 / 2 * strokeWidth);
		} else {
			// 纵向曲线，生成横向线条
			// 起点
			d.push('M', start.x - 1 / 2 * strokeWidth, start.y)
			d.push('L', start.x + 1 / 2 * strokeWidth, start.y);
		}

		return d.join(' ');
	});

	const endlinePath = computed(() => {
		const [start, end] = coordinates;
		const d = [];
		
		if (props.axis) {
			// 横向曲线，生成竖向线条
			// 终点
			d.push('M', end.x, end.y - 1 / 2 * strokeWidth)
			d.push('L', end.x, end.y + 1 / 2 * strokeWidth);
		} else {
			// 纵向曲线，生成横向线条
			// 终点
			d.push('M', end.x - 1 / 2 * strokeWidth, end.y)
			d.push('L', end.x - 1 / 2 * strokeWidth, end.y);
		}

		return d.join(' ');
	});
</script>

<style scoped>
	svg {
		position: absolute;
		bottom: 0;
		left: 0;

	}
</style>