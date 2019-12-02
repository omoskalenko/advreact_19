import { createStore, applyMiddleware, compose } from 'redux'
import createRootReducer from './reducer'
import logger from  'redux-logger'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const store = createStore(
  createRootReducer(history),
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
      logger,
    )
  ),
)

window.store = store

export default store
