/* eslint-disable react-hooks/exhaustive-deps */
import '../App.css';
import useFilterStore from '../store/store';
import { IFilm } from '../types/app.types';
import { CardComponent } from './MovieCardComponent'
import { Plug } from './PlugComponent'

export const MovieListComponent = () => {
  const { films } = useFilterStore();

  return (
    <div className='flex flex-wrap gap-[40px] justify-center mt-[40px]'>
      {films.length > 0 ? (
        films.map((film: IFilm) => (
          <CardComponent film = {film}/>
        ))
      ) : (
        <Plug />
      )}
    </div>
  );
};
