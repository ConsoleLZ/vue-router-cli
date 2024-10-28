import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src",
    }
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 给导入的路径最后加上 ; 
        additionalData: '@import "@/assets/css/global.scss";'
      }
    }
  }
});
