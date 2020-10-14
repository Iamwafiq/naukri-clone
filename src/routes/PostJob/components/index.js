import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import BreadCrumb from '../../../components/BreadCrumb';
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
  dropDown,
  menuContainer,
  menuText,
  avatar,
  underLineBorder,
} from '../../styles';
import { textAreaSingle, textAreaSingleError } from './style';
import TopContainer from '../../../components/TopContainer';
import { postJobRequest } from '../actions';
import ErrorMessageContainer from '../../../components/ErrorMessage';
import Profile from '../../../components/Profile';
const PostJobComponent = (props) => {
  const { history, dispatch, postJobReducer } = props;
  const { jobPosted, message, errorTs } = postJobReducer;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [localTimeStamp, setLocalTimeStamp] = useState('');
  const [error, setError] = useState({
    title: '',
    description: '',
    location: '',
  });
  const routoToPage = (arg) => {
    window.location.assign(`/${arg}`);
  };
  const postJob = () => {
    dispatch(postJobRequest({ title, description, location }));
  };
  useEffect(() => {
    if (jobPosted) {
      window.location.assign('/dashboard');
    }
  }, [jobPosted]);

  useEffect(() => {
    if (errorTs !== localTimeStamp) {
      setLocalTimeStamp(errorTs);
      const obj = {};
      message &&
        message.map((mes) => {
          if (mes.title) {
            obj['title'] = mes.title;
          }
          if (mes.description) {
            obj['description'] = mes.description;
          }
          if (mes.location) {
            obj['location'] = mes.location;
          }
        });
      setError({ ...obj });
    }
  }, [errorTs]);

  return (
    <div style={{ 'justify-content': 'center', 'align-items': 'center' }}>
      <TopContainer height="30em" />
      <Header>
        <Profile role="0" />
      </Header>
      <BreadCrumb
        parent="Home"
        levelOne="Post a Job"
        levelOneLink="post-job"
        parentLink="dashboard"
      />
      <FormComponent style={{ 'padding-bottom': '0.5em' }}>
        <div className={formText}>Post A Job</div>
        <div className={formContentWrap}>
          <div className={inputWrap}>
            <div>Job Title*</div>
            <input
              type="text"
              placeholder="Enter job title"
              onChange={(e) => setTitle(e.target.value)}
              defaultValue={title}
              className={error.title ? inputSingleLineError : inputSingleLine}
            />
            <ErrorMessageContainer error={error.title} />
          </div>
          <div className={inputWrap}>
            <div>Description* </div>
            <textArea
              type="text"
              placeholder="Enter job description"
              onChange={(e) => setDescription(e.target.value)}
              defaultValue={description}
              className={
                error.description ? textAreaSingleError : textAreaSingle
              }
            />
            <ErrorMessageContainer error={error.description} />
          </div>
          <div className={inputWrap}>
            <div>Location*</div>
            <input
              type="text"
              placeholder="Enter location"
              onChange={(e) => setLocation(e.target.value)}
              defaultValue={location}
              className={
                error.location ? inputSingleLineError : inputSingleLine
              }
            />
            <ErrorMessageContainer error={error.location} />
          </div>
          <ButtonComponent
            colour="white"
            width="15%"
            backColour="#43AFFF"
            style={{ margin: '2em auto 1em' }}
            onClick={() => postJob()}>
            <div className={buttonTextBanner}>Post</div>
          </ButtonComponent>
        </div>
      </FormComponent>
    </div>
  );
};

export default PostJobComponent;
