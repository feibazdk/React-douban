import React from 'react';

// 导入 loading 组件
import { Spin, Alert } from 'antd';


export default class MovieList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movieslist: [],  // 电影列表
            nowPage: parseInt(props.match.params.page) || 1,  // 当前展示第几页的数据
            count: 14,  // 每页显示多少条数据
            total: 0, // 当前电影分类下，总共有多少条数据
            isloading: true // 数据是否正在加载中
        }
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({
                isloading: false
            })
        },1000)
    }

    render() {
        return <div>
            { this.renderList() }
        </div>
    }

    renderList = () => {
        if(this.state.isloading){
            return <Spin tip="Loading...">
                <Alert
                    message="请稍等……"
                    description="您查询的页面正在赶来的路上"
                    type="info"
                />
            </Spin>
        }else{
            return <h1>数据已经加载完成</h1>
        }
    }
}