// js 打包入口文件

// react -- 用来创建 react 组件、组件生命周期等这些东西
// react-dom -- 封装了和 DOM 操作相关的包
import React from 'react';
import ReactDOM from 'react-dom';

// 导入外部组件
import Hello from './components/Hello.jsx';

ReactDOM.render(<Hello />, document.getElementById('box'))