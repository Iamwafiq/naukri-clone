import React from 'react';
import { headerLayout, headerTextLogo } from './style';
const Header = (props) => (
  // const{children}=props
  <div className={headerLayout}>
    <div className={headerTextLogo}>
      <span
        onClick={() => window.location.assign('/')}
        style={{ cursor: 'pointer' }}>
        <span style={{ color: 'white' }}>My</span> Jobs
      </span>
      {props && props.children}
    </div>
  </div>
);

export default Header;
