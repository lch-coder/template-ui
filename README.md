# template-ui

一个基于 vue3.x + ts + vue-cli5 开发组件 npm 包的模板。（使用此模板全局搜索 template-ui 并修改即可）

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### 登录到 npm

tip : 发布之前需要登录

首先需要到 npm 上注册一个账号，注册过程略。
如果配置了淘宝镜像，先设置回 npm 镜像：

```js
$ npm config set registry http://registry.npmjs.org
```

然后在终端执行登录命令，输入用户名、密码、邮箱即可登录。

```js
//登录
$ npm login
```

### 发布到 npm

执行发布命令，发布组件到 npm

```js
//发布
$ npm publish
```

### 发布成功

发布成功后稍等几分钟，即可在 npm 官网搜索到。(会发送邮件)

# 使用新发布的组件库

### 安装组件库依赖全局注册

在需要使用的 vue 项目中 npm install template-ui 添加进来，然后在 main.js 中进行全局注册，如下：

```js
import { createApp } from "vue";
import App from "./App.vue";
import templateUi from "template-ui";
const app = createApp(App);
//组件注册
app.use(templateUi);

app.mount("#app");
```

### 按需引入

```js
import { createApp } from "vue";
import App from "./App.vue";
import { MyButton } from "template-ui";
const app = createApp(App);
//组件注册
app.use(MyButton);

app.mount("#app");
```

### 在组件中使用

```html
<template>
  <div>
    <MyButton></MyButton>
  </div>
</template>
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
