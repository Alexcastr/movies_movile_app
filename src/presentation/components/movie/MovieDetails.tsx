import {Text, View} from 'react-native';
import {FullMovie} from '../../../core/entities/movie.entity';
import {Formatter} from '../../../config/helpers/formatter';

interface Props {
  movie: FullMovie;
}
export const MovieDetails = ({movie}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            {movie?.rating}
          </Text>
        </View>

        <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>
          Historia
        </Text>
        <Text style={{fontSize: 16}}>{movie?.description}</Text>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>
          Presupuesto
        </Text>
        <Text style={{fontSize: 16}}>{Formatter.currency(movie?.budget)}</Text>
      </View>
      {/* Actores */}
      <View style={{marginTop: 10, marginHorizontal: 100}}>
        <Text
          style={{
            fontSize: 23,
            fontWeight: 'bold',
            marginVertical: 10,
            marginHorizontal: 20,
          }}>
          Actores
        </Text>
      </View>
    </>
  );
};
