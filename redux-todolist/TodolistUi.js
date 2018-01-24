import React from 'react'

export default (props) => {
	const { inputValue, list, handleChange, handleSubmit} = props
	return (
		<div>
      <input value={inputValue} onChange={handleChange}/>
      <button onClick={handleSubmit}>提交</button>
      <ul>
      	{
      		list.map((value, index) => {
      			return <li key={index}>{value}</li>
      		})
      	}
      </ul>
    </div>
	)
}