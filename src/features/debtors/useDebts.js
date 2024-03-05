import { useQuery } from "@tanstack/react-query";
import { getDebts } from "../../services/apiDebts";
import { useParams } from "react-router-dom";

export function useDebts() {
  const { debtorId } = useParams();

  const { data: debts, isLoading } = useQuery({
    queryKey: ["debts", debtorId],
    queryFn: () => getDebts(debtorId),
  });

  return { debts, isLoading };
}
