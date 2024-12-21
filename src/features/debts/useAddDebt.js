import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addDebt as addDebtAPI } from "../../services/apiDebts";
import toast from "react-hot-toast";

export function useAddDebt() {
  const queryClient = useQueryClient();

  const { mutate: addDebt, isPending: isAdding } = useMutation({
    mutationFn: ({ debt }) => addDebtAPI(debt),
    mutationKey: ["debts"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["debts"] });
      toast.success("تم إضافةالدَين بنجاح");
    },
    onError: (err) => {
      toast.error("هناكَ خطأٌ ما..");
    },
  });

  return { addDebt, isAdding };
}
