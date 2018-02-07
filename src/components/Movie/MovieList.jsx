import React from 'react';

// 导入 loading 组件
import { Spin, Alert } from 'antd';

// 导入fetch-jsonp
import fetchJSONP from 'fetch-jsonp';

// 导入组件
import MovieItem  from "./MovieItem.jsx";

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movieslist: [],  // 电影列表
            nowPage: parseInt(props.match.params.page) || 1,  // 当前展示第几页的数据
            pageSize: 12,  // 每页显示多少条数据
            total: 0, // 当前电影分类下，总共有多少条数据
            isloading: true, // 数据是否正在加载中
            movieType: props.match.params.type // 请求的 type 值
         }
    }

    componentWillMount() {
        this.loadMovieMsg();
    }

    componentWillReceiveProps(nextProps) {
        // 当地址栏变化的时候，重置参数
        this.setState({
            isloading: true,
            nowPage: parseInt(nextProps.match.params.page) || 1,
            movieType: nextProps.match.params.type
        }, function(){
            this.loadMovieMsg();
        })
    }

    render() {
        return <div>
            { this.renderList() }
        </div>
    }

    // 从豆瓣接口获取电影数据
    loadMovieMsg = () => {

        const start = this.state.pageSize * (this.state.nowPage - 1);
        const url = `https://api.douban.com/v2/movie/${this.state.movieType}?start=${start}&count=${this.state.pageSize}`

        fetchJSONP(url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                isloading: false,       // 把 loading 设置成隐藏，
                movieslist: data.subjects,  // 给电影列表赋值
                total: data.total       // 保存总条数
            })
            
        })
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
            return <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {this.state.movieslist.map(item => {
                    return <MovieItem key={item.id} {...item}>< /MovieItem>
                })}
            </div>
        }
    }
}