import {Text, View} from 'react-native';
import { useMovies } from '../../hooks/useMovies';

const HomeScreen = () => {

  const {} = useMovies()
  return (
    <View>
      <Text>Home screen</Text>
    </View>
  );
};

export default HomeScreen;
