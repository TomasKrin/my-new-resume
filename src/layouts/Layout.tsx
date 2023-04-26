import { PropsWithChildren } from "react";
import TopBar from "../components/TopBar/TopBar";
import styled from "styled-components";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Wrapper>
      <TopBar />
      <Container>
        <Content>{children}</Content>
      </Container>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div``;

const Container = styled.div`
  margin-top: 24px;
  padding: 16px 36px;
  display: flex;
  position: relative;
`;

const Content = styled.div`
  flex-direction: column;
  flex: 1;
`;
