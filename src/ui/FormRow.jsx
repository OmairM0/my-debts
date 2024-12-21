import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
`;

const Label = styled.label``;

const Error = styled.span`
  font-weight: 500;
  color: var(--color-red);
`;

function FormRow({ label, error, children, direction = "column" }) {
  return (
    <StyledFormRow direction={direction}>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
