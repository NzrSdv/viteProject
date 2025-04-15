import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      "/apiProducts": {
        target: "https://67e54df518194932a58579f1.mockapi.io/Products",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apiProducts/, ""),
      },
      "/apiUsers": {
        target: "https://67e54df518194932a58579f1.mockapi.io/users",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apiUsers/, ""),
      },
    },
  },
  plugins: [vue(), tailwindcss()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
