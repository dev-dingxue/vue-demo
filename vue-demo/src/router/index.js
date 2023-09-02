import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import zhujian from "@/router/zhujian"
import layui from "@/router/layui"
import qs from "qs"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',  //命名路由 
      meta: {
        title: "首页"
      },
      component: HomeView
    },
    {
      path: '/param',
      name: "param",
      component: () => import("../views/params/param-vue.vue"),
    }
    ,
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/students",
      children: [
        {
          path: "jichu1",
          meta: {
            title: "模板语法"
          },
          component: () => import("../views/students/jichu1.vue")
        }, {
          path: "jichu2",
          meta: {
            title: "响应式基础/计算属性"
          },
          component: () => import("../views/students/jichu2.vue")
        }, {
          path: "jichu3",
          meta: {
            title: "Class 与 Style 绑定"
          },
          component: () => import("../views/students/jichu3.vue")
        }, {
          path: "jichu4",
          meta: {
            title: "条件渲染"
          },
          component: () => import("../views/students/jichu4.vue")
        }, {
          path: "jichu5",
          meta: {
            title: "列表渲染"
          },
          component: () => import("../views/students/jichu5.vue")
        },
        {
          path: "jichu6",
          meta: {
            title: "监听事件"
          },
          component: () => import("../views/students/jichu6.vue")
        },
        {
          path: "jichu8",
          meta: {
            title: "css 预处理"
          },
          component: () => import("../views/students/jichu8.vue")
        },
        {
          path: "jichu9",
          meta: {
            title: "组件基础"
          },
          component: () => import("../views/students/jichu9.vue")
        }
      ]
    },
    {
      path: "/DeepComponent",
      children: [
        {
          path: "vue1",
          name: "vue1",
          meta: {
            title: "深入组件"
          },
          component: () => import("../views/DeepComponent/vue1.vue")
        }
      ]
    },
    {
      path: "/DeepStores",
      children: [
        {
          path: "deep",
          name: "deep",
          meta: { title: "基础状态管理" },
          component: () => import("../views/DeepStores/deep.vue")
        },
        {
          path: "deep2",
          name: "deep2",
          meta: { title: "基础状态管理" },
          component: () => import("../views/DeepStores/deep2.vue")
        }
      ]
    },
    {
      path: "/user",
      meta: {
        title: "正则表达式匹配 路由，userid只能匹配数值"
      },
      children: [
        {
          path: '/:userid?',
          meta: {
            title: "? 可选参数 匹配 /users 和 /users/posva"
          }
        },
      ]
    },
    {
      path: "/user/:username",
      name: "user",  //命名路由 
      component: () => import("../views/router/one.vue")
    },
    {
      path: "/search/:searchText",
      redirect: to => {
        return { path: "/search", query: { q: to.params.searchText } }
      }
    },
    ...zhujian,
    ...layui
    //{
    //  path: "/users",
    //  children: [
    //    // - /users    alias 别名  :id 参数
    //    // - /users/list
    //    // - /people
    //    { path: "people", component: () => import(""), alias: ['/people', 'list', '/:id'] }
    //  ]
    //}
  ],
  parseQuery: qs.parse,
  stringifyQuery: qs.stringify
});

// 全局 strict: true,  例如  /users/posva/  可以匹配尾部 / 部分 
//  局部匹配 /Users/posva 当 sensitive: true

//component 当包含 component 时 children的路由将渲染在父组件中此时父组件应当包含 router-view 组件

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "为获取到标题";
  next()
})

//替换当前位置

//router.push({ path: "/user", replace: true })

//router.replace({ path: "/user" })

export default router
