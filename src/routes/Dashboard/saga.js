import { call, put, takeLatest } from 'redux-saga/effects';
import { apiResource } from '../../services/utils/api';
import {
  GET_POSTED_JOBS,
  GET_JOBS,
  APPLY_JOB,
  GET_APPLICANTS,
} from './constants';
import {
  postedJobsSuccess,
  postedJobsFailed,
  jobsSuccess,
  jobsFailed,
  applyJobSuccess,
  applyJobFailed,
  applicantsSuccess,
  applicantsFailed,
} from './actions';

function* getPostedJobs(dObj) {
  try {
    const url = '/recruiters/jobs';
    const res = yield call(apiResource.get, url);
    if (res.success) {
      yield put(
        postedJobsSuccess({
          response: res,
        }),
      );
    } else {
      yield put(
        postedJobsFailed({
          message: res.message,
        }),
      );
    }
  } catch (e) {
    yield put(
      postedJobsFailed({
        message: 'Something went wrong',
      }),
    );
  }
}

function* getJobs(dObj) {
  try {
    const url = '/candidates/jobs';
    const res = yield call(apiResource.get, url);
    if (res.success) {
      yield put(
        jobsSuccess({
          response: res,
        }),
      );
    } else {
      yield put(
        jobsFailed({
          message: res.message,
        }),
      );
    }
  } catch (e) {
    yield put(
      jobsFailed({
        message: 'Something went wrong',
      }),
    );
  }
}

function* applyJob(dObj) {
  try {
    const url = '/candidates/jobs';
    const res = yield call(apiResource.post, url, dObj.payload);
    if (res.success) {
      yield put(
        applyJobSuccess({
          response: res,
        }),
      );
    } else {
      yield put(
        applyJobFailed({
          message: res.message,
        }),
      );
    }
  } catch (e) {
    yield put(
      applyJobFailed({
        message: 'Something went wrong',
      }),
    );
  }
}
function* getApplicants(dObj) {
  try {
    const url = `/recruiters/jobs/${dObj.payload.jobId}/candidates`;
    const res = yield call(apiResource.get, url);
    if (res.success) {
      yield put(
        applicantsSuccess({
          response: res,
        }),
      );
    } else {
      yield put(
        applicantsFailed({
          message: res.message,
        }),
      );
    }
  } catch (e) {
    yield put(
      applicantsFailed({
        message: 'Something went wrong',
      }),
    );
  }
}
function* dashboardSaga() {
  yield takeLatest(GET_POSTED_JOBS, getPostedJobs);
  yield takeLatest(GET_JOBS, getJobs);
  yield takeLatest(APPLY_JOB, applyJob);
  yield takeLatest(GET_APPLICANTS, getApplicants);
}

export default dashboardSaga;
