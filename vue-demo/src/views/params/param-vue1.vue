
<template>
    <div>
        我是兄弟1 {{ _name }}
    </div>
    <p>
        <button @click="xiondi">兄弟1</button>
    </p>
</template>

<script setup>
import { inject } from 'vue';

const _name = inject("message");

const xiondi = () => {

}

</script>