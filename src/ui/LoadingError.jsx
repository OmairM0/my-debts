import styled from "styled-components";

const StyledError = styled.div`
  text-align: center;
`;

function LoadingError({ resourceName }) {
  return <StyledError>خطأ في تحميل {resourceName}.</StyledError>;
}

export default LoadingError;
