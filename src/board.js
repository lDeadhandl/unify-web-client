import React from 'react';
import './index.css';


function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.victory === true ? <b>{props.value}</b> : props.value}
        </button>
    );
}

export default class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                victory={this.props.victory[i]}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {

        let table = [];
        let index = 0;
        for (let i = 0; i < 3; i++) {
            let children = []
            
            for (let j = 0; j < 3; j++) {
                children.push(this.renderSquare(index++))
            }
            table.push(<div className="board-row">{children}</div>)
        }

        return (
            <div>
                {table}
            </div>
        );
    }
}