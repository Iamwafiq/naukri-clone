import React from 'react';
import { CardComponent, ButtonCardComponent } from '../../routes/styles';
import {
  dashboardContentText,
  dashboardInnerText,
  dashboardInnerContainer,
  cardInnerButton,
  cardLocation,
  cardContentWrapper,
} from './style';
const CardInnerComponent = (props) => {
  const {
    headText,
    description,
    location,
    role,
    left,
    onClick,
    id,
    setShowModal,
    index,
    noButton,
  } = props;

  return (
    <CardComponent width="23%" index={index}>
      <div className={cardContentWrapper}>
        <div className={dashboardContentText}>{headText}</div>
        <div className={dashboardInnerText}>{description}</div>
        <div className={dashboardInnerContainer}>
          <span
            className={cardLocation}
            style={{ 'font-size': '16px', padding: '2% 0' }}>
            {location}
          </span>
          {noButton?"":<ButtonCardComponent
            width={role === '0' ? '176px' : '76px'}
            left={left}
            onClick={() => onClick(id)}>
            {role === '0' ? 'View Applications' : 'Apply'}
          </ButtonCardComponent>}
        </div>
      </div>
    </CardComponent>
  );
};

export default CardInnerComponent;
