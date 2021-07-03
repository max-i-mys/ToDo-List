import { useTodos } from "../../hooks/useTodos"
import "./TodoCards.css"
import React from "react"
import TodoCard from "../TodoCard/TodoCard"

export default function TodoCards({ status }) {
	const [todos] = useTodos()

	return (
		<>
			{todos && (
				<div className="todo__box">
					{todos
						.filter(todo => todo.status === status)
						.sort((a, b) => b.createdAt - a.createdAt)
						.map(todo => (
							<TodoCard key={todo.id} todo={todo} />
						))}
				</div>
			)}
		</>
	)
}
