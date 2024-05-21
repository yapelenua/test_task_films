import React from 'react';
import TextField from '@mui/material/TextField';
import useFilterStore from '../../store/store';
interface IProps {
  handleRatingChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string
}

export const RatingFilter: React.FC<IProps> = ({ handleRatingChange, searchQuery}) => {
  const {
    minRating,
  } = useFilterStore();
  return ( 
    <TextField
    label="Min Rating"
    type="number"
    value={minRating}
    onChange={handleRatingChange}
    variant="outlined"
    margin="normal"
    placeholder="Enter min rating"
    disabled={ searchQuery.length > 0}
  />
  );
};

