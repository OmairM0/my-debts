import styled from "styled-components";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled.header`
  background-color: var(--color-white);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
