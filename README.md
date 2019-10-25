# babel
- 将 es2015代码做向后兼容，以便能够在当前及旧版本浏览器中使用

## @babel/core
- babel核心库,包括语法转换的功能

## @babel/cli 
- babel在命令行能够使用

## preset (预设)
- 插件就是小型的js程序,用于指导babel如何对代码进行转换

## 模块
- @babel/parser 将源代码解析成 AST。
- @babel/generator 将AST解码生 js代码。
- @babel/core 包括了整个babel工作流，也就是说在@babel/core里面我们会使用到@babel/parser、transformer[s]、以及@babel/generator。
- @babel/code-frame 用于生成错误信息并且打印出错误原因和错误行数。（其实就是个console工具类）
- @babel/helpers 也是工具类，提供了一些内置的函数实现，主要用于babel插件的开发。
- @babel/runtime 也是工具类，但是是为了babel编译时提供一些基础工具库。作用于transformer[s]阶段，当然这是一个工具库，如果要使用这个工具库，还需要引入@babel/plugin-transform-runtime，它才是transformer[s]阶段里面的主角。
- @babel/template 也是工具类，主要用途是为parser提供模板引擎，更加快速的转化成AST
- @babel/traverse 也是工具类，主要用途是来便利AST树，也就是在@babel/generator过程中生效。
- @babel/types 也是工具类，主要用途是在创建AST的过程中判断各种语法的类型。





## 安装
- npm install --save-dev @babel/core @babel/cli @babel/preset-env
- npm install --save @babel/polyfill 

### @babel/polyfill 
- 包括core-js 和 自定义的 regenerator runtime
- @babel/polyfill 是对于全局范围而言的，容易造成污染， 可以使用  @babel/plugin-transform-runtime代替
- @babel/env 提供了 "useBuiltIns" 参数，当此参数设置为 "usage" 时，加载所需要的polyfill部分