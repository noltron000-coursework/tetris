import React, { Component } from 'react'
import { connect } from 'react-redux'
import Square from '../jsx/square.jsx'
import { shapes } from '../utilities/'

// Map State to props
const map_state_to_props = (state) => {
	return {
		// Return nextShape as shape
		shape: state.game.nextShape
	}
}

// Draws the "next" block view showing the next block to drop
class Next extends Component {
	make_grid() {
		// deconstruct shape
		const { shape } = this.props
		// get the array for this shape first rotation
		const block = shapes[shape][0]
		// get the empty shape
		const box = shapes[0][0]

		// Map the block to the grid
		return box.map((row_array, row) => {
			return row_array.map((square, col) => {
				// If there is a 1 use the shape index
				const color = block[row][col] === 0 ? 0 : shape
				return <Square key={`${row}${col}`} color={color} />
			})
		})
	}

	// The components generated in make_grid are rendered in div.board
	render () {
		return (
			<div className="next">
				{this.make_grid()}
			</div>
		)
	}
}

export default connect(map_state_to_props)(Next)
