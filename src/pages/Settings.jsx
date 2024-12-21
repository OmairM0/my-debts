import styled from "styled-components";
import AddNewPeople from "../features/Settings/AddNewPeople";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";
import Container from "../ui/Container";
import AddPeople from "../features/Settings/AddPeople";
import ButtonIcon from "../ui/ButtonIcon";
import { HiArrowRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const StyledSettignsLayout = styled.div`
  /* minheight: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  color: var(--color-black);
  padding-top: 2rem;
  @media (min-width: 929px) {
    max-width: 50%;
    margin: auto;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

function Settings() {
  const navigate = useNavigate();

  return (
    <Container>
      <StyledSettignsLayout>
        {/* <Logo /> */}
        <Div>
          <ButtonIcon onClick={() => navigate("/")}>
            <HiArrowRight />
          </ButtonIcon>
          <Heading as="h4" $align="right">
            الإعدادات
          </Heading>
        </Div>
        <AddPeople />
      </StyledSettignsLayout>
    </Container>
  );
}

export default Settings;
