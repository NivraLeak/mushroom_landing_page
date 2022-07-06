import React from 'react';
import styled from "styled-components";

import img1 from '../assets/strains/strainsOpt/B+ fondo.jpg';

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  border-top: 2px solid ${props=> props.theme.text};
  width: 100vw;
  min-width: 20rem;
  height: 20rem;
  
  @media (max-width: 48em) {
    height: 15rem;
    flex-direction: column;
    
  }

`;
const ImgContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    width: 100%;
  }

  @media (max-width: 48em) {
    img{
      width: fit-content;
    }
  }
`;
const Title = styled.h1`
font-size: ${props=> props.theme.fontxxl};
  color: ${props=>props.theme.body};
  padding: 1rem 2rem;
  z-index: 10;
  width: 35%;
  text-transform: capitalize;

  text-shadow: -2px 2px  0.5em ${props=>props.theme.text};
  @media (max-width: 64em) {
    width: 40%;
    font-size: ${props=> props.theme.fontxxl};
    text-align: center;
  }
  @media (max-width: 48em) {
    width: 100%;
    padding: 2rem 0;
    font-size: ${props=> props.theme.fontxl};
  }
;
`;
const BtnContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: flex-end;
  font-size: ${props=> props.theme.fontxl};
  
  
  @media (max-width: 48em) {
    width: 100%;
    justify-content: center;
  }
`;

const JoinNow = styled.button`
display: inline-block;
background-color: ${props=> props.theme.body};
color: ${props=> props.theme.text};
outline: none;
border: none;

font-weight: 600;
font-size: ${props=> props.theme.fontlg};
padding: 1.5rem 3rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;
  
  box-shadow: -2px 2px  1em ${props=>props.theme.text};
  
  text-shadow: -1px 1px  0.2em ${props=>props.theme.text};
  @media(max-width: 48em){
  padding: 1rem 2rem;
}
  @media(max-width: 30em){
    padding: 1rem 2rem;
    font-size: ${props=>props.theme.fontsm};
  }
  &:hover{
    transform: scale(0.9);
}
&::after{
    content: ' ';
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${props=>props.theme.body};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
}
&:hover::after{
    transform: translate(-50%,-50%) scale(1);
    padding: 0.3rem;
}
`

const Banner = () =>{
    return(
        <Section>
            <ImgContainer>
                <img src={img1} alt="the weidos" loading="lazy" />
            </ImgContainer>
            <Title>Unete a la comunidad  <br/> Mushi Genetics </Title>
            <BtnContainer>
                <JoinNow>
                    Unete ahora
                </JoinNow>
            </BtnContainer>
        </Section>
    );
}

export default Banner;
