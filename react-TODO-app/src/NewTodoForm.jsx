import React, { useContext, useRef } from "react";
import { TodoContext } from "./App";

export function NewTodoForm() {
  const nameRef = useRef(null); // Initialize useRef with null
  const { addNewTodo } = useContext(TodoContext);

  function handleSumbit(e) {
    e.preventDefault();
    if (nameRef.current.value === "") return;

    // add new Todo
    addNewTodo(nameRef.current.value);

    nameRef.current.value = "";
  }

  return (
    <form onSubmit={handleSumbit} id="new-todo-form">
      <label htmlFor="todo-input">New Todo</label>
      <input autoFocus type="text" id="todo-input" ref={nameRef} />
      <button>Add Todo</button>
    </form>
  );
}
