import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmDelete = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }
`;

function ConfirmDelete({ resourceName, onConfirm, onCloseModal, disabled }) {
  return (
    <StyledConfirmDelete>
      <Heading $align="right" as="h4">
        حذف {resourceName}
      </Heading>
      <p>هل أنت متأكد بأنك تريد أن تحذف {resourceName}?</p>

      <div>
        <Button
          $variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          إلغاء
        </Button>
        <Button disabled={disabled} onClick={onConfirm}>
          حذف
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
