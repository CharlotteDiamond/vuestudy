import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuesetupextend from 'vite-plugin-vue-setup-extend'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),vuesetupextend()],

  server:{
    port:3000
  },
})
