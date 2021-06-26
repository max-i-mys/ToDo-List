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
			case "UPDATE": {
				const newState = JSON.parse(JSON.stringify([...state]))
				const idX = newState.findIndex(todo => todo.id === action.payload.id)
				newState.splice(idX, 1, action.payload)
				return newState
			}
			case "DELETE": {
				const newState = JSON.parse(JSON.stringify([...state]))
				const idX = newState.findIndex(todo => todo.id === action.payload)
				if (idX !== -1) {
					newState.splice(idX, 1)
				} else {
					throw new Error(`In ${action.type} wrong todo.id`)
				}
				return newState
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
