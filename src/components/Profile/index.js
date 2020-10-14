import React, { useState } from 'react';
import {
  menuContainer,
  menuText,
  avatar,
  dropDown,
  menuTextDash,
} from './style';
const Profile = (props) => {
  const { role, mainPage, history } = props;
  const [showProfile, setShowProfile] = useState(false);
  const routeToPage = () => {
    if (mainPage) {
      if (role == '0') {
        history.push(`/post-job`);
      } else {
        history.push(`/applied-jobs`);
      }
    }
  };
  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    setShowProfile(false);
    setTimeout(() => {
      window.location.assign('/');
    }, 1000);
  };

  return (
    <span className={menuContainer}>
      <span
        onClick={() => routeToPage()}
        className={mainPage ? menuTextDash : menuText}>
        {role == '0' ? 'Post a Job' : 'Applied Jobs'}
      </span>
      <span className={avatar} onClick={() => setShowProfile(!showProfile)}>
        {role == '0' ? 'R' : 'C'}
      </span>
      {showProfile ? (
        <div className={dropDown} onClick={() => logout()}>
          Logout
        </div>
      ) : (
        ''
      )}
    </span>
  );
};
export default Profile;
