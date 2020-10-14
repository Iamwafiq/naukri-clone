import React, { useState, useEffect } from 'react';
import { CardComponent } from '../../styles';
import {
  dashboardContentSection,
  parentApplicantCards,
  dashboardContentText,
  dashboardInnerText,
  cardInfo,
  innerHead,
  modalWrapper,
  modalInfoText,
  paginationWrapper,
  modalTitle,
  listContent,
  paginate,
  noDataAvailable,
  buttonTextBanner,
  noDataText,
  closeBttn,
  parentCards,
} from './style';
import {
  menuContainer,
  menuText,
  avatar,
  underLineBorder,
  menuTextDash,
  ButtonComponent,
} from '../../styles';
import Header from '../../../components/Header';
import BreadCrumb from '../../../components/BreadCrumb';
import CardInnerComponent from '../../../components/CardInnerComponent';
import Modal from '../../../components/Modal';
import noData from '../../../images/no-data.png';
import noApplication from '../../../images/no-application.png';
import ApplicantCard from '../../../components/ApplicantCard';
import Profile from '../../../components/Profile';
import { applyJob, getJobs, getApplicants } from '../actions';

const DashboardComponent = (props) => {
  const { history, changePage, dashboardReducer, role, dispatch } = props;
  const {
    totalPages,
    totalJobs,
    totalPostedJobs,
    jobApplied,
    totalJobCount,
    applicantList,
    loading,
  } = dashboardReducer;
  const [localData, setLocalData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [jobId, setJobId] = useState('');

  useEffect(() => {
    if (jobApplied) {
      dispatch(getJobs());
    }
  }, [jobApplied]);

  useEffect(() => {
    if (showModal) {
      dispatch(getApplicants({ jobId }));
    }
  }, [showModal]);
  useEffect(() => {
    if (role === '0') {
      setLocalData(totalJobs);
    } else if (role === '1') {
      setLocalData(totalJobs);
    }
  }, [totalJobs]);
  const routeToPage = (arg) => {
    history.push(`/${arg}`);
  };
  const cardButtonEvent = (arg) => {
    if (role === '0') {
      setShowModal(true);
      setJobId(arg);
    } else if (role === '1') {
      dispatch(applyJob({ jobId: arg }));
    }
  };
  return (
    <div>
      <Header>
        <Profile role={role} mainPage={true} history={history} />
      </Header>
      <BreadCrumb parent="Home" parentLink="dashboard" />
      <div
        className={dashboardContentSection}
        style={{ display: 'flex', 'flex-wrap': 'wrap' }}>
        <div className={innerHead}>Jobs for you</div>
        {!localData.length && role == '0' && !loading ? (
          <div>
            <div className={noDataAvailable}>
              <img
                src={noData}
                style={{ 'margin-left': '2em', width: 'fit-content' }}
              />
              <div className={noDataText}>Your Posted Jobs will Show here.</div>
              <ButtonComponent
                colour="white"
                width="53%"
                backColour="#43AFFF"
                onClick={() => routeToPage('post-job')}
                style={{ margin: '2em 0em', width: 'fit-content' }}>
                <div className={buttonTextBanner}>Post a Job</div>
              </ButtonComponent>
            </div>
          </div>
        ) : (
          ''
        )}
        <div className={parentCards}>
          {localData &&
            localData.map((data, index) => (
              <CardInnerComponent
                index={index}
                id={data.id}
                headText={data.title}
                description={data.description}
                location={data.location}
                role={role}
                onClick={cardButtonEvent}
                setShowModal={setShowModal}
              />
            ))}
        </div>
      </div>
      {showModal ? (
        <Modal>
          <div className={modalWrapper}>
            <div>
              <p className={modalTitle}>
                Applicants for this Job
                <span className={closeBttn} onClick={() => setShowModal(false)}>
                  <b>x</b>
                </span>
              </p>
              <p className={modalInfoText}>
                {applicantList && applicantList.length
                  ? applicantList.length
                  : 0}{' '}
                applicants
              </p>
            </div>
            <div className={listContent}>
              {applicantList && applicantList.length ? (
                <div className={parentApplicantCards}>
                  {applicantList &&
                    applicantList.map((data) => {
                      return (
                        <ApplicantCard
                          name={data.name}
                          skills={data.skills}
                          email={data.email}
                        />
                      );
                    })}
                </div>
              ) : (
                <div className={noDataAvailable} style={{ margin: '20% 45%' }}>
                  <img src={noApplication} />
                  <div className={noDataText}>No applications available.</div>
                </div>
              )}
            </div>
          </div>
          }
        </Modal>
      ) : (
        ''
      )}
    </div>
  );
};

export default DashboardComponent;
