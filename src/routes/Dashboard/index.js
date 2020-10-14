import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { dashboardReducer } from './reducer';
import dashboardSaga from './saga';
import DashboardComponent from './components';
import { useInjectReducer } from '../../reducers/injectReducer';
import { useInjectSaga } from '../../saga/injectSaga';
import TopContainer from '../../components/TopContainer';
import { getUserRole } from '../../services/utils/storageService';
import { getPostedJobs, getJobs } from './actions';
const Dashboard = (props) => {
  useInjectReducer({ key: 'dashboardReducer', reducer: dashboardReducer });
  useInjectSaga({ key: 'dashboardSaga', saga: dashboardSaga });

  const { dispatch } = props;
  const [role, updateRole] = useState(getUserRole());

  useEffect(() => {
    if (role === '0') {
      dispatch(getPostedJobs());
    } else if (role === '1') {
      dispatch(getJobs());
    }
  }, []);

  return (
    <div>
      {props.dashboardReducer ? (
        <DashboardComponent {...props} role={role} />
      ) : (
        ''
      )}
    </div>
  );
};

function mapStateToProps(props) {
  return {
    ...props,
  };
}
export default connect(mapStateToProps)(Dashboard);
