import React, { Component } from 'react';
import { connect } from 'react-redux'
import { doIncrement } from '../actionCreators'
import { doDecrement } from '../actionCreators'
import { doEditSteps } from '../actionCreators'
import { doReset } from '../actionCreators'
import { doAddCounter } from '../actionCreators'
import CounterName from './counterName'
import CounterSettings from './counterSettings'

export default class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {visible: this.props.visible}
    }

    increment() {
        // call action creator
        this.props.onIncrement(this.props.position);
    }

    decrement() {
        // call action creator
        this.props.onDecrement(this.props.position);
    }

    reset() {
        // call action creator
        this.props.onReset(this.props.position);
        console.log('called reset');
    }

    addCounter() {
        // call action creator
        this.props.onAddCounter();
    }

    editSteps(steps) {
        // call action creator
        this.props.onEditSteps(this.props.position, steps);
    }

    render() {
        // some counters will be hidden, to be 'added' later by user
        var showHide =  this.state.visible ? ' show' : ' hide';
        console.log('render: ' + showHide);
        return (
            <div className={'wrap-counter' + showHide}>
                <CounterSettings reset={this.reset.bind(this)}
                                 editSteps={this.editSteps.bind(this)}
                                 addCounter={this.addCounter.bind(this)}/>
                <CounterName value="Counter"/>
                <h1 id='count'>{this.props.counter.counters[this.props.position].count}</h1>
                <button className="btn btn-warning" onClick={this.decrement.bind(this)}>Decrement</button>
                <button className="btn btn-warning" onClick={this.increment.bind(this)}>Increment</button>
            </div>
        );
    }
}

//******************** Redux Wiring ******************/

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
    return {
        counter: state
    }
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
    return {
        onIncrement: (position) => dispatch(doIncrement(position)),
        onDecrement: (position) => dispatch(doDecrement(position)),
        onEditSteps: (position, value) => dispatch(doEditSteps(position, value)),
        onReset: (position) => dispatch(doReset(position)),
        onAddCounter: () => dispatch(doAddCounter())
    }
}

// Wire it up!
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

//***********************************************************************/

