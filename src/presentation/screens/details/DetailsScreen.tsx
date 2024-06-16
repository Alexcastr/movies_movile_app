import { StackScreenProps } from '@react-navigation/stack';
import {ScrollView, Text, View} from 'react-native';
import { RootStackParams } from '../../navigation/Navigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { MovieDetails } from '../../components/movie/MovieDetails';


interface Props extends StackScreenProps<RootStackParams, "Details">{}

const DetailsScreen = ({route}:Props) => {
  const {movieId} = route.params;
  const {isLoading, movie} = useMovie(movieId);

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  // other way to get the params
  // const {movieId} = useRouter().params;
  return (
    <ScrollView>
      <MovieHeader movie={movie!} />
      <MovieDetails movie={movie!} />
     
    </ScrollView>
  );
};

export default DetailsScreen; 
