import React from "react";
import styled from "styled-components";
import Haeder from "./Haeder";

const LayoutWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  position: relative;
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Haeder />
      <div style={{ padding: "40px", maxWidth: "1200px" }}> {children} </div>
    </LayoutWrapper>
  );
};

export default Layout;
