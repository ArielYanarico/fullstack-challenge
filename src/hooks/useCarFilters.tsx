import { CarFilters } from "@/types/carTypes";
import { useMemo, useState } from "react";

export function useCarFilter() {
  const [filters, setFilters] = useState<CarFilters>({});

  const variables = useMemo(
    () => ({
      model: filters.model?.trim() || undefined,
      year: filters.year ?? undefined,
    }),
    [filters]
  );

  return {
    setFilters,
    variables,
  };
}
