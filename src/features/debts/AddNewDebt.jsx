import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import VerticalRow from "../../ui/VerticalRow";
import { useAddDebt } from "./useAddDebt";
import { USER_ID } from "../../ui/ProtectedRoute";
import { useEditDebt } from "./useEditDebt";
import styled from "styled-components";

const CreditorOrDebtor = styled.div`
  display: flex;
  gap: 50px;
`;

function AddNewDebt({ debtorid, debtToEdit = {}, onCloseModal }) {
  const { id: editId, amount, description } = debtToEdit;
  const checkCreditorOrDebtor = Math.sign(amount) ? "creditor" : "debtor";
  const isEditSession = Boolean(editId);

  const { addDebt, isAdding } = useAddDebt();
  const { editDebt, isEditing } = useEditDebt();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: isEditSession
      ? { amount, description, creditorOrDebtor: checkCreditorOrDebtor }
      : {},
  });

  function handleCancel() {
    onCloseModal?.();
  }

  function onSubmit(data) {
    const convertedAmount =
      data.creditorOrDebtor === "debtor" ? -data.amount : data.amount;
    const debt = {
      description: data.description,
      amount: convertedAmount,
      debtor_id: debtorid,
      user_id: USER_ID,
    };

    if (isEditSession) {
      editDebt(
        { id: editId, debt },
        {
          onSuccess: () => {
            onCloseModal?.();
          },
        }
      );
    } else {
      addDebt(
        { debtorid, debt },
        {
          onSuccess: () => {
            onCloseModal?.();
          },
        }
      );
    }
  }

  return (
    <Form type="modal" onSubmit={handleSubmit(onSubmit)}>
      <FormRow error={errors?.amount?.message}>
        <Input
          type="number"
          id="amount"
          required
          disabled={isAdding || isEditing}
          placeholder="المبلغ"
          {...register("amount", { required: "هذا الحقل مطلوب." })}
        />
      </FormRow>

      <CreditorOrDebtor>
        <div>
          <Input
            type="radio"
            id="creditor"
            value="creditor"
            required
            disabled={isAdding || isEditing}
            {...register("creditorOrDebtor", { required: "هذا الحقل مطلوب." })}
          />
          <label htmlFor="creditor">له</label>
        </div>

        <div>
          <Input
            type="radio"
            id="debtor"
            value="debtor"
            required
            disabled={isAdding || isEditing}
            {...register("creditorOrDebtor", { required: "هذا الحقل مطلوب." })}
          />
          <label htmlFor="debtor">عليه</label>
        </div>
      </CreditorOrDebtor>

      <FormRow error={errors?.description?.message}>
        <Input
          type="text"
          placeholder="التفاصيل"
          required
          disabled={isAdding || isEditing}
          {...register("description", { required: "هذا الحقل مطلوب." })}
        />
      </FormRow>
      <VerticalRow>
        <Button type="submit" $minwidth="45%" disabled={isAdding || isEditing}>
          حفظ
        </Button>
        <Button
          type="reset"
          $variation="secondary"
          $minwidth="45%"
          onClick={handleCancel}
          disabled={isAdding || isEditing}
        >
          إلغاء
        </Button>
      </VerticalRow>
    </Form>
  );
}

export default AddNewDebt;
