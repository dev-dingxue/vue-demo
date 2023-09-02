
<template>
	<div class="jichu2">
		<p>Has published books:</p>
		<span>
			{{ author.books.length > 0 ? 'Yes' : 'No' }}
		</span>
		<br>
		<span>
			{{ publishedBooksMessage }}
		</span>
		<br>
		<span>
			当前时间: {{ now }}
		</span>
		<br>
		<span>
			你的名字：{{ fistNmae }} {{ lastName }}
		</span>

		<br>

		<button @click="setName" class="button">点击我改变你的名称</button>
	</div>
</template>

<script setup>

import { ref, reactive, computed } from "vue";

const author = reactive({
	name: 'John Doe',
	books: [
		'Vue 2 - Advanced Guide',
		'Vue 3 - Basic Guide',
		'Vue 4 - The Mystery'
	]
})

const publishedBooksMessage = computed(() => {
	return author.books.length > 0 ? true : false;
})

const now = computed(() => {
	return Date.now()
})

const fistNmae = ref("join")

const lastName = ref("test")

const fullName = computed({
	get() {
		return fistNmae.value + ' ' + lastName.value;
	},
	set(newValue) {
		[fistNmae.value, lastName.value] = newValue.split(' ')
	}
})

//computed 计算属性 默认是只读的 加入set后 可读取和写入  ref reactive 响应式 两者ref更为可观

function setName() {
	fullName.value = "LI DINGXUE";
}



</script>


<style>
.button {
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