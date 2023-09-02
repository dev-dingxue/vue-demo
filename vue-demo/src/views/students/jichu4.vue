
<template>
	<div class="jichu4">
		<label for="">条件渲染</label>
		<!--<br>
		<div v-if="awesome">
			我是 {{ awesome }} 我要显示
		</div>-->
		<br>
		<button @click="awesome = !awesome">Toggle</button>

		<h1 v-if="awesome">Vue is awesome!</h1>
		<h1 v-else>Oh no 😢</h1>

		<div class="" style="font-size: 30px;color: red;">
			<span v-if="type == 'a'">a</span>
			<span v-else-if="type == 'b'">b</span>
			<span v-else-if="type == 'c'">c</span>
			<span v-else-if="type == 'd'">d</span>
			<span v-else>not a b c </span>
		</div>
		<div>
			{{ yes }}
		</div>

		<template v-if="yes">
			<label for="">hahaha</label>
			{{ number.title }} {{ number.desc }}
		</template>

		<template v-if="number.ok">
			<h1>Title</h1>
			<p>Paragraph 1</p>
			<p>Paragraph 2</p>
		</template>

		<br>
		<div>
			您的名称信息 ：{{ fullName }}
		</div>

		<div v-show="show">
			我是 v-show
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const awesome = ref(true)

const type = ref('c')

const yes = ref(true)

const number = reactive({
	title: "测试文件",
	desc: "ssssssssssss",
	ok: true
})

const show = ref(true)

class students {
	id: number;
	fistName: string;
	lastName: string;
	age: number;
	address: string;
	fullName: string;

	constructor(id: number, fistName: string, lastName: string, age: number, address: string) {
		this.id = id;
		this.fistName = fistName;
		this.lastName = lastName;
		this.age = age;
		this.address = address;
	}

	public get_stu_info(): string {
		return this.fistName + " _ " + this.lastName + " _ " + this.address;
	}

}

let newstu = new students(10, "LI", "DINGXUE", 35, "杭州市余杭区");

let fullName = newstu.get_stu_info();



</script>