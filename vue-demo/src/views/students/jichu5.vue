
<template>
	<div class="jichu5">
		{{ name }}

		<br>
		<hr>
		<div v-for="item in arrdata">
			<span>{{ item.name }} {{ item.value }}</span>
		</div>
		<br>
		<div>
			<button @click="get_list">点击我看看</button>
		</div>

	</div>
</template>

<script setup>
import { reactive, ref, toRef, toRefs } from 'vue';
import axios from 'axios'


const name = ref("我是列表渲染")

const arrdata = reactive([{
	name: "",
	value: ""
}])

const arr = toRef(arrdata)

console.log(arr);

const torefs = toRefs(arr)

console.log(torefs);

function get_list() {

	axios.get("../../../public/data/test.json")
		.then((data) => {
			let datastr = data.data.arr;
			arrdata.push(...datastr)
		})
}


</script>