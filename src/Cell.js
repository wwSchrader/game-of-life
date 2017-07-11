import React, { Component } from 'react';
import './Cell.css'

export default class Cell extends Component {
    constructor(props) {
        super(props);

        this.state = {
            alive: props.alive
        }

        this.row = props.row;
        this.column = props.column;

        this.onHandleCellClicker = this.onHandleCellClicker.bind(this);

    }

    onHandleCellClicker(row, column) {
        this.props.onClickhandler(row, column);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            alive: nextProps.alive
        })
    }

    render() {
        function cellState(alive){
            if (alive) {
                return "alive";
            } else {
                return "dead";
            }
        }
        return (
            <td
            className={cellState(this.state.alive)}
            onClick={() => {this.onHandleCellClicker(this.row, this.column)}}
            ></td>
        );
    }
}