import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import styled from 'styled-components';
import { StyledImage } from './Image';
import YellowBig from '../image/design/yellow-2.svg';
import PinkSmall from '../image/design/pink-2.svg';
import Cloud4 from '../image/design/cloud-4.svg';
import Cloud5 from '../image/design/cloud-5.svg';
import Cloud6 from '../image/design/cloud-5.svg';
import Oval from '../image/design/ellipse-light.svg';
import CloudSmall from '../image/design/cloud-small.svg';

const StyledMap = styled.div`
  width: 975px;
  height: 975px;
  position: relative;
  left: 300px;
  top: -21px;
  max-height: calc(100% - 204px);

  .leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {
    border-radius: 50%;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

function Map() {
  return (
    <StyledMap className="leafletContainer">
      <StyledImage
        src={YellowBig}
        alt="Yellow big"
        top={'53%'}
        right={'94%'}
        index={'403'}
      />
      <StyledImage
        src={PinkSmall}
        alt="Pink small"
        top={'59%'}
        right={'80%'}
        index={'401'}
      />
      <StyledImage src={Cloud4} alt="Cloud4" top={'14%'} left={'-44%'} />
      <StyledImage src={Cloud5} alt="Cloud5" top={'12%'} left={'-7%'}/>
      <StyledImage src={Cloud6} alt="Cloud6" top={'27%'} left={'-24%'} />
      <StyledImage src={Oval} alt="Oval" top={'6%'} left={'-22%'} />
      <StyledImage src={CloudSmall} alt="Cloud3" top={'78%'} left={'-16%'} index={'-1'}/>
      <MapContainer
        style={{ height: '100%', width: '100%' }}
        center={[40.64927, -73.87312]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[40.64927, -73.87312]}>
          <Popup>
            Gateway Center
            {/* East New York, Brooklyn, 579 Gateway Dr, 11239 United States */}
          </Popup>
        </Marker>
      </MapContainer>
    </StyledMap>
  );
}

export default Map;
