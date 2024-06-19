import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearchPage = () => {
  return (
    <div className='bg-black bg-opacity-90 min-h-screen'>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearchPage