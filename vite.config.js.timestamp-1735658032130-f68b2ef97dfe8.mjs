// vite.config.js
import path from "node:path";
import { defineConfig, loadEnv, splitVendorChunkPlugin } from "file:///D:/frontend/vue-tiptap-appmsg-editor/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/frontend/vue-tiptap-appmsg-editor/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import svgLoader from "file:///D:/frontend/vue-tiptap-appmsg-editor/node_modules/vite-svg-loader/index.js";
import WindiCSS from "file:///D:/frontend/vue-tiptap-appmsg-editor/node_modules/vite-plugin-windicss/dist/index.mjs";
import eslint from "file:///D:/frontend/vue-tiptap-appmsg-editor/node_modules/vite-plugin-eslint/dist/index.mjs";
import legacy from "file:///D:/frontend/vue-tiptap-appmsg-editor/node_modules/vite-plugin-legacy-swc/dist/index.mjs";
import AutoImport from "file:///D:/frontend/vue-tiptap-appmsg-editor/node_modules/unplugin-auto-import/dist/vite.js";
import { createHtmlPlugin } from "file:///D:/frontend/vue-tiptap-appmsg-editor/node_modules/vite-plugin-html/dist/index.mjs";
import { visualizer } from "file:///D:/frontend/vue-tiptap-appmsg-editor/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
var __vite_injected_original_dirname = "D:\\frontend\\vue-tiptap-appmsg-editor";
var vite_config_default = defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    base: env.VITE_BASE_URL,
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "src"),
        "@@": path.resolve(__vite_injected_original_dirname)
      }
    },
    css: {
      preprocessorOptions: {
        less: {},
        scss: {
          additionalData: ""
        }
      }
    },
    plugins: [
      vue(),
      AutoImport({
        imports: ["vue", "vue-router"],
        eslintrc: {
          enabled: true,
          filepath: "./eslintrc-auto-import.json"
        }
      }),
      svgLoader(),
      WindiCSS(),
      eslint(),
      legacy(),
      splitVendorChunkPlugin(),
      createHtmlPlugin({
        inject: {
          data: { build_time: (/* @__PURE__ */ new Date()).toLocaleString() }
        }
      }),
      visualizer({ open: true })
    ],
    server: {
      host: true,
      port: 5173,
      proxy: env.VITE_API_BASE_URL
    },
    build: {
      outDir: "dist",
      sourcemap: false,
      commonjsOptions: { transformMixedEsModules: true },
      rollupOptions: {
        output: {
          chunkFileNames: "js/[name]-[hash].js",
          entryFileNames: "js/[name]-[hash].js",
          assetFileNames: "[ext]/[name]-[hash].[ext]"
        }
      }
    },
    reportCompressedSize: false
    // gzip 压缩大小报告
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxmcm9udGVuZFxcXFx2dWUtdGlwdGFwLWFwcG1zZy1lZGl0b3JcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGZyb250ZW5kXFxcXHZ1ZS10aXB0YXAtYXBwbXNnLWVkaXRvclxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovZnJvbnRlbmQvdnVlLXRpcHRhcC1hcHBtc2ctZWRpdG9yL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHBhdGggZnJvbSBcIm5vZGU6cGF0aFwiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52LCBzcGxpdFZlbmRvckNodW5rUGx1Z2luIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xuaW1wb3J0IHN2Z0xvYWRlciBmcm9tIFwidml0ZS1zdmctbG9hZGVyXCI7XG5pbXBvcnQgV2luZGlDU1MgZnJvbSBcInZpdGUtcGx1Z2luLXdpbmRpY3NzXCI7XG5pbXBvcnQgZXNsaW50IGZyb20gXCJ2aXRlLXBsdWdpbi1lc2xpbnRcIjtcbmltcG9ydCBsZWdhY3kgZnJvbSBcInZpdGUtcGx1Z2luLWxlZ2FjeS1zd2NcIjtcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gXCJ1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlXCI7XG5pbXBvcnQgeyBjcmVhdGVIdG1sUGx1Z2luIH0gZnJvbSBcInZpdGUtcGx1Z2luLWh0bWxcIjtcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tIFwicm9sbHVwLXBsdWdpbi12aXN1YWxpemVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBjb21tYW5kLCBtb2RlIH0pID0+IHtcbiAgY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpLCBcIlwiKTtcbiAgcmV0dXJuIHtcbiAgICBiYXNlOiBlbnYuVklURV9CQVNFX1VSTCxcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiksXG4gICAgICAgIFwiQEBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgY3NzOiB7XG4gICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICAgIGxlc3M6IHt9LFxuICAgICAgICBzY3NzOiB7XG4gICAgICAgICAgYWRkaXRpb25hbERhdGE6IFwiXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgdnVlKCksXG4gICAgICBBdXRvSW1wb3J0KHtcbiAgICAgICAgaW1wb3J0czogW1widnVlXCIsIFwidnVlLXJvdXRlclwiXSxcbiAgICAgICAgZXNsaW50cmM6IHtcbiAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgIGZpbGVwYXRoOiBcIi4vZXNsaW50cmMtYXV0by1pbXBvcnQuanNvblwiLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBzdmdMb2FkZXIoKSxcbiAgICAgIFdpbmRpQ1NTKCksXG4gICAgICBlc2xpbnQoKSxcbiAgICAgIGxlZ2FjeSgpLFxuICAgICAgc3BsaXRWZW5kb3JDaHVua1BsdWdpbigpLFxuICAgICAgY3JlYXRlSHRtbFBsdWdpbih7XG4gICAgICAgIGluamVjdDoge1xuICAgICAgICAgIGRhdGE6IHsgYnVpbGRfdGltZTogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIHZpc3VhbGl6ZXIoeyBvcGVuOiB0cnVlIH0pLFxuICAgIF0sXG4gICAgc2VydmVyOiB7XG4gICAgICBob3N0OiB0cnVlLFxuICAgICAgcG9ydDogNTE3MyxcbiAgICAgIHByb3h5OiBlbnYuVklURV9BUElfQkFTRV9VUkwsXG4gICAgfSxcbiAgICBidWlsZDoge1xuICAgICAgb3V0RGlyOiBcImRpc3RcIixcbiAgICAgIHNvdXJjZW1hcDogZmFsc2UsXG4gICAgICBjb21tb25qc09wdGlvbnM6IHsgdHJhbnNmb3JtTWl4ZWRFc01vZHVsZXM6IHRydWUgfSxcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgY2h1bmtGaWxlTmFtZXM6IFwianMvW25hbWVdLVtoYXNoXS5qc1wiLFxuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiBcImpzL1tuYW1lXS1baGFzaF0uanNcIixcbiAgICAgICAgICBhc3NldEZpbGVOYW1lczogXCJbZXh0XS9bbmFtZV0tW2hhc2hdLltleHRdXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgcmVwb3J0Q29tcHJlc3NlZFNpemU6IGZhbHNlLCAvLyBnemlwIFx1NTM4Qlx1N0YyOVx1NTkyN1x1NUMwRlx1NjJBNVx1NTQ0QVxuICB9O1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9TLE9BQU8sVUFBVTtBQUNyVCxTQUFTLGNBQWMsU0FBUyw4QkFBOEI7QUFDOUQsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sZUFBZTtBQUN0QixPQUFPLGNBQWM7QUFDckIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sWUFBWTtBQUNuQixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLGtCQUFrQjtBQVQzQixJQUFNLG1DQUFtQztBQVd6QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLFNBQVMsS0FBSyxNQUFNO0FBQ2pELFFBQU0sTUFBTSxRQUFRLE1BQU0sUUFBUSxJQUFJLEdBQUcsRUFBRTtBQUMzQyxTQUFPO0FBQUEsSUFDTCxNQUFNLElBQUk7QUFBQSxJQUNWLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxRQUNsQyxNQUFNLEtBQUssUUFBUSxnQ0FBUztBQUFBLE1BQzlCO0FBQUEsSUFDRjtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gscUJBQXFCO0FBQUEsUUFDbkIsTUFBTSxDQUFDO0FBQUEsUUFDUCxNQUFNO0FBQUEsVUFDSixnQkFBZ0I7QUFBQSxRQUNsQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxJQUFJO0FBQUEsTUFDSixXQUFXO0FBQUEsUUFDVCxTQUFTLENBQUMsT0FBTyxZQUFZO0FBQUEsUUFDN0IsVUFBVTtBQUFBLFVBQ1IsU0FBUztBQUFBLFVBQ1QsVUFBVTtBQUFBLFFBQ1o7QUFBQSxNQUNGLENBQUM7QUFBQSxNQUNELFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLHVCQUF1QjtBQUFBLE1BQ3ZCLGlCQUFpQjtBQUFBLFFBQ2YsUUFBUTtBQUFBLFVBQ04sTUFBTSxFQUFFLGFBQVksb0JBQUksS0FBSyxHQUFFLGVBQWUsRUFBRTtBQUFBLFFBQ2xEO0FBQUEsTUFDRixDQUFDO0FBQUEsTUFDRCxXQUFXLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFBQSxJQUMzQjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTyxJQUFJO0FBQUEsSUFDYjtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLE1BQ1IsV0FBVztBQUFBLE1BQ1gsaUJBQWlCLEVBQUUseUJBQXlCLEtBQUs7QUFBQSxNQUNqRCxlQUFlO0FBQUEsUUFDYixRQUFRO0FBQUEsVUFDTixnQkFBZ0I7QUFBQSxVQUNoQixnQkFBZ0I7QUFBQSxVQUNoQixnQkFBZ0I7QUFBQSxRQUNsQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxzQkFBc0I7QUFBQTtBQUFBLEVBQ3hCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
