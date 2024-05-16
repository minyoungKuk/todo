import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 60px;
  background-color: #f4f3ea;
  color: #333;
  padding: 20px 40px;
  position: sticky;
  top: 0;
  text-align: left;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const Haeder = () => {
  return (
    <HeaderWrapper>
      <h1 style={{ fontSize: "1.6rem" }}>Todo List</h1>
    </HeaderWrapper>
  );
};

export default Haeder;
