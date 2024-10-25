import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../features/todoSlice";
const AddToDo = () => {
  const [todo, setTodo] = useState("");
  const dispatcher = useDispatch();
  const handleaddToDo = () => {
    dispatcher(addToDo(todo));
    setTodo("");
  };
  return (
    <div>
      <input
        placeholder="Enter desc"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={handleaddToDo}>Submit</button>
    </div>
  );
};

export default AddToDo;
