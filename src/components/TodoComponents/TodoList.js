// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react"
import Todo from "./Todo"

const TodoList = props => {
    console.log(props)
    return (
        <div className="todo-list">
            {props.todo.length === 0 ? <h2>Please add a new task...</h2> : props.search === "" || null ? props.todo.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
            )) : props.search.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
            <button className="clear-all" onClick={props.clearAll}>Clear All Items</button>
            <button className="clear-complete" onClick={props.clearComplete}>Clear Completed Items</button>
        </div>
    )
}
export default TodoList