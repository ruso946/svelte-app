import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/svelte-app/",
  plugins: [svelte()],
  build: {
    outDir: "docs",
  },
});

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: "/svelte-app-static/",
//   plugins: [svelte()],
// })
