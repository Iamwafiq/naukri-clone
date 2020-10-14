import React from 'react';
import { CardComponent, ButtonCardComponent } from '../../routes/styles';
import {
  dashboardContentText,
  skillTitle,
  dashboardInnerText,
  dashboardInnerContainer,
  cardInnerButton,
  cardLocation,
  applicantDetail,
  avatar,
  applicantCardWarpper,
} from './style';
const ApplicantCard = (props) => {
  const { name, skills, email } = props;

  return (
    <CardComponent width="47%">
      <div className={applicantCardWarpper}>
        <div className={dashboardContentText} style={{ display: 'flex' }}>
          <span className={avatar}>{name.charAt(0).toUpperCase()}</span>
          <span className={applicantDetail}>
            <div>{name}</div>
            <div style={{ 'font-size': '16px' }}>{email}</div>
          </span>
        </div>
        <div>
          <div className={skillTitle}>Skills</div>
          <div className={dashboardInnerText}>{skills}</div>
        </div>
      </div>
    </CardComponent>
  );
};

export default ApplicantCard;
