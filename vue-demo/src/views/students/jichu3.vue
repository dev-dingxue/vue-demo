
<template>
	<div class="jichu3">
		{{ name }}

		<br>
		<div class="isfou" :class="{ active: isActive }">
			样式绑定
		</div>
		<br>
		<div :class="classObject">
			我是一个集合Object
		</div>
		<div :class="[activeClass, errorClass]">
			绑定数组 class
		</div>
		<div :style="{ color: activeColor, fontSize: fontSize + 'px' }">
			绑定内联样式
		</div>
		
		<div :style="styleObject">
			样式数组
		</div>
		
		<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">
			样式多值 自动前缀
		</div>
	</div>
</template>

<script setup>

import { reactive, ref } from "vue";

const name = ref("我是响应式的")

const isActive = ref(true)

const classObject = reactive({
	active: true,
	'text-danger': false
})

const activeClass = ref('active')
const errorClass = ref('text-danger')

const activeColor = ref('red')
const fontSize = ref(30)

const styleObject = reactive({
	color: 'red',
	fontSize: '30px'
})

</script>

<style>
.active {
	color: red;
	font-weight: bold;
	font-size: 2em;
}
</style>