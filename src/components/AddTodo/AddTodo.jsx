import React, { useState } from "react"
import { addTodo } from "../../api/crud"
import { useTodos } from "./../../hooks/useTodos"

import "./AddTodo.css"
import { useHistory } from 'react-router-dom';

export default function AddTodo() {
	const [todoTitle, setTodoTitle] = useState("")
	const [todoBody, setBody] = useState()
	const history = useHistory()
	const [, dispatchTodos] = useTodos()
	async function addNewTodo(event) {
		event.preventDefault()
		const newTodo = {
			title: todoTitle,
			body: todoBody,
			createdAt: Date.now(),
			updatedAt: null,
			status: "new",
		}
		const [savedTodo, savedTodoError] = await addTodo(newTodo)
		if (!savedTodoError) {
			dispatchTodos({ type: "ADD", payload: savedTodo })
			event.target.reset()
			history.push('/todos')
		}
	}
	return (
		<form onSubmit={addNewTodo} className="todo__add">
			<input
				className="todo__add-title"
				type="text"
				onChange={event => setTodoTitle(() => event.target.value)}
				name="title"
				required
			/>
			<textarea
				className="todo__add-body"
				name="body"
				onChange={event => setBody(() => event.target.value)}
				required
				minLength="1"
			></textarea>
			<button type="submit" className="todo__btn">
				Add
			</button>
		</form>
	)
}
