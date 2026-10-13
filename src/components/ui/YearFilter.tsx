import { MenuItem, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";

type SearchInputProps = {
  onChange: (value: string) => void;
}

const yearOptions = [
  { label: 'All', value: '' },
  { label: '2021', value: '2021' },
  { label: '2022', value: '2022' },
  { label: '2023', value: '2023' },
  { label: '2024', value: '2024' },
  { label: '2025', value: '2025' },
];

export function YearFilter({ onChange }: SearchInputProps) {
  const [year, setYear] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    setYear(value);
    onChange(value)
  };

  return (
    <TextField
      size="small"
      label="Year"
      variant="outlined"
      value={year}
      onChange={handleChange}
      select
    >
      {yearOptions.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  )
}
