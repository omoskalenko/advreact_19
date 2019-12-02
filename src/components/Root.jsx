import React from 'react'
import { Route } from 'react-router-dom'

import AuthPage from './routes/AuthPage'
import AdminPage from './routes/AdminPage'
import PriveteRoute from './hoc/PriveteRoute';

export default function Root() {
  return (
    <>
      <Route path='/auth' component={AuthPage}/>
      <Route exact path='/admin' render={props => <PriveteRoute component={AdminPage}/> }/>
    </>
  );
}

