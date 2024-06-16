import {useEffect, useState} from 'react';
import {getMovieByIdUseCase} from '../../core/use-cases/movie/get-by-id.use-case';
import {movieDbFetcher} from '../../config/adapters/movieDb.adapter';
import {FullMovie} from '../../core/entities/movie.entity';

import {getMovieCastUseCase} from '../../core/use-cases/movie/get-cast.use-case';
import {Cast} from '../../insfrastructure/interfaces/cast.entity';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState<FullMovie>();

  const [cast, setCast] = useState<Cast[]>([]);

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setIsLoading(true);
    const fullMoviePromise = getMovieByIdUseCase(movieDbFetcher, movieId);
    const castPromise = getMovieCastUseCase(movieDbFetcher, movieId);

    const [fullMovie, actors] = await Promise.all([
      fullMoviePromise,
      castPromise,
    ]);
    setMovie(fullMovie);
    setCast(actors);
    setIsLoading(false);

    console.log("cast", cast);
  };
  return {
    isLoading,
    movie,
  };
};
