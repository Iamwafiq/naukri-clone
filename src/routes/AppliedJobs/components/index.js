import React from 'react';
import { CardComponent, ButtonComponent } from '../../styles';
import {
	dashboardContentSection,
	dashboardContentText,
	dashboardInnerText,
	cardInfo,
	innerHead,
	noDataText,
	noDataAvailable,
	buttonTextBanner
} from './style';
import noData from '../../../images/no-data.png';
import { menuContainer, menuText, avatar, underLineBorder } from '../../styles';
import Header from '../../../components/Header';
import BreadCrumb from '../../../components/BreadCrumb';
import CardInnerComponent from '../../../components/CardInnerComponent';
import Profile from '../../../components/Profile';
const AppliedJobsComponent = (props) => {
	const { appliedJobsReducer } = props;
	const { totalJobs, loading } = appliedJobsReducer;

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
				{!totalJobs.length && !loading?<div>
					<div className={noDataAvailable}>
						<img
							src={noData}
							style={{ 'margin-left': '2em', width: 'fit-content' }}
						/>
						<div className={noDataText}>Your Applied Jobs will Show here.</div>
						<ButtonComponent
							colour="white"
							width="53%"
							backColour="#43AFFF"
							onClick={() => window.location.assign('/dashboard')}
							style={{ margin: '2em 0em', width: 'fit-content' }}>
							<div className={buttonTextBanner}>See All Jobs</div>
						</ButtonComponent>
					</div>
				</div>:
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
								noButton={true}
							/>
						))}
				</div>}
			</div>
		</div>
	);
};

export default AppliedJobsComponent;
