import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { user } from '@/stores/user'
import axios from "axios"
import qs from "qs"

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  const doubleCount = computed(() => count.value * 2)

  function increment(callback) {

    callback && callback()

    count.value++
  }

  function deepData() {

    return {
      "data": new Date().getTime()
    }
  }

  return { count, doubleCount, increment, deepData };

})

export const useStore = defineStore("useStore", {
  state: () => ({
    count: 10,
    userArr: []
  }),

  getters: {
    doubleCount(state) {
      state.count = 150;
      return state.count
    }
  },
  actions: {
    testName() {
      this.$state.count = 30;
    },
    testAction() {
      this.$state.userArr.length = 0;

      this.$state.userArr.push(user);

      return this.$state.userArr;
    },
    get(url) {
      axios.get(url).then((respone) => {
        return respone;
      })
    },
    get_param(url, data) {
      axios.get(url, qs.stringify(data)).then((respone) => { return respone });
    }
  }
})

