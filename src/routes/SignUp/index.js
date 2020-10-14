import React from 'react';
import { connect } from 'react-redux';
import { signUpReducer } from './reducer';
import signUpSaga from './saga';
import SignUpComponent from './components';
import { useInjectReducer } from '../../reducers/injectReducer';
import { useInjectSaga } from '../../saga/injectSaga';

const SignUp = (props) => {
  useInjectReducer({ key: 'signUpReducer', reducer: signUpReducer });
  useInjectSaga({ key: 'signUpSaga', saga: signUpSaga });

  return <div>{props.signUpReducer ? <SignUpComponent {...props} /> : ''}</div>;
};

function mapStateToProps(props) {
  return {
    ...props,
  };
}
export default connect(mapStateToProps)(SignUp);
