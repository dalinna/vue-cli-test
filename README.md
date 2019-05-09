# hello-world

所有环境都要先安装依赖

npm是node的包管理工具，所以要先安装node

## 安装所有依赖
```
npm install
```

### 启动开发环境
```
npm run serve
```

### 打包
```
npm run build
```

- 开发中用的最多的就是src目录，一般都是在那个目录下写
- src > assets存一些静态的文件
- src > views是单个页面
- src > components是组件：如果一个东西在多出用到最好是封装成组件
- src > router.hs是配置路由的 
- APP.vue是所以页面的基础
- main.js 需要在全局引用的插件就在这里引用


