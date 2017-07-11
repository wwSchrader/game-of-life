import React, { Component } from 'react';

export default class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.handlePlayButtonPress = this.handlePlayButtonPress.bind(this);
        this.handleStopButtonPress = this.handleStopButtonPress.bind(this);
    }

    handlePlayButtonPress(e) {
        this.props.onPlayButtonPress();
    }

    handleStopButtonPress(e) {
        this.props.onStopButtonPress();
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePlayButtonPress}>Play</button>
                <button onClick={this.handleStopButtonPress}>Stop</button>
                <button>Clear</button>
                <h4>Generation: </h4>
            </div>
        );
    }
}