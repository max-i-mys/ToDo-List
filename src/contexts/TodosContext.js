import { createContext, useReducer, useEffect } from "react"
import { getTodos } from "../api/crud"

const initialState = []
export const TodosContext = createContext()
export default function TodosProvider({ children }) {
	const [todos, dispatchTodos] = useReducer(reducer, initialState)
	useEffect(() => {
		; (async function () {
			const [todos, todosError] = await getTodos()
			if (!todosError) {
				dispatchTodos({ type: "INITIAL", payload: todos })
			}
		})()
	}, [])

	function reducer(state, action) {
		switch (action.type) {
			case "INITIAL":
				return action.payload
			case "ADD":
				return [...state, action.payload]
			case "UPDATE": {
				const todoIdx = state.findIndex(todo => todo.id === action.payload.id)
				const newState = [...state]
				if (todoIdx !== -1) {
					newState.splice(todoIdx, 1, action.payload)
					return newState
				} else{
					throw new Error('Todo index is not found!')
				}
			}
			case "DELETE": {
				const todoIdx = state.findIndex(todo => todo.id === action.payload)
				const newState = [...state]
				if (todoIdx !== -1) {
					newState.splice(todoIdx, 1)
					return newState
				} else{
					throw new Error('Todo index is not found!')
				}
			}
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
