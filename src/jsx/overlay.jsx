
import React, { Component } from 'react'
import { connect } from 'react-redux'


// Displays a message
class Overlay extends Component {

	render() {
		const { game_over, is_running } = this.props
		let message = ''
		let is_hidden = 'hidden'

		// If the game is over, show the popup saying "Game Over"
		if (game_over) {
			message = 'Game Over'
			is_hidden = ''

		// If the game isn't running, it must be paused, so show the popup saying "Paused"
		} else if (!is_running) {
			message = 'Paused'
			is_hidden = ''

		// Default message, will still be hidden
		} else {
			message = '???'
		}

		return (
			<div className={`overlay ${is_hidden}`}>
				<h1>{message}</h1>
				<p></p>
			</div>
		)
	}
}

const map_state_to_props = (state) => {
	return {
		game_over: state.game.game_over,
		is_running: state.game.is_running
	}
}

const map_dispatch_to_props = () => {
	return { }
}

export default connect(map_state_to_props, map_dispatch_to_props())(Overlay)
