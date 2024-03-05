import { useQuery } from "@tanstack/react-query";
import { getPersons } from "../../services/apiPersons";

export function usePersons() {
  const {
    data: persons,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["persons"],
    queryFn: getPersons,
  });

  return { persons, isLoading, error };
}
