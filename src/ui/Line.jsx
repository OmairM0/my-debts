import styled from "styled-components";

const Line = styled.span`
  display: block;
  height: 0.1rem;
  width: 70%;
  background-color: var(--color-gray);
  margin: 0 auto;
  margin-top: ${(props) => (props.top ? props.top : 0)};
  margin-bottom: ${(props) => (props.bottom ? props.bottom : 0)};
`;
export default Line;
