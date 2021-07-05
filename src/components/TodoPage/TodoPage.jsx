import { useParams } from "react-router-dom"
import { getTodo } from "../../api/crud"
import { formatterDate } from "../../utils/constants"
import React, { useState, useEffect } from "react"
import TodoCard from "../TodoCard/TodoCard"
import "./TodoPage.css"

export default function TodoPage() {
	const { id } = useParams()
	const [todo, setTodo] = useState(null)

	useEffect(() => {
		;(async function () {
			const [data] = await getTodo(id)
			if (data) {
				setTodo(data)
			}
		})()
	}, [id])

	return (
		<>
			{todo && (
				<div className="page__box">
					<h1>{todo.title}</h1>
					<p className="page__body">{todo.body}</p>
					<div className="page__box-time">
						<p>Create: {formatterDate.format(todo.createdAt)}</p>
						{todo.updateAt && (
							<p>Update: {formatterDate.format(todo.updateAt)}</p>
						)}
					</div>
				</div>
			)}
		</>
	)
}
