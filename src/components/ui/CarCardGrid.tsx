import { Grid } from "@mui/material";
import { EmptyState } from "./EmptyState";
import { CarCard } from "./CarCard";
import { Car, Cars } from "@/types/carTypes";
import { LoadingState } from "./LoadingState";

interface CarCardGridProps {
  cars: Cars,
  loading: boolean,
}

export function CarCardGrid({ cars, loading }: CarCardGridProps) {
console.log(cars);

  if (loading) {
    return <LoadingState />
  }

  if (!cars) {
    return <EmptyState />
  }

  return (
    <Grid container spacing={2}>
      {cars.map((car: Car) => (
        <Grid size={4} key={car.id}>
          <CarCard car={car} />
        </Grid>
      ))}
    </Grid>
  )
}
