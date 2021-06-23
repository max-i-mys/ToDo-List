import { useTodos } from "../../hooks/useTodos"
import './TodoCards.css'
import { changeStatus, determineStatus } from "../../api/functions"
import React, { useState, useEffect } from 'react'
import { fetchReplace } from "../../api/crud"
import { BASE_URL } from "../../api/constants"




export default function TodoCards() {
	const [todos, dispatchTodos] = useTodos()
	const [chooseTodo, setChooseTodoId] = useState({})
	useEffect(() => {
		(async function(){ if(chooseTodo.id){
			const changeableTodo = chooseTodo
		changeableTodo.status = changeStatus(chooseTodo.status)
		const finallyTodo = await fetchReplace(BASE_URL, 'todos', chooseTodo.id, changeableTodo)
		dispatchTodos({type: 'UPDATE', payload: finallyTodo})
		}})()
		
	}, [chooseTodo])
	
	return (
		<>
		{todos &&
		<div className="todo__box">
			{todos.map(todo => {
				let todoStatus = determineStatus(todo.status)
			return (
			<div onClick={()=>setChooseTodoId(todo)} className={`todo__task ${todoStatus}`} key={todo.id}>
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