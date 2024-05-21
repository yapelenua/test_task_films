import React from 'react';
import TextField from '@mui/material/TextField';
import useFilterStore from '../../store/store';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
interface IProps {
  handleHomeClick: () => void;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string
}

export const SearchInput: React.FC<IProps> = ({ handleHomeClick, searchQuery, handleSearchChange}) => {
  const {
    fetchFilms,
  } = useFilterStore();


  const handleSearchClick = () => {
    fetchFilms(searchQuery);
  };

  return ( 
    <div className="search-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <TextField
      label="Search"
      value={searchQuery}
      onChange={handleSearchChange}
      variant="outlined"
      margin="normal"
      placeholder="Search for a movie"
    />
    <IconButton color="primary" onClick={handleSearchClick}>
      <SearchIcon />
    </IconButton>
    <IconButton color="secondary" onClick={handleHomeClick}>
      <HomeIcon />
    </IconButton>
  </div>
  );
};
