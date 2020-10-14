import { css } from 'emotion';

export const textAreaSingle = css`
  width: -webkit-fill-available;
  height: 5em;
  background: #fafafa;
  border: 1px solid lightgray;
  position: relative;
  margin: auto;
  border-radius: 5px;
  padding: 10px 10px;
  font-size: 14px;
  margin: 2% 0;
  font-weight: 100;
  &:focus {
    border: 1px solid #43afff !important;
  }
  ::placeholder {
    font-family: Arial, sans-serif !important;
  }
  &:hover {
    border: 1px solid #43afff !important;
  }
`;
export const textAreaSingleError = css`
  width: -webkit-fill-available;
  height: 5em;
  background: #fafafa;
  border: 1px solid red;
  position: relative;
  margin: auto;
  border-radius: 5px;
  padding: 10px 10px;
  font-size: 14px;
  margin: 2% 0;
  font-weight: 100;
  &:focus {
    border: 1px solid #43afff !important;
  }
  ::placeholder {
    font-family: Arial, sans-serif !important;
  }
  &:hover {
    border: 1px solid #43afff !important;
  }
`;
