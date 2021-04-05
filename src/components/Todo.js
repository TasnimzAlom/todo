import React, {useState} from 'react'
import UpdateTodo from './UpdateTodo'
import {deleteTodo} from "../actions"
import { useDispatch } from 'react-redux'
import {VscTrash, VscEdit} from "react-icons/vsc"

function Todo({todo,id}) {
    const dispatch = useDispatch()
    const [isUpdate, setIsUpdate]= useState(false)

        const handleDelete = () =>{
            dispatch(deleteTodo({id, todo: deleteTodo}))
        }

    return (
        <div className="todos">
            <ul>
                <li>{todo}</li>
                </ul>
            {isUpdate && <UpdateTodo id={id} todo ={todo}/>}
          <div className="buttons">
            <button onClick={()=>setIsUpdate(true)}><VscEdit/> </button>
            <button onClick={handleDelete}><VscTrash/></button>
            </div>
        </div>
    )
}


export default Todo
