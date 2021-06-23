import React, { useState } from 'react'
import { fetchAdd } from './../../api/crud';
import { BASE_URL, formatterDate } from './../../api/constants';
import { useTodos } from './../../hooks/useTodos';
import "./AddTodo.css"

export default function AddTodo() {
	const [todoTitle, setTodoTitle] = useState("")
	const [todoBody, setBody] = useState()

    const [, dispatchTodos] = useTodos()
    async function addTodo(event) {
				const now = new Date()
				event.preventDefault()
				const newTodo = {
						title: todoTitle,
						body: todoBody,
						createdAt: formatterDate.format(now),
						status: 'new'
				}
				const savedTodo = await fetchAdd(BASE_URL, 'todos', newTodo)
				dispatchTodos({type: 'ADD', payload: savedTodo})
				event.target.reset()
    }
    return (
        <form onSubmit={addTodo} className="todo__add">
            <input className="todo__add-title" type="text" onChange={(event) => setTodoTitle(()=>event.target.value)} name="title" required />
            <textarea className="todo__add-body" name="body" onChange={(event)=>setBody(()=>event.target.value)} required minLength="10"></textarea>
            <button type="submit" className="todo__btn">Add</button>
        </form>
    )
}