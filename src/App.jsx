// 导入 react
import React from 'react';

// 导入路由模块
import { HashRouter, Route, Link } from 'react-router-dom';

// 导入 ant 框架
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

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
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">影院首页</Menu.Item>
                    <Menu.Item key="2">热播电影</Menu.Item>
                    <Menu.Item key="3">关于我们</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px', background: '#fff' }}>
                
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by 一杆梅子酒
            </Footer>
        </Layout>
        </HashRouter>
    }
}