import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList'

const GptMovieSuggestions = () => {

  const { movieNames, movieResults } = useSelector(store => store.gpt);

  if (!movieNames) return;

  return (
    <div className='px-3 md:px-10'>
      {
        movieNames.map((movieName,index) => {
          return (
            movieResults[index].length>0 && <MovieList key={movieName} title={movieName} movies={movieResults[index]} />
          )
        })
      }
    </div>
  )
}

export default GptMovieSuggestions