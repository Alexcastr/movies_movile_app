import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieDBMovieResponse} from '../../../insfrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../insfrastructure/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

export const moviesUpcomingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<MovieDBMovieResponse>('/upcoming');
    return upcoming.results.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    console.log(error);
    throw new Error('error fetching upcoming use cases');
  }
};
