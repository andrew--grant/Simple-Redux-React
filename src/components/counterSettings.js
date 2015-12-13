import React, { Component } from 'react';
import { connect } from 'react-redux' ;

export default class CounterSettings extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    handleSettings(e) {

        console.log("handleSettings");

    }

    render() {
        return (
            <span id='counter-name' onDoubleClick={this.handleSettings.bind(this)}>
              <h1 id='count'>settings</h1>
            </span>
        );
    }

}