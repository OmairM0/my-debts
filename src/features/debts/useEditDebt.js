import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editDebt as editDebtAPI } from "../../services/apiDebts";
import toast from "react-hot-toast";

export function useEditDebt() {
  const queryClient = useQueryClient();

  const { mutate: editDebt, isPending: isEditing } = useMutation({
    mutationFn: ({ id, debt }) => editDebtAPI(id, debt),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["debts"] });
      toast.success("تم تعديل الدين بنجاح");
    },
    onError: (err) => {
      toast.error("هناكَ خطأٌ ما..");
    },
  });
  console.log(isEditing);

  return { editDebt, isEditing };
}
