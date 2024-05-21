import create from 'zustand';
import { FilterState } from '../types/app.types';
import { movieService } from '../services/movie.services'
import { API_GET_FILMS, API_GET_SEARCH } from '../utils'


const useFilterStore = create<FilterState>((set, get) => ({
  films: [],
  genres: [],
  minRating: localStorage.getItem('minRating') || 0,
  sortOption: localStorage.getItem('sortOption') || 'popularity.desc',
  selectedGenres: JSON.parse(localStorage.getItem('selectedGenres') || '[]'),
  fetchFilms: (query = '') => {
    const { minRating, sortOption, selectedGenres } = get();
    const genreQuery = selectedGenres.length > 0 ? `&with_genres=${selectedGenres.join(',')}` : '';
    const ratingQuery = minRating ? `&vote_average.gte=${minRating}` : '';
    const searchQueryParam = query ? `&query=${query}` : '';
    const fullUrl = query
      ? `${API_GET_SEARCH}${searchQueryParam}`
      : `${API_GET_FILMS}${sortOption || 'popularity.desc'}${ratingQuery || 0}${genreQuery}`;

    movieService.fetchFilms(fullUrl)
      .then((response) => {
        console.log(response.data);
        set({ films: response.data.results });
      })
      .catch((error) => {
        console.error('Error fetching films:', error);
      });
  },
  fetchGenres: () => {
    movieService.fetchGenres()
      .then((response) => {
        console.log(response.data);
        set({ genres: response.data.genres });
      })
      .catch((error) => {
        console.error('Error fetching genres:', error);
      });
  },
  setMinRating: (rating) => {
    localStorage.setItem('minRating', rating);
    set({ minRating: rating });
  },
  setSortOption: (option) => {
    localStorage.setItem('sortOption', option);
    set({ sortOption: option });
  },
  setSelectedGenres: (genres) => {
    localStorage.setItem('selectedGenres', JSON.stringify(genres));
    set({ selectedGenres: genres });
  },

  clearFilms: () => {
    set({ films: [] });
  }
}));

export default useFilterStore;
