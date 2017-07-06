import React, { Component } from 'react';
import './Cell.css'

export default class Cell extends Component {
    constructor(props) {
        super(props);

        this.state = {
            alive: props.alive
        }

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
            <td className={cellState(this.state.alive)}></td>
        );
    }
}