import React, { Component } from 'react';
import Cell from './Cell'

export default class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cellStatus: props.cellArray
        }

        this.handleCellPress = this.handleCellPress.bind(this);
    }

    handleCellPress(row, column){
        this.props.onCellPress(row, column);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            cellStatus: nextProps.cellArray
        })
    }

    render() {
        var row = this.state.cellStatus.map((item, i) => {
            var entry = item.map((element, j) => {
                return (
                    <Cell key={i + "" + j}
                    alive={element}
                    row={i}
                    column={j}
                    onClickhandler={this.handleCellPress}
                    />
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