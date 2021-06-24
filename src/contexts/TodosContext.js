import { createContext, useReducer, useEffect } from "react"
import { fetchList } from "../api/crud"
import { BASE_URL } from "./../api/constants"

const initialState = []
export const TodosContext = createContext()
export default function TodosProvider({ children }) {
	const [todos, dispatchTodos] = useReducer(reducer, initialState)
	useEffect(() => {
		;(async function () {
			const todos = await fetchList(BASE_URL, "todos")
			dispatchTodos({ type: "INITIAL", payload: todos })
		})()
	}, [])

	function reducer(state, action) {
		switch (action.type) {
			case "INITIAL":
				return action.payload
			case "ADD":
				return [...state, action.payload]
			case "UPDATE":
				return [...state]
			case "DELETE":
				return [...state]
			default:
				throw new Error(`Wrong action type: ${action.type}`)
		}
	}
	return (
		<TodosContext.Provider value={[todos, dispatchTodos]}>
			{children}
		</TodosContext.Provider>
	)
}
