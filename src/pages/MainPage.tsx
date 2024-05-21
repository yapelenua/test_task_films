/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import '../App.css';
import useFilterStore from '../store/store';
import { MovieListComponent } from '../components/MovieListComponent'
import {FilterComponent} from '../components/filters/FiltersComponent'


export const MainPage = () => {
  const {
    minRating,
    sortOption,
    selectedGenres,
    fetchFilms,
    fetchGenres,
  } = useFilterStore();

  useEffect(() => {
    fetchFilms();
  }, [minRating, sortOption, selectedGenres]);

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <div>
      <FilterComponent />
      <MovieListComponent />
    </div>
  );
}
