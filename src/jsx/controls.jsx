import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	move_up,
	move_left,
	move_right,
	move_down,
	rotate_left,
	rotate_right } from '../actions'

const map_state_to_props = (state) => {
	return {
		isRunning: state.game.isRunning
	}
}

class Controls extends Component {
	render() {
		const { isRunning } = this.props

		return (
			<div className="controls">
				{/* up */}
				<button className="control-button" onClick={(e) => {
					if (!isRunning) { return }
					this.props.move_up()
				}}>Up</button>

				{/* down */}
				<button className="control-button" onClick={(e) => {
					if (!isRunning) { return }
					this.props.move_down()
				}}>Down</button>

				{/* left */}
				<button className="control-button" onClick={(e) => {
					if (!isRunning) { return }
					this.props.move_left()
				}}>Left</button>

				{/* right */}
				<button className="control-button" onClick={(e) => {
					if (!isRunning) { return }
					this.props.move_right()
				}}>Right</button>


				{/* spin left */}
				<button onClick={(e) => {
					if (!isRunning) { return }
					this.props.rotate_left()
				}}>Rotate Left</button>

				{/* spinR */}
				<button onClick={(e) => {
					if (!isRunning) { return }
					this.props.rotate_right()
				}}>Rotate Right</button>

			</div>
		)
	}
}

const map_dispatch_to_props = () => {
	return {
		move_right,
		move_left,
		move_down,
		move_up,
		rotate_left,
		rotate_right
	}
}

export default connect(map_state_to_props, map_dispatch_to_props())(Controls)
