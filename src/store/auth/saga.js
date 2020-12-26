import {all, call, put, takeEvery} from 'redux-saga/effects';
import axiosClient from '../../config/axios';
import {LOGIN_REQUEST, LOGIN_TOKEN_VALID, LOGOUT} from './types';
import {
  loginStart,
  loginSuccess,
  loginError,
  logOutSuccess,
  loginGetToken,
} from './action';
import {
  setStorage,
  getStorage,
  removeStorage,
} from '../../utilities/helpers/asyncStorage';
import {USER_TOKEN} from '../../utilities/constants/storage';

//Login
const login = async ({request: {email, password}}) =>
  await axiosClient
    .post('login/', {username: email, password: password})
    .then((response) => response.data);

const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

function* loginSaga(values) {
  try {
    yield put(loginStart());
    yield call(delay, 2000);
    const data = yield call(login, values);
    yield call(setStorage, USER_TOKEN, data.token);
    const token = yield call(getStorage, USER_TOKEN);
    yield put(loginSuccess(data, token));
  } catch (error) {
    console.log(error);
    yield call(removeStorage, USER_TOKEN);
    yield put(loginError());
  }
}

//Valid Session Token
const user = async () =>
  await axiosClient.get('/images/').then((response) => response.data);

function* loginTokenValidSagas() {
  try {
    yield put(loginStart());
    yield call(delay, 2000);
    const token = yield call(getStorage, USER_TOKEN);
    yield put(loginGetToken(token));
    const data = yield call(user);
    yield put(loginSuccess(data, token));
  } catch (error) {
    const token = yield call(getStorage, USER_TOKEN);
    yield put(loginError(token));
  }
}

//Log Out
function* logOutSaga() {
  try {
    yield call(removeStorage, USER_TOKEN);
    yield put(logOutSuccess());
  } catch (error) {
    console.log(error);
  }
}

export default function* rootSaga() {
  yield all([takeEvery(LOGIN_REQUEST, loginSaga)]);
  yield all([takeEvery(LOGIN_TOKEN_VALID, loginTokenValidSagas)]);
  yield all([takeEvery(LOGOUT, logOutSaga)]);
}
