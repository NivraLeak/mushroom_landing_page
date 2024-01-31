import React, { useRef } from 'react'
import styled, { keyframes } from "styled-components";

import imgAmvp from '../../assets/newStrains/Amvp.png';
import imgAverys from '../../assets/newStrains/averys.png';
import imgGandalf from '../../assets/newStrains/gandalf.png';
import imgGandalfF1 from '../../assets/strains/strainsOpt/gandalfFlush.jpg';
import imgMelmacThransaker from '../../assets/newStrains/melmac-thransaker.png';

const Section = styled.section`
  min-height: 100vh;
  background-color: ${props => props.theme.text};
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  overflow: hidden;
  
  &>*:first-child{
    animation-duration: 20s;
    @media(max-width: 30em) {
    animation-duration: 15s;
    }
  }
  &>*:last-child{
    animation-duration: 20s;
    @media(max-width: 30em) {
      animation-duration: 10s;
    }
  }
`;
const move = keyframes`
  0% {
    transform: translate(5%);
  }
  100% {
    transform: translate(-5%);
  }
`;
const Row = styled.div`
  margin-top: 2rem;
  //background-color: lightblue;
  white-space: nowrap;
  box-sizing: content-box;
  display: flex;
  
  animation: ${move} alternate-reverse infinite ${props => props.direction};
  overflow: revert;
`;
const ImgContainer = styled.div`
  display: inline-block;
  block-size: fit-content;
  
  width: 18rem;
  margin: 0 1rem;
  height: 35rem;

  border-radius: 20px;
  cursor: pointer;
  @media(max-width: 48em) {
    width: 12rem;
    height: 20rem;
  }
  @media(max-width: 30em) {
    width: 15rem;
    height: 28rem;
  }
  
  img{
    block-size: fit-content;
    border: 1px solid ${props => `rgba(${props.theme.bodyRgba},0.4)`};
    border-radius: 20px 20px 10px 10px;
    width: 99%;
    height: 65.5%;
    object-fit: cover;
  }
`;
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${props => props.theme.text};
  border: 3px solid ${props => `rgba(${props.theme.bodyRgba},0.4)`};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  font-family: 'Akaya Telivigala', cursive;

  h1 {
    font-size: ${props => props.theme.fontmd};
    color: ${props => props.theme.body};
    font-weight: normal;

    @media (max-width: 48em) {
      font-size: ${props => props.theme.fontsm};
    }
    @media (max-width: 30em) {
      font-size: ${props => props.theme.fontxss};
    }
  }

  @media (max-width: 30em) {
    padding: 1rem;
  }

`;
const Title = styled.h2`
  font-size: ${props => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${props => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${props => props.theme.body};
  width: fit-content;
      @media (max-width: 40em){
        font-size: ${(props) => props.theme.fontxl};
  }
`
const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  background-color: ${props => props.theme.text};
  border: 3px solid ${props => `rgba(${props.theme.bodyRgba},0.4)`};
  border-radius: 10px;
  font-family: 'Akaya Telivigala', cursive;

  h1 {
    font-size: ${props => props.theme.fontxl};
    color: ${props => props.theme.body};
    font-weight: normal;

    @media (max-width: 48em) {
      font-size: ${props => props.theme.fontmd};
    }
    @media (max-width: 30em) {
      font-size: ${props => props.theme.fontmd};
    }
  }
`

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NftItem = ({ img, passRef, number = 0, priceVial = 0, pricePlacaColonizado, pricePlacaInoculado, priceGranoColonizado, priceKit, nameStrain, disponibleKitAutomatico = 'No disponible' }) => {
  let play = (e) => {
    passRef.current.style.animationPlayState = 'running';
  }

  let pause = (e) => {
    passRef.current.style.animationPlayState = 'paused';
  }
  return (
    <ImgContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e)}  >
      <img src={img} alt="The weirdos" loading="lazy" />
      <NameContainer>
        <h1>{nameStrain}</h1>
      </NameContainer>
      <Details>
        <div>
          <h1>Vial ( 5ml ) </h1>
          <h1>Placa colonizado </h1>
          <h1>Placa inoculado</h1>
          <h1>Grano Colonizado ( 1L )</h1>
          <h1>Kit manual</h1>
          <h1>Kit automatico</h1>
        </div>

        <div>
          <h1>S/ {Number(priceVial).toFixed(1)}</h1>
          <h1>S/ {Number(pricePlacaColonizado).toFixed(1)}</h1>
          <h1>S/ {Number(pricePlacaInoculado).toFixed(1)}</h1>
          <h1>S/ {Number(priceGranoColonizado).toFixed(1)}</h1>
          <h1>S/ {Number(priceKit).toFixed(1)}</h1>
          <h1>{disponibleKitAutomatico}</h1>
        </div>
      </Details>
    </ImgContainer>
  )
}

const ShowCase = () => {
  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  return (
    <Section id="showcase">
      <Title> Especies disponibles </Title>
      <Row direction="none" ref={Row1Ref}>
        <NftItem nameStrain={"Gandalf F1"} passRef={Row2Ref} img={imgGandalfF1} number={1231} priceVial={30} priceKit={120} priceGranoColonizado={60} pricePlacaColonizado={50} pricePlacaInoculado={30} />
        <NftItem nameStrain={"Amvp"} passRef={Row1Ref} img={imgAmvp} number={1231} priceVial={30} priceKit={100} priceGranoColonizado={60} pricePlacaColonizado={50} pricePlacaInoculado={30} />
        <NftItem nameStrain={"Averys Albino"} passRef={Row1Ref} img={imgAverys} number={1231} priceVial={30} priceKit={120} priceGranoColonizado={60} pricePlacaColonizado={50} pricePlacaInoculado={30} />
        <NftItem nameStrain={"Melmac Thransaker"} passRef={Row1Ref} img={imgMelmacThransaker} number={1231} priceVial={30} priceKit={100} priceGranoColonizado={60} pricePlacaColonizado={50} pricePlacaInoculado={30} />
        <NftItem nameStrain={"Gandalf F4"} disponibleKitAutomatico='S/ 100.0' passRef={Row2Ref} img={imgGandalf} number={1231} priceVial={30} priceKit={120} priceGranoColonizado={60} pricePlacaColonizado={50} pricePlacaInoculado={30} />
      </Row>
      {
        /*
        <Row direction="reverse" ref={Row2Ref}>
         </Row>
        * */
      }
    </Section>
  )
}

export default ShowCase
