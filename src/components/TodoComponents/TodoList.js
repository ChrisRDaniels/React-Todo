import React from 'react';
import todo from './Todo';

const TodoList = props => {
    return (
        <div className = "todo-list">
            {props.todoList.map(item => (
                <Todo key = {todo.id} item = {item} toggleTodo = {props.toggletodo} />
            ))}
            <button className = "clear-btn" onClick = {props.clearFinished}>
                Clear finished
            </button>
        </div>
        
    )
}

export default TodoList;