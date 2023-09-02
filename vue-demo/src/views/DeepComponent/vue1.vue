
<template>
	<div class="jichu1">
		<h1>深入组件</h1>
		<br>
		<span>
			{{ _name }}
		</span>
	</div>
</template>

<script setup>
import { computed, ref } from 'vue';

const _name = ref("namespace");

const coup = computed({
	count:0,
	title:"string is a name "
})


</script>