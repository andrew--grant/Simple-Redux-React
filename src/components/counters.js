import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import { doIncrement } from '../actionCreators'
import { doDecrement } from '../actionCreators'
import Counter from './counter'


const NUM_COUNTERS = 4;

function initialCounterSet() {
    var counters = [];
    for (var i = 0; i < NUM_COUNTERS; i++) {
        counters.push({
            count: 0,
            name: 'Counter ' + i,
            step: 1
        });
    }
    return counters;
}

// A simple reducer (a pure function)
const counterReducer = (state = initialCounterSet(), action = null) => {
    // specify how the application’s state
    // changes in response to an action
    const index = action.position;
    switch (action.type) {
        case 'INCREMENT':
            let objInc = Object.assign({}, state[index], {
                step: parseFloat(action.value),
                count: state[index].count + parseFloat(action.value)
            });
            state[index] = objInc;
            return Object.assign({}, state);
        case 'DECREMENT':
            let objDec = Object.assign({}, state[index], {
                step: parseFloat(action.value),
                count: state[index].count > 0 ? state[index].count - parseFloat(action.value) : 0
            });
            state[index] = objDec;
            return Object.assign({}, state);
        case 'EDIT_STEPS':
            let editedSteps = Object.assign({}, state[index], {
                step: parseFloat(action.value)
            });
            state[index] = editedSteps;
            return Object.assign({}, state);
        default:
            return state;
    }
}

// Redux
const {createStore } = Redux;
let store = createStore(counterReducer)

export default class Counters extends Component {

    constructor(props) {
        super(props);
    }

    getCounters() {
        var rows = [];
        for (var i = 0; i < NUM_COUNTERS; i++) {
            rows.push(<Counter key={i} position={i} step="1"></Counter>);
        }
        return rows;
    }

    render() {
        return (
            <Provider store={store}>
                <div>
                    {this.getCounters()}
                </div>
            </Provider>
        );
    }
}


