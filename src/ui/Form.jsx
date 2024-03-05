import styled, { css } from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  background-color: var(--color-white);
  padding: 2rem 1rem;
  ${(props) =>
    props.type === "modal" &&
    css`
      width: 48rem;
      @media (max-width: 768px) {
        width: 23rem;
      }
    `}
`;

export default Form;
