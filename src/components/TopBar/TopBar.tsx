import { ABOUT_ME_PATH, CONTACT_ME_PATH, HOME_PATH, MY_PROJECTS_PATH } from "../../routes/consts";

import { secondaryColor } from "../../consts/colors";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Logo onClick={() => navigate(HOME_PATH)}>Tomas..</Logo>
      <NavOptions>
        <li onClick={() => navigate(ABOUT_ME_PATH)}>About Me</li>
        <li onClick={() => navigate(MY_PROJECTS_PATH)}>My Projects</li>
        <li onClick={() => navigate(CONTACT_ME_PATH)}>Contact Me</li>
      </NavOptions>
    </Container>
  );
};

export default TopBar;

const Container = styled.nav`
  border-bottom: 1px solid ${secondaryColor};
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;

const NavOptions = styled.ul`
  display: flex;
  list-style: none;
  justify-content: flex-end;
  gap: 24px;
  margin-right: 24px;
  li {
    font-size: 0.9rem;
    cursor: pointer;
  }
`;

const Logo = styled.div`
  font-weight: 700;
  cursor: pointer;
`;
