import { css } from 'emotion';
import styled from '@emotion/styled';

export const commonBackImgInner = css`
  width: 100%;
  height: 20em;
  position: absolute;
  z-index: -1;
  top: -5px;
`;
export const CommonBackImg = styled.div((props) => ({
  width: '100%',
  height: props.height ? props.height : '36em',
  position: 'absolute',
  'z-index': '-1',
}));
// export const CardComponent= styled.div(props => ({
//   background: 'white',
//   width: `${props.width}%`,
//   height: '180px',
//   margin: props.index%4==0?'0':'0 0px 48px 24px',
//   'box-shadow': '0px 3px 10px -3px rgba(67,175,255, 0.3)',
//   'border-radius': '8px',
//   p:{
//   	color:'#43AFFF',
//   }
// }))
export const CardComponent = styled.div((props) => ({
  background: 'white',
  width: props.width ? props.width : '280px',
  'box-shadow': '0px 3px 10px -3px rgba(67,175,255,0.3)',
  'border-radius': '8px',
  margin: '0 20px 30px 0%',
  height: '174px',
}));
export const ButtonComponent = styled.div((props) => ({
  float: props.float ? props.float : '',
  border: '1px solid rgba(67,175,255)',
  background: props.backColour ? props.backColour : 'rgba(67,175,255,0.1)',
  'border-radius': '5px',
  color: props.colour,
  'font-size': 'medium',
  padding: '0em 2em 1em 2em',
  bottom: '5px',
  height: '25px',
  position: 'relative',
  cursor: 'pointer',
  margin: 'auto',
  width: props.width ? props.width : '',
  'margin-top': props.top ? props.top : '',
}));
export const ButtonCardComponent = styled.button((props) => ({
  background: 'rgba(67,175,255,0.2)',
  border: '1px rgba(67,175,255)',
  'border-radius': '3px',
  'font-size': '13px',
  cursor: 'pointer',
  float: 'right',
  height: '34px',
  width: props.width ? props.width : '76px',
}));
export const FormComponent = styled.div((props) => ({
  width: props.width ? props.width : '30%',
  height: props.height ? props.height : '',
  background: 'white',
  'border-radius': '5px',
  position: 'relative',
  margin: 'auto',
  'margin-top': '10%',
  'box-sizing': 'border-box',
  padding: '1.5%',
  'box-shadow': '0px 3px 10px -3px rgba(67,175,255, 0.3)',
  'border-radius': '8px',
}));
export const BreadCrumb = styled.div((props) => ({
  width: '75%',
  margin: 'auto',
  'margin-top': '1em',
  color: 'white',
  a: {
    cursor: 'pointer',
  },
}));
const commonInputSingleLine = `width: -webkit-fill-available;
  height: 1em;
  background: #FAFAFA;
  border: 1px solid lightgray;
  position: relative;
  margin: auto;
  border-radius:5px;
  padding:16px;
  font-size:14px;
  margin:2% 0;
  font-weight: 100;
  &:hover {
    border: 1px solid #43AFFF  !important;
  }
  &:hover {
    border: 1px solid #43AFFF  !important;
  }`;
export const inputSingleLine = css`
  ${commonInputSingleLine}
`;
export const inputSingleLineError = css`
  ${commonInputSingleLine};
  border: 1px solid red;
`;
export const formText = css`
  margin: auto;
  font-weight: 400;
  color: #303f60;
  font-size: 20px;
  position: relative;
  span {
    color: #43afff;
  }
`;
export const buttonText = css`
  position: relative;
  margin: 11px 0px;
`;
export const formContentWrap = css`
  margin-top: 5%;
`;
export const inputWrap = css`
  font-weight: 300;
  color: black;
  font-size: 13px;
  display: flex;
  flex-direction: column;
`;
export const buttonTextBanner = css`
  position: relative;
  margin: auto;
  width: fit-content;
  font-weight: 300;
  font-size: 16px;
  top: 35%;
`;

export const underLineBorder = css`
  border-bottom: 5px solid #43afff;
  width: 35%;
  margin-left: 4%;
  margin-top: 7%;
`;
const commonErrorText = css`
  font-size: 11px;
  position: relative;
  float: right;
  color: red;
  height: 14px;
`;
export const errorText = css`
  ${commonErrorText};
`;

// export const errorTextName= css`
//   ${commonErrorText};
//   top: -0.5em;
// `
