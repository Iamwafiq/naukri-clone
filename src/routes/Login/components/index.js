import React, { useState, useEffect } from 'react';
import {
  FormComponent,
  inputSingleLine,
  formContentWrap,
  ButtonComponent,
  inputWrap,
  buttonTextBanner,
  formText,
  errorText,
  inputSingleLineError,
} from '../../styles';
import { informationText, formInnerText } from './style';
import Header from '../../../components/Header';
import TopContainer from '../../../components/TopContainer';
import ErrorMessageContainer from '../../../components/ErrorMessage';
import { loginRequest, reset } from '../actions';

const LoginComponent = (props) => {
  const { history, dispatch, loginReducer } = props;
  const { isLoggedIn, errorTs, message } = loginReducer;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({
    email: '',
    password: '',
  });
  const [localTimeStamp, setLocalTimeStamp] = useState('');
  useEffect(() => {
    if (isLoggedIn) {
      window.location.assign('/dashboard');
    }
  }, [isLoggedIn]);
  useEffect(() => {
    if (errorTs !== localTimeStamp) {
      setLocalTimeStamp(errorTs);
      const obj = {};
      message &&
        message.map((mes) => {
          if (mes.password) {
            obj['password'] = mes.password;
          }
          if (mes.email) {
            obj['email'] = mes.email;
          }
        });
      setError({ ...obj });
    }
  }, [errorTs]);

  const routoToPage = (arg) => {
    dispatch(reset())
    history.push(`/${arg}`);
  };
  const login = () => {
    dispatch(loginRequest({ email, password }));
  };

  return (
    <div style={{ 'justify-content': 'center', 'align-items': 'center' }}>
      <TopContainer height="30em" />
      <Header />
      <FormComponent>
        <div className={formText}>Login</div>
        <div className={formContentWrap}>
          <div className={inputWrap}>
            <div>Email address</div>
            <input
              type="email"
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
              defaultValue={email}
              className={
                error.password || error.email
                  ? inputSingleLineError
                  : inputSingleLine
              }
            />
          </div>
          <div className={inputWrap}>
            <div>
              Password{' '}
              <span
                className={formInnerText}
                onClick={() => routoToPage('forgot-password')}>
                Forgot your password?
              </span>
            </div>
            <input
              type="password"
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
              defaultValue={password}
              className={
                error.password || error.email
                  ? inputSingleLineError
                  : inputSingleLine
              }
            />
            <ErrorMessageContainer
              error={
                error.email ? error.email : error.password ? error.password : ''
              }
            />
          </div>
          <div style={{ padding: '2em 0px' }}>
            <ButtonComponent
              colour="white"
              width="15%"
              backColour="#43AFFF"
              style={{ margin: 'auto' }}
              onClick={() => login()}>
              <div className={buttonTextBanner}>Login</div>
            </ButtonComponent>
            <div className={informationText}>
              New to MyJobs?
              <span onClick={() => routoToPage('sign-up')}>
                {' '}
                Create an account
              </span>
            </div>
          </div>
        </div>
      </FormComponent>
    </div>
  );
};

export default LoginComponent;
