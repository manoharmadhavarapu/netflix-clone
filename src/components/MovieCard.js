import { Link } from 'react-router-dom';
import { IMAGE_CDN_URL } from '../utills/constants'

const MovieCard = ({posterPath,id}) => {

  if(!posterPath) return null;

  return (
    <Link to={`/movieinfo/${id}`} className='w-[120px] h-[90px] sm:w-[160px] sm:h-[160px] md:w-[190px] md:h-[190px] mx-1 cursor-pointer'>
        <img className='w-full h-full rounded-md object-cover' src={IMAGE_CDN_URL+posterPath} alt='movie-img'></img>
    </Link>
  )
}

export default MovieCard