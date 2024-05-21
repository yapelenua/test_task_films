import React from 'react';
import { Select, MenuItem, Checkbox, ListItemText, InputLabel, FormControl } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import useFilterStore from '../../store/store';

interface IProps {
  handleGenreChange: (event: SelectChangeEvent<number[]>) => void;
}

export const GenreFilter: React.FC<IProps> = ({ handleGenreChange }) => {
  const {
    genres,
    selectedGenres,
  } = useFilterStore();
  return (
    <FormControl variant="outlined" margin="normal" sx={{ width: 200 }}>
      <InputLabel>Genres</InputLabel>
      <Select
        multiple
        value={selectedGenres}
        onChange={handleGenreChange}
        renderValue={(selected) => {
          const selectedGenreNames = (selected as number[]).map(id => genres.find(genre => genre.id === id)?.name).join(', ');
          return selectedGenreNames;
        }}
      >
        {genres.map((genre) => (
          <MenuItem key={genre.id} value={genre.id}>
            <Checkbox checked={selectedGenres.indexOf(genre.id) > -1} />
            <ListItemText primary={genre.name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

