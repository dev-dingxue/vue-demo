
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
    fetch("../../../public/data/test.json").then(res => {
        if (res.ok) {
            return res.json();
        }
        return res;
    }).then(data => {
        console.log(data);
    })
}

const api = async () => {
    const respone = await fetch("", {
        method: "get",
        headers: {
            "": "",
        }
    }).then(resp => resp.json()).then(data => data);

    console.log(respone);
}

</script>