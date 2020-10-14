import { call, put, takeLatest } from 'redux-saga/effects';
import { apiResource } from '../../services/utils/api';
import { GET_APPLIED_JOBS } from './constants';
import { appliedJobsSuccess, appliedJobsFailed } from './actions';

function* getAppliedJobs(dObj) {
  try {
    const url = '/candidates/jobs/applied';
    const res = yield call(apiResource.get, url);
    if (res.success) {
      yield put(
        appliedJobsSuccess({
          response: res,
        }),
      );
    } else {
      yield put(
        appliedJobsFailed({
          message: res.message,
        }),
      );
    }
  } catch (e) {
    yield put(
      appliedJobsFailed({
        message: 'Something went wrong',
      }),
    );
  }
}

function* appliedJobsSaga() {
  yield takeLatest(GET_APPLIED_JOBS, getAppliedJobs);
}

export default appliedJobsSaga;
