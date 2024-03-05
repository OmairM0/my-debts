import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDebt as deleteDebtAPI } from "../../services/apiDebts";
import toast from "react-hot-toast";

export function useDeleteDebt() {
  const queryClient = useQueryClient();

  const { mutate: deleteDebt, isPending: isDeleting } = useMutation({
    mutationFn: deleteDebtAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["debts"] });
      toast.success("تم حذف الدين بنجاح");
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteDebt, isDeleting };
}
