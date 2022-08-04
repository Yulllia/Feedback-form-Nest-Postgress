import React from 'react';

import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 5000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSpinner = styled.div`
  width: 64px;
  height: 64px;
  border: 8px solid;
  border-color: #00cc66 transparent #00cc66 transparent;
  border-radius: 50%;
  animation: spin 1.2s linear infinite;
`;

function Spinner() {
  return (
    <StyledContainer>
      <StyledSpinner/>
    </StyledContainer>
  );
}

export default Spinner;
