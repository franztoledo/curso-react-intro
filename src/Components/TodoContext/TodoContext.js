import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext =React.createContext()

function TodoProvider({children}){
     //estado
    const {
        item:todos, 
        saveItem:saveTodos, 
        loading, 
        error
    }= useLocalStorage('TODOS_V1',[])
    const [searchValue, setSearchValue]= React.useState('')
    // estado derivado para el contador
    const completedTodos = todos.filter(todo => !!todo.completed).length
    console.log('buscan ' +  searchValue);
    // estado derivado para el buscador
    const searchTodos = todos.filter((todo) => {
        const todoText =todo.text.toLowerCase()
        const searchText =searchValue.toLowerCase()
        return todoText.includes(searchText)
    })

    //Estado para el open Modal
    const [openModal, setOpenModal]=React.useState(false)

    const addTodo = (text)=>{
        const newTodos = [...todos];
        newTodos.push({
            text ,
            completed:false,
        })
        saveTodos(newTodos)
    } 
    

    const completeTodo = (text)=>{
        const newTodos = [...todos]
        const todoIndex= newTodos.findIndex(
        todo => todo.text === text
        )
        newTodos[todoIndex].completed=true
        saveTodos(newTodos)
    }

    const deleteTodo = (text)=>{
        const newTodos = [...todos]
        const todoIndex= newTodos.findIndex(
        todo => todo.text === text
        )
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)

    }
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            todos,
            searchValue,
            setSearchValue,
            searchTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}
