import React, { Component } from 'react';

export default class ControlPanel extends Component {
    render() {
        return (
            <div>
                <button>Play</button>
                <button>Stop</button>
                <button>Clear</button>
                <h4>Generation: </h4>
            </div>
        );
    }
}