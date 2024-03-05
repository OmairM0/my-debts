import { useQuery } from "@tanstack/react-query";
import { getDebtor as getDebtorAPI } from "../../services/apiDebtors";
import { useParams } from "react-router-dom";

export function useDebtor() {
  const { debtorId } = useParams();

  const { data: debtor, isLoading } = useQuery({
    queryKey: ["debtor", debtorId],
    queryFn: () => getDebtorAPI(debtorId),
  });
  return { debtor, isLoading };
}
