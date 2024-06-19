
export const checkValidateDataForSignIn = (email,password) => {

    let valueOfErrors = {};
    
    if (email.current.value.length === 0 || email.current === null) {
      valueOfErrors.email='Enter Your Email Id';
    }
    else if (!(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email.current.value))) {
      valueOfErrors.email='Email id not valid';
    }

    if (password.current.value.length === 0 || password.current === null) {
      valueOfErrors.password='Enter Your Password'
    }
    else if (!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password.current.value))) {
      valueOfErrors.password='Password is not valid'
    }

    return valueOfErrors

}

export const checkValidateDataForSignUp =(fullName,email,password) =>{

    let valueOfErrors = {}; 

    if (fullName?.current?.value?.length === 0 || fullName?.current === null) {
        valueOfErrors.fullName='Enter Your FullName';
    }
    else if (!(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(fullName.current.value))) {
        valueOfErrors.fullName='Name is not valid';
    }

    const errorsFromSignIn = checkValidateDataForSignIn(email,password)
    
    const errorsForSignUp = {...valueOfErrors,...errorsFromSignIn}
    
    return errorsForSignUp
}