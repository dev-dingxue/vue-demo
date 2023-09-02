
<template>
	<div class="jichu10">
		<h1>我是子组件</h1>
		<hr>
		<span>
			我是父组件传的值：{{ title }}
			<slot></slot>
		</span>

		<br>
		<hr>
		<br><br>
		<button @click="emit('enlarge-text')">Enlarge + +</button>

		<br><br>

		<button @click="emit('enlarge-del')">Enlarge - - </button>
		<br><br>
	</div>
</template>

<script setup>

import { ref } from "vue";

defineProps(["title"])

//父组件接受此事件
const emit = defineEmits(["enlarge-del", "enlarge-text"])
emit("enlarge-del")
emit("enlarge-text")

</script>

