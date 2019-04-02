import React, { Component } from 'react'

// Represents a grid square with a color
class Square extends Component {
	render () {
		const classes = `square color-${this.props.color}`
		return <div className={classes} />
	}
}

export default Square
