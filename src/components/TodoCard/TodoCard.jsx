import { Link } from "react-router-dom"
import { updateTodo } from "../../api/crud"
import { useTodos } from "../../hooks/useTodos"
import { formatterDate } from "../../utils/constants"
import { getNewStatus } from "../../utils/functions"
import TodoDelete from "../TodoDelete/TodoDelete"

export default function TodoCard({ todo }) {
	const [, dispach] = useTodos()
	async function changeStatus() {
		const newStatus = getNewStatus(todo.status)
		if (newStatus !== todo.status) {
			const [todoWithNewStatus] = await updateTodo(todo.id, {
				status: newStatus,
				updateAt: Date.now(),
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
						{todo.updateAt && (
							<p>Update: {formatterDate.format(todo.updateAt)}</p>
						)}
					</div>
				</div>
				<Link to={`/todo/${todo.id}`} className="todo__go">
					Go to the todo...
				</Link>
			</div>
		</>
	)
}
