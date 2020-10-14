import React from 'react';

const Modal = (props) => {
  return (
    <div
      onClick={(e) => {
        if (e.target.id === 'outside') {
        }
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, .5)',
        zIndex: 1,
      }}
      id="outside">
      {props && props.children}
    </div>
  );
};
export default Modal;
