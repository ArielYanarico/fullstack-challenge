import { gql } from "@apollo/client";

export const GET_CARS_GQL = gql`
  query GetCars($model: String, $year: Int) {
    cars(model: $model, year: $year) {
      id
      make
      model
      year
      color
      mobile
      tablet
      desktop
    }
  }
`;
