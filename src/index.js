+require("!style!css!./styles.css");
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Counter from './components/counter';

const initialState = {
    count: 0,
    name: 'Counter',
    step: 1
}

// A simple reducer (a pure function)
const counterReducer = (state = initialState, action) => {
    // specify how the application’s state
    // changes in response to an action
    switch (action.type) {
        case 'INCREMENT':
            console.log('debug: ' + 'inc');
            return Object.assign({}, state, {
                count: state.count + state.step
            });
        case 'DECREMENT':
            return Object.assign({}, state, {
                count: state.count > 0 ? state.count - state.step : 0
            });
        default:
            return state;
    }
}

// Redux
const {createStore } = Redux;

// Create a store, passing it the reducer
const store1 = createStore(counterReducer);
const store2 = createStore(counterReducer);

const render = () => {
    ReactDOM.render(
        <div>
            <Provider store={store1}>
                <Counter></Counter>
            </Provider>
            <Provider store={store2}>
                <Counter></Counter>
            </Provider>
            </div>,
        document.getElementById('root')
    )
}

render();
