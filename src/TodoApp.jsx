import React, { useState } from 'react'

const TodoApp = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () =>{
    if(input.trim()){
      setTodos([...todos,{
        id: Date.now(),
        text: input,
        completed: false
      }]);
      setInput('');
    }
  };

  const toggleTodo = (id) =>{
    setTodos(todos.map(todo=>todo.id===id ? {...todo, completed: !todo.completed} : todo));
  };
  const deleteTodo = (id) =>{
    setTodos(todos.filter(todo => todo.id !== id));
  };
    
  return (
    <div className='todo-app'>
      <h1>Todo App</h1>
      <div className='input-container'>
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Add a new todo...' />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className='todo-list'>
        {
          todos.map(todo=>(
            <li key={todo.id} className={todo.completed ? 'completed' : ''}>
              <input type='checkbox' checked={todo.completed} onChange={()=>toggleTodo(todo.id)} />
              <span>{todo.text}</span>
              <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default TodoApp