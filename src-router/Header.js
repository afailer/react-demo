import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Header extends Component {
	render() {
		return (
			<div>
				<div>header</div>
				<div>
					<Link to='/list'>列表页</Link>
					<Link to='/'>首页</Link>
					<Link to='/sfsfdsafsdfd'>404页</Link>
				</div>
				<div>{this.props.children}</div>
			</div>
		)
	}
}