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
import { submitMail } from '../actions';

const ForgotPasswordComponent = (props) => {
  const { history, dispatch, forgotPasswordReducer } = props;
  const { mailSent } = forgotPasswordReducer;
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const routoToPage = (arg) => {
    history.push(`/${arg}`);
  };
  const getEmailToken = () => {
    dispatch(submitMail({ email }));
  };
  useEffect(() => {
    if (mailSent) {
      routoToPage('reset-password');
    }
  }, [mailSent]);
  return (
    <div style={{ 'justify-content': 'center', 'align-items': 'center' }}>
      {/*<TopContainer height="30em"/>*/}
      <Header>
        <ButtonComponent
          colour="white"
          float="right"
          margin-top=""
          onClick={() => routoToPage('login')}>
          <div className={buttonText}>Login/Sign Up</div>
        </ButtonComponent>
      </Header>
      <FormComponent>
        <div className={formText}>Forgot your Password?</div>
        <div className={formContentWrap}>
          <div className={inputWrap}>
            <div style={{ margin: '1em 0' }}>
              Email the email associated with your account and we'll send you
              intructions to reset your password.
            </div>
          </div>
          <div className={inputWrap}>
            <div for="email">Email address</div>
            <input
              id="id"
              type="email"
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
              defaultValue={email}
              className={inputSingleLine}
              placeholder="Enter your email"
            />
          </div>
          <ButtonComponent
            colour="white"
            top="1em"
            width="15%"
            backColour="#43AFFF"
            style={{ padding: '0em 2em 1em' }}
            onClick={() => getEmailToken()}>
            <div className={buttonTextBanner}>Submit</div>
          </ButtonComponent>
        </div>
      </FormComponent>
    </div>
  );
};

export default ForgotPasswordComponent;
