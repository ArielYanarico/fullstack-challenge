import { gql } from "@apollo/client";

export const GET_CARS_GQL = gql`
  query GetCars(
    $model: String, 
    $year: Int, 
    $isMobile: Boolean!, 
    $isTablet: Boolean!, 
    $isDesktop: Boolean!
  ) {
    cars(model: $model, year: $year) {
      id
      make
      model
      year
      color
      mobile @include(if: $isMobile)
      tablet @include(if: $isTablet)
      desktop @include(if: $isDesktop)
    }
  }
`;

export const CREATE_CAR_GQL = gql`
  mutation CreateCar($input: CreateCarInput!) {
    createCar(input: $input) {
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
