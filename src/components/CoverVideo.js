import React from 'react';
import GIF from '../assets/strains/gandalfHomeVideo.mp4';
import styled from "styled-components";

const VideoContainer = styled.div`
  width: 100%;
  
video{
  width: 100%;
  height: auto;
  border-radius: 70px;
}

  @media (max-width: 64em) {
   min-width: 40vh;
    height: auto;
  }
`

const CoverVideo = () => {
    return (
        <VideoContainer>
            <video src={GIF} type="video/mp4" autoPlay muted loop/>
        </VideoContainer>
    );
}

export default CoverVideo;
