import { useDispatch, useSelector } from "react-redux";
import {API_OPTIONS} from '../utills/constants';
import {addUpcomingMovies} from '../redux/moviesSlice'
import { useEffect } from "react";

const useUpcomingMovies = () => {

    const upcomingMovies = useSelector(store=>store.movies.upcomingMovies);

    // Fetch data from TMDB API and update store
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_OPTIONS)
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));

    }

    useEffect(() => {
        !upcomingMovies && getUpcomingMovies();
    }, [])
}

export default useUpcomingMovies