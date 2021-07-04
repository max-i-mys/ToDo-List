import React from "react"
import "./App.css"
import AddTodo from "./components/AddTodo/AddTodo"
import Header from "./components/Header/Header"
import TodoCards from "./components/TodoCards/TodoCards"

function App() {
	return (
		<div className="App">
			<Header />
			<h1>Your ToDo list!!!</h1>
			<AddTodo></AddTodo>
			<div className="todos">
				<TodoCards status="new" />
				<TodoCards status="process" />
				<TodoCards status="finished" />
			</div>
		</div>
	)
}

export default App
