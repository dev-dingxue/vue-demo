<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <lay-timeline>
    <lay-timeline-item>
      <template #title> 2024年 </template>
      <h4>
        <a target="_blank" onclick='window.open("http://www.layui-vue.com/zh-CN/guide/introduce")'>layui-vue指南</a>
      </h4>
    </lay-timeline-item>

    <lay-timeline-item>
      <template #title> 2024年 </template>
      <p>layui-vue 未知</p>
    </lay-timeline-item>

    <lay-timeline-item>
      <template #title> 2023年 </template>
      <p> layui-vue 里程碑版本 2.0.0 发布</p>
    </lay-timeline-item>

    <lay-timeline-item title=" 2022年">
      <p> layui-vue 里程碑版本 1.0.0 发布</p>
    </lay-timeline-item>

    <lay-timeline-item title="2017年">
      <p> layui 里程碑版本 2.0 发布</p>
    </lay-timeline-item>

    <lay-timeline-item title="2016年">
      <p>layui 首个版本发布</p>
    </lay-timeline-item>

    <lay-timeline-item title="2015年">
      <p> layui 孵化</p>
    </lay-timeline-item>

  </lay-timeline>
</template>
<style scoped lang="scss">
p,
a {
  cursor: pointer;

  &:hover {
    font-size: 18px;
  }
}
</style>
