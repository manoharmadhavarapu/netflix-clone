import { useState, useRef } from "react"
import Header from "./Header"
import { checkValidateDataForSignIn, checkValidateDataForSignUp } from "../utills/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utills/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { NETFLIX_BACKGROUND_BANNER } from "../utills/constants";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Setting state whether it is signup / signin form
  const [isSignInForm, setIsSignInForm] = useState(true);
  // Getting form validation errors to this state object
  const [isError, setIsError] = useState({});
  // Firebase Error 
  const [firebaseError, setFirebaseError] = useState(null);

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleFormData = () => {

    let errorValues = isSignInForm ? checkValidateDataForSignIn(email, password) : checkValidateDataForSignUp(fullName, email, password)
    setIsError(errorValues);

    //Checking the object is empty or not. if not empty then we cant move forward...
    if (JSON.stringify(errorValues) !== "{}") return

    // SignIn/SignUp Logic
    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;

          updateProfile(auth.currentUser, {
            displayName: fullName.current.value
          }).then(() => {
            // Profile updated!
            const { uid, displayName, email } = auth.currentUser
            dispatch(addUser({ uid, displayName, email }))
            navigate("/browse")
          }).catch((error) => {
            // An error occurred
            console.log(error);
          });

        })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.message;
          setFirebaseError(errorCode)
        });
    }
    else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          const { uid, displayName, email } = user
          dispatch(addUser({ uid, displayName, email }))
          // navigate("/browse")
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          setFirebaseError("incorrect email/password")
        });
    }

  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setIsError({})

    if (!isSignInForm) {
      fullName.current.value = '';
      email.current.value = '';
      password.current.value = '';
    }
    else {
      email.current.value = '';
      password.current.value = '';
    }

  }

  return (
    <div style={{ background: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url(${NETFLIX_BACKGROUND_BANNER})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', minHeight: '100vh' }}>

      <Header />

      <form onSubmit={(e) => e.preventDefault()} className="flex items-center justify-center w-[280px] sm:w-[300px] md:w-[320px] mx-auto mt-[25%] md:mt-[6%] bg-black opacity-80 rounded-md md:rounded-lg">
        <div className="my-0 md:my-4 w-[85%] sm:w-[80%] sm:my-4 md:w-[80%]">
          {firebaseError && <h1 className="font-medium sm:font-bold md:font-bold text-red-600 text-2xl text-center">{firebaseError}</h1>}
          <h2 className="text-white font-normal text-xl sm:text-2xl sm:my-4 sm:font-bold md:text-2xl my-3 md:my-5">{isSignInForm ? 'Sign In' : 'Sign Up'}</h2>
          {!isSignInForm && <div className="my-4 md:my-4 w-full">
            <input
              ref={fullName}
              type="text"
              placeholder="Full Name"
              className="sm:p-2 sm:text-base sm:my-2 sm:rounded-lg p-2 w-full bg-gray-700 placeholder:text-white text-white rounded-sm"
            />
            {isError?.fullName && <p className="sm:text-base p-1 text-red-600 font-medium">{isError.fullName}</p>}
          </div>}
          <div className="my-4 md:my-4 w-full">
            <input
              ref={email}
              type="email"
              placeholder="Email"
              className="sm:p-2 sm:text-lg sm:my-2 sm:rounded-lg p-2 w-full bg-gray-700 placeholder:text-white text-white rounded-sm"
            />
            {isError?.email && <p className="sm:text-base p-1 text-red-600 font-medium">{isError.email}</p>}
          </div>
          <div className="my-4 md:my-4 w-full">
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="sm:p-2 sm:text-lg sm:my-2 sm:rounded-lg p-2 w-full bg-gray-700 placeholder:text-white text-white rounded-sm"
            />
            {isError?.password && <p className="sm:text-base p-1 text-red-600 font-medium">{isError.password}</p>}
          </div>
          <div className="mt-5 sm:text-lg md:mt-9 w-full bg-red-600 flex items-center justify-center p-2 rounded-sm cursor-pointer" onClick={handleFormData}>
            <button className="text-white font-bold ">{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
          </div>
          {
            isSignInForm ?
              <p className="sm:text-base text-white my-6 cursor-pointer hover:underline" onClick={toggleSignInForm}>New to Netflix? Sign up now</p>
              :
              <p className="sm:text-base text-white my-6 cursor-pointer hover:underline" onClick={toggleSignInForm}>Already have account? Sign in</p>
          }
        </div>
      </form>
    </div>
  )
}

export default Login