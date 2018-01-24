import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute, Redirect} from 'react-router'
import Home from './Home'
import List from './List'
import NoMatch from './NoMatch'
import Header from './Header'

export default class App extends Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path='/' component={Header}>
					<IndexRoute component={Home}></IndexRoute>
					<Route onEnter={this.handleEnter} path='list(/:id)' component={List}></Route>
					<Redirect from='abc/:id' to='list/:id'></Redirect>
					<Route path="*" component={NoMatch}/>
				</Route>
			</Router>
		)
	}

	handleEnter(nextState, replaceState) {
		if(!nextState.params.id) {
			replaceState({pathname: '/list/1'})
		}
	}
}