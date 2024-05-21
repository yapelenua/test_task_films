import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import useFilterStore from '../../store/store';


interface IProps {
  handleSortChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string
}

export const SortFilter: React.FC<IProps> = ({ handleSortChange, searchQuery }) => {
  const {
    minRating,
    sortOption,
    selectedGenres,
  } = useFilterStore();
  return (
    <TextField
      select
      label="Sort By"
      value={sortOption}
      onChange={handleSortChange}
      variant="outlined"
      margin="normal"
      sx={{ width: 200 }}
      disabled={!minRating && selectedGenres.length === 0 && searchQuery.length >= 0}
    >
      <MenuItem value="popularity.desc">Popularity Descending</MenuItem>
      <MenuItem value="popularity.asc">Popularity Ascending</MenuItem>
      <MenuItem value="vote_average.desc">Rating Descending</MenuItem>
      <MenuItem value="vote_average.asc">Rating Ascending</MenuItem>
    </TextField>
  );
};
