import React from 'react';
import { errorText } from '../../routes/styles';
const ErrorMessageContainer = (props) => {
  const { error, type } = props;
  return (
    <div>
      <span className={errorText}>{error}</span>
    </div>
  );
};

export default ErrorMessageContainer;
