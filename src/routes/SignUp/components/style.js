import { css } from 'emotion';

export const inputWrapper = css`
  font-weight: 300;
  color: black;
  font-size: 13px;
  display: flex;
`;
export const informationText = css`
  margin: auto;
  width: fit-content;
  top: 25px;
  position: relative;
  font-weight: 300;
  font-size: 14px;
  span {
    color: #43afff;
    cursor: pointer;
  }
`;
export const userTypeContainer = css`
  width: 60%;
  display: flex;
  padding: 2% 0px;
  height: 3.5em;
`;
const commonUserType = css`
  width: 45%;
  box-sizing: border-box;
  border: 1px solid lightgray;
  border-radius: 5px;
  cursor: pointer;
  background: #43afff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  span {
    font-size: 16px;
    font-weight: 400;
    color: white;
  }
`;
export const userType1 = css`
  ${commonUserType};
  background: #43afff;
`;
export const userType2 = css`
  ${commonUserType};
  background: #fafafa;
  span {
    color: black;
  }
`;
