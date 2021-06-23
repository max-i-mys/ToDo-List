import React, { useState, useEffect} from "react";
import "./App.css";
import { useTodos } from './hooks/useTodos';
import AddTodo from './components/AddTodo/AddTodo';

function App() {
  const [todos] = useTodos()
  return (
    <div className="App">
      {todos.map(todo => <h1 key={todo.id}>{todo.title}</h1>)}
      <AddTodo></AddTodo>
    </div>
  );
}

export default App;
