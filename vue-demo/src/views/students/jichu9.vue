
<template>
	<div class="jichu9" :style="{ fontSize: postFontSize + 'em' }">
		<h1>组件基础：我是父组件</h1>
		<hr>
		<br>
		<br>
		<son @enlarge-text="postFontSize += 0.1" @enlarge-del="postFontSize -= 0.1" v-for="item in posts" :key="item.id"
			:title="item.title">
			{{ _name }}
		</son>
	</div>
</template>

<script setup>

import { ref } from "vue";
import son from "../students/jichu10.vue"

const _name = ref("我是父组件水水水水水水水水水水水水水")

const posts = ref([
	{ id: 1, title: 'My journey with Vue' },
	{ id: 2, title: 'Blogging with Vue' },
	{ id: 3, title: 'Why Vue is so fun' }
])

const postFontSize = ref(1)

</script>