import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBCastResponse } from "../../../insfrastructure/interfaces/movie-db.responses";
import { CastMApper } from "../../../insfrastructure/mappers/cast.mapper";

export const getMovieCastUseCase = async (fetcher: HttpAdapter,movieId: number) => {

  try {
    const {cast} = await fetcher.get<MovieDBCastResponse>(`movie/${movieId}/credits`);
    
    const actors = cast.map(actor => CastMApper.fromMovieDBCastToEntity(actor));

    return actors;
  } catch (error) {
    throw new Error('Error getting movie cast' + movieId);
  }

}
