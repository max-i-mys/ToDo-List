import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import TodosProvider from "./contexts/TodosContext"
import { BrowserRouter } from "react-router-dom"
import AuthProvider from './contexts/AuthContext';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<TodosProvider>
					<App />
				</TodosProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
)
