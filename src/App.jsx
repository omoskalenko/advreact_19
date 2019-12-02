import React from 'react';
import store, { history } from './redux'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch } from 'react-router'

import Root from './components/Root'

function App() {
  return (
    <Provider store={store} >
      <ConnectedRouter history={history}>
        <Switch>
          <Root />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
