import styled, { css } from "styled-components";

const variations = {
  primary: css`
    background-color: var(--color-red);
    color: var(--color-white);
  `,
  secondary: css`
    background-color: var(--color-black);
    color: var(--color-white);
  `,
};

const Button = styled.button`
  /* background-color: var(--color-red);
  color: var(--color-white); */
  border-radius: 5px;
  padding: 0.5rem 1.2rem;
  border: 1px solid var(--color-gray);
  font-weight: bold;
  font-size: 1rem;
  min-width: ${(props) => (props.$minwidth ? props.$minwidth : "auto")};

  ${(props) => variations[props.$variation]}
`;

Button.defaultProps = {
  $variation: "primary",
};

export default Button;
