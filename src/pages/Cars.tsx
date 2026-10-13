import { useCars } from "@/hooks/useCars";
import { Button, Card, CardContent, CardMedia, Chip, Container, Grid, Stack, TextField, Typography } from "@mui/material";


export function Cars() {

  const { loading, error, data } = useCars();
  console.log({ loading, error, data });

  return (
    <Container maxWidth="md" sx={{ py: 6 }} >
      <Stack spacing={1} mb={3} direction='row' justifyContent="space-between">
        <Typography variant="h4" component="h1">
          Car inventory
        </Typography>
        <Button variant="outlined">
          Add +
        </Button>
      </Stack>

      <Stack spacing={1} mb={3} direction='row' justifyContent="space-between">
        <TextField size="small" id="outlined-basic" label="Search" variant="outlined" />
        <Container>

        </Container>
      </Stack>

      <Grid container spacing={2}>
        {(data?.cars || []).map((car: any) => (
          <Grid size={4} key={car.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={car.desktop}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {car.make} {car.model} {car.year}
                </Typography>
                <Chip label={car.color} size="small" sx={{ alignSelf: "start" }} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Container>
  )
}
