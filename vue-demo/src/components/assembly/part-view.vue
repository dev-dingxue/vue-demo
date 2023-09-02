<template>
    <div class="part">
        <h3>我是局部组件</h3>
        <br>
        {{ title }} -- {{ test }}
    </div>
</template>


<script setup>

defineProps({
    title: "",
    test: ""
})


</script>