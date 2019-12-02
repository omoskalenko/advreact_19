import React from 'react'
import { NavLink, Route } from 'react-router-dom'

import SignInForm from '../auth/SignInForm'
import SignUpForm from '../auth/SingUpForm'

export default function AuthPage() {
  const handleSignIn = value => console.log(value);
  const handleSignUp = value => console.log(value);

  return (
    <main id="auth">
      <h1>Auth Page</h1>
        <NavLink to='/auth/signin'>sign in</NavLink>
        <NavLink to='/auth/signup'>sign up</NavLink>

        <Route exact path='/auth/signin' render={() => <SignInForm onSubmit={handleSignIn}/>}/>
        <Route exact path='/auth/signup' render={() => <SignUpForm onSubmit={handleSignUp}/>}/>

    </main>
  );
}
