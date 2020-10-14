import React from 'react';
import { CardComponent } from '../../styles';
import {
  dashboardContentSection,
  dashboardContentText,
  dashboardInnerText,
  cardInfo,
  innerHead,
} from './style';
import { menuContainer, menuText, avatar, underLineBorder } from '../../styles';
import Header from '../../../components/Header';
import BreadCrumb from '../../../components/BreadCrumb';
import CardInnerComponent from '../../../components/CardInnerComponent';
import Profile from '../../../components/Profile';
const AppliedJobsComponent = (props) => {
  const { history, appliedJobsReducer } = props;
  const { totalJobs } = appliedJobsReducer;
  return (
    <div>
      <div>
        <Header>
          <Profile role="1" />
        </Header>
        <BreadCrumb
          parent="Home"
          parentLink="dashboard"
          levelOne="Applied Jobs"
          levelOneLink="applied-jobs"
        />
        <div
          className={dashboardContentSection}
          style={{ display: 'flex', 'flex-wrap': 'wrap' }}>
          <div className={innerHead}>Jobs Applied By You</div>
          {totalJobs &&
            totalJobs.map((data, index) => (
              <CardInnerComponent
                headText={data.title}
                description={data.description}
                location={data.location}
                index={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsComponent;
