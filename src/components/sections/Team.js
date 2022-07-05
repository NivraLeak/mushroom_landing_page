import React from 'react'
import styled from "styled-components";

import img1 from '../../assets/strains/strainsSvg/gandalf03 1.svg';
import img2 from '../../assets/strains/strainsSvg/enigma 1.svg';
import img3 from '../../assets/strains/strainsSvg/melek 1.svg';
import ConfettiComponent from "../Confetti";

const Section = styled.section`
  min-height: 100vh;
  background-color: ${props=>props.theme.body};
  position: relative;

  display: flex;
  width: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: ${props=> props.theme.fontxxl};
  text-transform: capitalize;
  color: ${props=>props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${props=>props.theme.text};
  width: fit-content;
      @media (max-width: 40em){
        font-size: ${(props)=>props.theme.fontxl};
  }
`
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 64em){
    width: 80%;
  }
  @media (max-width: 48em){
    width: 90%;
    justify-content: center;
    
  }
`;

const Item = styled.div`
  width: calc(20rem - 4vw);
  padding: 1rem 0;
  color: ${props=> props.theme.body};
  margin: 2rem 1rem;
  position: relative;
  z-index: 5;
  backdrop-filter: blur(4px);
  
  border: 2px solid ${props=> props.theme.text};
  border-radius: 20px;
  
  &:hover{
    img{
      transform: scale(90%);
    }
  }

  @media (max-width: 30em){
    width: 70vw;
  }
`;

const ImgContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: ${props=>props.theme.carouselColor};
  border-radius: 20px;
  cursor: pointer;
  border: 1px solid ${props=> props.theme.text};
  padding: 1rem;
  img{
    width: 100%;
    height: 20rem;
    transition: all 0.3s ease;
    object-fit: cover;
    border-radius: 15px;
  }
`;

const Name = styled.h2`
  font-size: ${props=>props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: ${props => props.theme.text};
  margin-top: 1rem;
`;
const Position = styled.h2`
  font-size: ${props=>props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${props => `rgba(${props.theme.textRgba},0.9)`};
  font-weight: 400;
`;


const MemberComponent = ({img,name="",position=""}) =>{
  return(
      <Item>
        <ImgContainer>
          <img src={img} alt={name}/>
        </ImgContainer>
          <Name>{name}</Name>
          <Position>{position}</Position>
      </Item>
  )
}

const Team = () => {
  return (
    <Section id="team">
        <ConfettiComponent/>
      <Title>Team monster mushrooms</Title>
      <Container>
        <MemberComponent img={img1} name="Gandalf" position="Raro"/>
        <MemberComponent img={img2} name="Enigma" position="Raro"/>
        <MemberComponent img={img3} name="Melek" position="Mutacion"/>
      </Container>
    </Section>
  )
}

export default Team;
