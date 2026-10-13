import { CarCardGrid } from "@/components/ui/CarCardGrid";
import { useCars } from "@/hooks/useCars";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";


export function Cars() {
  const { loading, error, cars } = useCars();
  console.log({ loading, error, cars });

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

      <CarCardGrid cars={cars} loading={loading}/>

    </Container>
  )
}
