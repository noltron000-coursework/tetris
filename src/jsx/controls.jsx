import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	move_up,
	move_left,
	move_right,
	move_down,
	rotate_left,
	rotate_right
} from '../actions'

const map_state_to_props = (state) => {
	return {
		is_running: state.game.is_running,
		game_over: state.game.game_over
	}
}

class Controls extends Component {
	// this function is built in and is called when mounted
	componentDidMount() {
		document.addEventListener('keydown', (event) => {
			const keyName = event.key;

			const {
				move_up,
				move_down,
				move_left,
				move_right,
				rotate_left,
				rotate_right
			} = this.props

			switch(keyName) {
				case 'w':
				case 'ArrowUp':
					move_up()
					break

				case 's':
				case 'ArrowDown':
					move_down()
					break

				case 'a':
				case 'ArrowLeft':
					move_left()
					break

				case 'd':
				case 'ArrowRight':
					move_right()
					break

				case 'q':
					rotate_left()
					break

				case 'e':
					rotate_right()
					break

				default:
					break
			}
		}, false);
	}

	render() {
		const { is_running, game_over } = this.props

		return (
			<div className="controls">
				{/* up */}
				<button className="control-button" onClick={(e) => {
					if (is_running && !game_over) {
						this.props.move_up()
					}
				}}>Up</button>

				{/* down */}
				<button className="control-button" onClick={(e) => {
					if (is_running && !game_over) {
						this.props.move_down()
					}
				}}>Down</button>

				{/* left */}
				<button className="control-button" onClick={(e) => {
					if (is_running && !game_over) {
						this.props.move_left()
					}
				}}>Left</button>

				{/* right */}
				<button className="control-button" onClick={(e) => {
					if (is_running && !game_over) {
						this.props.move_right()
					}
				}}>Right</button>

				{/* spin left */}
				<button className="control-button" onClick={(e) => {
					if (is_running && !game_over) {
						this.props.rotate_left()
					}
				}}>Rotate Left</button>

				{/* spinR */}
				<button className="control-button" onClick={(e) => {
					if (is_running && !game_over) {
						this.props.rotate_right()
					}
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
