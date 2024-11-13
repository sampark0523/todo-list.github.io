import {useState} from "react";
import Todo from "./Todo";
import React from "react";

function TodoList({ todos, removeTodo, toggleComplete }) {
    return(
        <u1 style={{ listStyle: 'none' }}>
            {todos.map(todo => (
                <Todo 
                    todo={todo} 
                    removeTodo={removeTodo}
                    toggleComplete={toggleComplete} 
                />
            ))}
        </u1>
    );
}

export default TodoList;