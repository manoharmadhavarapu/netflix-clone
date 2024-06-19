
import { useDispatch, useSelector } from "react-redux";
import {API_OPTIONS} from '../utills/constants';
import {addPopularTvSeries} from '../redux/moviesSlice'
import { useEffect } from "react";

const usePopularTvSeries = () => {

    const popularTvSeries = useSelector(store=>store.movies.popularTvSeries)

    // Fetch data from TMDB API and update store
    const dispatch = useDispatch();

    const getPopularTvSeries = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        dispatch(addPopularTvSeries(json.results));
    }

    useEffect(() => {
        !popularTvSeries && getPopularTvSeries();
    }, [])
}

export default usePopularTvSeries