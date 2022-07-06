import React from 'react';
import GIF from '../assets/strains/gandalfCultivoHome.gif';
import styled from "styled-components";

const VideoContainer = styled.div`
  width: 100%;
  padding: 0.5rem;
  align-content: center;
  justify-content: center;
  display: flex;
  
  border: 2px solid ${props => props.theme.text};
  border-radius: 70px;
    img{
      width: 100%;
      height: auto;
      border-radius: 65px;
      border: 0.1px solid ${props => props.theme.text};

      @media (max-width: 64em) {
        min-width: 40vh;
        height: auto;
        border-radius: 45px;
      }
    }

  @media (max-width: 64em) {
   min-width: 40vh;
    height: auto;
    border-radius: 55px;
  }
`

const CoverVideo = () => {
    return (
        <VideoContainer>
            <img src={GIF} type="video/gif"  alt="imgGandalf"/>
        </VideoContainer>
    );
}

export default CoverVideo;
