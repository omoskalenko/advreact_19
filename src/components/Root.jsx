import React from 'react'
import { Route } from 'react-router-dom'

import PriveteRoute from './hoc/PriveteRoute';

import AuthPage from './routes/AuthPage'
import AdminPage from './routes/AdminPage'
import PersonPage from './routes/PersonPage'

export default function Root() {
  return (
    <>
      <Route path='/auth' component={AuthPage}/>

      <Route exact path='/admin' render={props => <PriveteRoute component={AdminPage}/> }/>

      <Route exact path='/person' render={props => <PriveteRoute component={PersonPage}/> }/>
    </>
  );
}

