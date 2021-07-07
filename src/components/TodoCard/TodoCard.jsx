import { Link } from "react-router-dom";
import { updateTodo } from "../../api/crud";
import { useTodos } from "../../hooks/useTodos";
import { formatterDate } from "../../utils/constants";
import { getNewStatus } from "../../utils/functions";
import TodoDelete from "../TodoDelete/TodoDelete";

export default function TodoCard({ todo }) {
  const [, dispach] = useTodos();
  async function changeStatus() {
    const newStatus = getNewStatus(todo.status);
    if (newStatus !== todo.status) {
      const [todoWithNewStatus, todoWithNewStatusError] = await updateTodo(todo.id, {
        status: newStatus,
        updatedAt: Date.now(),
      });
      if (!todoWithNewStatusError) {
        dispach({ type: "UPDATE", payload: todoWithNewStatus });
      }
    }
  }

  return (
    <>
      <div onDoubleClick={changeStatus} className={`todo__task ${todo.status}`}>
        <h4 className="todo__title">{todo.title}</h4>
        <TodoDelete id={todo.id} />
        <p className="todo__body">{todo.body}</p>
        <div className="todo__info">
          <span>{todo.status}</span>
          <div className="todo__time">
            <p>Created: {formatterDate.format(todo.createdAt)}</p>
            {todo.updatedAt && <p>Updated: {formatterDate.format(todo.updatedAt)}</p>}
          </div>
        </div>
        <Link to={`/todos/${todo.id}`} className="todo__go">
          Go to the todo...
        </Link>
      </div>
    </>
  );
}
