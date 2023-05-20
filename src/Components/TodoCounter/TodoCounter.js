import React from 'react'
import "./TodoCounter.css"
import { TodoContext } from '../TodoContext/TodoContext'
function TodoCounter() {
  const {completedTodos,todos}= React.useContext(TodoContext)
  return (
    <h1 className='title'> 
      Has completado {completedTodos} de {todos.length} TODOS
    </h1>
  )
}

export {TodoCounter}