import React, { Component } from 'react'

import { connect } from 'react-redux'

import { pause, resume, restart } from '../actions'

class Score extends Component {

	render() {
		const {
			is_running,
			score,
			resume,
			pause,
			restart,
			game_over
		} = this.props

		return (
			<div className="score">
				<div>Score:{ score }</div>
				<div>Level: 1</div>

				{/* pause / resume button */}
				<button className="score-button" onClick={(e) => {
					if (game_over) { return }
					is_running ? pause() : resume()
				}}>{is_running ? "Pause" : "Resume"}</button>

				{/* restart button */}
				<button className="score-button" onClick={(e) => {
						restart()
				}}>Restart</button>

			</div>
		)
	}
}

const map_state_to_props = (state) => {
	return {
		score: state.game.score,
		is_running: state.game.is_running,
		game_over: state.game.game_over
	}
}

const map_dispatch_to_props = () => {
	return {
		pause,
		resume,
		restart
	}
}

export default connect(map_state_to_props, map_dispatch_to_props())(Score)
