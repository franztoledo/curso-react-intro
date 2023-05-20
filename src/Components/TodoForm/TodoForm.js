import React from 'react'
import './TodoForm.css'
import { TodoContext } from '../TodoContext/TodoContext';
function TodoForm() {
    const{
        setOpenModal,
        addTodo,
    }=React.useContext(TodoContext);
    const [newTodo, setNewTodo]= React.useState('')

    const onSubmit =(event)=>{
        event.preventDefault()
        addTodo(newTodo)
        setOpenModal(false)
    }
    const onCancel=()=>{
        setOpenModal(false)
    }
    const onChange = (event) => {
        setNewTodo(event.target.value);
      };
    
  return (
    <form onSubmit={onSubmit}>
        <label>Escribe tu nuevo TODO</label>
        <textarea placeholder='Curso Basico de React.js' value={newTodo} onChange={onChange}/>
        <div className='TodoForm-buttonContainer'>
            <button className='TodoForm-button TodoForm-button--cancel' onClick={onCancel} >Cancelar</button>
            <button className='TodoForm-button TodoForm-button--add' >Agregar</button>
        </div>
    </form>
  )
}

export  {TodoForm}