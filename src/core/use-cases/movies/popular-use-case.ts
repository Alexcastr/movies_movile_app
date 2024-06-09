import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieDBMovieResponse} from '../../../insfrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../insfrastructure/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<MovieDBMovieResponse>('/popular');
    return popular.results.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    console.log(error);
    throw new Error('error fetching popular use cases');
  }
};
