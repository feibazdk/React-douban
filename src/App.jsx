import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from "react-router-dom";

// 导入根组件
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Movie from "./components/Movie.jsx";

export default class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render() {
        // 使用 HashRouter 把 App 根组件元素包裹起来后，表示网站已经启动路由
        // 一个网站中，只需使用一次 HashRouter 即可
        return <HashRouter>
            {/* 在一个 HashRouter 中只能有一个根元素*/}
            <div>
                <h1>网站项目根目录</h1>
                <hr/>
                <Link to="/home">首页</Link> &nbsp;&nbsp;
                <Link to="/movie/hot/110">电影</Link> &nbsp;&nbsp;
                <Link to="/about">关于</Link>
                <hr/>
                {/* 
                    Router 创建的标签，就是路由的规则，
                        path：表示要匹配的路由
                        component 表示当前要展示的子组件
                    Rouer 的作用
                        1、表示一个路由规则
                        2、当作占位符，将来匹配到的组件要放到现在的位置
                */}
                <Route path="/home" component={ Home }></Route>
                {/* 
                    默认情况下，路由中的规则是模糊匹配的。如果匹配成功，就会展示这个路由对应俄组件
                    如果要匹配参数，可以在匹配规则中，使用 : 修饰符，表示这个位置匹配到的是参数
                    如果想让路由规则精确匹配，需要为为 route 添加 exact 属性，表示启动精确匹配
                */}
                <Route path="/movie/:name/:num" component={ Movie } exact></Route>
                <Route path="/about" component={ About }></Route>
            </div>
            </HashRouter>
    }
}