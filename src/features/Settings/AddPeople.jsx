import styled from "styled-components";
import Heading from "../../ui/Heading";
import Logo from "../../ui/Logo";
import AddNewPeople from "./AddNewPeople";
import Line from "../../ui/Line";
import { NavLink } from "react-router-dom";

const AddPeopleLayout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  text-align: center;
  padding-bottom: 2rem;
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  text-align: center;
`;

const P = styled.p`
  font-size: 12px;
  font-weight: 400;
  width: 69%;
  margin: 0 auto;
  margin-top: 5px;

  @media (min-width: 929px) {
    width: 50%;
    margin: 0 auto;
  }
`;

function AddPeople() {
  return (
    <AddPeopleLayout>
      <Logo />
      <div>
        <Heading as="h4" $align="center">
          أضف اشخاصاً تثق بهم
        </Heading>
        <P>
          عند غيابك عن حسابك لمدة 3 أشهر سيتم إرسال تفاصيل ديونك للأشخاص الذين
          تقوم بإضافتهم من أجل سداد ديونك
        </P>
      </div>
      {/* <div>
        {persons.map((person) => {
          return <div key={person.id}>{person.name}</div>;
        })}
      </div> */}
      <AddNewPeople />
      <div>
        <Line />
        <StyledNavLink to="/login">&rarr;عودة</StyledNavLink>
      </div>
    </AddPeopleLayout>
  );
}

export default AddPeople;
