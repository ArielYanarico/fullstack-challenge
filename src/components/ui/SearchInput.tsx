import { useDebounce } from "@/hooks/useDebounce";
import { TextField } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";

type SearchInputProps = {
  onChange: (value: string) => void;
}

export function SearchInput({ onChange }: SearchInputProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm);

  useEffect(() => {
    if (debouncedSearchTerm) {
      onChange(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    setSearchTerm(value);
  };

  return (
    <TextField
      size="small"
      id="outlined-basic"
      label="Search"
      variant="outlined"
      value={searchTerm}
      onChange={handleChange}
    />
  )
}
