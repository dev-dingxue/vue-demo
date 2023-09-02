
<template>
	<div class="jichu7">
		<h1>组件的生命周期</h1>
		<hr>
		<span ref="before">
			修改之前: {{ _name }}
		</span>
		<br>
		<div>
			<button @click="updateDom">修改之后</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';

const before = ref<HTMLSpanElement>()

const _name = ref("namespace")

function updateDom() {
	_name.value = "namespace 哈哈哈哈";
}

onBeforeMount(() => {
	console.log("创建之前", before.value);
})

onMounted(() => {
	console.log("创建之后", before.value);
})

onBeforeUpdate(() => {
	console.log("更新之前", before.value?.innerText);
})

onUpdated(() => {
	console.log('更新之后', before.value?.innerText);
})

onBeforeUnmount(() => {
	console.log('销毁之前', before.value);
})

onUnmounted(() => {
	console.log('销毁之后', before.value);
})

</script>