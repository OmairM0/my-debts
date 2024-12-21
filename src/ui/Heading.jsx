import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
      @media (max-width: 768px) {
        font-size: 1.2rem;
      }
    `}

  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 1rem;
      font-weight: 600;
      /* text-align: center; */
    `}

  line-height: 1.4;
  text-align: ${(props) => props.$align};
`;

Heading.defaultProps = {
  $align: "right",
};

export default Heading;
