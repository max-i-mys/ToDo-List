import React from "react"
import { Route, Switch } from "react-router-dom"
import "./App.css"
import AddTodo from "./components/AddTodo/AddTodo"
import Header from "./components/Header/Header"
import TodoCards from "./components/TodoCards/TodoCards"
import TodoPage from "./components/TodoPage/TodoPage"
function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/">
					<h1>Your ToDo list!!!</h1>
				</Route>
				<Route exact path="/add-todo">
					<AddTodo></AddTodo>
				</Route>
				<Route exact path="/todos">
					<div className="todos">
						<TodoCards status="new" />
						<TodoCards status="process" />
						<TodoCards status="finished" />
					</div>
				</Route>
				<Route exact path="/todos/:id">
					<TodoPage />
				</Route>
				<Route path="/*">
					<h1>404! Sorry, path is not found</h1>
				</Route>
			</Switch>
		</div>
	)
}

export default App
