import React, { Component } from 'react';
import Cell from './Cell'

export default class Board extends Component {
    constructor(props) {
        super(props);

        this.height = 30;
        this.length = 30;
        this.cellStatus = this.initialCellState(this.height, this.length);
    }

    initialCellState(height, length) {
        //initialize state of table by randomly assigning each cell a state
        var cellArray = [];
        for (var i = 0; i < height; i++) {
            var rowArray = [];
            for (var j = 0; j < length; j++) {
                rowArray.push(Math.random() >= 0.5);
            }
            cellArray.push(rowArray);
        }

        return cellArray;
    }

    render() {
        var row = this.cellStatus.map(function (item, i) {
            var entry = item.map(function (element, j) {
                return (
                    <Cell key={i + "" + j} alive={element}/>
                );
            });
            return (
                <tr key={i}>{entry}</tr>
            );
        });

        return(
            <table>
                <tbody>
                    {row}
                </tbody>
            </table>
        );
    }
}