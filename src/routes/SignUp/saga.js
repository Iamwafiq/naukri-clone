import { call, put, takeLatest } from 'redux-saga/effects';
import { apiResource } from '../../services/utils/api';
import { SIGNUP_REQUEST } from './constants';
import { signUpSuccess, signUpFailed } from './actions';
import { setStorage } from '../../services/utils/storageService';

function* signUpRequest(dObj) {
  try {
    const url = '/auth/register';
    const res = yield call(apiResource.post, url, dObj.payload);
    if (res.success) {
      const { data } = res;
      setStorage(data.token, data.userRole);
      yield put(
        signUpSuccess({
          data: res.data,
        }),
      );
    } else {
      const { message, code, errors } = res.data;
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
        signUpFailed({
          message: log,
        }),
      );
    }
  } catch (e) {
    yield put(
      signUpFailed({
        message: 'Something went wrong',
      }),
    );
  }
}

function* signUpSaga() {
  yield takeLatest(SIGNUP_REQUEST, signUpRequest);
}

export default signUpSaga;
