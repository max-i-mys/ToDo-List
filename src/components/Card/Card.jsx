import { BASE_URL } from "../../api/constants"
import { fetchMerge } from "../../api/crud"
import { useTodos } from "../../hooks/useTodos"
import { formatterDate, getNewStatus } from "../../utils/functions"
import TodoDelete from "../TodoDelete/TodoDelete"

export default function Card({ todo }) {
	const [, dispach] = useTodos()
	async function changeStatus() {
		const newStatus = getNewStatus(todo.status)
		if (newStatus !== todo.status) {
			const todoWithNewStatus = await fetchMerge(BASE_URL, "todos", todo.id, {
				status: newStatus,
				processAt: newStatus === "process" ? Date.now() : todo.processAt,
				finishedAt: newStatus === "finished" ? Date.now() : todo.finishedAt,
			})
			dispach({ type: "UPDATE", payload: todoWithNewStatus })
		}
	}

	return (
		<>
			<div onDoubleClick={changeStatus} className={`todo__task ${todo.status}`}>
				<h4 className="todo__title">{todo.title}</h4>
				<TodoDelete id={todo.id} />
				<p className="todo__body">{todo.body}</p>
				<div className="todo__info">
					<span>{todo.status}</span>
					<div className="todo__time">
						<p>Create: {formatterDate.format(todo.createdAt)}</p>
						{todo.processAt && (
							<p>Process: {formatterDate.format(todo.processAt)}</p>
						)}

						{todo.finishedAt && (
							<p>Finished: {formatterDate.format(todo.finishedAt)}</p>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
