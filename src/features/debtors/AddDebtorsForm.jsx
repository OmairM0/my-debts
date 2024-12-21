import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import VerticalRow from "../../ui/VerticalRow";
import { useAddDebtor } from "./useAddDebtor";
import FormRow from "../../ui/FormRow";
import { USER_ID } from "../../ui/ProtectedRoute";
import { useEditDebtor } from "./useEditDebtor";

function AddDebtorsForm({ debtorToEdit = {}, onCloseModal }) {
  const { id: editId, debts, created_at, ...editValues } = debtorToEdit;

  const isEditSession = Boolean(editId);

  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;

  const { addDebtor, isAdding } = useAddDebtor();
  const { editDebtor, isEditing } = useEditDebtor();

  function handleCancel() {
    onCloseModal?.();
  }

  function onSubmit(data) {
    const debtor = {
      ...data,
      user_id: USER_ID,
    };

    if (isEditSession) {
      editDebtor(
        { id: editId, debtor },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    } else {
      addDebtor(debtor, {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      });
    }
  }

  return (
    <Form type="modal" onSubmit={handleSubmit(onSubmit)}>
      <FormRow error={errors?.name?.message}>
        <Input
          id="name"
          required
          placeholder="الاسم"
          disabled={isAdding || isEditing}
          {...register("name", { required: "هذا الحقل مطلوب." })}
        />
      </FormRow>
      <FormRow error={errors?.phone?.message}>
        <Input
          name="phone"
          type="number"
          placeholder="الرقم"
          disabled={isAdding || isEditing}
          {...register("phone", {
            required: "هذا الحقل مطلوب.",
            valueAsNumber: true,
          })}
        />
      </FormRow>

      <FormRow error={errors?.address?.message}>
        <Input
          name="address"
          placeholder="العنوان"
          disabled={isAdding || isEditing}
          {...register("address", { required: "هذا الحقل مطلوب." })}
        />
      </FormRow>
      <VerticalRow>
        <Button type="submit" $minwidth="45%" disabled={isAdding || isEditing}>
          حفظ
        </Button>
        <Button
          onClick={handleCancel}
          $variation="secondary"
          $minwidth="45%"
          disabled={isAdding || isEditing}
          type="reset"
        >
          إلغاء
        </Button>
      </VerticalRow>
    </Form>
  );
}

export default AddDebtorsForm;
