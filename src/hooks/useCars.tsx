
import { GET_CARS_GQL } from "@/services/carService";
import { Cars } from "@/types/carTypes";
import { ApolloError, useQuery } from "@apollo/client";


type useCarResult = {
  loading: boolean;
  error?: ApolloError;
  cars: Cars;
};

export function useCars(): useCarResult {
  const {loading, error, data} = useQuery<{cars: Cars}>(GET_CARS_GQL);

  return {loading, error, cars: data?.cars || []}
}
