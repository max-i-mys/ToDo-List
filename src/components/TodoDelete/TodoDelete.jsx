import { fetchRemove } from "../../api/crud"
import "./TodoDelete.css"
import { BASE_URL } from "../../api/constants"
import { useTodos } from "../../hooks/useTodos"

export default function TodoDelete(props) {
	const [, dispatch] = useTodos()

	async function todoDel() {
		const todoRemote = await fetchRemove(BASE_URL, "todos", props.id)
		if (todoRemote) {
			dispatch({ type: "DELETE", payload: props.id })
		}
	}
	return (
		<>
			<button onClick={todoDel} className="todo__close-btn">
				Del
			</button>
		</>
	)
}
