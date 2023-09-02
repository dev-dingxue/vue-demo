
<template>
    <h1>兄弟组件传参</h1>
    <br>

    <h2>我是父组件</h2>
    <hr>
    <div>
        <p> 我是值：{{ _name }}</p>
        <p> <button @click="change">点击我</button></p>
    </div>
    <br>
    <br>

    <h3>我是兄弟组件1</h3>
    <hr>
    <xiongdi1 />
    <br><br>

    <h3>我是兄弟组件2</h3>
    <hr>
    <xiongdi2 />

    <br><br>
</template>
<script setup>
import { provide, readonly, ref } from "vue";
import xiongdi1 from "./param-vue1.vue"
import xiongdi2 from "./param-vue2.vue"
import apiClient from "../../Library/apiClient"

const _name = ref("父亲呀")


provide("message", readonly(_name))

const change = async () => {
    _name.value = "10000";

    // const _get = await apiClient.GET("/web/api/test/getjson");

    // console.log(_get.data);

    // console.log('.............................................');

    // const _post = await apiClient.POST_JSON("/web/api/test/postjson", {
    //     TestID: 1,
    //     TestName: "ceshi",
    //     TestDesc: "sssssssssssssssssssss"
    // });

    // console.log(_post.data);

}









</script>