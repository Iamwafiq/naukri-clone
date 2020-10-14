import React from 'react';
import { breadCrumb } from './style';

const BreadCrumb = (props) => {
  const { parent, levelOne, levelOneLink, parentLink } = props;
  const routoToPage = () => {};
  return (
    <div className={breadCrumb}>
      <a style={{ 'text-decoration': 'none' }} href={`/${parentLink}`}>
        {parent}
      </a>
      {levelOne ? <span> > </span> : ''}
      <a style={{ 'text-decoration': 'none' }} href={`/${levelOneLink}`}>
        {levelOne}
      </a>
    </div>
  );
};
export default BreadCrumb;
