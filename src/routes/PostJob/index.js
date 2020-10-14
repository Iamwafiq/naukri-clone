import React from 'react';
import { connect } from 'react-redux';
import { postJobReducer } from './reducer';
import postJobSaga from './saga';
import PostJobComponent from './components';
import { useInjectReducer } from '../../reducers/injectReducer';
import { useInjectSaga } from '../../saga/injectSaga';

const PostJob = (props) => {
  useInjectReducer({ key: 'postJobReducer', reducer: postJobReducer });
  useInjectSaga({ key: 'postJobSaga', saga: postJobSaga });

  return (
    <div>{props.postJobReducer ? <PostJobComponent {...props} /> : ''}</div>
  );
};

function mapStateToProps(props) {
  return {
    ...props,
  };
}
export default connect(mapStateToProps)(PostJob);
