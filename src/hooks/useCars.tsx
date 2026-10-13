
import { GET_CARS_GQL } from "@/services/carService";
import { Cars } from "@/types/carTypes";
import { ApolloError, ApolloQueryResult, OperationVariables, useQuery } from "@apollo/client";
import { CarFilters } from "@/types/carTypes";

type CarQueryResult = {
  cars: Cars
}

type UseCarsResult = {
  loading: boolean;
  error?: ApolloError;
  cars: Cars;
  refetch: () => Promise<ApolloQueryResult<CarQueryResult>>;
};

export function useCars(variables: CarFilters): UseCarsResult {

  const isMobileDevice = window.innerWidth <= 639;
  const isTabletDevice = window.innerWidth >= 640 && window.innerWidth < 1023;
  const isDesktopDevice = window.innerWidth >= 1024;

  const queryVariables: OperationVariables = {
    variables: {
      isMobile: isMobileDevice,
      isTablet: isTabletDevice,
      isDesktop: isDesktopDevice,
      ...variables,
    }
  }

  const { loading, error, data, refetch } = useQuery<CarQueryResult>(GET_CARS_GQL, queryVariables);

  return { loading, error, cars: data?.cars || [], refetch }
}
