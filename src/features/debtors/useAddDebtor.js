import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addDebtor as addDebtorAPI } from "../../services/apiDebtors";
import toast from "react-hot-toast";

export function useAddDebtor() {
  const queryClient = useQueryClient();

  const { mutate: addDebtor, isPending: isAdding } = useMutation({
    mutationFn: addDebtorAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["debtors"] });
      toast.success("تم إضافةالمَدين بنجاح");
    },
    onError: (err) => toast.error(err.message),
  });

  return { addDebtor, isAdding };
}
