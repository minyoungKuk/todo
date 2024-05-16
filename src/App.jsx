import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import InputForm from "./components/InputForm";
import Layout from "./components/Layout/Layout";
import TodoList from "./components/TodoList";

const AddButton = styled.button`
  margin: 10px 0;
  position: absolute;
  top: 0;
  right: 40px;
`;

const App = () => {
  const [isShowInput, setIsShowInput] = useState(false);
  const [newTodo, setNewTodo] = useState({
    category: "",
    dueDate: "",
    todoText: "",
  });
  const [todos, setTodos] = useState([]);

  const showInput = () => {
    setIsShowInput(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTodo({
      ...newTodo,
      [name]: value,
    });
  };

  const handleTodoSubmit = () => {
    if (newTodo.category && newTodo.dueDate && newTodo.todoText) {
      const todo = {
        ...newTodo,
        id: new Date().getTime(),
        createdAt: new Date().toLocaleDateString(),
        done: false,
      };
      setTodos([...todos, todo]);
      setIsShowInput(false);
      setNewTodo({
        category: "",
        dueDate: "",
        todoText: "",
      });
    } else {
      alert("모든 필드를 입력하세요!");
    }
  };

  const handleDeleteTodo = (id) => () => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleToggleDone = (id) => () => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <Layout>
      {!isShowInput && <AddButton onClick={showInput}>+ 할 일 추가</AddButton>}
      {isShowInput && (
        <InputForm
          newTodo={newTodo}
          handleInputChange={handleInputChange}
          handleTodoSubmit={handleTodoSubmit}
        />
      )}

      <div>
        {todos.length === 0 && (
          <p style={{ textAlign: "center", padding: "300px 0" }}>
            할 일 / 마감 기한을 추가해주세요!
          </p>
        )}
        {todos.map((todo) => (
          <TodoList
            key={todo.id}
            todo={todo}
            handleToggleDone={handleToggleDone}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </div>
    </Layout>
  );
};

export default App;
