import React, { Component } from 'react';
import { connect } from 'react-redux' ;

export default class CounterSettings extends Component {

    constructor(props) {
        super(props);
    }


    handleSettings() {
        // dispatch an action to increase step
        this.props.editSteps(3);
    }

    render() {
        return (
            <span id='counter-name' onClick={this.handleSettings.bind(this)}>
              <h1 id='count'>settings</h1>
            </span>
        );
    }

}