import React from 'react';
import { connect } from 'react-redux';
import { resetPasswordReducer } from './reducer';
import resetPasswordSaga from './saga';
import ResetPasswordComponent from './components';
import { useInjectReducer } from '../../reducers/injectReducer';
import { useInjectSaga } from '../../saga/injectSaga';

const ResetPassword = (props) => {
  useInjectReducer({
    key: 'resetPasswordReducer',
    reducer: resetPasswordReducer,
  });
  useInjectSaga({ key: 'resetPasswordSaga', saga: resetPasswordSaga });

  return (
    <div>
      {props.resetPasswordReducer ? <ResetPasswordComponent {...props} /> : ''}
    </div>
  );
};

function mapStateToProps(props) {
  return {
    ...props,
  };
}
export default connect(mapStateToProps)(ResetPassword);
