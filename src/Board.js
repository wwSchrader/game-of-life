import React, { Component } from 'react';
import Cell from './Cell'

export default class Board extends Component {
    constructor(props) {
        super(props);

        this.cellStatus = [[true, false], [false, true]]
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