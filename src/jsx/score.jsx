import React, { Component } from 'react'

class Score extends Component {

	render() {
		return (
			<div className="score">
				<div>Score:{ this.props.score }</div>
				<div>Level: 1</div>

				<button className="score-button" onClick={(e) => {

				}}>Play</button>

				<button className="score-button" onClick={(e) => {

				}}>Restart</button>

			</div>
		)
	}
}

export default Score
