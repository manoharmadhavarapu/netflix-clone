import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularTvSeries from "../hooks/usePopularTvSeries";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearchPage from "./GptSearchPage";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  // CUSTOM HOOK for fetching TMDB now playing movies data
  useNowPlayingMovies();
  useTopRated();
  useUpcomingMovies();
  usePopularTvSeries();

  return (
    // <div className="relative top-[-110px]">
    <div>
      <Header />
      {
        showGptSearch ?
          <GptSearchPage />
          :
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
      }
    </div>
  )
}

export default Browse