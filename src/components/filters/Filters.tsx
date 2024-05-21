import React from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import useFilterStore from '../../store/store';
import { SortFilter } from './SortFilterComponents'
import { RatingFilter } from './RatingFilterComponent'
import { GenreFilter } from './GenreFilterComponents';

interface IProps {
  searchQuery: string
}

export const Filters: React.FC<IProps> = ({ searchQuery }) => {
  const {
    setMinRating,
    setSortOption,
    setSelectedGenres,
  } = useFilterStore();


  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinRating(event.target.value);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSortOption(event.target.value);
  };

  const handleGenreChange = (event: SelectChangeEvent<number[]>) => {
    setSelectedGenres(event.target.value as number[]);
  };

  return (
    <div className="filters" style={{ display: 'flex', flexDirection: 'row', marginLeft: '90px', marginRight: '90px' }}>
      <RatingFilter searchQuery={searchQuery} handleRatingChange={handleRatingChange} />
      <SortFilter handleSortChange={handleSortChange} />
      <GenreFilter handleGenreChange={handleGenreChange} />
    </div>
  );
};