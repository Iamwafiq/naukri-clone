import { css } from 'emotion';
import styled from '@emotion/styled';

export const landingHeadingText = css`
  font-size: 4em;
  padding-top: 2em;
  color: white;
  font-weight: 400;
  width: 30%;
  span {
    color: #43afff;
  }
`;
export const landingContentSection = css`
  width: 80%;
  margin: auto;
  margin-top: 3em;
`;
export const landingHeadingSection = css`
  display: flex;
`;
export const landingPageImg = css`
  margin: 2em 0 0 0;
  border-radius: 25px;
  height: 28em;
  float: right;
  width: 70%;
`;
export const landingHeadingImg = css`
  width: 65%;
  position: relative;
`;
export const landingPageFlex = css`
  display: flex;
  flex-wrap: wrap;
`;
export const landingPageContentText = css`
  font-size: 24px;
  color: #43afff;
`;
export const content = css`
  margin-top: 5%;
`;
export const moreContentImage = css`
  height: 120px;
  width: 18%;
  margin: 5px 19px 25px 5px;
`;
export const buttonTextBanner = css`
  position: relative;
  margin: auto;
  width: fit-content;
  font-size: 16px;
  top: 35%;
  font-weight: 300;
`;
export const landingPageContentTitle = css`
  font-size: 24px;
  color: black;
`;
export const landingPageInnerText = css`
  font-size: 16px;
  color: #a4abb9;
`;
export const CardComponent = styled.div((props) => ({
  background: 'white',
  width: '344px',
  'box-shadow': '0px 3px 10px -3px rgba(67,175,255,0.3)',
  'border-radius': '8px',
  margin: '0 20px 30px 0%',
  height: '174px',
  padding: '12px',
}));
