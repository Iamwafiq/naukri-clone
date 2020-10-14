import { call, put, takeLatest } from 'redux-saga/effects';
import { apiResource } from '../../services/utils/api';
import { RESET_PASSWORD } from './constants';
import { resetSuccess, resetFailed } from './actions';

function* resetRequest(dObj) {
  try {
    const url = 'auth/resetpassword';
    const res = yield call(apiResource.post, url, dObj.payload);
    if (res.success) {
      yield put(
        resetSuccess({
          data: res.data,
        }),
      );
    } else {
      yield put(
        resetFailed({
          message: res.message,
        }),
      );
    }
  } catch (e) {
    yield put(
      resetFailed({
        message: 'Something went wrong',
      }),
    );
  }
}

function* resetPasswordSaga() {
  yield takeLatest(RESET_PASSWORD, resetRequest);
}

export default resetPasswordSaga;
