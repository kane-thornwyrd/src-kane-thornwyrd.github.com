import React, { Component } from 'react';
import update from 'react-addons-update';
import throttle from 'lodash/throttle';

import Button from 'react-bootstrap/lib/Button';

import './stylesheets/snake.css';

const tr = true;
const BODY = 1;
const FOOD = 2;
const K = {
  left: 37, up: 38, right: 39, down: 40,
};
const D = {
  37: tr, 38: tr, 39: tr, 40: tr,
};

class Snake extends Component {
  constructor(props) {
    super(props);
    const start = this.props.startIndex || 21;
    const snake = [start];
    const board = [];
    board[start] = BODY;
    this.state = {
      snake,
      board,
      growth: 0,
      paused: true,
      gameOver: false,
      direction: K.right,
    };
    this.tick = throttle(this.tick.bind(this), 100);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState === this.state) return false;
    return true;
  }

  setGameState({
    snake = null,
    board = null,
    paused = true,
    growth = 0,
    gameOver = false,
    direction = K.right,
  }) {
    const start = this.props.startIndex || 21;
    const setSnake = snake || [start];
    let setBoard;
    if (board) {
      setBoard = board;
    } else {
      setBoard = [];
      setBoard[start] = BODY;
    }
    this.setState(prevState =>
      update(prevState, {
        snake: { $set: setSnake },
        board: { $set: setBoard },
        paused: { $set: paused },
        growth: { $set: growth },
        gameOver: { $set: gameOver },
        direction: { $set: direction },
      }), this.tick);
  }

  pause() {
    if (this.state.gameOver || this.state.paused) { return; }
    this.setState(prevState =>
      update(prevState, {
        paused: { $set: true },
      }), this.tick);
  }

  resume() {
    if (this.state.gameOver || !this.state.paused) { return; }
    this.setState(prevState =>
      update(prevState, {
        paused: { $set: false },
      }), () => {
      this.boardEl.focus();
      this.tick();
    });
  }

  handleKey({ event }) {
    event.preventDefault();
    const direction = event.nativeEvent.keyCode;
    const difference = Math.abs(this.state.direction - direction);
    if (D[direction] && difference !== 0 && difference !== 2) {
      this.nextDirection = direction;
    }
  }

  getNextIndex(head, direction, numRows, numCols) {
    // translate index into x/y coords to make math easier
    let x = head % numCols;
    let y = Math.floor(head / numCols);

    // move forward one step in the correct direction, wrapping if needed
    switch (direction) {
      case K.up: y = y <= 0 ? numRows - 1 : y - 1; break;
      case K.down: y = y >= numRows - 1 ? 0 : y + 1; break;
      case K.left: x = x <= 0 ? numCols - 1 : x - 1; break;
      case K.right: x = x >= numCols - 1 ? 0 : x + 1; break;
      default: return;
    }

    // translate new x/y coords back into array index
    return (numCols * y) + x;
  }

  tick() {
    if (this.state.paused) { return; }
    const {
      snake, board,
    } = this.state;
    let { growth, direction } = this.state;
    const numRows = this.props.numRows || 20;
    const numCols = this.props.numCols || 20;
    const head = this.getNextIndex(snake[0], direction, numRows, numCols);

    if (snake.indexOf(head) !== -1) {
      this.setState(prevState =>
        update(prevState, {
          gameOver: { $set: true },
        }), this.tick);
      return;
    }

    const needsFood = board[head] === FOOD || snake.length === 1;
    if (needsFood) {
      let ii,
        numCells = numRows * numCols;
      do { ii = Math.floor(Math.random() * numCells); } while (board[ii]);
      board[ii] = FOOD;
      growth += 2;
    } else if (growth) {
      growth -= 1;
    } else {
      board[snake.pop()] = null;
    }

    snake.unshift(head);
    board[head] = BODY;

    if (this.nextDirection) {
      direction = this.nextDirection;
      this.nextDirection = null;
    }

    this.setState(prevState =>
      update(prevState, {
        snake: { $set: snake },
        board: { $set: board },
        growth: { $set: growth },
        direction: { $set: direction },
      }), this.tick);
  }

  render() {
    const cells = [];
    const numRows = this.props.numRows || 20;
    const numCols = this.props.numCols || 20;

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const code = this.state.board[numCols * row + col];
        const type = code === BODY ? 'body' : code === FOOD ? 'food' : 'null';
        cells.push(<div className={`${type}-cell`} key={`${row}-${col}`} />);
      }
    }

    return (
      <div className="snake-game">
        <h1 className="snake-score">Length: {this.state.snake.length}</h1>
        <div
          ref={el => this.boardEl = el}
          className={`snake-board${this.state.gameOver ? ' game-over' : ''}`}
          tabIndex={0}
          onBlur={() => this.pause()}
          onFocus={() => this.resume()}
          onKeyDown={event => this.handleKey({ event })}
        >
          {cells}
        </div>
        <div className="snake-controls">
          {this.state.paused ? <Button bsSize="large" bsStyle="primary" onClick={() => this.resume()}>READY !</Button> : null}
          {this.state.gameOver ? <Button bsSize="large" bsStyle="primary" onClick={() => this.setGameState({})}>New Game</Button> : null}
        </div>
      </div>
    );
  }
}

export default Snake;
