import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import {
  FormComponent,
  inputSingleLine,
  formContentWrap,
  ButtonComponent,
  inputWrap,
  buttonTextBanner,
  formText,
  buttonText,
} from '../../styles';
import TopContainer from '../../../components/TopContainer';
import { resetRequest } from '../actions';
const ResetPasswordComponent = (props) => {
  const {
    history,
    dispatch,
    resetPasswordReducer,
    match: { params },
  } = props;
  const { resetSuccess } = resetPasswordReducer;
  const { id } = params;
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [token, setToken] = useState('');
  const routoToPage = (arg) => {
    history.push(`/${arg}`);
  };
  const resetPassword = () => {
    dispatch(resetRequest({ password, confirmPassword, token }));
  };
  useEffect(() => {
    setToken(id);
  }, []);
  return (
    <div style={{ 'justify-content': 'center', 'align-items': 'center' }}>
      <TopContainer height="30em" />
      <Header>
        <ButtonComponent
          backColour="rgba(67,175,255,0.1)"
          colour="white"
          float="right"
          onClick={() => routoToPage('login')}>
          <div className={buttonText}>Login/Sign Up</div>
        </ButtonComponent>
      </Header>
      <FormComponent>
        <div className={formText}>Reset Your Password</div>
        <div className={formContentWrap}>
          <div className={inputWrap}>
            <div style={{ margin: '1em 0' }}>
              Enter your new password below.
            </div>
          </div>
          <div className={inputWrap}>
            <div>New password</div>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              defaultValue={password}
              className={inputSingleLine}
            />
          </div>
          <div className={inputWrap}>
            <div>Confirm new password </div>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              defaultValue={confirmPassword}
              className={inputSingleLine}
            />
          </div>
          <div style={{ padding: '2em 0px' }}>
            <ButtonComponent
              colour="white"
              width="15%"
              backColour="#43AFFF"
              style={{ margin: 'auto' }}
              onClick={() => resetPassword()}>
              <div className={buttonTextBanner}>Reset</div>
            </ButtonComponent>
          </div>
        </div>
      </FormComponent>
    </div>
  );
};

export default ResetPasswordComponent;
