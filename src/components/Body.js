import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./Login"
import Browse from "./Browse"
import MovieInfo from "./MovieInfo";
import VideoPlayer from "./VideoPlayer";

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login/>
        },
        {
            path: '/browse',
            element: <Browse/>
        },
        {
            path: '/movieinfo/:movieId',
            element:<MovieInfo/>
        },
        {
            path: '/play-movie/:id',
            element:<VideoPlayer/>
        }
    ]);

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body