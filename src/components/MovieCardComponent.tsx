import React from 'react';
import useFilterStore from '../store/store';
import { IFilm } from '../types/app.types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


interface IProps {
  film: IFilm;
}

export const CardComponent: React.FC<IProps> = ({ film }) => {
  const {
    genres,
  } = useFilterStore();


  const getGenreNames = (genreIds: number[]): string[] => {
    return genreIds
      .map(id => {
        const genre = genres.find(genre => genre.id === id);
        return genre ? genre.name : '';
      })
      .filter(name => name);
  };
  return (
    <Card 
      className="transition-transform transform hover:scale-105 duration-300 ease-in-out" 
      sx={{ maxWidth: 345 }}
      >
        <CardMedia
          sx={{ height: 500, width: 400 }}
          image={`https://image.tmdb.org/t/p/w500${film.poster_path}` || 'No image avaiable'}
          title={film.title}
        />
        <CardContent>
         <Typography gutterBottom variant="h5" component="div">
            {film.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <p className='truncate'>
            {film.overview || 'No overview available.'}
          </p>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Release Date: {film.release_date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rating: {film.vote_average}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Genres: {getGenreNames(film.genre_ids).join(', ')}
        </Typography>
      </CardContent>
     </Card>
  );
};
