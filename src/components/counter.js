import React, { Component } from 'react';
import { connect } from 'react-redux'
import { doIncrement } from '../actionCreators'
import { doDecrement } from '../actionCreators'
import CounterName from './counterName'
import CounterSettings from './counterSettings'

export default class Counter extends Component {

    constructor(props) {
        super(props);
    }

    increment() {
        // call action creator
        this.props.onIncrement(this.props.position, this.props.step);
    }

    decrement() {
        // call action creator
        this.props.onDecrement(this.props.position, this.props.step);
    }

    render() {
        return (
            <div id='wrap-counter'>
                <CounterSettings/>
                <CounterName value="Counter"/>
                <h1 id='count'>{this.props.counter[this.props.position].count}</h1>
                <button className="btn btn-warning" onClick={this.decrement.bind(this)}>Decrement</button>
                <button className="btn btn-warning" onClick={this.increment.bind(this)}>Increment</button>
            </div>
        );
    }
}

//******************** Redux Wiring for this component ******************/

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
    return {
        counter: state
    }
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
    return {
        onIncrement: (position, value) => dispatch(doIncrement(position, value)),
        onDecrement: (position, value) => dispatch(doDecrement(position, value))
    }
}

// Wire it up!
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

//***********************************************************************/