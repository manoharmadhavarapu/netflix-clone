import { useDispatch, useSelector } from "react-redux";
import {API_OPTIONS} from '../utills/constants';
import {addNowPlayingMovies} from '../redux/moviesSlice';
import { useEffect } from "react";

const useNowPlayingMovies = () => {

    const nowPlayingMovies = useSelector(store=>store.movies.nowPlayingMovies)

    // Fetch data from TMDB API and update store
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(() => {
        !nowPlayingMovies && getNowPlayingMovies();
    }, [])
}

export default useNowPlayingMovies