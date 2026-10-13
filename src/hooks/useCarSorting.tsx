
import { Car, Cars } from "@/types/carTypes";
import { Dispatch, useState } from "react";
import Sort from '@/types/sortEnum'
import { sortBy } from "@/utils/arrayUtils";

export type SortByTerm = 'none' | 'model_asc' | 'model_desc' | 'year_asc' | 'year_desc'

type UseCarsSortingResult = {
  sortTerm: SortByTerm;
  setSortTerm: Dispatch<React.SetStateAction<SortByTerm>>;
  sortedCars: Cars;
}

const sortMap = {
  model_asc: { by: 'model', sort: Sort.ASC },
  model_desc: { by: 'model', sort: Sort.DESC },
  year_asc: { by: 'year', sort: Sort.ASC },
  year_desc: { by: 'year', sort: Sort.DESC },
  none: { by: 'make', sort: Sort.ASC },
}

export const sortOptions = [
  { label: 'None', value: 'none' as SortByTerm },
  { label: 'By Model Asc', value: 'model_asc' as SortByTerm },
  { label: 'By Model Desc', value: 'model_desc' as SortByTerm },
  { label: 'By Year Asc', value: 'year_asc' as SortByTerm },
  { label: 'By Year Desc', value: 'year_desc' as SortByTerm },
];

export function useCarsSorting(cars: Cars): UseCarsSortingResult {
  const [sortTerm, setSortTerm] = useState<SortByTerm>('none');

  const { by, sort } = sortMap[sortTerm];
  const sortedCars = sortBy(cars, by as keyof Car, sort)

  return { sortTerm, setSortTerm, sortedCars }
}
