import { useState } from "react";
import styled from "styled-components";
import AddNewPeopleForm from "./AddNewPeopleForm";
import { usePersons } from "./usePersons";
import Spinner from "../../ui/Spinner";

const Div = styled.div`
  background-color: var(--color-white);
  padding: 2rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 30px;
  min-height: 200px;
`;

const Img = styled.img`
  cursor: pointer;
  /* width: 100%; */
`;

const StyledPerson = styled.div`
  width: 100%;
  text-align: right;
  border-bottom: 1px solid var(--color-grey-700);
`;

function AddNewPeople() {
  const [showAddForm, setShowAddForm] = useState(false);
  const { persons, isLoading } = usePersons();

  function handleAdd() {
    setShowAddForm(true);
  }
  if (isLoading) return <Spinner />;

  return (
    <Div>
      {persons.map((person) => {
        return <StyledPerson key={person.id}>{person.name}</StyledPerson>;
      })}

      {!showAddForm ? (
        <Img onClick={handleAdd} src="add.svg" alt="Add" />
      ) : (
        <AddNewPeopleForm setShowAddForm={setShowAddForm} />
      )}
    </Div>
  );
}

export default AddNewPeople;
