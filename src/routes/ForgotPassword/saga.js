import { call, put, takeLatest } from 'redux-saga/effects';
import { apiResource } from '../../services/utils/api';
import { SUBMIT_MAIL } from './constants';
import { mailSuccess, mailFailed } from './actions';

function* submitMailRequest(dObj) {
  try {
    const url = `/auth/resetpassword?email=${dObj.payload.email}`;
    const res = yield call(apiResource.get, url);
    if (res.success) {
      yield put(
        mailSuccess({
          data: res.data,
        }),
      );
    } else {
      yield put(
        mailFailed({
          message: res.message,
        }),
      );
    }
  } catch (e) {
    yield put(
      mailFailed({
        message: 'Something went wrong',
      }),
    );
  }
}

function* forgotPasswordSaga() {
  yield takeLatest(SUBMIT_MAIL, submitMailRequest);
}

export default forgotPasswordSaga;
