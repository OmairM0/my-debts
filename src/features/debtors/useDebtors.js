import { useQuery } from "@tanstack/react-query";
import { getDebtors } from "../../services/apiDebtors";

export function useDebtors() {
  const {
    data: debtors,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["debtors"],
    queryFn: getDebtors,
  });

  return { debtors, isLoading, error };
}
