import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utills/constants";
import { addMovieDetails } from "../redux/moviesSlice";
import { useEffect } from "react";


const useMovieDetails = (movieId) => {

    const dispatch = useDispatch();

    // Fetch trailer videos and updating the store with trailerVideo data
    const getMovieDetails = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, API_OPTIONS)
        const json = await data.json();

        dispatch(addMovieDetails(json))
    }

    useEffect(() => {
        getMovieDetails();
    }, [])
}

export default useMovieDetails;