import { defineConfig } from "vite";

export default defineConfig({
  root: "src", // your HTML, JS, CSS are in src
  build: {
    outDir: "../dist", // output build files outside src
  },
  server: {
    open: true, // automatically opens the browser
  },
});
