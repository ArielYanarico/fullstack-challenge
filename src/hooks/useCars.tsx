
import { GET_CARS_GQL } from "@/services/carService";
import { Cars } from "@/types/carTypes";
import { ApolloError, OperationVariables, useQuery } from "@apollo/client";

type useCarResult = {
  loading: boolean;
  error?: ApolloError;
  cars: Cars;
};

export function useCars(): useCarResult {

  const isMobileDevice = window.innerWidth <= 639;
  const isTabletDevice = window.innerWidth >= 640 && window.innerWidth < 1023;
  const isDesktopDevice = window.innerWidth >= 1024;

  const queryVariables: OperationVariables = {
    variables: {
      isMobile: isMobileDevice,
      isTablet: isTabletDevice,
      isDesktop: isDesktopDevice,
    }
  }

  const { loading, error, data } = useQuery<{ cars: Cars }>(GET_CARS_GQL, queryVariables);

  return { loading, error, cars: data?.cars || [] }
}
