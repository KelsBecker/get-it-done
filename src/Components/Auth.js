import React from 'react';
import Login from './Login'
import SignUp from './SignUp'

function Auth(){
  return(
    <>
    <header>Authorization</header>
      <Login/>
      <SignUp/>
    </>
  )
}

export default Auth;