+require("!style!css!./styles.css");
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter';

// A simple reducer (a 'pure' function)
const counterReducer = (state = 0, action) => {
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
const {
    createStore
    } = Redux;

// Create a store, passing it the 'reducer'
const store = createStore(counterReducer);

const render = () => {
    ReactDOM.render(
        <Counter counterName="Catie"></Counter>,
        document.getElementById('root')
    )
}

render();

store.subscribe(() => {
    render();
    console.log('debug');
});

