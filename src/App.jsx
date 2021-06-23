import React from "react";
import "./App.css";
import AddTodo from './components/AddTodo/AddTodo';
import TodoCards from "./components/AddTodo/TodoCards";

function App() {
  return (
    <div className="App">
      <TodoCards />
      <AddTodo />
    </div>
  );
}

export default App;
