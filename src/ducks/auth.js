import firebase from 'firebase'
import { appName } from '../config'
import { Record } from 'immutable'

const ReducerRecord = Record({
  user: null,
  error: null,
  loading: false,
})

export const moduleName = 'auth'
export const SIGN_UP_REQUEST = `${appName}/${moduleName}/sign_up:REQUEST`
export const SIGN_UP_SUCCESS = `${appName}/${moduleName}/sign_up:SUCCESS`
export const SIGN_UP_ERROR = `${appName}/${moduleName}/sign_up:ERROR`
export const SIGN_IN_REQUEST = `${appName}/${moduleName}/sign_in:REQUEST`
export const SIGN_IN_SUCCESS = `${appName}/${moduleName}/sign_in:SUCCESS`
export const SIGN_IN_ERROR = `${appName}/${moduleName}/sign_in:ERROR`

export default function reducer(state = new ReducerRecord(), action) {
  const { type } = action
  switch(type) {
    case SIGN_IN_REQUEST:
    case SIGN_UP_REQUEST: {
      return state
        .set('loading', true)
    }
    case SIGN_IN_SUCCESS:
    case SIGN_UP_SUCCESS: {
      const user = action.payload
      return state
        .set('loading', false)
        .set('user', user)
        .set('error', null)
    }
    case SIGN_IN_ERROR:
    case SIGN_UP_ERROR: {

      return state
        .set('loading', false)
        .set('error', action.error)
    }

    default:
      return state
  }
}

export function signUp({ email, password }) {
  return async (dispatch) => {
    dispatch({ type: SIGN_UP_REQUEST })
    try {
     const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
     dispatch({
      type: SIGN_UP_SUCCESS,
      payload: user
    })
    } catch(error) {
      dispatch({
        type: SIGN_UP_ERROR,
        error
      })
    }
  }
}

export function signIn({ email, password }) {
  return async (dispatch) => {
    dispatch({ type: SIGN_IN_REQUEST })
    try {
     const user = await firebase.auth().signInWithEmailAndPassword(email, password)
     dispatch({
      type: SIGN_IN_SUCCESS,
      payload: user
    })
    } catch(error) {
      console.log(error);
      dispatch({
        type: SIGN_IN_ERROR,
        error
      })
    }
  }
}

firebase.auth().onAuthStateChanged(user => {
  const store = require('../redux').default
  store.dispatch({
    type: SIGN_IN_SUCCESS,
    payload: user
  })
})
