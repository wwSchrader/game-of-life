import React, { Component } from 'react';

export default class Board extends Component {
    constructor(props) {
        super(props);

        this.cellStatus = [[1, 2], [3, 4]]
    }

    render() {
        var row = this.cellStatus.map(function (item, i) {
            var entry = item.map(function (element, j) {
                return (
                    <td key={j}> {element} </td>
                );
            });
            return (
                <tr key={i}> {entry} </tr>
            );
        });

        return(
            <table>
                {row}
            </table>
        );
    }
}