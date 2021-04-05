import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateTodo } from '../actions'


const UpdateTodo = ({id,todo}) => {
  const [updatedTodo, setUpdatedTodo] = useState(todo)
  const dispatch = useDispatch()
    
  const onChange = e => {
    setUpdatedTodo(e.target.value)
    }
  
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(updateTodo({id, todo: updatedTodo}))
    }

    

  
  return (
    <div className="things">
    
      <form onSubmit={handleSubmit}>
       
        <input type='text' value={updatedTodo} onChange={onChange} />
        <button type='submit'>Update Todo</button>
      </form>
    </div>
  )
}

export default UpdateTodo