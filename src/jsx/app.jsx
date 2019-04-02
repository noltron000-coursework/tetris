import React, { Component } from 'react'

import '../css/app.css'
import Square from '../jsx/square.jsx'
import Board from '../jsx/board.jsx'

class app extends Component {
	render() {
		return (
			<div>
				<h1>hello world</h1>
				<Board />

			</div>
		)
	}
}

export default app
