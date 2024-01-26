import React from 'react'
import styled, { ThemeProvider } from "styled-components";
import Carousel from "./Carousel";
import Button from "../Button";
import { dark } from '../../styles/Themes';

import videoSource from '../../assets/kitsautomatico/instasave.mp4';


const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  //background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 70em){
    width: 85%;
  }
  @media (max-width: 64em){
    width: 100%;
    flex-direction: column;

    &>*:last-child{
      width: 80%;
    }
  }
  @media (max-width: 40em){
    &>*:last-child{
      width: 90%;
    }
  }
`

const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
  min-height: 60vh;
flex-direction: column;
justify-content: center;
align-items: center;
  
  @media (max-width: 40em){
    min-height: 25vh;
  }
  
`
const Title = styled.h2`
  font-size: ${props => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${props => props.theme.body};
  align-self:flex-start;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 64em){
    width: 100%;
    text-align: center;
  }
  @media (max-width: 40em){
    font-size: ${props => props.theme.fontxl};
  }
  @media (max-width: 30em){
    font-size: ${props => props.theme.fontlg};
  }
`

const SubText = styled.p`
  font-size: ${props => props.theme.fontlg};
  color: ${props => `rgba(${props.theme.bodyRgba},0.75)`};
  align-self:flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em){
    width: 100%;
    text-align: center;
    font-size: ${props => props.theme.fontmd};
  }
  @media (max-width: 40em){
    font-size: ${props => props.theme.fontmd};
  }
  @media (max-width: 30em){
    font-size: ${props => props.theme.fontmd};
  }
`

const SubTextLight = styled.p`
  font-size: ${props => props.theme.fontsm};
  color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
  align-self:flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em){
    width: 100%;
    text-align: center;
    font-size: ${props => props.theme.fontsm};
  }
  @media (max-width: 40em){
    font-size: ${props => props.theme.fontsm};
  }
  @media (max-width: 30em){
    font-size: ${props => props.theme.fontxs};
  }
`
const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  align-self: flex-start;

  @media (max-width: 64em){
    width: 100%;
    align-items: center;
    justify-content: center;
    button{
      margin: 0 auto;
    }
  }
`
const VideoContainer = styled.div`
  width: 85%;
  padding: 0.5rem;
  align-content: center;
  justify-content: center;
  display: flex;
  border-radius: 70px;
    video{
      width: 70%;
      height: auto;
      border-radius: 65px;
      border: 0.1px solid ${props => props.theme.text};

      @media (max-width: 64em) {
        width: 80%;
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


const About = () => {
  return (
    <Section id="about">
      <Container>
        {
          /*
          <Box> <Carousel/> </Box>
          
          */
        }
        <Box>
          <VideoContainer>
            <video controls src={videoSource} >
            </video>
          </VideoContainer>
        </Box>
        <Box>
          <Title>
            Kit Automatico
          </Title>
          <SubText>
            Si eres nuevo, te recomendamos adquirir un <b>kit automatico</b> de esta forma aseguras una cosecha y podras aprender sobre los cuidados de la ultima fase de los honguitos.
          </SubText>
          <SubTextLight>
            Mushi Peru tiene como objetivo facilitar el proceso de cultivo con especies y kits automaticos. <br />
          </SubTextLight>
          <ButtonContainer>
            <ThemeProvider theme={dark}>
              <Button text="Comunidad Instagram" link="https://www.instagram.com/mushi_peru?igsh=NGd5djh3Y28xZjhy&utm_source=qr" />
            </ThemeProvider>
          </ButtonContainer>

        </Box>
      </Container>
    </Section>
  )
}

export default About
