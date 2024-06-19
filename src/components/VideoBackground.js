import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {

    const trailerVideo = useSelector(store => store.movies.trailerVideo);

    useMovieTrailer(movieId);

  return (
    <div className='w-screen bg-black -mt-[10px] sm:-mt-[40px] md:-mt-[110px]'>
        <iframe 
                className='w-screen aspect-video'
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&loop=1&playlist=${trailerVideo?.key}&mute=1&controls=0&rel=0`}
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
        </iframe>
    </div>
  )
}

export default VideoBackground