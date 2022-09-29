import React, { useState } from "react";

function ToDoList(){
    const [todo, setTodo] = useState({ description: "", date: ""});
    const [todos, setTodos] = useState([]);


const inputChanged = (event) => { 
    setTodo({...todo, [event.target.name]: event.target.value});
};


const addTodo = (event) => { 
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ description: "", date: ""});
};

    return (
    <div>
        Description:{" "}
        <input
        type="text"
        onChange={inputChanged}
        name="description"
        value={todo.description}
        />
        Date;{" "}
        <input
        type="date"
        onChange={inputChanged}
        name="date"
        value={todo.date} 
        />
        <button onClick={addTodo}>Add</button>
        <table>
            <tbody >
                <tr><td>Description</td><td>Date</td></tr>
                {todos.map((todo, index) =>
                 <tr key={index}>
                 <td>{todo.description}</td>
                 <td>{todo.date}</td>
                 </tr>)}
            </tbody>
        </table>
    </div>
                 
        );
  }

  export default ToDoList;