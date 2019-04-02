import React, { Component } from 'react'

import '../css/app.css'
import Next from '../jsx/next.jsx'
import Board from '../jsx/board.jsx'
import HUD from '../jsx/hud.jsx'

class app extends Component {
	render() {
		return (
			<div>
				<h1>hello world</h1>
				<Board />
				<Next />
				<HUD />
			</div>
		)
	}
}

export default app
