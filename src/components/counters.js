import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import Counter from './counter'
import { doAddCounter } from '../actionCreators'


function initialCounterSet() {
    const NUM_COUNTERS = 10;
    var counters = [];
    for (var i = 0; i < NUM_COUNTERS; i++) {
        counters.push({
            count: 0,
            name: 'Counter ' + i,
            step: 1,
            visible: i > 3 ? false : true
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
        case 'ADD_COUNTER':
            console.log('--------------------------------------');
            console.log(state[index]);
            // todo: make an obj - add a flags sub object makeVisible prop with index set, clear it from within ui
            // (using a 'clear flag' dispatcher)) Eg' flags.makeCounterNVisible
            state[index].visible = true;
            console.log(state[index]);
            return state;
        case 'RESET':
            let objRest = Object.assign({}, state[index], {
                count: 0
            });
            state[index] = objRest;
            // todo: all these object.assigns are changing it from array to obj??
            return Object.assign({}, state);
        case 'INCREMENT':
            let objInc = Object.assign({}, state[index], {
                count: state[index].count + parseFloat(state[index].step)
            });
            state[index] = objInc;
            return Object.assign({}, state);
        case 'DECREMENT':
            let objDec = Object.assign({}, state[index], {
                count: state[index].count > 0 ? state[index].count - parseFloat(state[index].step) : 0
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
        store.subscribe(()=> {
            this.makeAddedCounterVisible();
            console.log('debug: fired!!');
        });
    }

    makeAddedCounterVisible() {
        // find first invisible
        var idx = 0;
        var stateObj = store.getState();
        var firstInvisibleObj = null;
        while (stateObj[idx] != null) {
            console.log('debug: ' + stateObj[idx].visible);
            if (!stateObj[idx].visible) {
                firstInvisibleObj = stateObj[idx];
                console.log('-------------------');
                console.log(firstInvisibleObj);
                console.log('-------------------');

                break;
            }
            idx++;
        }
        if(firstInvisibleObj){
            console.log('debug: ' + 'first invisible at pos ' + idx);

        }


    }

    getCounters() {
        console.log(store);
        var rows = [];
        for (var i = 0; i < store.getState().length; i++) {
            rows.push(<Counter key={i} position={i} step="1" visible={ i > 3 ? false : true}></Counter>);
        }
        return rows;
    }

    addCounter() {
        store.dispatch(doAddCounter(4));
    }

    render() {
        console.log('render Counters');
        return (
            <Provider store={store}>
                <div>
                    {this.getCounters()}
                    <button onClick={this.addCounter.bind(this)}>Add Counter</button>
                </div>
            </Provider>
        );
    }
}