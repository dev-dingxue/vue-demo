
<template>
    <div class="deep">
        <h1>基础状态管理</h1>
        <hr>
        <span>
            {{ stores.hello }}

            <br>
            <label :style="{ fontSize: size + 'px' }">我是变化的值：{{ stores.count }}</label>
        </span>
        <br>
        <button class="btn-default" @click="ReplaceStore">点击我加状态的值</button>

        <br>
        <br>
        <span>我是第二个状态库的值：{{ user.$state.count }}</span>
        <br>
        <br>
        <div class="dee" v-for="da in data">
            <p> 姓名：{{ da.name }}</p>
            <p> 年龄：{{ da.age }}</p>
            <p> 地址：{{ da.address }}</p>
        </div>

        <br>
        <span>
            {{ gets }}
        </span>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useCounterStore, useStore } from "@/stores/counter"

const stores = useCounterStore();

const user = useStore();

const size = ref(14);

function ReplaceStore() {
    stores.increment(() => {
        size.value = 20;
    })
}

user.testName()

const data = ref(user.testAction());

const gets = user.doubleCount;


</script>

<style scoped lang="scss">
.btn-default {
    margin-top: 5%;
    height: 35px;
    text-align: center;
    cursor: pointer;
    background-color: #3296fa;
    color: white;
    border: none;
    border-radius: 3px;
    font-size: 16px;

}
</style>



