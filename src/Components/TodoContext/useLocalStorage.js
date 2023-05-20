import React from "react"
function useLocalStorage(itemName, initialValue){
    const [item, setItem]  = React.useState(initialValue)
    const [loading, setLoading]  = React.useState(true)
    const [error, setError]  = React.useState(false)
    
    React.useEffect(()=>{
        setTimeout(()=>{
            try {
                const localStorageItem = localStorage.getItem (itemName)
      
                let parsedItem
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItem =initialValue  
                } else {
                    parsedItem = JSON.parse(localStorageItem)
                    setItem(parsedItem)
                }
                setLoading(false)
            } catch (error) {
                setError(true);
            }
        }, 2000)
    },[ ])
   
  
    const saveItem=(newItem) =>{
      localStorage.setItem (itemName, JSON.stringify(newItem))
      setItem(newItem)
    }
    return{
        item,
        saveItem,
        loading, 
        error
    }
}
export {useLocalStorage}









// const defaultTodos = [
//   {text: 'Curso de react', completed: true},
//   {text: 'Curso practico de react', completed: false},
//   {text: 'Test de react', completed: false},
//   {text: 'Otros de react', completed: false},
//   {text: 'Otrosde de react', completed: true},
// ]

// localStorage.setItem('TODOS_V1', defaultTodos)

// localStorage.removeItem('TODOS_V1')