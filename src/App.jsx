import React from 'react'
import Counter from './Counter'
import TodoApp from './TodoApp'
import FormApp from './FormApp'
import AuthApp from './AuthApp'
import FruitList from './FruitList'

const App = () => {
  return (
    <div className='app'>
      <h1>React Fundamentals Projects</h1>
      <div className='projects-container'>
        <div className='project'>
          <h2>1. Counter App</h2>
          <Counter/>
        </div>
        <div className='project'>
          <h2>2. Todo App</h2>
          <TodoApp/>
        </div>
        <div className='project'>
          <h2>3. Form App</h2>
          <FormApp/>
        </div>
        <div className='project'>
          <h2>4. Auth App</h2>
          <AuthApp/>
        </div>
        <div className='project'>
          <h2>5. Fruit List App</h2>
          <FruitList/>
          </div>
      </div>
    </div>
  )
}

export default App