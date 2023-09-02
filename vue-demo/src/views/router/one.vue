
<template>
	<div id="router">
		命名路由
		<br>
		{{ namespace }}
	</div>
</template>

<script setup>

import { ref } from "vue";

const namespace = ref("命名路由那")

</script>