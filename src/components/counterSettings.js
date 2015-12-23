import React, { Component } from 'react';
import { connect } from 'react-redux' ;

export default class CounterSettings extends Component {

    constructor(props) {
        super(props);
        // local state required - its ok to
        // use this for localised settings
        this.state = {showEditSteps: false};
    }

    handleEditSteps(e) {
        // update global state
        let selectedValue = e.target.options[e.target.selectedIndex].value;
        this.props.editSteps(selectedValue);
        this.toggleSelect();
    }

    toggleSelect() {
        // toggle Select visibility
        this.setState({showEditSteps: !this.state.showEditSteps});
    }

    handleEditStepsShowHide() {
        this.toggleSelect();
    }

    handleAddCounter() {
        this.props.addCounter();
    }

    handleReset() {
        var doIt = confirm("Are you sure you want to reset this counter?");
        if (doIt) {
            this.props.reset();
        }
    }

    render() {
        return (
            <div className='options'>
                <ul>
                    <li><a onClick={this.handleReset.bind(this)}>reset</a></li>
                    <li><a onClick={this.handleEditStepsShowHide.bind(this)}>steps</a></li>
                    <li><a onClick={this.handleAddCounter.bind(this)}>add counter</a></li>
                </ul>
                <div className={"step-select " + (this.state.showEditSteps ? "show" : "hide")}>
                    <select onChange={this.handleEditSteps.bind(this)}>
                        <option value="0.5">0.5</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
            </div>
        );
    }

}