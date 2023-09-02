<template>
    <div>
        我是兄弟2 {{ _name }}
    </div>
</template>

<script setup>
import { inject } from 'vue';


const _name = inject("message");

</script>