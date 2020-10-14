import { call, put, takeLatest } from 'redux-saga/effects';
import { apiResource } from '../../services/utils/api';
import { POST_JOB } from './constants';
import { postJobSuccess, postJobFailed } from './actions';

function* postJob(dObj) {
  try {
    const url = '/jobs';
    const res = yield call(apiResource.post, url, dObj.payload);
    if (res.success) {
      yield put(
        postJobSuccess({
          data: res.data,
        }),
      );
    } else {
      const { errors } = res.data;
      yield put(
        postJobFailed({
          message: errors,
        }),
      );
    }
  } catch (e) {
    yield put(
      postJobFailed({
        message: 'Something went wrong',
      }),
    );
  }
}

function* signUpSaga() {
  yield takeLatest(POST_JOB, postJob);
}

export default signUpSaga;
