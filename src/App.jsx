// 导入 react
import React from 'react';

// 导入路由模块
import { HashRouter, Route, Link } from 'react-router-dom';

// 导入 ant 框架
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

// 导入组件
import HomeContainer from './components/Home/HomeContainer.jsx'
import AboutContainer from './components/About/AboutContainer.jsx'
import MovieContainer from './components/Movie/MovieContainer.jsx'

// 导入样式
import styles from './css/app.scss';
console.log(styles)

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return <HashRouter>
            <Layout className="layout" style={{ height: '100%' }}>
            <Header>
                <div className={ styles.logo } />
                {/* [window.location.hash.split('/')[1] --- 获取锚点值，做状态管理 */}
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[window.location.hash.split('/')[1]]}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="home">
                        <Link to="/home">影院首页</Link>
                    </Menu.Item>
                    <Menu.Item key="movie">
                        <Link to="/movie/in_theaters/1">热播电影</Link>
                    </Menu.Item>
                    <Menu.Item key="about">
                        <Link to="/about">关于我们</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{background: '#fff', flex: 1 }}>
                {/* 配置路由规则 */}
                <Route path="/home" component={ HomeContainer }></Route>
                <Route path="/movie" component={ MovieContainer }></Route>
                <Route path="/about" component={ AboutContainer }></Route>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by 一杆梅子酒
            </Footer>
        </Layout>
        </HashRouter>
    }
}