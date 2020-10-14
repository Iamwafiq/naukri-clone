import { css } from 'emotion';

export const dropDown = css`
  background: white;
  position: absolute;
  width: 200px;
  height: 50px;
  border-radius: 6px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  right: 18px;
  top: 60px;
  color: #000;
  cursor: pointer;
`;
export const avatar = css`
  margin: -4% 5px;
  line-height: 35px;
  width: 50px;
  height: 50px;
  text-align: center;
  background: #edf6ff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const commonMenuTextDash = css`
  color: white !important;
  font-size: 20px !important;
  padding: 0px 0px 9% 0px;
`;
export const menuText = css`
  ${commonMenuTextDash};
  border-bottom: 4px solid #43afff;
`;
export const menuTextDash = css`
  ${commonMenuTextDash};
  cursor: pointer;
`;
export const menuContainer = css`
  float: right;
  width: 17%;
  cursor: default !important;
  display: flex;
  justify-content: space-around;
`;
