import React, { Component } from 'react'

// Displays a message
class Overlay extends Component {

	render() {
		return (
			<div className='overlay hidden'>
				<h1>Message Title</h1>
				<p>Message info...</p>
			</div>
		)
	}
}

export default Overlay
