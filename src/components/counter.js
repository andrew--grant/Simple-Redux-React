import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {

    constructor(props) {
        super(props);
        // Operations usually carried out
        // in componentWillMount go here
        this.state = {count: 0}
    }

    handleClick() {
        // can get rid of bind by using fat arrows - need
        // to enable within babel??
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <div id='wrap-counter'>
                <h1 id='count'>{this.state.count}</h1>
                <h3>{this.props.counterName}</h3>
                <button className="btn btn-warning" onClick={this.handleClick.bind(this)}>Increment</button>
            </div>
        );
    }

}
