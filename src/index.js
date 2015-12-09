+require("!style!css!./styles.css");
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Counter from './components/counter';

// A simple reducer (a pure function)
const counterReducer = (state = 0, action) => {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
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

