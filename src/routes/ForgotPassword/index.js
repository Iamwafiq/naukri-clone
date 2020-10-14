import React from 'react';
import { connect } from 'react-redux';
import { forgotPasswordReducer } from './reducer';
import forgotPasswordSaga from './saga';
import ForgotPasswordComponent from './components';
import { useInjectReducer } from '../../reducers/injectReducer';
import { useInjectSaga } from '../../saga/injectSaga';

const ForgotPassword = (props) => {
  useInjectReducer({
    key: 'forgotPasswordReducer',
    reducer: forgotPasswordReducer,
  });
  useInjectSaga({ key: 'forgotPasswordSaga', saga: forgotPasswordSaga });

  return (
    <div>
      {props.forgotPasswordReducer ? (
        <ForgotPasswordComponent {...props} />
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
export default connect(mapStateToProps)(ForgotPassword);
