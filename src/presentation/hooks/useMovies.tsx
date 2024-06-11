import { useEffect, useState } from "react"
import { Movie } from "../../core/entities/movie.entity"
import * as UseCases from "../../core/use-cases"
import { movieDbFetcher } from "../../config/adapters/movieDb.adapter"

let popularPageNumber = 1
export const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([])
  const [popular, setPopular] = useState<Movie[]>([])
  const [upcoming, setUpcoming] = useState<Movie[]>([])
  const [topRated, setTopRated] = useState<Movie[]>([])
  

  useEffect(() => {
    initialLoad()
  }, [])


  async function initialLoad(){
    const nowPlayingPromise = await UseCases.moviesNowPlayingUseCase(movieDbFetcher)
    const popularPromise = await UseCases.moviesPopularUseCase(movieDbFetcher)
    const upcomingPromise = await UseCases.moviesUpcomingUseCase(movieDbFetcher)
    const topRatedPromise = await UseCases.moviesTopRatedUseCase(movieDbFetcher)


    const [
      nowPlayingMovies,
      popularMovies,
      upcomingMovies,
      topRatedMovies
    ] = await Promise.all([nowPlayingPromise, popularPromise, upcomingPromise, topRatedPromise])

    setNowPlaying(nowPlayingMovies)
    setPopular(popularMovies)
    setUpcoming(upcomingMovies)
    setTopRated(topRatedMovies)

    setIsLoading(false)
    // console.log(
    //   nowPlayingMovies,
    //   popularMovies,
    //   upcomingMovies,
    //   topRatedMovies
    // )
  }

  return {
    isLoading,
    nowPlaying,
    popular,
    upcoming,
    topRated,

    // Methods
    PopularNextPage: async () => {
      popularPageNumber++
      const newPopularMovies = await UseCases.moviesPopularUseCase(movieDbFetcher, {
        page: popularPageNumber
      })
      setPopular((prev) => [...prev, ...newPopularMovies])
    }

  }
}
