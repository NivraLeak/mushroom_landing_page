import React from 'react'
import styled, {ThemeProvider} from "styled-components";
import Carousel from "./Carousel";
import Button from "../Button";
import {dark} from '../../styles/Themes';

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${props=>props.theme.text};
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

const Box= styled.div`
width: 50%;
height: 100%;
display: flex;
  min-height: 60vh;
flex-direction: column;
justify-content: center;
align-items: center;
  
  @media (max-width: 40em){
    min-height: 50vh;
  }
  
`
const Title = styled.h2`
  font-size: ${props=> props.theme.fontxxl};
  text-transform: capitalize;
  color: ${props=>props.theme.body};
  align-self:flex-start;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 64em){
    width: 100%;
    text-align: center;
  }
  @media (max-width: 40em){
    font-size: ${props=> props.theme.fontxl};
  }
  @media (max-width: 30em){
    font-size: ${props=> props.theme.fontlg};
  }
`

const SubText = styled.p`
  font-size: ${props=> props.theme.fontlg};
  color: ${props => `rgba(${props.theme.bodyRgba},0.75)`};
  align-self:flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em){
    width: 100%;
    text-align: center;
    font-size: ${props=> props.theme.fontmd};
  }
  @media (max-width: 40em){
    font-size: ${props=> props.theme.fontmd};
  }
  @media (max-width: 30em){
    font-size: ${props=> props.theme.fontmd};
  }
`

const SubTextLight = styled.p`
  font-size: ${props=> props.theme.fontsm};
  color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
  align-self:flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em){
    width: 100%;
    text-align: center;
    font-size: ${props=> props.theme.fontsm};
  }
  @media (max-width: 40em){
    font-size: ${props=> props.theme.fontsm};
  }
  @media (max-width: 30em){
    font-size: ${props=> props.theme.fontxs};
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

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Box> <Carousel/> </Box>
        <Box>
            <Title>
                Bienvenidos a la comunidad<br/> Mushi genetics.
            </Title>
            <SubText>
                Puedes iniciar tu cultivo desde viales o placas si ya haz experimentado todo el proceso de cultivo. <br/>
                Si eres nuevo, te recomendamos adquirir un <b>kit de cultivo</b> de esta forma podras iniciar desde el momento que te llegue tu kit.
            </SubText>
            <SubTextLight>
                Mushi genetics fue creado para ser el primer proveedor de artefactos de cultivo indor de hongos magicos. <br/>
            </SubTextLight>
            <ButtonContainer>
                <ThemeProvider theme={dark}>
                    <Button text="Comunidad Facebook" link="#"/>
                </ThemeProvider>
            </ButtonContainer>

        </Box>
      </Container>
    </Section>
  )
}

export default About
