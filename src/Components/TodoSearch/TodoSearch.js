import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoSearch.css";
import React from "react";

function TodoSearch() {
  const {searchValue,setSearchValue}= React.useContext(TodoContext)
  return (
    <div className="search-container">
      <input 
      placeholder="Cortar cebolla" 
      value={searchValue}
      onChange={(event)=>{
        setSearchValue(event.target.value)
      }}
      />
      <span className="search-icon" />
    </div>
  );
}

export { TodoSearch };