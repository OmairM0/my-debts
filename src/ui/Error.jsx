import styled from "styled-components";

const SyledError = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

function Error({ message }) {
  return <SyledError>{message}</SyledError>;
}

export default Error;
