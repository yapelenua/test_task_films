export interface IFilm {
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
}

export interface IGenre {
  id: number;
  name: string;
}

export interface FilterState {
  films: IFilm[];
  genres: IGenre[];
  minRating: string | number;
  sortOption: string;
  selectedGenres: number[];
  fetchFilms: (query?: string) => void;
  fetchGenres: () => void;
  clearFilms:() => void;
  setMinRating: (rating: string) => void;
  setSortOption: (option: string) => void;
  setSelectedGenres: (genres: number[]) => void;
}