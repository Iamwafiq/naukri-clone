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
  inputSingleLineError,
} from '../../styles';
import {
  inputWrapper,
  informationText,
  userTypeContainer,
  userType1,
  userType2,
} from './style';
import TopContainer from '../../../components/TopContainer';
import ErrorMessageContainer from '../../../components/ErrorMessage';
import { signUpRequest } from '../actions';

const SignUpComponent = (props) => {
  const { history, dispatch, signUpReducer } = props;
  const { signedUp, message, errorTs } = signUpReducer;
  const [userRole, setUserRole] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [skills, setSkills] = useState('');
  const [localTimeStamp, setLocalTimeStamp] = useState('');
  const [error, setError] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    skills: '',
    name: '',
  });

  const routoToPage = (arg) => {
    history.push(`/${arg}`);
  };
  useEffect(() => {
    if (errorTs !== localTimeStamp) {
      setLocalTimeStamp(errorTs);
      const obj = {};
      message &&
        message.map((mes) => {
          if (mes.email) {
            obj['email'] = mes.email;
          }
          if (mes.password) {
            obj['password'] = mes.password;
          }
          if (mes.confirmPassword) {
            obj['confirmPassword'] = mes.confirmPassword;
          }
          if (mes.skills) {
            obj['skills'] = mes.skills;
          }
          if (mes.name) {
            obj['name'] = mes.name;
          }
        });
      setError({ ...obj });
    }
  }, [errorTs]);

  const signUp = () => {
    const obj = {
      userRole,
      name,
      email,
      password,
      confirmPassword,
      skills,
    };
    setError(false);
    dispatch(signUpRequest(obj));
  };

  useEffect(() => {
    if (signedUp) {
      window.location.assign('/dashboard');
    }
  }, [signedUp]);
  return (
    <div style={{ 'justify-content': 'center', 'align-items': 'center' }}>
      <Header />
      <FormComponent width="40%">
        <div className={formText}>Signup</div>
        <div className={formContentWrap}>
          <div className={inputWrap}>
            <div>I'm a*</div>
            <div className={userTypeContainer}>
              <div
                className={userRole === 0 ? userType1 : userType2}
                onClick={() => setUserRole(0)}>
                <span>Recruiter</span>
              </div>
              <div
                className={userRole === 1 ? userType1 : userType2}
                style={{ 'margin-left': '10%' }}
                onClick={() => setUserRole(1)}>
                <span>Candidate</span>
              </div>
            </div>
          </div>
          <div className={inputWrap}>
            <div>First Name*</div>
            <input
              type="text"
              placeholder="Enter your first name"
              onChange={(e) => setName(e.target.value)}
              defaultValue={name}
              className={error.name ? inputSingleLineError : inputSingleLine}
            />
            <ErrorMessageContainer error={error.name} type="name" />
          </div>
          <div className={inputWrap}>
            <div>Email Address* </div>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              defaultValue={email}
              className={error.email ? inputSingleLineError : inputSingleLine}
            />
            <ErrorMessageContainer error={error.email} />
          </div>
          <div className={inputWrapper}>
            <div className={inputWrap} style={{ width: '48%' }}>
              <div>Create Password* </div>
              <input
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                defaultValue={password}
                className={
                  error.password ? inputSingleLineError : inputSingleLine
                }
              />
              <ErrorMessageContainer error={error.password} />
            </div>
            <div
              className={inputWrap}
              style={{ width: '48%', 'margin-left': '5%' }}>
              <div>Confirm Password* </div>
              <input
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                defaultValue={confirmPassword}
                className={
                  error.confirmPassword ? inputSingleLineError : inputSingleLine
                }
              />
              <ErrorMessageContainer error={error.confirmPassword} />
            </div>
          </div>
          <div className={inputWrap}>
            <div style={{ 'margin-top': '1%' }}>Skills </div>
            <input
              type="text"
              placeholder="Enter comma seperated skills"
              onChange={(e) => setSkills(e.target.value)}
              defaultValue={skills}
              className={error.skills ? inputSingleLineError : inputSingleLine}
            />
            <ErrorMessageContainer error={error.skills} />
          </div>
          <div style={{ padding: '2em 0px' }}>
            <ButtonComponent
              colour="white"
              width="15%"
              backColour="#43AFFF"
              style={{ margin: 'auto' }}
              onClick={() => signUp()}>
              <div className={buttonTextBanner}>Signup</div>
            </ButtonComponent>
            <div className={informationText}>
              Have an account?
              <span onClick={() => routoToPage('login')}> Login</span>
            </div>
          </div>
        </div>
      </FormComponent>
    </div>
  );
};

export default SignUpComponent;
