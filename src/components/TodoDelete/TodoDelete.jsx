import "./TodoDelete.css"
// import { fetchRemove } from "../../api/crud"
// import { BASE_URL } from "../../api/constants"
import { useTodos } from "../../hooks/useTodos"
import { useState } from "react"

export default function TodoDelete(props) {
	const [, dispatch] = useTodos()
	const [disable, setDisable] = useState(false)
	async function todoDel() {
		setDisable(true)
		// const todoRemote = await fetchRemove(BASE_URL, "todos", props.id)
		// if (todoRemote) {
		// 	dispatch({ type: "DELETE", payload: props.id })
		// }
	}
	return (
		<>
			<button onClick={todoDel} className="todo__close-btn" disabled={disable}>
				Del
			</button>
		</>
	)
}
