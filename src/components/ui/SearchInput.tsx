import { useDebounce } from "@/hooks/useDebounce";
import { TextField } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";

type SearchInputProps = {
  onChange: (value: string) => void;
}

export function SearchInput({ onChange }: SearchInputProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debouncedSearchTerm = useDebounce(searchTerm as string);

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
      label="Search"
      variant="outlined"
      value={searchTerm}
      onChange={handleChange}
    />
  )
}
