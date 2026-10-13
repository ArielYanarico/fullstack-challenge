import { CarCardGrid } from "@/components/ui/CarCardGrid";
import { CreateCarModal, defaultCarModalRef } from "@/components/ui/CreateCarModal";
import { SearchInput } from "@/components/ui/SearchInput";
import { YearFilter } from "@/components/ui/YearFilter";
import { useCarFilter } from "@/hooks/useCarFilters";
import { useCars } from "@/hooks/useCars";
import { SortByTerm, sortOptions, useCarsSorting } from "@/hooks/useCarSorting";
import { CarFilters } from "@/types/carTypes";
import { Button, Container, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { ChangeEvent, useRef } from "react";

export function Cars() {
  const { variables, setFilters } = useCarFilter();
  const { loading, cars, refetch } = useCars(variables);
  const { sortTerm, setSortTerm, sortedCars } = useCarsSorting(cars);
  const createCarModal = useRef(defaultCarModalRef);

  const handleCreateCarSubmit = () => refetch();

  const handleSortChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    setSortTerm(value as SortByTerm)
  };

  const handleFilterChange = (value: string, name: keyof CarFilters) => {
    if (!value || value === 'All') {
      setFilters(prevFilters => {
        const { [name]: _name, ...rest } = prevFilters;
        return rest;
      });
    } else {
      setFilters(prevFilters => ({...prevFilters, [name]: value}))
    }
  }

  return (
    <Container maxWidth="md" sx={{ py: 6 }} >
      <Stack spacing={1} mb={3} direction='row' justifyContent="space-between">
        <Typography variant="h4" component="h1">
          Car inventory
        </Typography>
        <Button variant="outlined" onClick={() => createCarModal.current.open()}>
          Add +
        </Button>
      </Stack>

      <Stack spacing={1} mb={3} direction='row' justifyContent="space-between">
        <SearchInput onChange={value => handleFilterChange(value, 'model')}/>
        <YearFilter onChange={value => handleFilterChange(value, 'year')} />
        <TextField
          select
          label="Sort"
          onChange={handleSortChange}
          value={sortTerm}
          size="small"
          sx={{minWidth: '210px'}}
        >
          {sortOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Stack>

      <CarCardGrid cars={sortedCars} loading={loading} />

      <CreateCarModal ref={createCarModal} onSubmit={handleCreateCarSubmit} />
    </Container>
  )
}
