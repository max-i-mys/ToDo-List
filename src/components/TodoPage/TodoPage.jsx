import { useHistory, useParams, useLocation } from "react-router-dom";
import { getTodo } from "../../api/crud";
import { formatterDate } from "../../utils/constants";
import React, { useState, useEffect } from "react";
import TodoCard from "../TodoCard/TodoCard";

export default function TodoPage() {
  const history = useHistory();
  const { id } = useParams();
  const [todoData, setTodoData] = useState(null);
  const loc = useLocation();
  console.log(loc);
  useEffect(() => {
    (async function () {
      const [todo, todoError] = await getTodo(id);
      if (!todoError) {
        setTodoData(todo);
      } else {
        history.replace("/404");
      }
    })();
  }, [history, id]);

  return <>{todoData && <TodoCard todo={todoData}></TodoCard>}</>;
}
