import "./TodoDelete.css"
import { useTodos } from "../../hooks/useTodos"
import { useState } from "react"
import { deleteTodo } from "../../api/crud"

export default function TodoDelete(props) {
	const [, dispatch] = useTodos()
	const [disable, setDisable] = useState(false)
	async function todoDel() {
		setDisable(true)
		const [todoDeleted] = await deleteTodo(props.id)
		console.log(todoDeleted)
		if (todoDeleted) {
			dispatch({ type: "DELETE", payload: props.id })
		}
	}
	return (
		<>
			<button onClick={todoDel} className="todo__close-btn" disabled={disable}>
				Del
			</button>
		</>
	)
}
