import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [
    {
      id: 1,
      text: "Go to Market",
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const todo = {
        id: Date.now.toString,
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeToDo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addToDo, removeToDo } = todoSlice.actions;

export default todoSlice.reducer;
