import React, { Component } from 'react'

class HUD extends Component {

	render() {
		return (
			<div className="hud">
				<div>Score:{ this.props.score }</div>
				<div>Level: 1</div>

				<button className="hud-button" onClick={(e) => {

				}}>Play</button>

				<button className="hud-button" onClick={(e) => {

				}}>Restart</button>

			</div>
		)
	}
}

export default HUD
