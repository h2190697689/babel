# babel
- 将 es2015代码做向后兼容，以便能够在当前及旧版本浏览器中使用

## @babel/core
- babel核心库,包括语法转换的功能

## @babel/cli 
- babel在命令行能够使用

## preset (预设)
- 插件就是小型的js程序,用于指导babel如何对代码进行转换



## 安装
- npm install --save-dev @babel/core @babel/cli @babel/preset-env
- npm install --save @babel/polyfill 

### @babel/polyfill 
- 包括core-js 和 自定义的 regenerator runtime
- @babel/polyfill 是对于全局范围而言的，容易造成污染， 可以使用  @babel/plugin-transform-runtime代替
- @babel/env 提供了 "useBuiltIns" 参数，当此参数设置为 "usage" 时，加载所需要的polyfill部分