import styled from "styled-components";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import VerticalRow from "../../ui/VerticalRow";
import { Controller, useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import PhoneInput from "react-phone-number-input";
import { useAddPerson } from "./useAddPerson";
import { USER_ID } from "../../ui/ProtectedRoute";
import { usePersons } from "./usePersons";

const StyledAddNewPeopleForm = styled.div`
  width: 100%;
`;

function AddNewPeopleForm({ setShowAddForm }) {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { addPerson, isAdding } = useAddPerson();

  function onSubmit(data) {
    // console.log(data);
    const person = {
      ...data,
      user_id: USER_ID,
    };
    addPerson(person, {
      onSuccess: () => {
        reset();
        setShowAddForm(false);
      },
    });
  }

  function handleCancel(e) {
    e.preventDefault();
    setShowAddForm(false);
  }

  return (
    <StyledAddNewPeopleForm>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <Input
            name="name"
            placeholder="الاسم"
            {...register("name", { required: "هذا الحقل مطلوب." })}
          />
        </FormRow>

        <FormRow>
          <Controller
            name="whatsappNumber"
            control={control}
            render={({ field: { onChange, value = "+967" } }) => (
              <PhoneInput
                value={value}
                onChange={onChange}
                defaultCountry="YE"
                id="phone"
                placeholder="رقم الواتساب"
                disabled={isAdding}
              />
            )}
          />
        </FormRow>
        {/* <Input name="whatsappNumber" placeholder="رقم الواتساب" /> */}
        <VerticalRow>
          <Button type="submit" $minwidth="45%">
            حفظ
          </Button>
          <Button onClick={handleCancel} $variation="secondary" $minwidth="45%">
            إلغاء
          </Button>
        </VerticalRow>
      </Form>
    </StyledAddNewPeopleForm>
  );
}

export default AddNewPeopleForm;
