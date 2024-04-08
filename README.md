# vite-pure-template

一个纯净的 vite 模板，仅统一配置与目录结构

## 目录结构

参考 [Nuxt 目录结构](https://nuxt.com/docs/guide/directory-structure/app)

```
vite-pure-template
├─dist
├─node_modules
├─public
├─src
|  ├─assets
|  |   ├─styles
|  |   ├─images
|  ├─components
|  ├─composables
|  ├─layouts
|  ├─middleware
|  ├─modules
|  ├─pages
|  ├─plugins
|  ├─router
|  ├─stores
|  ├─App.vue
|  ├─main.js
├─.env
├─.env.development
├─.env.production
├─.eslintrc.cjs
├─.gitignore
├─.prettier.js
├─index.html
├─package-lock.json
├─package.json
├─postcss.config.js
├─README.md
├─vite.config.js
├─windi.config.js
```

## 集成特性

### 环境变量

**VITE_BASE_URL** 公共基础路径

**VITE_API_BASE_URL** API 请求路径

### 插件

- @vitejs/plugin-vue

- vite-plugin-html

- vite-plugin-legacy-swc

- eslint：@babel/eslint-parser、vite-plugin-eslint、eslint-plugin-vue

- prettier：eslint-config-prettier、eslint-plugin-prettier

- vite-svg-loader

- windicss

- sass/less

- postcss: autoprefixer/cssnano

- unplugin-auto-import

eslint auto-import兼容
