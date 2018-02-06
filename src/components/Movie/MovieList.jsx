import React from 'react';


export default class MovieList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return <div>
            <h1>conent --- { this.props.match.params.type }</h1>
        </div>
    }
}