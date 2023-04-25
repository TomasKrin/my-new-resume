import { PropsWithChildren } from "react";
import styled from "styled-components";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Wrapper>
      <Container>
        <Content>{children}</Content>
      </Container>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  position: relative;
`;

const Content = styled.div`
  flex-direction: column;
  flex: 1;
`;
