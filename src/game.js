import React from 'react';
import './index.css';
import Board from './board.js';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null),
                    row: null,
                    col: null,
                    selected: true
                }
            ],
            stepNumber: 0,
            xIsNext: true,
            isAscending: true,
            draw: true
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares).val || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history: history.concat([
                {
                    squares: squares,
                    row: i%3 + 1,
                    col: Math.floor(i/3) + 1
                }
            ]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move + ' (' + step.row + ', ' + step.col + ')':
                'Go to game start';

            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>
                        {this.state.stepNumber === move ? <b>{desc}</b> : desc}
                    </button>
                </li>
            );
        });
        let status;
        if (winner.val) {
            status = "Winner: " + winner.val;
        } else if(this.state.stepNumber === 9) {
            status = "Draw";
        } else
            status = "Next player: " + (this.state.xIsNext ? "X" : "O");

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        victory={winner.victory}
                        squares={current.squares}
                        onClick={i => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <button onClick={() => this.sortMoves()}>Sort {this.state.isAscending ? 'Descending' : 'Ascending'}</button>
                    <ol>{this.state.isAscending ? moves : moves.reverse()}</ol>
                </div>
            </div>
        );
    }

    sortMoves() {
        this.setState({
            isAscending: !this.state.isAscending
        })
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        
        var victory = new Array(9).fill(false).map((value, index) => {
          if (lines[i][0] === index || lines[i][1] === index || lines[i][2] === index) {
            return true;
          } else
            return value;
        });


        return {
          victory: victory,
          val: squares[a]
        };
      }
  }
  
  return {
    victory: true,
    val: null
  };
}