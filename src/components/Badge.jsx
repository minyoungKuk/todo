// Badge.jsx
import styled from "styled-components";

const Badge = styled.p`
  margin: 0;
  padding: 5px 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 210px;
  font-weight: bold;
  background-color: ${({ $badgeColor }) => $badgeColor || "#934A5F"};
  margin-right: 10px;
`;

export default Badge;
