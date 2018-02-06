import React from 'react';

// 导入样式
import styles from "../../css/movie.scss";

export default class MovieItem extends React.Component{
    constructor (props) {
        super(props)
        
        this.state = {}
    }
    
    render() {
        return <div className={styles.box}>
                <img src={this.props.images.small.replace('img3.doubanio.com', 'img1.doubanio.com')} className={styles.img} />
                <h4>电影名称：{this.props.title}</h4>
                <h4>上映年份：{this.props.year}年</h4>
                <h4>电影类型：{this.props.genres.join('，')}</h4>
            </div>
    }
}