import React from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'

import PriveteRoute from './hoc/PriveteRoute';
import { signOut, moduleName } from '../ducks/auth'

import AuthPage from './routes/AuthPage'
import AdminPage from './routes/AdminPage'
import PersonPage from './routes/PersonPage'

function Root({
  signOut,
  signedIn,
}) {
  const button = signedIn ? <button onClick={signOut}>Sign Out</button> : <Link to="/auth/signin">Sign In</Link>
  return (
    <>
  {button}
      <Route path='/auth' component={AuthPage}/>

      <PriveteRoute exact path='/admin' component={AdminPage}/>

      <PriveteRoute exact path='/person' component={PersonPage}/>

    </>
  );
}

export default connect(
  state => ({
    signedIn: !!state[moduleName].user
  }),
  {signOut}
)(Root)
