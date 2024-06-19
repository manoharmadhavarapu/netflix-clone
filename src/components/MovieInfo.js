import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import useMovieDetails from '../hooks/useMovieDetails';
import { IMAGE_CDN_URL } from '../utills/constants';
import { addMovieDetails } from '../redux/moviesSlice';

const MovieInfo = () => {

    const movieDetails = useSelector(store => store.movies.movieDetails);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { movieId } = useParams();

    useMovieDetails(movieId);

    if (!movieDetails) {
        return (
            <div className='flex justify-between p-36 bg-opacity-80 bg-black h-screen'>
                <div className='bg-slate-300 w-[40%] h-[80%] rounded-sm'></div>
                <div className=' w-[40%] h-[80%] rounded-sm p-3'>
                    <h1 className='h-5 bg-slate-200 rounded-sm my-6'></h1>
                    <div className='h-[10%]  flex rounded-lg '>
                        <p className='h-3 w-16 mr-6 bg-white rounded-sm'></p>
                        <p className='h-3 w-16 mx-6 bg-white rounded-sm'></p>
                        <span className='h-3 w-16 mx-6 bg-white rounded-sm'></span>
                    </div>
                    <div className='my-8 h-[40%] rounded-sm'>
                        <span className='w-1/5 h-4 bg-white'></span>
                        <p className='w-full h-7 bg-white  text-sm'></p>
                    </div>
                </div>
            </div>
        )
    }

    const { id, backdrop_path, original_title, title, overview, release_date, vote_average, runtime, poster_path } = movieDetails;

    const handleNavigate = () => {
        navigate('/browse')
        dispatch(addMovieDetails(null));
    }

    return (
        <div className='m-auto bg-black bg-opacity-90 py-1 lg:h-screen'>

            <div className='flex justify-center items-center my-4 cursor-pointer' onClick={handleNavigate}>
                <h1 className='text-center bg-red-600 text-white font-bold px-3 py-1 '>Go Back</h1>
            </div>

            <div className='flex flex-col items-center lg:flex-row lg:justify-between p-5 m-10 '>
                <Link to={`/play-movie/${id}`} className='relative w-[100%] sm:w-[80%] lg:w-[50%] border border-black shadow-lg rounded-md'>
                    <img className='w-full rounded-lg shadow-lg object-cover' src={IMAGE_CDN_URL + backdrop_path} alt='movie-img'></img>
                    <button className='absolute top-[46%] left-[46%] bg-opacity-30 bg-black text-black sm:py-1 sm:font-bold md:py-3 px-4 md:px-4 rounded-md md:font-medium hover:opacity-80'>
                        <span className='md:mr-1 '>▶️</span> Play
                    </button>
                </Link>
                <div className='text-white w-[100%] sm:w-[70%] mt-4 lg:mt-0 lg:w-[40%]'>
                    <h1 className='font-bold text-xs sm:text-2xl'>{title}</h1>
                    <div className='flex items-center shrink-0 font-normal sm:font-medium my-1 sm:my-2'>
                        <p className='border-r-2 border-r-indigo-400 sm:border-r-4 sm:border-r-indigo-400 pr-3 text-center'>{release_date}</p>
                        <p className='border-r-2 border-r-indigo-400 sm:border-r-4 sm:border-r-indigo-400 px-3 text-center'>{runtime} mins</p>
                        <span className=' px-3'>{vote_average}⭐</span>
                    </div>
                    <div className='my-3 sm:my-8'>
                        <span className='font-bold border-b-4 border-red-600 py-1 inline-block my-2'>Overview</span>
                        <p className='w-[100%] text-sm'>{overview}</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MovieInfo