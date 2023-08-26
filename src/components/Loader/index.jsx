import React from 'react';
import { RingLoader } from 'react-spinners';
import { styled } from 'styled-components';

const LoaderContainer = styled.div`
  position: absolute;
  left: 45%;
  top: 50%;
  transform: translateY(-50%);
  @media (max-width: 512px){
    left: 40%;
  }
`

const Loader = () => {
  return (
    <LoaderContainer className="loader-container">
      <RingLoader color="#007bff" />
    </LoaderContainer>
  );
};

export default Loader;