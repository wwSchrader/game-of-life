import React, { Component } from 'react';
import './App.css';
import ContolPanel from './ControlPanel';
import Board from './Board';

class App extends Component {
  render() {
    return (
        <div>
            <ContolPanel />
            <Board />
        </div>
    );
  }
}

export default App;
