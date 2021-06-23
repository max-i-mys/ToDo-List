import { formatterDate } from "../../api/constants"
import { useTodos } from "../../hooks/useTodos"
import './TodoCards.css'

export default function TodoCards() {
	const [todos] = useTodos()
	return (todos.map(todo => {
		return (<div className="todo-task">
			<h4 key={todo.id}>{todo.title}</h4>
			<p>{todo.body}</p>
				<div className="todo__info">
				<span>{todo.status}</span>
				<span>{formatterDate.format(todo.createdAt)}</span>
				</div>
		</div>)
	}))
}