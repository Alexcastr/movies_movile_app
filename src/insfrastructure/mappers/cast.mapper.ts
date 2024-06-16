import { Cast } from "../interfaces/cast.entity";
import { MovieDBCast } from "../interfaces/movie-db.responses";

export class CastMApper {
  static fromMovieDBCastToEntity(cast: MovieDBCast): Cast {
    return {
      id: cast.id,
      name: cast.name,
      character: cast.character ?? 'No character found',
      avatar: cast.profile_path
        ? `https://image.tmdb.org/t/p/w500${cast.profile_path}.png`
        : "https://i.stack.imgur.com/160Hf.png",
    };
  }
}
