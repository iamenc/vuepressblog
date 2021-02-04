# vuepress Demo

## yaml Front Matter

::: tip 使用yaml配置页面
- yaml 配置文件放置在md文件最顶端
:::
```yaml
---
navbar: false
home: true
heroImage: /logo.jpg
heroText: Hello
tagline: world
actionText: 快速上手 →
actionLink: http://www.dgman.work
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```


## 自定义容器

::: tip 使用yaml配置页面
- yaml 配置文件放置在md文件最顶端
:::
```txt
::: tip [自定义标题]
这是一个提示
:::
```