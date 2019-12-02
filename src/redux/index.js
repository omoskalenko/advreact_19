import { createStore, applyMiddleware, compose } from 'redux'
import createRootReducer from './reducer'
// import logger from  'redux-logger'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import { saga } from '../ducks/people'

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const store = createStore(
  createRootReducer(history),
  composeEnhancers(
    applyMiddleware(
      sagaMiddleware,
      routerMiddleware(history),
      thunk,
    )
  ),
)

window.store = store

sagaMiddleware.run(saga)

export default store
