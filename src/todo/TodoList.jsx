import { useEffect, useState } from "react";
import { useTodo } from "../contexts/TodoContext";
import { ToastContainer, toast } from 'react-toastify';

function TodoList() {
    const { todos, deleteTodo, updateStatus, editTodo } = useTodo();
    const [editableId, setEditableId] = useState(null); // Track the ID of the currently editable todo
    const [editValue, setEditValue] = useState("");

    function deleteTodoFunc(id) {
        deleteTodo(id);
    }

    function editStatus(id, status) {
        updateStatus(id, status);
    }

    function makeEditable(todo) {
        if(todo.completedStatus){
            toast.warn('Edit is not allowed!')
            return;
        }
        setEditableId(todo.id);
        setEditValue(todo.todo);
    }

    function handleEditChange(e) {
        setEditValue(e.target.value);
    }

    function handleEditSave(id) {
        if(!editValue){
            toast.warn('Input can not be empty!');
            return;
        }
        editTodo(id,editValue);
        setEditableId('');
        setEditValue('');
    }

    return (
        <>
            <div className="todo_list-section">
                {!todos.length ? (
                    <div className="todo_no-data">You are all caught up!</div>
                ) : (
                    todos.map(todo => (
                        <div className={`todo_list-card ${todo.completedStatus ? 'completed' : ''}`} key={todo.id}>
                            {editableId === todo.id ? (
                                <input type="text" className="edit-input" value={editValue} onChange={handleEditChange} />
                            ) : (
                                <div className="todo_inner">
                                    <input type="checkbox" onChange={(e) => editStatus(todo.id, e.target.checked)} />&nbsp;
                                    <span className={`todo-text ${todo.completedStatus ? 'strike' : ''}`}>{todo.todo}</span>
                                </div>
                            )}
                            <div className="todo_action-section">
                                {editableId === todo.id ? (
                                    <span className="material-symbols-outlined save" title="Update" onClick={() => handleEditSave(todo.id)}>save</span>
                                ) : (
                                    <span className="material-symbols-outlined edit" title="Edit" onClick={() => makeEditable(todo)}>edit</span>
                                )}
                                <span onClick={() => deleteTodoFunc(todo.id)} className="material-symbols-outlined delete" title="Delete">delete</span>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <ToastContainer position="bottom-right" autoClose={2000} />
        </>
    )
}

export default TodoList;
