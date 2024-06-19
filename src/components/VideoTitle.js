import React from 'react'
import { Link } from 'react-router-dom'

const VideoTitle = ({title, overview, id}) => {
  return (
    <div className='z-40 absolute top-[140px] sm:top-[230px] md:top-[14%] lg:top-[25%] left-3 md:left-10 text-white'>
        <div>
            <h1 className='sm:text-2xl sm:font-semibold md:text-2xl md:font-bold'>{title}</h1>
            <p className='hidden sm:block sm:w-4/5 sm:text-xs md:block md:text-base md:w-3/5 mt-3 font-normal'>{overview}</p>
        </div>
        <div className='my-3'>
            <Link to={`/play-movie/${id}`}>
              <button className='bg-white text-black sm:py-1 sm:font-bold md:py-1 px-2 md:px-4 rounded-sm md:font-medium hover:opacity-80'>
                  <span className='md:mr-1 '>▶️</span> Play
              </button>
            </Link>
            <Link to={`/movieInfo/${id}`}>
              <button className='bg-gray-500 hidden sm:inline-block md:inline-block mx-2 py-1 px-4 rounded-sm bg-opacity-60'>
                  <span className='mr-2'>ℹ️</span>
                  More Info
              </button>
            </Link>
        </div>
    </div>
  )
}

export default VideoTitle