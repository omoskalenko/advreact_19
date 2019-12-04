import firebase from 'firebase'
import { appName } from '../config'
import { Record } from 'immutable'
import { all, apply, call, cps, put, take, takeEvery } from 'redux-saga/effects'
import { push } from 'connected-react-router'


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
export const SIGN_OUT_REQUEST = `${appName}/${moduleName}/sign_OUT:REQUEST`
export const SIGN_OUT_SUCCESS = `${appName}/${moduleName}/sign_OUT:SUCCESS`

export default function reducer(state = new ReducerRecord(), action) {
  const { type } = action
  switch (type) {
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
    case SIGN_OUT_SUCCESS: {
      return state.clear()
    }

    default:
      return state
  }
}

export function signUp(payload) {
  return { type: SIGN_UP_REQUEST, payload }
}

export function signOut() {
  return { type: SIGN_OUT_REQUEST }
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
    } catch (error) {
      dispatch({
        type: SIGN_IN_ERROR,
        error
      })
    }
  }
}

export const watchStatusChange = function* () {
  const auth = firebase.auth()
    try {
      yield cps([auth, auth.onAuthStateChanged])
    } catch(user) {
      yield put({
        type: SIGN_IN_SUCCESS,
        payload: user
      })
    }
}


export const signUpSaga = function* () {
  const auth = firebase.auth()
  while (true) {
    const action = yield take(SIGN_UP_REQUEST)
    const { email, password } = action.payload
    try {

      const user = yield apply(
        auth,
        auth.createUserWithEmailAndPassword,
        [email,
          password],
      )
      yield put({
        type: SIGN_UP_SUCCESS,
        payload: user
      })
    } catch (error) {
      yield put({
        type: SIGN_UP_ERROR,
        error
      })
    }

  }

}

export const signOutSage = function* () {
  const auth = firebase.auth()
  try {
    yield call([auth, auth.signOut])
    yield put({ type: SIGN_OUT_SUCCESS})
    yield push('/auth/signin')
   }
  catch {}

}

export const saga = function* () {
  yield all([
    signUpSaga(),
    watchStatusChange(),
    takeEvery(SIGN_OUT_REQUEST, signOutSage)
  ])
}
