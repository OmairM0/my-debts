import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import { CiSettings } from "react-icons/ci";
import ButtonIcon from "./ButtonIcon";
import { useNavigate } from "react-router-dom";

const StyledHeaderMenu = styled.ul`
  display: flex;
  align-items: center;
`;

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/settings")}>
          <CiSettings />
        </ButtonIcon>
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
