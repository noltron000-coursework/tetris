import React, { Component } from 'react'
import Square from '../jsx/square.jsx'

// Draws the "next" block view showing the next block to drop
class Next extends Component {

	// generates an array of 4 rows, each containing 4 Squares.
	makeGrid() {
		const grid = []
		for (let row = 0; row < 4; row ++) {
			grid.push([])
			for (let col = 0; col < 4; col ++) {
				grid[row].push(<Square key={`${col}${row}`} color={0} />)
			}
		}

		return grid
	}

	// The components generated in makeGrid are rendered in div.board
	render () {
		return (
			<div className="next">
				{this.makeGrid()}
			</div>
		)
	}
}

export default Next
