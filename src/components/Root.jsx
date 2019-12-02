import React from 'react'
import { Route } from 'react-router-dom'

import AuthPage from './routes/AuthPage'
import AdminPage from './routes/AdminPage'

export default function Root() {
  return (
    <>
      <Route exact path='/auth' component={AuthPage}/>
      <Route exact path='/admin' component={AdminPage}/>
    </>
  );
}

