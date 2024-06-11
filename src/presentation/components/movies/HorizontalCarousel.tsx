import {View, Text, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {Movie} from '../../../core/entities/movie.entity';
import { FlatList } from 'react-native-gesture-handler';
import { MoviesPoster } from './MoviesPoster';
import { useEffect, useRef } from 'react';

interface Props {
  movies: Movie[];
  title?: string;
  loadNextPage?: () => void;
}
export const HorizontalCarousel = ({movies, title, loadNextPage}: Props) => {
  const isLoading = useRef(false)


  useEffect(() => {
    setTimeout(() => { 
      isLoading.current = false
    }, 200) 
   
  }, [movies])

  const onScroll = (Event: NativeSyntheticEvent<NativeScrollEvent>) =>{

    // loading para evitar que cargue varias veces el llamado a la API
    if(isLoading.current)return;
    const {contentOffset,layoutMeasurement, contentSize} = Event.nativeEvent

    const isEndreached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width
    if(!isEndreached)return ;

    isLoading.current = true

    // Si llegamos al final, cargar mas peliculas
    loadNextPage && loadNextPage()
  }
  return (
    <View style={{height: title ? 260 : 220}}>
      {title && (
        <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 10, marginBottom: 10}}>
          {title}
        </Text>
      )}

      <FlatList
        data={ movies }
        renderItem={({item})=> (
          <MoviesPoster movie={item} width={140} height={200} />
        )}
        keyExtractor={(item, index) =>  `${item.id}-${index}` }
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onScroll={(event)=> onScroll(event)}
      />
    </View>
  );
};
