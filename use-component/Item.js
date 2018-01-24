import React, { Component } from 'react'

export default class Item extends Component {

	componentWillReceiveProps() {
		console.log("componentWillReceiveProps")
	}

	render() {
		return <li>{this.props.children}</li>
	}
}