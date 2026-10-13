import { Car } from "@/types/carTypes";
import { Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";

interface CarCardProps {
  car: Car,
}

export function CarCard({ car }: CarCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={car.desktop || car.tablet || car.mobile}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {car.make} {car.model} {car.year}
        </Typography>
        <Chip label={car.color} size="small" sx={{ alignSelf: "start" }} />
      </CardContent>
    </Card>
  )
}
