import React, { useRef } from 'react'
import lang from '../utills/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import runChat from '../utills/gemini';
import searchMovieTmdb from '../utills/searchMovieTmdb';
import { addGptMovieResults } from '../redux/gptSlice';

const GptSearchBar = () => {

    const dispatch = useDispatch();

    const langKey = useSelector(store=>store.config.lang);
    const searchText = useRef(null);

    const handleGptSearchClick = async ()=>{
        const gptQuery = " Act as a movie recommendation system and suggest some movies for the given query : "+searchText.current.value + ". Movie results should be comma seperated values like rrr, pushpa, bahubali,. give 5 only movie results. should not give movie results with years like this : pushpa (2003). instead give only pushpa. and remember one thing if query is like: adipurush, then give those matching given results ";
 
        // Hera Pheri, Golmaal, 3 Idiots, Munna Bhai M.B.B.S., PK 
        const gptResults = await runChat(gptQuery)

        //["Hera Pheri", "Golmaal", "3 Idiots", "Munna Bhai M.B.B.S.", "PK"]
        const gptMoviesArray = gptResults.split(",");

        // for each movie try to find/search using TMDB serach API.
        const promiseArray = gptMoviesArray.map(movie=>searchMovieTmdb(movie))

        const tmdbResults = await Promise.all(promiseArray);

        dispatch(addGptMovieResults({movieNames:gptMoviesArray, movieResults:tmdbResults}))

    }
  return (
    <div className='flex justify-center pt-10 sm:pt-20 sticky top-[40px] md:top-[30px] z-10'>
        <form className='min-w-[300px] sm:min-w-[500px] md:min-w-[700px] shadow-md md:grid md:grid-cols-12' onClick={(e)=>e.preventDefault()}>
            <input 
                ref={searchText}
                type='text' 
                className='w-[70%] sm:w-[80%] sm:placeholder:text-lg sm:py-2 sm:px-3 m-auto md:m-0 md:w-full md:col-span-10 p-1 md:px-4 md:py-2 rounded-md md:rounded-xl placeholder:text-xs md:placeholder:font-serif md:placeholder:text-lg outline-none'
                placeholder={lang[langKey].gptSearchPlaceholder}
            />
            
            <button className='bg-red-700 text-white text-xs sm:text-lg md:text-lg rounded-md md:rounded-xl hover:bg-opacity-75 px-4 py-2 ml-2 text-center font-semibold md:col-span-2 cursor-pointer' onClick={handleGptSearchClick}>
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar