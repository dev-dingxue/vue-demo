
<template>
    <div class="one1">
        <h1>组件1</h1>
        <MyAll>
            我还在全局组件中插入了一些值
        </MyAll>
        <br>
        <br>
        <part :title="_name" test="name"></part>
    </div>
</template>

<script setup >
import part from '@/components/assembly/part-view.vue'
import { ref } from 'vue';

const _name = ref("插入了")

</script>

<style scoped>
@import url(../css/zhujian1.scss);
</style>
