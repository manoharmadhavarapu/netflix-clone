import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        topRatedMovies:null,
        upcomingMovies:null,
        popularTvSeries:null,
        movieDetails:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTopRated:(state,action)=>{
            state.topRatedMovies=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload;
        },
        addPopularTvSeries:(state,action)=>{
            state.popularTvSeries=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
        addMovieDetails:(state,action)=>{
            state.movieDetails=action.payload;
        },
    }
})

export const {addNowPlayingMovies,addTopRated,addUpcomingMovies,addPopularTvSeries,addTrailerVideo, addMovieDetails} = moviesSlice.actions;

export default moviesSlice.reducer;