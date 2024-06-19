import { useDispatch, useSelector } from "react-redux";
import {API_OPTIONS} from '../utills/constants';
import {addTopRated} from '../redux/moviesSlice'
import { useEffect } from "react";

const useTopRated = () => {

    const topRatedMovies = useSelector(store=>store.movies.topRatedMovies);

    // Fetch data from TMDB API and update store
    const dispatch = useDispatch();

    const getTopRated = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
        const json = await data.json();
        dispatch(addTopRated(json.results))
    }

    useEffect(() => {
        !topRatedMovies && getTopRated();
    }, [])
}

export default useTopRated