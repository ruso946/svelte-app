import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/svelte-app/",
  plugins: [svelte()],
  build: {                //estas lineas se agregan para que haya un deploy automatico 
    outDir: "docs",       //en gh-pages en la carpeta docs, en vez de la original que era dist
  },                      //porque no encuentro el modo de que que gh-pages me de la opcion de elegir otra carpeta
});
