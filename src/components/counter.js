import React, { Component } from 'react';
import { connect } from 'react-redux'
import { doIncrement } from '../actionCreators'
import { doDecrement } from '../actionCreators'
import CounterName from './counterName'


class Counter extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    increment() {
        // call action creator
        this.props.onIncrement();
    }

    decrement() {
        // call action creator
        this.props.onDecrement();
    }

    render() {
        return (
            <div id='wrap-counter'>
                <CounterName value="Catie"/>
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
        onIncrement: () => dispatch(doIncrement()),
        onDecrement: () => dispatch(doDecrement())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)
