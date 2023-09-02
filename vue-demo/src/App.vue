<script setup>
import { RouterLink, RouterView } from 'vue-router'
import layui from "@/router/layui"
import zhujian from '@/router/zhujian'
import { ref } from 'vue';

const openKeys4 = ref(["7"])
const selectedKey = ref("5")

const layui_src = ref(layui)
const zhujian1 = ref(zhujian)

const collapse = ref(false)
const isTree = ref(true)

const icons_home = ref("layui-icon-home")
const icons_child = ref("layui-icon-file")


</script>

<template>
  <lay-layout class="example">
    <lay-header>
      <lay-button class="example-header">
        <lay-icon type="layui-icon-align-left" color="#009688"></lay-icon>
      </lay-button>
    </lay-header>
    <lay-layout>
      <lay-side>
        <lay-menu theme="light" v-model:selected-key="selectedKey" v-model:tree="isTree" v-model:open-keys="openKeys4"
          :collapse="collapse">
          <lay-sub-menu title="Vue基础" id="1">
            <template #title> <lay-icon :type="icons_home"></lay-icon> Vue基础</template>
            <lay-menu-item id="1-1" to="/" title="Home">
              <lay-icon :type="icons_child"></lay-icon> 首页
            </lay-menu-item>
            <lay-menu-item id="1-2" to="/students/jichu9">
              <lay-icon :type="icons_child"></lay-icon>组件基础
            </lay-menu-item>
            <lay-menu-item id="1-3" to="/about">
              <lay-icon :type="icons_child"></lay-icon>About
            </lay-menu-item>
            <lay-menu-item id="1-4" to="/students/jichu1">
              <lay-icon :type="icons_child"></lay-icon>模板语法
            </lay-menu-item>
            <lay-menu-item id="1-5" to="/students/jichu2">
              <lay-icon :type="icons_child"></lay-icon>响应式基础
            </lay-menu-item>
            <lay-menu-item id="1-6" to="/students/jichu3">
              <lay-icon :type="icons_child"></lay-icon>Class 与 Style 绑定
            </lay-menu-item>
            <lay-menu-item id="1-7" to="/students/jichu4">
              <lay-icon :type="icons_child"></lay-icon>条件渲染
            </lay-menu-item>
            <lay-menu-item id="1-8" to="/students/jichu5">
              <lay-icon :type="icons_child"></lay-icon>列表渲染
            </lay-menu-item>
            <lay-menu-item id="1-9" to="/students/jichu6">
              <lay-icon :type="icons_child"></lay-icon>监听事件
            </lay-menu-item>
            <lay-menu-item id="1-10" to="/students/jichu8">
              <lay-icon :type="icons_child"></lay-icon>css 预处理
            </lay-menu-item>
          </lay-sub-menu>

          <lay-sub-menu title="深入组件" id="2">
            <template #title> <lay-icon :type="icons_home"></lay-icon> 深入组件</template>
            <lay-menu-item id="2-1" to="/DeepComponent/vue1">
              <lay-icon :type="icons_child"></lay-icon>深入组件
            </lay-menu-item>
            <lay-menu-item id="2-2" to="/assembly/one1">
              <lay-icon :type="icons_child"></lay-icon>深入组件2
            </lay-menu-item>
          </lay-sub-menu>

          <lay-sub-menu title="基础状态管理" id="3">
            <template #title> <lay-icon :type="icons_home"></lay-icon> 基础状态管理</template>
            <lay-menu-item v-for="(item, index) in zhujian1" :id="'3' + index" :to="item.path">
              <lay-icon :type="icons_child"></lay-icon> {{ item.meta.title }}
            </lay-menu-item>
          </lay-sub-menu>

          <lay-sub-menu title="layui组件" id="4">
            <template #title> <lay-icon :type="icons_home"></lay-icon> layui组件</template>
            <lay-menu-item v-for="(item, index) in layui_src" :id="'4' + index" :to="item.path">
              <lay-icon :type="icons_child"></lay-icon> {{ item.meta.title }}
            </lay-menu-item>
          </lay-sub-menu>

          <lay-sub-menu title="命名组件" id="5">
            <template #title> <lay-icon :type="icons_home"></lay-icon> 命名组件</template>
            <lay-menu-item id="5-1" :to="{ name: 'user', params: { username: 'one' } }">
              <lay-icon :type="icons_child"></lay-icon>
              命名组件
            </lay-menu-item>
          </lay-sub-menu>

        </lay-menu>
      </lay-side>
      <lay-body class="example-layout">
        <RouterView />
      </lay-body>
    </lay-layout>
  </lay-layout>
</template>

<style lang="scss">
.example-header {
  border: none !important;

  i {
    font-size: 20px;
  }
}

.layui-nav-child {
  .layui-nav-item {
    padding-left: 3%;

    i {
      padding-right: 5px;
    }
  }
}

.example .layui-footer,
.example .layui-header {
  line-height: 60px;
  text-align: left;
  /* background: #87ca9a; */
  padding-left: 13%;
}

.example .layui-header {
  border-bottom: 1px dotted #009688;
}

.example .layui-body {
  padding: 2%;
  height: 100%;
}
</style>
