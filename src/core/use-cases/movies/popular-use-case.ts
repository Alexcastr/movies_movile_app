import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieDBMovieResponse} from '../../../insfrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../insfrastructure/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

interface Options {
  page?: number;
  limit?: number;
}

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,options?: Options 
): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<MovieDBMovieResponse>('/popular',{
      params: {
        page: options?.page ?? 1,
      },
    
    });
    return popular.results.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    console.log(error);
    throw new Error('error fetching popular use cases');
  }
};
