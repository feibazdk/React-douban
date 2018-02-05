import React from 'react';

export default class Movie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return <div>
            {/* 要从路由规则中提取匹配到的参数，可以使用 this.props.match.params**来访问 */}
            <h1>电影 -- { this.props.match.params.name } -- { this.props.match.params.num }</h1>
        </div>
    }
}