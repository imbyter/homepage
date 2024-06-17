简体中文 | [English](./README_EN.md)

## imbyter - 个人主页

我自己使用的主页网站源码，界面简洁，但包括的模块丰富够用：

![imbyter主页](/screenshots/light.jpg)
![imbyter主页](/screenshots/dark.jpg)

> 原项目作者[@ZYYO666](https://github.com/ZYYO666)，基本所有功能均由原作者完成，我([@imbyter](https://github.com/imbyter))仅在原版基础上对界面细节进行了二次优化，并规整了代码格式。

最终效果：[https://imbyter.com](https://imbyter.com)

### 🎉 功能特点

- [x] 纯静态（HTML+CSS+JS）
- [x] 响应式
- [x] 内置5套可选主题
- [x] 明暗模式切换
- [x] 体积精简，压缩后（含图片）仅有2.52 MB

### ⚙️ 部署使用

因为项目为纯静态页面，下载后直接直接打开根目录 `index.html` 即可访问。

- 服务器部署时**不**需要任何依赖环境😀。

### 🥝 其它说明

- 页面底部 **技术栈** 模块的图片可以使用 [skill-icons](https://github.com/tandpfun/skill-icons) 直接生成。也可以在其生成后，离线保存为`svg`格式使用。

- 背景大图在`\static\js\script.js`中动态实现加载：
  - 当在移动端打开页面时（通过`isMobile`函数进行判断），直接以暗黑模式显示，不加载背景大图。
  - 当在PC端打开页面时，默认显示亮色模式，并且主动加载背景大图。

- PC端页面默认**显示**明暗模式切换按钮，移动端页面**隐藏**了明暗模式切换按钮。可以在`\static\css\style.css`中自定义修改。

- PC端页面默认有5个主题可选，可以在`\static\css\theme.css`中自由切换（显示页面中不支持切换）。