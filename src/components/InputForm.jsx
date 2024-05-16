// InputForm.js
import React from "react";
import styled from "styled-components";

const InputFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 2px solid #fff;
  width: 400px;
  margin: 20px auto;
  border-radius: 12px;

  & > * {
    width: 400px;
    padding: 15px 10px;
    margin-bottom: 20px;
    box-sizing: border-box;
  }

  & > *:last-child {
    margin-bottom: 0; /* 마지막 요소에는 마진을 추가하지 않음 */
  }

  .todoListInput::placeholder {
    color: #fff;
  }
`;

const InputForm = ({
  selectedCategory,
  dueDate,
  todoText,
  handleInputChange,
  handleTodoSubmit,
}) => {
  return (
    <InputFormWrapper>
      <select
        name="category"
        value={selectedCategory}
        onChange={handleInputChange}
      >
        <option value="">카테고리를 선택하세요</option>
        <option value="PERSONAL">개인</option>
        <option value="WORK">업무</option>
        <option value="STUDY">공부</option>
        <option value="HEALTH">건강</option>
        <option value="FINANCE">금융</option>
        <option value="OTHER">기타</option>
      </select>
      <input
        type="date"
        name="dueDate"
        value={dueDate}
        onChange={handleInputChange}
      />
      <input
        className="todoListInput"
        type="text"
        name="todoText"
        placeholder="할 일 내용"
        value={todoText}
        onChange={handleInputChange}
      />
      <button onClick={handleTodoSubmit}>추가</button>
    </InputFormWrapper>
  );
};

export default InputForm;
