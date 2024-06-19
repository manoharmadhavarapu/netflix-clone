import React from 'react'
import MovieCard from './MovieCard'
import MovieListShimmerUi from './MovieListShimmerUi'

const MovieList = ({ title, movies }) => {
    // const cardsRef = useRef();

    // useEffect(()=>{
    //     cardsRef.current.addEventListener('wheel',handleWheel)
    // },[])

    // const handleWheel=(event)=>{
    //     event.preventDefault();
    //     cardsRef.current.scrollLeft+=event.deltaX;
    // }

    if (!movies) {
        return (
            <MovieListShimmerUi/>
        )
    }

    return (
        <div className='mb-2'>
            <div className='pt-5 pb-2 pl-2'>
                <h1 className='sm:text-xl md:text-2xl text-white font-medium'>{title}</h1>
            </div>
            <div className='flex overflow-x-scroll cardScroll'>
                <div className='flex' >
                    {
                        movies?.map(movie => {
                            return (
                                <MovieCard key={movie.id} posterPath={movie.poster_path} id={movie.id} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList