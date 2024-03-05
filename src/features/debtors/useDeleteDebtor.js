import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDebtor as deleteDebtorAPI } from "../../services/apiDebtors";
import toast from "react-hot-toast";

export function useDeleteDebtor() {
  const queryClient = useQueryClient();

  const { mutate: deleteDebtor, isPending: isDeleting } = useMutation({
    mutationFn: deleteDebtorAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["debtors"] });
      toast.success("تم حذف المَدين بنجاح");
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteDebtor, isDeleting };
}
