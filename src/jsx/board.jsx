import React, { Component } from 'react'
import Square from '../jsx/square.jsx'

// Represents a 10 x 18 grid of grid squares

class Board extends Component {

	// generates an array of 18 rows, each containing 10 Squares.
	makeGrid() {
		const grid = []
		for (let row = 0; row < 18; row ++) {
			grid.push([])
			for (let col = 0; col < 10; col ++) {
				grid[row].push(<Square key={`${col}${row}`} color="1" />)
			}
		}

		return grid
	}

	// The components generated in makeGrid are rendered in div.board
	render () {
		return (
			<div className='board'>
				{this.makeGrid()}
			</div>
		)
	}
}

export default Board
