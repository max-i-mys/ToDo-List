import axios from "axios"
import { BASE_URL } from "./constants"

const crud = axios.create({
	baseURL: BASE_URL,
	headers: {
		"Content-type": "application/json; charset=UTF-8",
	},
})

crud.interceptors.response.use(
	response => {
		return [response.data, null]
	},
	error => {
		return [null, error]
	}
)
export async function getTodos() {
	return await crud.get("/todos")
}

export async function getTodo(id) {
	return await crud.get(`/todos/${id}`)
}

export async function addTodo(data) {
	return await crud.post("/todos", data)
}

export async function updateTodo(id, data) {
	return await crud.patch(`/todos/${id}`, data)
}

export async function deleteTodo(id) {
	return await crud.delete(`/todos/${id}`)
}
