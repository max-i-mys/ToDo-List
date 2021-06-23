import { useTodos } from "../../hooks/useTodos"
import './TodoCards.css'
import { determineStatus } from "../../api/functions"

export default function TodoCards() {
	const [todos] = useTodos()
	return (
		<>
		{todos &&
		<div className="todo__box">
			{todos.map(todo => {
				let todoStatus = determineStatus(todo.status)
			return (
			<div className={`todo__task ${todoStatus}`} key={todo.id}>
				<h4 className="todo__title">{todo.title}</h4>
				<p className="todo__body">{todo.body}</p>
				<div className="todo__info">
				<span>{todo.status}</span>
				<span>{todo.createdAt}</span>
				</div>
			</div>)
			})}
			</div>}
		</>
		
		
		
		
		
)
}