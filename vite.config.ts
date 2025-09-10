import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vuesetupextend from 'vite-plugin-vue-setup-extend'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),vuesetupextend()],
  server:{
    port:3000
  },
  resolve:{
    alias:{
      // "@":path.resolve("./src")
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})