import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import {addTodo} from "../actions";
import { IoIosAddCircle } from "react-icons/io";

function AddTodo() {
    const dispatch = useDispatch();

    const [todo, setTodo] = useState("");

    const onChange = (e) => {
        setTodo(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const newTodo = {
            todo,
            id: Date.now()
        };
        dispatch(addTodo(newTodo));

        setTodo("");
    };



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={todo}
                    onChange={onChange} />
                  
                <button type="submit"> <IoIosAddCircle/> </button>
            </form>
        </div>
    );
}

export default AddTodo
