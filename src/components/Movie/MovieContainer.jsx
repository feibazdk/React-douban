import React from 'react';

// 导入路由 
import { Route, Link, Switch } from "react-router-dom"

// 导入组件
import { Layout, Menu,  Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

// 导入组件
import MovieList from "./MovieList.jsx"
import MovieDetail from "./MovieDetail.jsx"

export default class MovieContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return <Layout style={{ height: '100%' }}>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={[window.location.hash.split('/')[2]]}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item key="in_theaters">
                            <Link to="/movie/in_theaters/1">正在热映</Link>
                        </Menu.Item>
                        <Menu.Item key="coming_soon">
                            <Link to="/movie/coming_soon/1">即将上映</Link>
                        </Menu.Item>
                        <Menu.Item key="top250">
                            <Link to="/movie/top250/1">Top250</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ paddingLeft: '1px' }}>
                    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                        {/* Switch 组件，能够指定，如果前面的路由有限匹配大了，则放弃后续匹配的路由 */}
                        <Switch>
                            <Route exact path="/movie/detail/:id" component={ MovieDetail }></Route>
                            <Route exact path="/movie/:type/:page" component={ MovieList }></Route>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
    }
}