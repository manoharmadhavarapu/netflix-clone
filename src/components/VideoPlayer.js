import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoPlayer = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    useMovieTrailer(id)

    const trailerVideo = useSelector(store => store.movies.trailerVideo);


    return (
        <div className='bg-black py-2 h-[100vh] overflow-auto'>
            <div className='flex justify-center items-center my-4 cursor-pointer' onClick={() => navigate('/movieinfo/' + id)}>
                <h1 className='text-center bg-red-600 text-white font-bold px-3 py-1 '>Go Back</h1>
            </div>
            <div className='py-[20%] sm:py-[10%] lg:py-0'>
                <iframe
                    // className='w-[90vw] h-[90vh] mx-auto my-0 aspect-auto'
                    className='w-screen aspect-video '
                    src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=0&loop=0&playlist=${trailerVideo?.key}&mute=1&rel=0`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}

export default VideoPlayer