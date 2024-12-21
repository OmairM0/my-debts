import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editDebtor as editDebtorAPI } from "../../services/apiDebtors";
import toast from "react-hot-toast";

export function useEditDebtor() {
  const queryClient = useQueryClient();

  const { mutate: editDebtor, isPending: isEditing } = useMutation({
    mutationFn: ({ id, debtor }) => editDebtorAPI(id, debtor),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["debtors"] });
      toast.success("تم تعديل المَدين بنجاح");
    },
  });

  return { editDebtor, isEditing };
}
