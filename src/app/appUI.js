import React from 'react'
import { CreateTodoButton } from '../Components/CreateTodo/CreateTodoButton';
import { TodoCounter } from '../Components/TodoCounter/TodoCounter';
import { TodoItem } from '../Components/TodoItem/TodoItem';
import { TodoList } from '../Components/TodoList/TodoList';
import { TodoSearch } from '../Components/TodoSearch/TodoSearch';
import { TodoError } from '../Components/TodoError/TodoError';
import { TodoLoading } from '../Components/TodoLoading/TodoLoading';
import { EmptyTodo } from '../Components/EmptyTodo/EmptyTodo'
import { TodoContext } from '../Components/TodoContext/TodoContext';
import { Modal } from '../Components/Modal/Modal';
import { TodoForm } from '../Components/TodoForm/TodoForm'
function AppUI() {
  const{loading,error,searchTodos,completeTodo,deleteTodo,openModal}=React.useContext(TodoContext)
  return (
    <>
        <TodoCounter/>
        <TodoSearch/>
      
        <TodoList>
              {loading && <TodoLoading/>}
              {error && <TodoError/>}
              {(!loading && searchTodos.length === 0) && <EmptyTodo/>}

              {searchTodos.map(todo => (
              <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}
              onComplete={()=>completeTodo(todo.text)}
              onDelete={()=>deleteTodo(todo.text)}
              />
              ))}
        </TodoList>
          
        
        <CreateTodoButton/>
        {openModal && (
          <Modal>
            <TodoForm/>
          </Modal>
        )}
        
    </>
  )
}

export  {AppUI}