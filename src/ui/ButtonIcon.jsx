import styled from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: 3px;
  transition: all 0.2s;
  display: flex;

  &:hover {
    background-color: var(--color-grey-700);
  }

  & svg {
    width: 1.2rem;
    height: 1.2rem;
    color: var(--color-brand-600);
  }
`;

export default ButtonIcon;
