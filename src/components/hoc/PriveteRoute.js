import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { moduleName } from '../../ducks/auth'
import Unauthorized from '../common/Unauthorized'

function PriveteRoute({
  component,
  authorized,
  ...rest
}) {
  const renderProtected = (routerProps) => {
    const ProtectedComponent = component
    if (!authorized) return <Unauthorized />
    return <ProtectedComponent {...routerProps} />
  }

  return <Route {...rest} render={renderProtected}/>
}

export default connect(
  (state) => ({
    authorized: !!state[moduleName].user
  })
)(PriveteRoute)
