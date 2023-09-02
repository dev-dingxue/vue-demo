
<template>
	<div class="jichu1">
		<h1>点击下面的我</h1>
		<br>
		<button @click="increment" class="button">
			点击我: {{ state.count }}
		</button>
		<br>
		<p>
			神奇的响应式编程：{{ count.count }} / {{ one }} / {{ two }}
		</p>
	</div>
</template>

<script setup lang="ts">

import { ref, reactive } from "vue";

const state = reactive({ count: 0 })

function increment() {
	state.count++
	if (state.count > 10) {
		alert("别点了，烦死了");
	}
}

const count = ref({ count: 0 })

count.value.count = 10

const { one, two } = {
	one: "1233333",
	two: 100000000000000
};



</script>

<style>
.button {
	width: 100px;
	height: 35px;
	line-height: 35px;
	text-align: center;
	font-size: 16px;
	border-radius: 3px;
	color: white;
	background-color: #3296fa;
	border: none;
	outline: none;
	cursor: pointer;
}
</style>