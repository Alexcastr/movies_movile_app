import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieDBMovieResponse} from '../../../insfrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../insfrastructure/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

export const moviesTopRatedUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const topRated = await fetcher.get<MovieDBMovieResponse>('/top_rated');
    return topRated.results.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    console.log(error);
    throw new Error('error fetching topRated use cases');
  }
};
