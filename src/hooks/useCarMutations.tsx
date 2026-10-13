
import { CREATE_CAR_GQL } from "@/services/carService";
import { Car } from "@/types/carTypes";
import { ApolloError, FetchResult, useMutation } from "@apollo/client";

type UseCarsResult = {
  create: (car: Car) => Promise<FetchResult<Car>>;
  update: () => void;
  remove: () => void;
  loading: boolean;
  error?: ApolloError;
};

export function useCarMutations(): UseCarsResult {
  const isUpdating = false; 
  const isRemoving = false;
  const updateError = undefined;
  const removeError = undefined;

  const [createRequest, { loading: isCreating, error: createError }] = useMutation(CREATE_CAR_GQL);

  function create(car: Car) {
    return createRequest({ variables: { input: car } })
  }

  function update() {
    console.warn('Update Car function not implented yet!');
  }

  function remove() {
    console.warn('Remove Car function not implented yet!');
  }

  return {
    create,
    update,
    remove,
    loading: isCreating || isUpdating || isRemoving,
    error: createError || updateError || removeError,
  };
}
