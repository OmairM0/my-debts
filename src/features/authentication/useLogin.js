import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/home", { replace: true });
    },
    onError: (err) => {
      console.log(err.message);
      if (err.message === "AuthApiError: Email not confirmed") {
        toast.error("لم يتم تأكيد البريد الإلكتروني");
      } else {
        toast.error("كلمة المرور أو البريد الإلكتروني غير صحيح.");
      }
    },
  });

  return { login, isLoading };
}
