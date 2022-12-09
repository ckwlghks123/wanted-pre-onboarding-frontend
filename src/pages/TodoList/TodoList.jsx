import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../utils/localStorage";
import { tokenAxios } from "../../utils/myAxios";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import styles from "./TodoList.module.css";

let axios;

const TodoList = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const todoInputRef = useRef();

  const handleAddTodo = () => {
    axios
      .post("/todos", { todo: todoInputRef.current.value })
      .then(({ data }) => setTodos((prev) => [...prev, data]));
  };

  const handleComplete = useCallback(
    (id) => () => {
      const { todo, isCompleted } = todos.find((todo) => todo.id === id);
      setTodos(
        todos.map((prevTodo) =>
          prevTodo.id === id
            ? { ...prevTodo, isCompleted: !isCompleted }
            : prevTodo
        )
      );
      axios
        .put(`/todos/${id}`, { todo, isCompleted: !isCompleted })
        .catch(({ response: { data } }) => console.log(data));
    },
    [todos]
  );

  const handleDelete = useCallback(
    (id) => () => {
      setTodos(todos.filter((todo) => todo.id !== id));

      axios.delete(`/todos/${id}`);
    },
    [todos]
  );

  useEffect(() => {
    const token = getToken();

    if (!token) {
      navigate("/", { replace: true });
    }

    axios = tokenAxios(token);

    axios
      .get("/todos")
      .then((res) => setTodos(res.data))
      .catch(({ response }) => {
        console.log(response);
      });
  }, [navigate]);

  return (
    <div>
      <div className={styles["input-container"]}>
        <Input type="text" ref={todoInputRef} />
        <Button onClick={handleAddTodo}>추가</Button>
      </div>
      <ol>
        {todos.map(({ id, todo, isCompleted }) => (
          <li key={id} className={isCompleted ? styles.complete : null}>
            <p onClick={handleComplete(id)}>{todo}</p>
            <button>수정</button>
            <button onClick={handleDelete(id)}>삭제</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
