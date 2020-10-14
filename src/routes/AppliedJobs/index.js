import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { appliedJobsReducer } from './reducer';
import appliedJobsSaga from './saga';
import AppliedJobsComponent from './components';
import { useInjectReducer } from '../../reducers/injectReducer';
import { useInjectSaga } from '../../saga/injectSaga';
import { appliedJobs } from './actions';
const AppliedJobs = (props) => {
  useInjectReducer({ key: 'appliedJobsReducer', reducer: appliedJobsReducer });
  useInjectSaga({ key: 'appliedJobsSaga', saga: appliedJobsSaga });

  const { dispatch } = props;

  useEffect(() => {
    dispatch(appliedJobs());
  }, []);

  return (
    <div>
      {props.appliedJobsReducer ? <AppliedJobsComponent {...props} /> : ''}
    </div>
  );
};

function mapStateToProps(props) {
  return {
    ...props,
  };
}
export default connect(mapStateToProps)(AppliedJobs);
