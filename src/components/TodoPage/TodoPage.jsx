import { useParams } from "react-router-dom"
import { getTodo } from "../../api/crud"
import { formatterDate } from "../../utils/constants"
import React, { useState, useEffect } from "react"
import TodoCard from "../TodoCard/TodoCard"

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

	return <>{todo && <TodoCard todo={todo}></TodoCard>}</>
}
