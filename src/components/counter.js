import React, { Component } from 'react';
import { connect } from 'react-redux'
import { doIncrement } from '../actionCreators'
import { doDecrement } from '../actionCreators'
import CounterName from './counterName'
import CounterSettings from './counterSettings'


class Counter extends Component {

    constructor(props) {
        super(props);
    }

    increment() {
        // call action creator
        this.props.onIncrement(this.props.step);
    }

    decrement() {
        // call action creator
        this.props.onDecrement(this.props.step);

    }

    render() {
        return (
            <div id='wrap-counter'>
                <CounterSettings/>
                <CounterName value="Counter"/>
                <h1 id='count'>{this.props.counter.count}</h1>
                <button className="btn btn-warning" onClick={this.decrement.bind(this)}>Decrement</button>
                <button className="btn btn-warning" onClick={this.increment.bind(this)}>Increment</button>
            </div>
        );
    }
}

//************************ Redux Wiring *********************/

// Which part of the Redux global state does
// our component want to receive as props?
function mapStateToProps(state) {
    return {
        counter: state
    }
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
    return {
        onIncrement: (value) => dispatch(doIncrement(value)),
        onDecrement: (value) => dispatch(doDecrement(value))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)
