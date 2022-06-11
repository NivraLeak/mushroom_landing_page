import React, {useRef} from 'react'
import styled, {keyframes} from "styled-components";

import img1 from '../../assets/Nfts/bighead-1.svg';
import img2 from '../../assets/Nfts/bighead-2.svg';
import img3 from '../../assets/Nfts/bighead-3.svg';
import img4 from '../../assets/Nfts/bighead-4.svg';
import img5 from '../../assets/Nfts/bighead-5.svg';
import img6 from '../../assets/Nfts/bighead-6.svg';
import img7 from '../../assets/Nfts/bighead-7.svg';
import img8 from '../../assets/Nfts/bighead-8.svg';
import img9 from '../../assets/Nfts/bighead-9.svg';

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
    transform: translate(100%);
  }
  100% {
    transform: translate(-100%);
  }
`;
const Row = styled.div`
  //background-color: lightblue;
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;
  
  animation: ${move} linear infinite ${props=>props.direction};
  overflow: hidden;
`;
const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: ${props=>props.theme.body};
  border-radius: 20px;
  cursor: pointer;

  @media(max-width: 48em) {
    width: 12rem;
  }
  @media(max-width: 30em) {
    width: 10rem;
  }
  
  img{
    width: 100%;
    height: auto;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: ${props=>props.theme.text};
  border: 2px solid ${props=>`rgba(${props.theme.bodyRgba},0.5)`};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  
  span{
    font-size: ${props=>props.theme.fontsm};
    color: ${props=>`rgba(${props.theme.bodyRgba},0.5)`};
    font-weight: 600;
    line-height: 1.5rem;
  }
  
  h1{
    font-size:  ${props=>props.theme.fontsm};
    color: ${props=>props.theme.body};
    font-weight: 600;

    @media(max-width: 48em) {
      font-size: ${props=>props.theme.fontxs};
    }
  }
`;

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
            <img src={img} alt="The weirdos"  />
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
          <Row direction="none" ref={Row1Ref}>
              <NftItem passRef={Row1Ref} img={img1} number={1231} priceVial={30} priceKit={100} priceGranoColonizado={60} pricePlacaColonizado={50} pricePlacaInoculado={30}/>
              <NftItem passRef={Row1Ref} img={img2} number={1231} priceVial={30} priceKit={100} priceGranoColonizado={60} pricePlacaColonizado={50} pricePlacaInoculado={30}/>
              <NftItem passRef={Row1Ref} img={img3} number={1231} priceVial={30} priceKit={100} priceGranoColonizado={60} pricePlacaColonizado={50} pricePlacaInoculado={30}/>
              <NftItem passRef={Row1Ref} img={img4} number={1231} priceVial={30} priceKit={100} priceGranoColonizado={60} pricePlacaColonizado={50} pricePlacaInoculado={30}/>
              <NftItem passRef={Row1Ref} img={img5} number={1231} priceVial={30} priceKit={100} priceGranoColonizado={60} pricePlacaColonizado={50} pricePlacaInoculado={30}/>
              <NftItem passRef={Row1Ref} img={img9} number={1231} priceVial={30} priceKit={100} priceGranoColonizado={60} pricePlacaColonizado={50} pricePlacaInoculado={30}/>
          </Row>
          <Row direction="reverse" ref={Row2Ref}>
              <NftItem passRef={Row2Ref} img={img1} number={1231} priceVial={30} priceKit={100} priceGranoColonizado={60} pricePlacaColonizado={50} pricePlacaInoculado={30}/>
              <NftItem passRef={Row2Ref} img={img2} number={1231} priceVial={30} priceKit={100} priceGranoColonizado={60} pricePlacaColonizado={50} pricePlacaInoculado={30}/>
              <NftItem passRef={Row2Ref} img={img6} number={1231} priceVial={30} priceKit={100} priceGranoColonizado={60} pricePlacaColonizado={50} pricePlacaInoculado={30}/>
              <NftItem passRef={Row2Ref} img={img7} number={1231} priceVial={30} priceKit={100} priceGranoColonizado={60} pricePlacaColonizado={50} pricePlacaInoculado={30}/>
              <NftItem passRef={Row2Ref} img={img8} number={1231} priceVial={30} priceKit={100} priceGranoColonizado={60} pricePlacaColonizado={50} pricePlacaInoculado={30}/>
              <NftItem passRef={Row2Ref} img={img9} number={1231} priceVial={30} priceKit={100} priceGranoColonizado={60} pricePlacaColonizado={50} pricePlacaInoculado={30}/>
          </Row>
      </Section>
  )
}

export default ShowCase
