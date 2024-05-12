import { useEffect } from "react";
import { useTodo } from "../contexts/TodoContext";
import { ToastContainer, toast } from 'react-toastify';

function TodoList() {
    const { todos, deleteTodo, updateStatus } = useTodo();
    function deleteTodoFunc(id) {
        deleteTodo(id);
    }

    function editStatus(id, status){
        console.log(id, status);
        updateStatus(id, status);
    }

    useEffect(() =>{
       console.log(todos);
    },[todos])
    return (
        <>
            <div className="todo_list-section">
                {!todos.length ? (<div className="todo_no-data">You are all catchup!</div>) : (
                    todos.map(todo => (
                        <div className={`todo_list-card ${todo.completedStatus ? 'completed' : ''}`} key={todo.id}>
                            <div className="todo_inner"><input type="checkbox" onChange={(e) => editStatus(todo.id, e.target.checked)} />&nbsp;<span className= {`${todo.completedStatus ? 'strike' : ''}`}>{todo.todo}</span></div>
                            <div className="todo_action-section">
                                {/* <span class="material-symbols-outlined edit" title="Edit">edit</span> */}
                                <span onClick={() => deleteTodoFunc(todo.id)} class="material-symbols-outlined delete" title="Delete">delete</span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    )
}

export default TodoList;