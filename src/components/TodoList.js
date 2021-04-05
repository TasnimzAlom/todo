import React from 'react'
import {useSelector} from "react-redux"
import AddTodo from './AddTodo'
import Todo from "./Todo"

function TodoList() {
    const {todos} = useSelector(state => state.todos)
    return (
        <div>
            <div className="things">
            <h1>Things to do</h1>
            <AddTodo/>
            </div>
        <div className ="box"> 
        
            {todos.map(todos => <Todo key={todos.id} {...todos}/>)}
           
        </div>
        </div>
    )
}

export default TodoList
