import { CarFilters } from "@/types/carTypes";
import { useMemo, useState } from "react";

export function useCarFilter() {
  const [filters, setFilters] = useState<CarFilters>({});

  const variables = useMemo(
    () => ({
      ...(filters.model?.trim()
        ? { model: filters.model.trim() }
        : {}),
      ...(filters.year != null
        ? { year: filters.year }
        : {}),
    }),
    [filters]
  );
console.log(variables);
  return {
    setFilters,
    variables,
  };
}
