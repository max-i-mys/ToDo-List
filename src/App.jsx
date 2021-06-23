import React from "react";
import "./App.css";
import AddTodo from './components/AddTodo/AddTodo';
import TodoCards from "./components/TodoCards/TodoCards";

function App() {
  return (
    <div className="App">
      <TodoCards />
      <AddTodo></AddTodo>
    </div>
  );
}

export default App;
