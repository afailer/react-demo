import React, { Component } from 'react'

export default class List extends Component {

	componentDidMount() {
      this.props.router.setRouteLeaveHook(
        this.props.route,
        this.routerWillLeave
      )
  	}

	routerWillLeave() {
	      return '您真的要离开这个页面么?'
  	}

	render() {
		return <div>List --- {this.props.params.id} --- {this.props.location.query.name}</div>
	}
}