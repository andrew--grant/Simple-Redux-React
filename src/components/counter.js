import React, { Component } from 'react';
import { connect } from 'react-redux'
import { doIncrement } from '../actionCreators'
import { doDecrement } from '../actionCreators'


class Counter extends Component {

    constructor(props) {
        super(props);
        console.log(props.value);
    }

    increment() {
        // call action creator
        this.props.onIncrement();
    }

    decrement() {
        // call action creator
        this.props.onDecrement();
    }

    render() {
        return (
            <div id='wrap-counter'>
                <h1 id='count'></h1>
                <h3>{this.props.count || 0}</h3>
                <button className="btn btn-warning" onClick={this.decrement.bind(this)}>Decrement</button>
                <button className="btn btn-warning" onClick={this.increment.bind(this)}>Increment</button>
            </div>
        );
    }

}

//************************ Redux Wiring *********************/

// Which part of the Redux global state does our component
// want to receive as props?
function mapStateToProps(state) {
    return {
        count: state
    }
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
    return {
        onIncrement: () => dispatch(doIncrement()),
        onDecrement: () => dispatch(doDecrement())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)
