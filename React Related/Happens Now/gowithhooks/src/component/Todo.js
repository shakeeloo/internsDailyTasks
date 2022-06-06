import React from 'react'
import '../App.css'
import { ACTIONS } from '../App'
function Todo({ todo, dispatch }) {
  return (
    <div className='ui celled list'>
        <span className='ui header' id={todo.complete? 'yes':'no'}>{todo.name}</span>
        <button className='ui button right floated blue' onClick={()=>dispatch({type:ACTIONS.TOGGLE_TODO, payload:{id:todo.id}})}>Toggle</button>
        <button className='ui button right floated blue' onClick={()=>dispatch({type:ACTIONS.DELETE_TODO, payload:{id:todo.id}})}>Delete</button>
    </div>
    
  )
}

export default Todo