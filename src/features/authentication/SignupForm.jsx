import { Controller, useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRow from "../../ui/FormRow";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useSignup } from "./useSignup";
import { useEffect, useState } from "react";
import CheckMail from "./CheckMail";
import { useNavigate } from "react-router-dom";
import { useUser } from "./useUser";

function SignupForm() {
  const [showCheckMessage, setShowCheckMessage] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();

  const { signup, isLoading } = useSignup();

  function onSubmit(data) {
    const { name, email, password, phone } = data;
    signup(
      { name, email, password, phone },
      {
        onSuccess: () => setShowCheckMessage(true),
      }
    );
  }

  const navigate = useNavigate();
  const { isLoading: isLoading2, isAuthenticated, user } = useUser();

  useEffect(
    function () {
      // console.log(showCheckMessage);
      // console.log(!showCheckMessage);
      console.log("auth", isAuthenticated);

      if (isAuthenticated && !isLoading2 && user.confirmed_at) {
        navigate("/");
      }
    },
    [isAuthenticated, isLoading2, navigate, user]
  );

  return (
    <>
      {!showCheckMessage ? (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormRow error={errors?.name?.message}>
            <Input
              type="text"
              required
              placeholder="الاسم"
              {...register("name", { required: "هذا الحقل مطلوب." })}
              disabled={isLoading}
            />
          </FormRow>

          <FormRow error={errors?.phone?.message}>
            <Controller
              name="phone"
              control={control}
              render={({ field: { onChange, value = "+967" } }) => (
                <PhoneInput
                  value={value}
                  onChange={onChange}
                  defaultCountry="YE"
                  id="phone"
                  disabled={isLoading}
                />
              )}
            />
          </FormRow>

          <FormRow error={errors?.email?.message}>
            <Input
              type="email"
              required
              placeholder="البريد الإلكتروني"
              {...register("email", { required: "هذا الحقل مطلوب." })}
              disabled={isLoading}
            />
          </FormRow>

          <FormRow error={errors?.password?.message}>
            <Input
              type="password"
              required
              minLength={6}
              placeholder="كلمة المرور"
              {...register("password", { required: "هذا الحقل مطلوب." })}
              disabled={isLoading}
            />
          </FormRow>
          <Button disabled={isLoading}>إنشاء حساب</Button>
        </Form>
      ) : (
        <CheckMail />
      )}
    </>
  );
}

export default SignupForm;
