import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function CreateForm() {
    const [todo, setTodo] = useState();
    const {addTodo} = useTodo();

    function add(e) {
       e.preventDefault();
       addTodo(todo);
       setTodo("");
    }
    return (
        <>
            <div className="todo_main-section">
                <div className="main-section">
                    <h1 className="header">Todo List</h1>
                    <hr className='hrline'></hr>
                    <div className="flex">
                        <input className="input-field normal-input" type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
                        <button disabled={!todo} className="button-3" onClick={add}>Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateForm;