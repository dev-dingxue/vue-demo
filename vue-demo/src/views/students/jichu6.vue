
<template>
	<div class="jichu6">
		<h1>监听事件</h1>
		<br>
		<div>
			监听的对象 <input type="text" v-model="_name">
		</div>
		<hr>
		<div>
			监听后的值：{{ fs_name }}
		</div>
		<hr>
		响应式监听： <input type="text" name="" id="" v-model="rea.count"> :: {{ rea.count }}
		<hr>
		<div>
			<button>停止监听</button>
		</div>
		<hr>
		<h2>即时回调的侦听器</h2>
		<hr>
		<input type="text" v-model="newWatch" placeholder="请输入"> :: {{ newWatch }}

		<br>
		<br>
		<br>
		<br>
		<br>
		<br>

		<h2>我是组件</h2>

		<divSpan v-if="xiaohui"> </divSpan>
		<br>
		<button @click="delComp">销毁组件</button>


	</div>
</template>

<script setup lang="ts">
import { reactive, ref, watch, watchEffect, watchPostEffect } from 'vue';
import divSpan from './jichu7.vue'

const _name = ref("我是监听的对象")

const fs_name = ref("")

const rea = reactive({
	count: 0
})

const xiaohui = ref<boolean>(true)

function delComp() {
	xiaohui.value = false;
}

watch(_name, (newVal, oldVal) => {
	fs_name.value = newVal;
})

watch(() => { rea.count }, (newVal) => {
	rea.count = 10
})

const newWatch = ref("")

watchEffect(() => {
	newWatch.value = "100"
})

//Vue 更新之前 的监听
watchPostEffect(() => {
	newWatch.value = ""
})

defineOptions({
	inheritAttrs: false
})

</script>

