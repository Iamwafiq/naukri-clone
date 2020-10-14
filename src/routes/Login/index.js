import React from 'react';
import { connect } from 'react-redux';
import { loginReducer } from './reducer';
import loginSaga from './saga';
import LoginComponent from './components';
import { useInjectReducer } from '../../reducers/injectReducer';
import { useInjectSaga } from '../../saga/injectSaga';

const Login = (props) => {
  useInjectReducer({ key: 'loginReducer', reducer: loginReducer });
  useInjectSaga({ key: 'loginSaga', saga: loginSaga });

  return <div>{props.loginReducer ? <LoginComponent {...props} /> : ''}</div>;
};

function mapStateToProps(props) {
  return {
    ...props,
  };
}
export default connect(mapStateToProps)(Login);
