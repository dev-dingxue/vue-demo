<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-bind="data">
      {{ message }} --- {{ msg }}
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref } from "vue";
import { useRoute } from "vue-router";

const qs = useRoute();

const link_data = qs.params;

console.log(link_data);


const message = ref<string>("hello word !!!")

const msg: string = "namespace";

interface ClassDemo {
  id: string,
  class: string,
  title: string,
  number: number,
}

const data: ClassDemo = {
  id: "test-demo",
  class: "about-child",
  title: "about-child",
  number: 0
}

document.title = "about";

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    margin-top: 5%;
    width: 100%;
  }

  .about-child {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
}
</style>
