import styled from "styled-components";
import { BsPersonFillAdd } from "react-icons/bs";

const FlowIcon = styled.div`
  background-color: var(--color-red);
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 5px;
  right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: var(--color-white);
  border-radius: 50%;
  cursor: pointer;
`;

function AddIcon({ icon }) {
  return <FlowIcon>{icon}</FlowIcon>;
}

export default AddIcon;
