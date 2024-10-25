import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToDo } from "../features/todoSlice";
const ToDo = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatcher = useDispatch();
  const handleRemove = (id) => {
    dispatcher(removeToDo(id));
  };
  return (
    <div>
      {todos.map((todo, ind) => (
        <>
          <p key={ind}>{todo.text}</p>
          <button onClick={() => handleRemove(todo.id)}>X</button>
        </>
      ))}
    </div>
  );
};

export default ToDo;
