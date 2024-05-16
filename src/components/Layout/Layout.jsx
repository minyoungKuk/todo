import React from "react";
import styled from "styled-components";
import Header from "./Header";

const LayoutWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  position: relative;
`;

const MainWrapper = styled.div`
  padding: 40px;
  max-width: 1200px;
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <MainWrapper> {children} </MainWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
