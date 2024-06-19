import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux"
import { auth } from "../utills/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../redux/userSlice";
import { useEffect } from "react";
import { toggleGptSearchView } from "../redux/gptSlice";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utills/constants";
import { changeLanguage } from "../redux/configSlice";

const Header = () => {
  const user = useSelector(store=>store.user);
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user
        dispatch(addUser({ uid, displayName, email }))
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    });

    // unsubscribe when componenet unmount
    return ()=> unsubscribe();
  },[])

  const handleGptSearch = () => {
    // Toggle the GptSearch component 
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (event) =>{
   dispatch(changeLanguage(event.target.value))
  }

  const handleSignOut =()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser());
      // navigate("/")
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    // <div className="absolute bg-gradient-to-t from-black">
    <div className="py-0 md:py-1 px-0 md:px-10 sticky top-0 z-50 bg-gradient-to-b from-black w-[100%] m-auto md:flex justify-between items-center bg-black">
      <div className="flex items-center justify-between md:justify-start">
        <img
          className="w-[90px] sm:w-[140px] md:w-[120px] cursor-pointer"
          src={NETFLIX_LOGO}
          alt="netflix-logo"
        />
        {user && <ul className="text-white flex justify-between items-center">
          <li className="mx-5 font-bold sm:font-semibold sm:text-base md:font-normal md:text-base md:shrink-0 cursor-pointer" onClick={()=>{
            if(showGptSearch===true){
              handleGptSearch()
            }
          }}>Home</li>
          <li className="hidden sm:block sm:text-base sm:font-semibold md:block md:font-normal md:text-base md:shrink-0 md:mx-2 mx-5 cursor-pointer">Tv Shows</li>
          <li className="hidden sm:block sm:text-base sm:font-semibold md:block md:font-normal md:text-base md:shrink-0 md:mx-2 mx-5 cursor-pointer">Movies</li>
          <li className="hidden sm:block sm:text-base sm:font-semibold md:block md:font-normal md:text-base md:shrink-0 md:mx-2 mx-5 cursor-pointer">My List</li>
        </ul>}
      </div>
      {user&&<div className="flex items-center justify-center sm:justify-center md:justify-center mx-4">
        {showGptSearch && <select className="md:px-2 text-xs sm:text-base sm:px-2 md:text-base py-1 mr-2 md:mr-4 cursor-pointer bg-zinc-200 rounded-md outline-none" onChange={handleLanguageChange}>
          {
            SUPPORTED_LANGUAGES.map(lang=>{
              return(
                <option key={lang.identifier} value={lang.identifier} className="cursor-pointer">{lang.name}</option>
              )
            })
          }
        </select>}
        {!showGptSearch &&<button className="bg-purple-900 text-white text-xs sm:text-base sm:px-3 sm:mr-3 md:text-base font-normal md:font-medium px-1 md:px-3 py-1 cursor-pointer rounded-md mx-2 md:mx-4 hover:bg-opacity-80" onClick={handleGptSearch}>GPT Search</button>}
        <button onClick={handleSignOut} className="text-white bg-red-600 text-xs sm:text-base sm:px-3 md:text-base px-1 md:px-3 py-1 cursor-pointer rounded-lg">Sign Out</button>
      </div>}
    </div>
  )
}

export default Header