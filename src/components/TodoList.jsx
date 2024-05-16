import styled from "styled-components";
import Badge from "./Badge";

const COLORS = {
  PERSONAL: "#934A5F",
  WORK: "#0C4A60",
  STUDY: "#268765",
  HEALTH: "#3b6b7d",
  FINANCE: "#872642",
  OTHER: "#928490",
};

const TodoListWrapper = styled.div`
  border: 1px solid #f4f3ea;
  margin: 0 auto;
  border-radius: 8px;
  padding: 20px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 40px;
  color: #fff;
  background-color: #333d51e8;
`;

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DateText = styled.p`
  font-size: 0.8rem;
  color: #fff;
  font-weight: 600;
`;

const CloseButton = styled.button`
  width: 20px;
  height: 40px;
  background-color: #fff;
  background-image: url("/src/assets/img/ic-close.png");
  background-size: 12px 12px;
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 20px;
`;

const TodoList = ({ todo, handleToggleDone, handleDeleteTodo }) => {
  const badgeColor = COLORS[todo.category.toUpperCase()] || COLORS.PERSONAL;

  return (
    <TodoListWrapper>
      <FlexContainer>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Badge $badgeColor={badgeColor}>{todo.category}</Badge>
          <DateText> {todo.createdAt} </DateText>
        </div>

        <CloseButton onClick={handleDeleteTodo(todo.id)}></CloseButton>
      </FlexContainer>

      <p
        style={{
          display: "flex",
          padding: "10px 0",
        }}
      >
        <input
          style={{
            width: "20px",
            height: "20px",
            marginRight: "10px",
            backgroundColor: "#fff",
          }}
          type="checkbox"
          checked={todo.done}
          onChange={handleToggleDone(todo.id)}
        />
        <span
          style={{
            fontSize: "1.2rem",
            fontWeight: "500",
            textDecoration: todo.done ? "line-through" : "none",
          }}
        >
          {todo.todoText}
        </span>
      </p>

      <DateText> DUE DATE : {todo.dueDate} </DateText>
    </TodoListWrapper>
  );
};

export default TodoList;
