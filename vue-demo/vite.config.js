import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/web': {  // 配置需要跨域的路由路径
        target: 'http://localhost:5295',  // 设置目标服务器的地址
        changeOrigin: true,  // 开启跨域
        rewrite: (path) => path.replace(/^\/web/, '')  // 可选：重写路径，去掉前缀 '/api'
      }
    }
  }
})
