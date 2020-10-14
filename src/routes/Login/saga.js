import { call, put, takeLatest } from 'redux-saga/effects';
import { apiResource } from '../../services/utils/api';
import { LOGIN_REQUEST } from './constants';
import { loginSuccess, loginFailed } from './actions';
import { setStorage } from '../../services/utils/storageService';

function* verifyLogin(dObj) {
  try {
    const url = '/auth/login';
    const res = yield call(apiResource.post, url, dObj.payload);
    if (res.success) {
      window.localStorage.setItem('authToken', res.data.token);
      const { data } = res;
      setStorage(data.token, data.userRole);
      yield put(
        loginSuccess({
          data: res.data,
        }),
      );
    } else {
      const { message, errors } = res.data;
      let log = '';
      if (message) {
        const obj = {
          email: message,
        };
        const arr = [];
        arr.push(obj);
        log = arr;
      } else {
        log = errors;
      }
      yield put(
        loginFailed({
          message: log,
        }),
      );
    }
  } catch (e) {
    yield put(
      loginFailed({
        message: 'Something went wrong',
      }),
    );
  }
}

function* loginSaga() {
  yield takeLatest(LOGIN_REQUEST, verifyLogin);
}

export default loginSaga;
