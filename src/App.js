import React, { Component } from 'react';
import './App.css';
import ContolPanel from './ControlPanel';
import Board from './Board';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            active: true,
            cellStatus: this.initialCellState(50, 50, true)
        };

        this.handleCellPress = this.handleCellPress.bind(this);
    }

    handleClearButtonPress() {
        this.setState({
            count: 0,
            active: false,
            cellStatus: this.initialCellState(50, 50, false)
        });
    }

    componentDidMount() {
            this.timerID = setInterval(() => this.tick(), 10);
        }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        var oldState = this.state.cellStatus;
        //if status is active, calculate a generation
        if (this.state.active) {
            this.setState({
            cellStatus: this.generation(oldState),
            count: this.state.count + 1
            });
        }

    }

    generation(oldState) {
        var newCellArray = [];
        for (var i = 0; i < oldState.length; i++) {
            var row = oldState[i];
            var newRow = [];
            for (var j = 0; j < row.length; j++) {
                newRow.push(this.determineHealth(i, j, oldState));
            }

            newCellArray.push(newRow);
        }

        return newCellArray;

    }

    determineHealth(i, j, oldState) {
        //check all sides of a square to neighbors status
        var counter = 0;

        var edgeAbove = (i === 0);
        var edgeLeft  = (j === 0);

        var edgeBelow = false;
        var edgeRight = false;

        var currentRow = oldState[i];

        if (!edgeLeft && currentRow[j - 1]) {
           counter++;
        }

        if (!edgeRight && currentRow[j + 1]) {
            counter++;
        }

        if (typeof oldState[i + 1] === 'undefined') {
            edgeBelow = true;
        }

        if (typeof oldState[j + 1] === 'undefined') {
            edgeRight = true;
        }

        if (!edgeAbove) {
            var upperRow = oldState[i - 1];
            if (!edgeLeft && upperRow[j - 1]) {
                counter++;
            }

            if (upperRow[j]) {
                counter++;
            }

            if (!edgeRight && upperRow[j + 1]) {
                counter++;
            }
        }

        if (!edgeBelow) {
            var lowerRow = oldState[i + 1];
            if (!edgeLeft && lowerRow[j - 1]) {
                counter++;
            }

            if (lowerRow[j]) {
                counter++;
            }

            if (!edgeRight && lowerRow[j + 1]) {
                counter++;
            }
        }

        //determine if cell will be live or dead based on number of neighbors
        if (oldState[i][j] === false) {
            if (counter === 3) {
                return true;
            } else {
                return false;
            }
        } else if (counter < 2 || counter > 3) {
            return false;
        } else {
            return true;
        }
    }

    initialCellState(height, length, randomize) {
        //initialize state of table by randomly assigning each cell a state
        var cellArray = [];
        for (var i = 0; i < height; i++) {
            var rowArray = [];
            for (var j = 0; j < length; j++) {
                if (randomize) {
                    rowArray.push(Math.random() >= 0.5);
                } else {
                     rowArray.push(false);
                }

            }
            cellArray.push(rowArray);
        }

        return cellArray;
    }

    handleButtonPress(status) {
        this.setState({
            active: status
        });
    }

    handleCellPress(row, column) {
        var oldState = this.state.cellStatus;
        //find the selected cell state and return flipped value
        var changedCellStatus = !oldState[row][column];
        var newState = oldState.slice();
        newState[row][column] = changedCellStatus;

        this.setState({
            cellStatus: newState
        });
    }

    render() {
        return (
            <div>
                <h1>Game of Life</h1>
                <ContolPanel
                    onPlayButtonPress={() => this.handleButtonPress(true)}
                    onStopButtonPress={() => this.handleButtonPress(false)}
                    count={this.state.count}
                    onClearButtonPress={() => this.handleClearButtonPress()}
                />
                <Board
                cellArray={this.state.cellStatus}
                onCellPress={this.handleCellPress}
                />
            </div>
        );
    }
}

export default App;
