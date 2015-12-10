import React, { Component } from 'react';
import { connect } from 'react-redux' ;

export default class CounterName extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            enteringName: false,
            displayingCounterNameInput: false
        }
    }

    handleInputName() {
        // show text input and give it focus
        this.setState({
            enteringName: !this.state.enteringName,
            displayingCounterNameInput: true
        });
    }

    componentDidUpdate() {
        if (this.state.displayingCounterNameInput == true) {
            ReactDOM.findDOMNode(this.refs['counterNameInput']).focus();
        }
    }

    handleEnterNameComplete(e) {

        const doUpdateState = () => {
            this.setState({
                enteringName: !this.state.enteringName,
                displayingCounterNameInput: false,
                value: ReactDOM.findDOMNode(this.refs['counterNameInput']).value
            });
        }

        if (e.which) {
            if (e.which == 13) {
                // enter key was pressed
                doUpdateState();
            }
        }
        else {
            if (this.state.displayingCounterNameInput) {
                // onBlur occurred
                doUpdateState();
            }
        }

    }

    render() {
        let styleHide = {display: this.state.enteringName ? 'block' : 'none'};
        let styleShow = {display: this.state.enteringName ? 'none' : 'block'};
        return (
            <span id='counter-name' onDoubleClick={this.handleInputName.bind(this)}>
              <h1 id='count'>
                  <span style={styleShow}>{this.state.value}</span>
                  <input ref="counterNameInput" type="text" style={styleHide}
                         onBlur={this.handleEnterNameComplete.bind(this)}
                         onKeyPress={this.handleEnterNameComplete.bind(this)}/></h1>
            </span>
        );
    }

}