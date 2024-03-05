import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const queryClient = useQueryClient();

  const { mutate: signup, isPending: isLoading } = useMutation({
    mutationFn: signupAPI,
    onSuccess: (newUser) => {
      queryClient.setQueryData(["user"], newUser.user);
      toast.success("تم إنشاء الحساب");
    },
  });

  return { signup, isLoading };
}
