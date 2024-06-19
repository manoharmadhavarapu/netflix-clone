import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utills/constants";
import { addTrailerVideo } from "../redux/moviesSlice";
import { useEffect } from "react";


const useMovieTrailer = (movieId) => {

    // const trailerVideo = useSelector(store=>store.movies.trailerVideo);
    const dispatch = useDispatch();

    // Fetch trailer videos and updating the store with trailerVideo data
    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json();

        const filterVideos = json?.results?.filter(video => video.type === "Trailer")
        const trailer = filterVideos.length>1 ? filterVideos[0] : json?.results[1] || json?.results[0]

        dispatch(addTrailerVideo(trailer))
    }

    useEffect(() => {
        getMovieVideos();
    }, [])
}

export default useMovieTrailer;