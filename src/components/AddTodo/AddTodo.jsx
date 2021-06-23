import React, { useState } from 'react'
import { fetchAdd } from './../../api/crud';
import { BASE_URL } from './../../api/constants';
import { useTodos } from './../../hooks/useTodos';

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
						createdAt: now,
						status: 'new'
				}
				const savedTodo = await fetchAdd(BASE_URL, 'todos', newTodo)
				dispatchTodos({type: 'ADD', payload: savedTodo})
				event.target.reset()
    }
    return (
        <form onSubmit={addTodo}>
            <input type="text" onChange={(event) => setTodoTitle(()=>event.target.value)} name="title" required />
            <textarea name="body" onChange={(event)=>setBody(()=>event.target.value)} required></textarea>
            <button type="submit">Add</button>
        </form>
    )
}