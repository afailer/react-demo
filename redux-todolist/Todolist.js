import React, { Component } from 'react'
import { getInputChangeAction, getAddItemAction } from './actionCreator'
import TodolistUi from './TodolistUi'
import store from './store'

export default class Todolist extends Component {

	constructor(props) {
		super(props)
		this.state = store.getState()
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		const unsubscribe = store.subscribe(this.handleStoreChange.bind(this))
    // unsubscribe()
	}
  
  render() {
    return (
      <TodolistUi 
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }

  handleChange(e) {
  	const action = getInputChangeAction(e.target.value)
  	store.dispatch(action)
  }

  handleStoreChange() {
  	this.setState(store.getState())
  }

  handleSubmit() {
  	const action = getAddItemAction()
  	store.dispatch(action)
  }

}