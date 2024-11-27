import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import liveReload from "vite-plugin-live-reload";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { glob } from "glob";

function moveOutputPlugin() {
  return {
    name: "move-output",
    enforce: "post",
    apply: "build",
    async generateBundle(options, bundle) {
      for (const fileName in bundle) {
        if (fileName.startsWith("public/")) {
          const newFileName = fileName.slice("public/".length);
          bundle[fileName].fileName = newFileName;
        }
      }
    },
  };
}

export default defineConfig({
  base: "/jsFinal/",
  plugins: [
    liveReload(["./src/**/*.js", "./src/**/*.ejs", "./public/**/*.html"]),
    ViteEjsPlugin(),
    moveOutputPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "public"),
    },
  },
  server: {
    // 啟動 server 時預設開啟的頁面
    open: "/jsFinal/index.html",
  },
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        glob
          .sync("public/**/*.html")
          .map((file) => [
            path.relative(
              "public",
              file.slice(0, file.length - path.extname(file).length),
            ),
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
    },
    outDir: "dist",
  },
});
