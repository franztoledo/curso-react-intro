import './App.css';
import React from 'react'
import { TodoProvider } from '../Components/TodoContext/TodoContext';
import { AppUI } from './appUI';

function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
    
  );
}
export default App

