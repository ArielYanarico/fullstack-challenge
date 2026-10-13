import { CarFilters } from "@/types/carTypes";
import { useMemo, useState } from "react";

export function useCarFilter() {
  const [filters, setFilters] = useState<CarFilters>({});

  const variables = useMemo(
    () => {
      const result: any = {};
      if (filters.model?.trim()) {
        result.model = filters.model.trim();
      }
      if (filters.year != null && filters.year !== 0) {
        result.year = filters.year;
      }
      return result;
    },
    [filters]
  );

  return {
    setFilters,
    variables,
  };
}
