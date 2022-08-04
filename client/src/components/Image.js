import React from 'react';
import styled from 'styled-components';
import PinkBig from '../image/design/pink-1.svg';
import YellowSmall from '../image/design/yellow-1.svg';
import YellowSlice from '../image/design/yellow-3.svg';
import Cloud7 from '../image/design/cloud-7.svg';
import CloudBig from '../image/design/cloud-big.svg'
import Cloud1 from '../image/design/cloud-1.svg';

export const StyledImage = styled.img`
  position: absolute;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  z-index: ${(props) => props.index || '20'};

  @media (max-width: 700px) {
    display: ${(props) => props.display || 'block'};
  }
  @media (max-width: 1358px) {
    display: ${(props) => props.display || 'block'};
  }
`;

function Image() {
  return (
    <>
      <StyledImage src={YellowSmall} alt="Yellow small" top={'2%'} display={'none'}/>
      <StyledImage
        src={YellowSlice}
        alt="Yellow slice"
        top={'90%'}
        right={'0'}
      />
      <StyledImage src={PinkBig} alt="Pink big" top={'84%'} display={'none'}/>
      <StyledImage src={Cloud7} alt="Cloud7" top={'11%'} display={'none'}/>
      <StyledImage src={Cloud1} alt="Cloud1" top={'29%'} display={'none'}/>
      <StyledImage src={CloudBig} alt="CloudBig" top={'54%'} left={'9%'} index={'-1'}/>
    </>
  );
}

export default Image;
