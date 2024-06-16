import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieDBMovie } from '../../../insfrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../insfrastructure/mappers/movie.mapper';
import { FullMovie } from '../../entities/movie.entity';
export const getMovieByIdUseCase = async (fetcher: HttpAdapter, movieId :number):Promise<FullMovie> => {
 
  try {
    const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`)

    const fullmovie = MovieMapper.formMovieDBToEntity(movie)
    return fullmovie
  } catch (error) {
    throw new Error("Cannot get movie by id" + movieId)
  }
}
