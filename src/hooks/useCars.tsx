
import { GET_CARS_GQL } from "@/services/carService";
import { ApolloError, useQuery } from "@apollo/client";

type Car = {
  id: string;
  make: string;
  model: string;
  year: number;
  color: string;
  mobile: string;
  tablet: string;
  desktop: string;
};

type Cars = Car[];

type useCarResult = {
  loading: boolean;
  error?: ApolloError;
  cars: Car[];
};

export function useCars(): useCarResult {
  const {loading, error, data} = useQuery<{cars: Cars}>(GET_CARS_GQL);

  return {loading, error, cars: data?.cars || []}
}
