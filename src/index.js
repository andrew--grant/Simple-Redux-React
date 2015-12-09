+require("!style!css!./styles.css");
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Counter from './components/counter';

const initialState = {
    count: 0,
    name: '',
    step: 1
}

// A simple reducer (a pure function)
const counterReducer = (state = initialState, action) => {
    // specify how the application’s state
    // changes in response to an action
    switch (action.type) {
        case 'INCREMENT':
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
const store = createStore(counterReducer);

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Counter></Counter>
        </Provider>,
        document.getElementById('root')
    )
}

render();
