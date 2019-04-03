import React, { Component } from 'react'

import '../css/app.css'
import Head from '../jsx/head.jsx'
import Next from '../jsx/next.jsx'
import Board from '../jsx/board.jsx'
import Score from '../jsx/score.jsx'
import Controls from '../jsx/controls.jsx'

class App extends Component {
	render() {
		return (
			<div className='app'>
				<Head />
				<Next />
				<Board />
				<Score />
				<Controls />
			</div>
		)
	}
}

export default App
