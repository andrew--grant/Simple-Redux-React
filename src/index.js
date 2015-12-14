+require("!style!css!./styles.css");
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Counters from './components/counters';

const render = () => {
    ReactDOM.render(
        <div>
            <Counters/>
        </div>,
        document.getElementById('root')
    )
}

render();
