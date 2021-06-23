
import { fetchAdd } from './../../api/crud';
import { BASE_URL } from './../../api/constants';
import { useTodos } from './../../hooks/useTodos';

export default function AddTodo() {
    const [, dispatchTodos] = useTodos()
    async function addTodo(event) {
        event.preventDefault()
        const newTodo = {
            title: 'todo4'
        }
        const savedTodo = await fetchAdd(BASE_URL, 'todos', newTodo)
        dispatchTodos({type: 'ADD', payload: savedTodo})
    }
    return (
        <form onSubmit={addTodo}>
            <input type="text" />
            <textarea></textarea>
            <button type="submit">Add</button>
        </form>
    )
}