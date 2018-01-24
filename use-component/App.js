import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
    	name: 'dell',
    	age: 16
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
  	if (nextState.name != this.state.name) {
  		return true
  	}else {
  		return false
  	}
  }

  render() {
  	console.log('render')
    return (
    	<div>
    		{this.state.name}
    	</div>
    )
  }

  componentDidMount() {
  	this.setState({
  		age: 17
  	})
  }

}