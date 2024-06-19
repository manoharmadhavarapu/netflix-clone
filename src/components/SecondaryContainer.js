import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies);

  return (
    <div className='px-2 md:px-10 bg-black'>
      <div className='md:-mt-[70px] lg:-mt-[20%]'>
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
        <MovieList title={"Popular TV Series"} movies={movies?.popularTvSeries} />
        <MovieList title={"Action"} movies={movies?.nowPlayingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer