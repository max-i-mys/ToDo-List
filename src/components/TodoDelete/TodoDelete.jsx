import { fetchRemove } from "../../api/crud"
import "./TodoDelete.css"
import React, { useState } from "react"
import { BASE_URL } from "../../api/constants"
import { useTodos } from "../../hooks/useTodos"

export default function TodoDelete(props) {
	const [idTodo, setIdTodo] = useState(props.id)
	const [, dispatch] = useTodos()

	async function todoDel() {
		setIdTodo(props.id)
		const todoDel = await fetchRemove(BASE_URL, "todos", idTodo)
		dispatch({ type: "DELETE", payload: todoDel })
	}
	return (
		<>
			<button onClick={todoDel} className="todo__close-btn">
				Del
			</button>
		</>
	)
}
