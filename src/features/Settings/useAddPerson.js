import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPerson as addPersonAPI } from "../../services/apiPersons";
import toast from "react-hot-toast";

export function useAddPerson() {
  const queryClient = useQueryClient();

  const { mutate: addPerson, isPending: isAdding } = useMutation({
    mutationFn: addPersonAPI,
    mutationKey: ["debts"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["persons"] });
      toast.success("تم إضافةالشخص بنجاح");
    },
    onError: (err) => {
      toast.error("هناكَ خطأٌ ما..");
    },
  });

  return { addPerson, isAdding };
}
