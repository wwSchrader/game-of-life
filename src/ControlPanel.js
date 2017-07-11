import React, { Component } from 'react';

export default class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.handlePlayButtonPress = this.handlePlayButtonPress.bind(this);
        this.handleStopButtonPress = this.handleStopButtonPress.bind(this);
        this.handleClearButtonPress = this.handleClearButtonPress.bind(this);

        this.state = {
            count: props.count
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            count: nextProps.count
        })
    }

    handlePlayButtonPress(e) {
        this.props.onPlayButtonPress();
    }

    handleStopButtonPress(e) {
        this.props.onStopButtonPress();
    }

    handleClearButtonPress(e) {
        this.props.onClearButtonPress();
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePlayButtonPress}>Play</button>
                <button onClick={this.handleStopButtonPress}>Stop</button>
                <button onClick={this.handleClearButtonPress}>Clear</button>
                <h4>Generation: {this.state.count}</h4>
            </div>
        );
    }
}