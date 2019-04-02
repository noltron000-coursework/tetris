import React, { Component } from 'react'

import '../css/app.css'
import Square from '../jsx/square.jsx'

class app extends Component {
	render() {
		return (
			<div>
				<h1>hello world</h1>
				<Square color='1'/>

			</div>
		)
	}
}

export default app
