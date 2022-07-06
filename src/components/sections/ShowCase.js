import React, {useRef} from 'react'
import styled, {keyframes} from "styled-components";

import img1 from '../../assets/strains/strainsOpt/B+ fondo.jpg';
import img2 from '../../assets/strains/strainsOpt/melek.jpg';
import img3 from '../../assets/strains/strainsOpt/gandalf.jpg';
import img4 from '../../assets/strains/strainsOpt/enigma.jpg';
import img5 from '../../assets/strains/strainsOpt/gandalf03.jpg';
import img6 from '../../assets/strains/strainsOpt/ThaiKohsumui.jpg';

const Section = styled.section`
  min-height: 100vh;
  background-color: ${props=>props.theme.text};
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
    transform: translate(15%);
  }
  100% {
    transform: translate(-15%);
  }
`;
const Row = styled.div`
  //background-color: lightblue;
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;
  
  animation: ${move} alternate-reverse infinite ${props=>props.direction};
  overflow: revert;
`;
const ImgContainer = styled.div`
  display: inline-block;
  block-size: fit-content;
  
  width: 15rem;
  margin: 0 1rem;
  height: 26rem;

  border-radius: 20px;
  cursor: pointer;
  @media(max-width: 48em) {
    width: 12rem;
    height: 20rem;
  }
  @media(max-width: 30em) {
    width: 10rem;
    height: 17rem;
  }
  
  img{
    block-size: fit-content;
    border: 1px solid ${props=>`rgba(${props.theme.bodyRgba},0.4)`};
    border-radius: 20px 20px 0 0;
    width: 99%;
    height: 65.5%;
    object-fit: cover;
  }
`;
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme.text};
  border: 3px solid ${props=>`rgba(${props.theme.bodyRgba},0.4)`};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  font-family: 'Akaya Telivigala', cursive;
    
  span {
    font-size: ${props => props.theme.fontsm};
    color: ${props => `rgba(${props.theme.bodyRgba},0.5)`};
    font-weight: 600;
    line-height: 1.5rem;
    @media (max-width: 48em) {
      font-size: ${props => props.theme.fontxs};
      line-height: 1rem;
    }
    @media (max-width: 30em) {
      font-size: ${props => props.theme.fontxss};
    }
  }

  h1 {
    font-size: ${props => props.theme.fontsm};
    color: ${props => props.theme.body};
    font-weight: 600;

    @media (max-width: 48em) {
      font-size: ${props => props.theme.fontxs};
    }
    @media (max-width: 30em) {
      font-size: ${props => props.theme.fontxss};
    }
  }

  @media (max-width: 30em) {
    padding: 0.2rem 0.6rem 0.5rem;

  }

`;
const Title = styled.h2`
  font-size: ${props=> props.theme.fontxxl};
  text-transform: capitalize;
  color: ${props=>props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${props=>props.theme.body};
  width: fit-content;
      @media (max-width: 40em){
        font-size: ${(props)=>props.theme.fontxl};
  }
`
const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NftItem = ({img,passRef, number=0, priceVial=0,pricePlacaColonizado, pricePlacaInoculado,priceGranoColonizado,priceKit}) => {
    let play = (e) =>{
        passRef.current.style.animationPlayState = 'running';
    }

    let pause = (e) =>{
        passRef.current.style.animationPlayState = 'paused';
    }
    return(
        <ImgContainer onMouseOver={e=>pause(e)} onMouseOut={e=>play(e)}  >
            <img src={img} alt="The weirdos"  loading="lazy" />
            <Details>
                <div>
                    <span>Disponible en: </span> <br/>
                    <h1>Vial</h1>
                    <h1>Placa colonizado</h1>
                    <h1>Placa inoculado</h1>
                    <h1>Grano Colonizado</h1>
                    <h1>Kit de cultivo</h1>
                </div>

                <div>
                    <span>Price</span>
                    <h1>S/ {Number(priceVial).toFixed(1)}</h1>
                    <h1>S/ {Number(pricePlacaColonizado).toFixed(1)}</h1>
                    <h1>S/ {Number(pricePlacaInoculado).toFixed(1)}</h1>
                    <h1>S/ {Number(priceGranoColonizado).toFixed(1)}</h1>
                    <h1>S/ {Number(priceKit).toFixed(1)}</h1>
                </div>
            </Details>
        </ImgContainer>
    )
}

const ShowCase = () => {
    const Row1Ref  = useRef(null);
    const Row2Ref  = useRef(null);

  return (
      <Section id="showcase">
          <Title> Stock </Title>
          <Row direction="none" ref={Row1Ref}>
              <NftItem passRef={Row1Ref} img={img1} number={1231} priceVial={30} priceKit={100} priceGranoColonizado={60} pricePlacaColonizado={50} pricePlacaInoculado={30}/>
              <NftItem passRef={Row1Ref} img={img2} number={1231} priceVial={30} priceKit={100} priceGranoColonizado={60} pricePlacaColonizado={50} pricePlacaInoculado={30}/>
              <NftItem passRef={Row1Ref} img={img3} number={1231} priceVial={30} priceKit={100} priceGranoColonizado={60} pricePlacaColonizado={50} pricePlacaInoculado={30}/>
              <NftItem passRef={Row2Ref} img={img6} number={1231} priceVial={30} priceKit={100} priceGranoColonizado={60} pricePlacaColonizado={50} pricePlacaInoculado={30}/>
              <NftItem passRef={Row1Ref} img={img4} number={1231} priceVial={30} priceKit={100} priceGranoColonizado={60} pricePlacaColonizado={50} pricePlacaInoculado={30}/>
              <NftItem passRef={Row1Ref} img={img5} number={1231} priceVial={30} priceKit={100} priceGranoColonizado={60} pricePlacaColonizado={50} pricePlacaInoculado={30}/>
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
