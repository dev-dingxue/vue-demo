// import './assets/main.css'

import { createApp, ref } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import MyAll from "./components/assembly/all-a.vue"
import MyBll from "./components/assembly/all-b.vue"

import Layui from "@layui/layui-vue"
import '@layui/layui-vue/lib/index.css'

const app = createApp(App)

app.config.errorHandler = (err) => {
	console.log(err);
}

//状态管理
const pinia = createPinia();

pinia.use(({ store }) => {
	//新的属性
	store.hello = ref("这是一个行创建的属性，在mainjs里面创建的呢");

	store.actionSub = () => {

	}

	store.$subscribe(() => {
		// 在存储变化的时候执行
	})

	store.$onAction(() => {
		// 在 action 的时候执行
	})

	store.$state.count = 10;
})

app.use(pinia)

app.use(router)

app.use(Layui)


//挂载全局组件
app.component("MyAll", MyAll).component("MyBll", MyBll)

app.mount('#app')

