import { useEffect, useState } from 'react';
import { TodoProvider } from '../contexts/TodoContext';
import './todo.css';
import CreateForm from './CreateForm';
import TodoList from './TodoList';
import { ToastContainer, toast } from 'react-toastify';

function Todo() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        let todoData = {
            id: Date.now(),
            todo: todo,
            completedStatus: false
        }
        setTodos((prevVal) => [todoData, ...prevVal]);
        toast.success('New todo added!');
    }

    const deleteTodo = (id) => {
        setTodos((prevVal) => prevVal.filter(item => item.id !== id));
        toast.success('Todo deleted successfully!');
    }

    const updateStatus = (id, status) => {
        setTodos((prevVal) =>
            prevVal.map(item => {
                if (item.id === id) {
                    return { ...item, completedStatus: status };
                } else {
                    return item;
                }
            })
        );
    };

    const editTodo = (id, todo) => {
        setTodos((prevVal) => {
            return prevVal.map(item => {
                if(item.id === id){
                    return {...item, todo: todo }
                }else{
                    return item;
                }
            })
        })
        toast.success('Todo updated successfully!');
    }
    return (
        <TodoProvider value={{ todos, addTodo, deleteTodo, updateStatus, editTodo }}>
            <CreateForm />
            <TodoList />
            <ToastContainer position="bottom-right" autoClose={2000} />
        </TodoProvider>
    )
}

export default Todo;