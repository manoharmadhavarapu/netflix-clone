import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {

    const movies = useSelector(store=>store.movies?.nowPlayingMovies);

    // if(!movies) return;
    if(!movies){
      return (
        <div className='bg-black w-full h-[100vh]'>
          <div className='bg-slate-700 w-[95%] h-[80%] mx-auto my-20px'></div>
        </div>
      )
    }

    const mainMovie = movies?.[0];
    const {original_title, overview ,id} = mainMovie;
    // console.log('mainMovie',mainMovie,id);

    

  return (
    <div>
        <VideoTitle title={original_title} overview={overview} id={id}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer