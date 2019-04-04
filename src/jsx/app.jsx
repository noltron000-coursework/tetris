import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from '../reducers/'

import '../css/app.css'
import Head from '../jsx/head.jsx'
import Next from '../jsx/next.jsx'
import Board from '../jsx/board.jsx'
import Score from '../jsx/score.jsx'
import Controls from '../jsx/controls.jsx'
import Overlay from '../jsx/overlay.jsx'

const store = createStore(reducers)

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className='app'>
					<Head />
					<Next />
					<Board />
					<Score />
					<Controls />
					<Overlay />
				</div>
			</Provider>
		)
	}
}

export default App
