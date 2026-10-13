
import { GET_CARS_GQL } from "@/services/carService";
import { useQuery } from "@apollo/client";

export function useCars() {
  const { loading, error, data } = useQuery(GET_CARS_GQL, { variables: { model: "A3" } });

  return {loading, error, data}
}
