import React from 'react';
import styled from 'styled-components';

const PopupDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const PopupInnerDiv = styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  margin: auto;
  border-radius: 20px;
  background: white;
`;

const Popup = ({ children }) => {
  return (
    <PopupDiv>
      <PopupInnerDiv>{children}</PopupInnerDiv>
    </PopupDiv>
  );
};

export default Popup;
