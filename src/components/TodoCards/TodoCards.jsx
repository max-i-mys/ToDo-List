import { useTodos } from "../../hooks/useTodos"
import "./TodoCards.css"
import React from "react"
import Card from "../Card/Card"

export default function TodoCards() {
	const [todos] = useTodos()

	return (
		<>
			{todos && (
				<div className="todo__box">
					{todos.map(todo => (
						<Card key={todo.id} todo={todo} />
					))}
				</div>
			)}
		</>
	)
}
