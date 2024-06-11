import {Text, View} from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';

const HomeScreen = () => {

  const {top} = useSafeAreaInsets()

  const {isLoading, nowPlaying, popular, upcoming,topRated, PopularNextPage} = useMovies()

  if(isLoading){
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }
  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        {/* Principal  */}
        <PosterCarousel movies={nowPlaying} />
        {/* Peliculas populares  */}
        <HorizontalCarousel loadNextPage={PopularNextPage} title="Popular Movies" movies={popular} />
        {/* Top rated  */}
        <HorizontalCarousel title="Mejor Calificadas" movies={topRated} />
        {/* Proximamente  */}
        <HorizontalCarousel title="Proximamente" movies={upcoming} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
