import React from 'react';
import {
  landingHeadingText,
  landingContentSection,
  landingHeadingSection,
  landingPageImg,
  landingHeadingImg,
  landingPageFlex,
  landingPageContentText,
  content,
  moreContentImage,
  buttonTextBanner,
  CardComponent,
  landingPageContentTitle,
  landingPageInnerText,
} from './style';
import { ButtonComponent, buttonText } from '../../styles';
import background from '../../../images/backgroundImage.jpeg';
import landingImage from '../../../images/landing-page-image.png';
import Header from '../../../components/Header';
// import TopContainer from '../../../components/TopContainer'
const LandingPageComponent = (props) => {
  const { history } = props;
  const routoToPage = (arg) => {
    history.push(`/${arg}`);
  };
  return (
    <div>
      <Header>
        <ButtonComponent
          colour="white"
          float="right"
          margin-top=""
          onClick={() => routoToPage('login')}>
          <div className={buttonText}>Login/Sign Up</div>
        </ButtonComponent>
      </Header>
      <div className={landingContentSection}>
        <div className={landingHeadingSection}>
          <div className={landingHeadingText}>
            Welcome to <br /> My<span>Jobs</span>
            <ButtonComponent
              colour="white"
              width="24%"
              backColour="#43AFFF"
              onClick={() => routoToPage('sign-up')}
              style={{ margin: '2em 0em' }}>
              <button className={buttonTextBanner}>Get Started</button>
            </ButtonComponent>
          </div>
          <div className={landingHeadingImg}>
            <img className={landingPageImg} src={landingImage} />
          </div>
        </div>
        <div className={content}>
          <p className={landingPageContentTitle}>Why Us</p>
          <div className={landingPageFlex}>
            <CardComponent>
              <p className={landingPageContentText}>
                Get More <br /> Visibility
              </p>
              <p className={landingPageInnerText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </CardComponent>
            <CardComponent>
              <p className={landingPageContentText}>
                Organize Your
                <br /> Candidates
              </p>
              <p className={landingPageInnerText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </CardComponent>
            <CardComponent>
              <p className={landingPageContentText}>
                Verify Their
                <br /> Abilities
              </p>
              <p className={landingPageInnerText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </CardComponent>
          </div>
        </div>
        <div className={content}>
          <p className={landingPageContentTitle}>Companies Who Trust Us</p>
          <div
            className={landingPageFlex}
            style={{ 'justify-content': 'center' }}>
            <img className={moreContentImage} src={landingImage} />
            <img className={moreContentImage} src={landingImage} />
            <img className={moreContentImage} src={landingImage} />
            <img className={moreContentImage} src={landingImage} />
            <img className={moreContentImage} src={landingImage} />
            <img className={moreContentImage} src={landingImage} />
            <img className={moreContentImage} src={landingImage} />
            <img className={moreContentImage} src={landingImage} />
            <img className={moreContentImage} src={landingImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageComponent;
