import React from 'react';
import background from '../../images/backgroundImage.jpeg';
import { CommonBackImg } from '../../routes/styles';

const TopContainer = () => {
  let height = '35em';
  const pathname = window.location.pathname;
  if (pathname === '/dashboard' || pathname === '/applied-jobs') {
    height = '20em';
  }
  return (
    <CommonBackImg height={height}>
      <img src={background} width="100%" height="100%" />
    </CommonBackImg>
  );
};

export default TopContainer;
