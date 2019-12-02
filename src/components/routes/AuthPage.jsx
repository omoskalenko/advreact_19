import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { signUp, signIn } from '../../ducks/auth'

import SignInForm from '../auth/SignInForm'
import SignUpForm from '../auth/SingUpForm'
import Loader from '../common/Loader'

function AuthPage({ signUp, signIn, errorMessage, loading }) {
  const handleSignIn = value => signIn(value);
  const handleSignUp = value => signUp(value);

  return (
    <main id="auth">
      <h1>Auth Page</h1>
        <NavLink to='/auth/signin'>sign in</NavLink>
        <NavLink to='/auth/signup'>sign up</NavLink>
        <NavLink to='/admin'>Admin</NavLink>

        <Route exact path='/auth/signin' render={() => <SignInForm onSubmit={handleSignIn} errorMessage={errorMessage}/>}/>
        <Route exact path='/auth/signup' render={() => <SignUpForm onSubmit={handleSignUp} errorMessage={errorMessage}/>}/>
        {loading && <Loader />}
    </main>
  );
}

export default connect(
  (state) => ({
    loading: state.auth.loading,
    errorMessage: state.auth.error && state.auth.error.message
  }),
  (dispatch) => ({
    signUp: authData => dispatch(signUp(authData)),
    signIn: authData => dispatch(signIn(authData))
  })
)(AuthPage)
