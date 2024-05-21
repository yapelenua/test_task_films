/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import '../../App.css';
import useFilterStore from '../../store/store';
import { SearchInput } from './SearchInputComponent';
import { Filters } from './Filters';

export const FilterComponent = () => {
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem('searchQuery') || '');
  const {
    fetchFilms,
    clearFilms
  } = useFilterStore();

  useEffect(() => {
    if (searchQuery) {
      fetchFilms(searchQuery);
    }
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchQuery = event.target.value;
    setSearchQuery(newSearchQuery);
    localStorage.setItem('searchQuery', newSearchQuery);
  };

  const handleHomeClick = () => {
    setSearchQuery('');
    localStorage.removeItem('searchQuery');
    clearFilms();
    fetchFilms();
  };

  return (
    <div className='filter-section'>
      <SearchInput handleHomeClick={handleHomeClick} searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
      <Filters searchQuery={searchQuery} />
    </div>
  );
}
